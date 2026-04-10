const THEMES = {
  "Mặc định (Xanh hiện đại)": ":root{--primary:#2563eb;--primary-hover:#1d4ed8;--bg:#f8fafc;--card:#ffffff;--text:#0f172a;--text-muted:#64748b;--border:#e2e8f0;--font-family:'Inter',sans-serif;--bg-glass:rgba(255,255,255,.88);--hover-bg:#f1f5f9;}",
  "Chế độ Tối (Dark Mode)": ":root{--primary:#3b82f6;--primary-hover:#60a5fa;--bg:#0f172a;--card:#1e293b;--text:#f8fafc;--text-muted:#94a3b8;--border:#334155;--font-family:'Inter',sans-serif;--bg-glass:rgba(15,23,42,.88);--hover-bg:#0b1220;}",
  "Trắng tinh khiết (Clean White)": ":root{--primary:#000;--primary-hover:#333;--bg:#fff;--card:#fff;--text:#000;--text-muted:#666;--border:#e5e5e5;--font-family:'Inter',sans-serif;--bg-glass:rgba(255,255,255,.95);--hover-bg:#f5f5f5;}"
};

const GUIDES = {
  1: "##\nCâu hỏi...\n# A. Đáp án đúng\nB. ...\nC. ...\nLời giải:\n...",
  2: "##\nCâu hỏi...\n# A. đúng\n# C. đúng\nB. sai\nD. sai",
  3: "##\nCâu hỏi trả lời ngắn\n# đáp án 1\n# đáp án 2\nLời giải:\n...",
  4: "##\n... =(1)= ... =(2)= ...\nĐáp án:\n=(1)=\n# aa\n=(2)=\n# bb",
  5: "##\nCâu hỏi...\nCột I:\n1. ...\n2. ...\nCột II:\nA. ...\nB. ...\n# 1=A, 2=B",
  6: "##\n1. Gợi ý # DAPAN\n2. Gợi ý # DAPAN\nTừ khóa: # AB"
};

const app = {
  data: {
    part1: [], part2: [], part3: [], part4: [], part5: [], part6: [],
    gf_config: { url: "", fields: [] }
  },
  activeTab: 1,

  init() {
    this.renderThemes();
    this.renderTabs();
    this.renderToolbar();
    this.switchTab(1);
    this.setupGFPasteAutoAnalyze();
    lucide.createIcons();
  },

  setupGFPasteAutoAnalyze() {
    const gfInput = document.getElementById('gfUrlInput');
    if (!gfInput) return;
    gfInput.addEventListener('paste', () => {
      setTimeout(() => {
        if (gfInput.value.includes('google.com/forms')) this.autoAnalyzeGF();
      }, 150);
    });
  },

  renderThemes() {
    const sel = document.getElementById('themeSelect');
    sel.innerHTML = Object.keys(THEMES).map(k => `<option value="${k}">${k}</option>`).join('');
  },

  renderTabs() {
    const c = document.getElementById('tabsContainer');
    const titles = [
      { icon: 'circle-dot', text: '1 lựa chọn' },
      { icon: 'check-square', text: 'Nhiều lựa chọn' },
      { icon: 'pen-line', text: 'Trả lời ngắn' },
      { icon: 'form-input', text: 'Điền khuyết' },
      { icon: 'arrow-right-left', text: 'Ghép đôi' },
      { icon: 'grid-3x3', text: 'Ô chữ' }
    ];
    c.innerHTML = titles.map((t, i) => `
      <button class="tab-btn ${this.activeTab === i + 1 ? 'tab-active' : 'tab-inactive'}" onclick="app.switchTab(${i + 1})">
        <i data-lucide="${t.icon}" class="w-5 h-5 sm:w-6 sm:h-6 mb-1 ${this.activeTab === i + 1 ? 'text-blue-600' : 'text-slate-400'}"></i>
        <span class="text-center w-full truncate text-[10px] sm:text-sm">Phần ${i + 1}</span>
      </button>
    `).join('');
    lucide.createIcons();
  },

  switchTab(tab) {
    this.activeTab = tab;
    const titles = ["Một Lựa Chọn", "Nhiều Lựa Chọn", "Trả Lời Ngắn", "Điền Khuyết", "Ghép Đôi", "Ô Chữ"];
    document.getElementById('partTitle').innerHTML = `Phần ${tab}: <span class="text-slate-700">${titles[tab - 1]}</span>`;
    this.renderTabs();
    this.renderQList();
    document.getElementById('qInput').value = '';
  },

  showGuide() {
    alert(GUIDES[this.activeTab]);
  },

  renderToolbar() {
    const tb = document.getElementById('editorToolbar');
    tb.innerHTML = `
      <button class="btn btn-outline py-1 px-2" onclick="app.wrapSelection('<b>','</b>')">B</button>
      <button class="btn btn-outline py-1 px-2 italic" onclick="app.wrapSelection('<i>','</i>')">I</button>
      <button class="btn btn-outline py-1 px-2" onclick="app.insertAtCursor('→')">→</button>
      <button class="btn btn-outline py-1 px-2" onclick="app.insertAtCursor('⇌')">⇌</button>
      <button class="btn btn-outline py-1 px-2" onclick="app.insertAtCursor('<sup></sup>')">xⁿ</button>
      <button class="btn btn-outline py-1 px-2" onclick="app.insertAtCursor('<sub></sub>')">xₙ</button>
      <button class="btn btn-outline py-1 px-2" onclick="app.insertMath()">Toán</button>
      <button class="btn btn-outline py-1 px-2" onclick="app.insertImage()">Ảnh</button>
      <button class="btn btn-outline py-1 px-2" onclick="app.insertVideo()">Video</button>
    `;
  },

  wrapSelection(startTag, endTag) {
    const el = document.getElementById('qInput');
    const s = el.selectionStart;
    const e = el.selectionEnd;
    const v = el.value;
    const selected = v.slice(s, e);
    el.value = v.slice(0, s) + startTag + selected + endTag + v.slice(e);
    el.focus();
    el.setSelectionRange(s + startTag.length, s + startTag.length + selected.length);
  },

  insertAtCursor(text) {
    const el = document.getElementById('qInput');
    const s = el.selectionStart;
    const v = el.value;
    el.value = v.slice(0, s) + text + v.slice(s);
    el.focus();
    el.setSelectionRange(s + text.length, s + text.length);
  },

  insertMath() {
    const latex = prompt("Nhập LaTeX, ví dụ: \\frac{a}{b}");
    if (!latex) return;
    this.insertAtCursor(`$${latex}$`);
  },

  insertImage() {
    const f = document.getElementById('fileLoader');
    f.accept = "image/*";
    f.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const r = new FileReader();
      r.onload = ev => {
        this.insertAtCursor(`<img src="${ev.target.result}" style="max-width:100%;border-radius:8px;">`);
      };
      r.readAsDataURL(file);
      f.value = "";
    };
    f.click();
  },

  insertVideo() {
    const f = document.getElementById('fileLoader');
    f.accept = "video/*";
    f.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const r = new FileReader();
      r.onload = ev => {
        this.insertAtCursor(`<video controls src="${ev.target.result}" style="max-width:100%;border-radius:8px;"></video>`);
      };
      r.readAsDataURL(file);
      f.value = "";
    };
    f.click();
  },

  addQuestion() {
    const val = document.getElementById('qInput').value.trim();
    if (!val) return alert("Vui lòng nhập nội dung câu hỏi!");
    const chunks = val.includes("##") ? val.split("##").filter(x => x.trim()) : [val];
    const key = 'part' + this.activeTab;
    chunks.forEach(c => {
      if (c.split('\n').length >= 2) this.data[key].push(c.trim());
    });
    document.getElementById('qInput').value = '';
    this.renderQList();
  },

  removeQuestion(idx) {
    if (!confirm("Bạn có chắc muốn xóa câu hỏi này?")) return;
    this.data['part' + this.activeTab].splice(idx, 1);
    this.renderQList();
  },

  editQuestion(idx) {
    const arr = this.data['part' + this.activeTab];
    const n = prompt("Sửa nhanh nội dung câu hỏi:", arr[idx]);
    if (n === null) return;
    arr[idx] = n.trim();
    this.renderQList();
  },

  renderQList() {
    const arr = this.data['part' + this.activeTab];
    const html = arr.map((q, i) => `
      <div class="p-3 sm:p-4 border-2 border-slate-200 rounded-xl bg-white shadow-[0_4px_0_0_#e2e8f0] hover:border-blue-400 transition-all">
        <div class="flex items-center justify-between mb-2 border-b-2 border-slate-100 pb-2">
          <span class="bg-blue-100 text-blue-700 text-xs font-black px-2 py-1 rounded-lg">Câu ${i + 1}</span>
          <div class="flex gap-2">
            <button class="btn btn-outline py-1 px-2 text-xs" onclick="app.editQuestion(${i})">Sửa</button>
            <button class="btn btn-outline py-1 px-2 text-xs" onclick="app.removeQuestion(${i})">Xóa</button>
          </div>
        </div>
        <div class="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed">${q.replace(/</g, '&lt;')}</div>
      </div>
    `).join('');

    document.getElementById('qList').innerHTML = html || `
      <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-3 py-12">
        <i data-lucide="inbox" class="w-12 h-12 text-slate-300"></i>
        <p class="text-sm font-bold">Chưa có câu hỏi nào</p>
      </div>
    `;

    document.getElementById('qCountBadge').innerText = `${arr.length} câu`;
    lucide.createIcons();
  },

  newProject() {
    if (!confirm("Tạo dự án mới sẽ xóa toàn bộ dữ liệu hiện tại. Bạn có chắc?")) return;
    this.data = {
      part1: [], part2: [], part3: [], part4: [], part5: [], part6: [],
      gf_config: { url: "", fields: [] }
    };
    quizTitle.value = "BÀI TẬP TRẮC NGHIỆM";
    creatorName.value = "";
    startTime.value = "";
    endTime.value = "";
    themeSelect.value = "Mặc định (Xanh hiện đại)";
    this.switchTab(1);
  },

  saveProject() {
    const p = {
      title: quizTitle.value,
      creator: creatorName.value,
      theme: themeSelect.value,
      start_time: startTime.value,
      end_time: endTime.value,
      ...this.data
    };
    const blob = new Blob([JSON.stringify(p, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Project_HoaHoc.json";
    a.click();
  },

  loadProject() {
    const f = document.getElementById('fileLoader');
    f.accept = ".json,application/json";
    f.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const r = new FileReader();
      r.onload = ev => {
        const p = JSON.parse(ev.target.result);
        quizTitle.value = p.title || "BÀI TẬP TRẮC NGHIỆM";
        creatorName.value = p.creator || "";
        themeSelect.value = p.theme || "Mặc định (Xanh hiện đại)";
        startTime.value = p.start_time || "";
        endTime.value = p.end_time || "";
        this.data = {
          part1: p.part1 || [],
          part2: p.part2 || [],
          part3: p.part3 || [],
          part4: p.part4 || [],
          part5: p.part5 || [],
          part6: p.part6 || [],
          gf_config: p.gf_config || { url: "", fields: [] }
        };
        this.switchTab(1);
      };
      r.readAsText(file);
      f.value = "";
    };
    f.click();
  },

  openGFSettings() {
    const m = document.getElementById('gfModal');
    const c = m.querySelector('.modal-content');
    m.classList.remove('opacity-0', 'pointer-events-none');
    c.classList.remove('scale-95', 'translate-y-4');
    c.classList.add('scale-100', 'translate-y-0');

    document.getElementById('gfUrlInput').value = this.data.gf_config.url || "";
    this.renderGFFields();
  },

  closeModal(id) {
    const m = document.getElementById(id);
    const c = m.querySelector('.modal-content');
    m.classList.add('opacity-0', 'pointer-events-none');
    c.classList.remove('scale-100', 'translate-y-0');
    c.classList.add('scale-95', 'translate-y-4');
  },

  async fetchWithProxies(url) {
    const proxies = [
      { url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, type: 'json' },
      { url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`, type: 'text' },
      { url: `https://corsproxy.io/?${encodeURIComponent(url)}`, type: 'text' }
    ];
    for (const p of proxies) {
      try {
        const res = await fetch(p.url, { cache: "no-store" });
        if (!res.ok) continue;
        if (p.type === "json") {
          const j = await res.json();
          if (j.contents) return j.contents;
        } else return await res.text();
      } catch {}
    }
    throw new Error("Không thể tải HTML Form (CORS/proxy).");
  },

  async autoAnalyzeGF() {
    let url = document.getElementById('gfUrlInput').value.trim();
    if (!url) return alert("Vui lòng nhập link Form!");
    if (url.includes("forms.gle")) return alert("Vui lòng dán link đầy đủ của Form (không dùng forms.gle).");

    const btn = document.getElementById('btnAnalyze');
    const old = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i>Đang phân tích`;
    lucide.createIcons();

    try {
      const html = await this.fetchWithProxies(url);
      const m = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*\])\s*;/s);
      if (!m) throw new Error("Không tìm thấy cấu trúc dữ liệu Form.");
      const data = JSON.parse(m[1]);

      const qs = data?.[1]?.[1] || [];
      const fields = [];

      qs.forEach(q => {
        try {
          if (!Array.isArray(q) || !q[4] || !q[4][0]) return;
          const id = String(q[4][0][0] || "");
          const title = String(q[1] || "Trường không tên");
          const required = q[4][0][2] == 1;
          let type = "Học sinh tự điền";
          const t = title.toLowerCase();
          if ((t.includes("điểm") && t.includes("tối đa")) || t.includes("max")) type = "Điểm tối đa (Tự động)";
          else if (t.includes("điểm") || t.includes("score")) type = "Điểm đạt được (Tự động)";
          else if (t.includes("vi phạm") || t.includes("gian lận") || t.includes("quy chế")) type = "Báo cáo vi phạm (Tự động)";
          fields.push({ id, title, type, required });
        } catch {}
      });

      this.data.gf_config.fields = fields;
      this.data.gf_config.url = url.split("?")[0].replace("/edit", "/formResponse").replace("/viewform", "/formResponse");
      if (!this.data.gf_config.url.endsWith("/formResponse")) this.data.gf_config.url += "/formResponse";

      document.getElementById('gfUrlInput').value = this.data.gf_config.url;
      this.renderGFFields();

      btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 mr-2"></i>Xong`;
    } catch (e) {
      alert("Lỗi phân tích form: " + e.message);
      btn.innerHTML = old;
    } finally {
      btn.disabled = false;
      if (!btn.innerHTML.includes("Xong")) btn.innerHTML = old;
      setTimeout(() => { btn.innerHTML = old; lucide.createIcons(); }, 1200);
    }
  },

  renderGFFields() {
    const tb = document.getElementById('gfFieldsTable');
    const fs = this.data.gf_config.fields || [];
    if (!fs.length) {
      tb.innerHTML = `<tr><td colspan="4" class="text-center py-8 text-slate-400">Chưa có field</td></tr>`;
      return;
    }

    tb.innerHTML = fs.map((f, i) => `
      <tr class="hover:bg-blue-50/40">
        <td class="p-2 sm:p-3">
          <input class="form-input py-2 text-xs sm:text-sm" value="${(f.title || "").replace(/"/g,'&quot;')}" onchange="app.data.gf_config.fields[${i}].title=this.value">
        </td>
        <td class="p-2 sm:p-3 hidden sm:table-cell">
          <input class="form-input py-2 text-xs font-mono bg-slate-100" value="${f.id}" readonly>
        </td>
        <td class="p-2 sm:p-3">
          <select class="form-select py-2 text-xs sm:text-sm" onchange="app.data.gf_config.fields[${i}].type=this.value">
            <option ${f.type==="Học sinh tự điền"?"selected":""}>Học sinh tự điền</option>
            <option ${f.type==="Điểm đạt được (Tự động)"?"selected":""}>Điểm đạt được (Tự động)</option>
            <option ${f.type==="Điểm tối đa (Tự động)"?"selected":""}>Điểm tối đa (Tự động)</option>
            <option ${f.type==="Báo cáo vi phạm (Tự động)"?"selected":""}>Báo cáo vi phạm (Tự động)</option>
          </select>
        </td>
        <td class="p-2 sm:p-3 text-center">
          <input type="checkbox" class="w-5 h-5" ${f.required ? "checked" : ""} onchange="app.data.gf_config.fields[${i}].required=this.checked">
        </td>
      </tr>
    `).join('');
  },

  saveGFConfig() {
    this.data.gf_config.url = document.getElementById('gfUrlInput').value.trim();
    this.closeModal('gfModal');
    alert("Đã lưu cấu hình Google Form.");
  },

  exportHTML() {
    const payload = {
      title: quizTitle.value.trim() || "BÀI TẬP TRẮC NGHIỆM",
      creator: creatorName.value.trim(),
      themeName: themeSelect.value,
      themeCss: THEMES[themeSelect.value] || THEMES["Mặc định (Xanh hiện đại)"],
      start_time: startTime.value.trim(),
      end_time: endTime.value.trim(),
      exam_id: "EXAM_" + Math.random().toString(36).slice(2, 12),
      ...this.data
    };

    const html = this.buildExamHTML(payload);
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = (payload.title || "de_thi").replace(/\s+/g, "_") + ".html";
    a.click();
  },

  buildExamHTML(p) {
    const dataJson = JSON.stringify(p).replace(/<\/script>/gi, "<\\/script>");

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${(p.title || "").replace(/</g,'&lt;')}</title>
<script>
window.MathJax = { tex: { inlineMath: [['$', '$']] }, chtml: { scale: 0.9 } };
</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"><\\/script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\\/script>
<style>
${p.themeCss}
*{box-sizing:border-box}
body{font-family:var(--font-family);margin:0;background:var(--bg);color:var(--text)}
.navbar{position:sticky;top:0;background:var(--bg-glass);backdrop-filter:blur(10px);padding:12px 16px;border-bottom:1px solid var(--border);z-index:999;display:flex;justify-content:space-between;align-items:center}
.score{background:var(--primary);color:#fff;padding:6px 14px;border-radius:999px;font-weight:700}
.timer{font-weight:700;color:#ef4444;background:#fee2e2;padding:6px 14px;border-radius:999px}
.container{max-width:920px;margin:24px auto;padding:0 14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:16px}
.section-title{font-size:1.2rem;font-weight:800;color:var(--primary);margin:26px 0 8px;border-bottom:2px solid var(--border);padding-bottom:6px}
.option{display:flex;align-items:flex-start;gap:8px;padding:10px;border:1px solid var(--border);border-radius:10px;margin:8px 0;cursor:pointer}
.option:hover{background:var(--hover-bg)}
.blank{border:none;border-bottom:2px solid var(--primary);background:transparent;min-width:70px;padding:2px 4px;text-align:center;font-weight:700;color:var(--primary);outline:none}
.expl{display:none;margin-top:10px;padding:10px;border:1px dashed var(--border);background:var(--hover-bg);border-radius:10px}
.btn{display:block;width:100%;max-width:320px;margin:28px auto;background:var(--primary);color:#fff;border:none;padding:14px 16px;border-radius:12px;font-weight:800;cursor:pointer}
.match-wrap{position:relative}
.match-cols{display:flex;justify-content:space-between;gap:14px}
.match-col{width:44%;display:flex;flex-direction:column;gap:10px}
.match-item{padding:10px;border:2px solid var(--border);border-radius:10px;text-align:center;background:var(--card);cursor:pointer}
.match-item.sel{border-color:var(--primary);background:var(--hover-bg)}
svg.match-lines{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}
.cw-row{display:flex;align-items:center;gap:4px;margin-bottom:8px}
.cw-num{width:26px;height:26px;border-radius:999px;background:var(--hover-bg);border:1px solid var(--primary);color:var(--primary);font-weight:700;display:flex;align-items:center;justify-content:center;cursor:pointer}
.cw-cell{width:32px;height:32px;text-align:center;font-weight:700;text-transform:uppercase;border:2px solid var(--border);border-radius:6px;background:var(--card);color:var(--text)}
.gfbox{background:var(--card);border:2px solid var(--primary);border-radius:12px;padding:16px;margin-bottom:20px}
.gfbox input{width:100%;padding:8px;border:1px solid var(--border);border-radius:8px}
#overlay{display:none;position:fixed;inset:0;background:rgba(255,255,255,.8);z-index:9999;align-items:center;justify-content:center}
</style>
</head>
<body>
<div id="overlay"><div>Đang chấm và gửi điểm...</div></div>

<div class="navbar">
  <div class="score" id="scoreBox">Điểm: 0</div>
  <div class="timer">⏱ <span id="timeBox">00:00:00</span></div>
</div>

<div class="container">
  <h1 style="text-align:center;margin-bottom:4px">${(p.title || "").replace(/</g,'&lt;')}</h1>
  ${p.creator ? `<div style="text-align:center;color:var(--text-muted);margin-bottom:14px">${p.creator.replace(/</g,'&lt;')}</div>` : ""}
  <div id="studentInfo"></div>
  <div id="examRoot"></div>
  <button id="submitBtn" class="btn">NỘP BÀI VÀ XEM KẾT QUẢ</button>
</div>

<script>
const APP_DATA = ${dataJson};

function parseDateVN(s){
  if(!s) return null;
  const m = s.match(/^(\\d{1,2}):(\\d{1,2})\\s+(\\d{1,2})\\/(\\d{1,2})\\/(\\d{4})$/);
  if(!m) return null;
  const hh=+m[1], mm=+m[2], d=+m[3], mo=+m[4]-1, y=+m[5];
  return new Date(y,mo,d,hh,mm,0,0).getTime();
}

const EXAM_KEY = APP_DATA.exam_id;
let violationCount = 0;
let violationDetails = [];
let forceSubmit = false;
let submitted = false;
let timerInt = null;
let clueUsed = {}; // part6_qid -> Set(row)

const startTs = parseDateVN(APP_DATA.start_time);
const endTs = parseDateVN(APP_DATA.end_time);

function lockPage(msg){
  document.body.innerHTML = '<div style="height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;background:#111;color:#f87171;font-family:sans-serif;text-align:center"><h1>⛔ TRUY CẬP BỊ TỪ CHỐI</h1><p style="max-width:700px;color:#fff">'+msg+'</p></div>';
}

(function initLock(){
  const n = Date.now();
  if(localStorage.getItem(EXAM_KEY+"_SUBMITTED")) return lockPage("Bạn đã nộp bài thi này.");
  if(localStorage.getItem(EXAM_KEY+"_LOCKED")) return lockPage("Bài thi đã bị khóa. Lý do: "+localStorage.getItem(EXAM_KEY+"_LOCKED"));
  if(endTs && n >= endTs) return lockPage("Kỳ thi đã kết thúc vào "+APP_DATA.end_time);
  if(startTs && n < startTs){
    document.body.innerHTML = '<div style="height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:sans-serif;text-align:center"><h1>KỲ THI CHƯA BẮT ĐẦU</h1><p>Mở đề lúc: <b>'+APP_DATA.start_time+'</b></p><div id="cd" style="font-size:2.2rem;color:#dc2626">--:--:--</div></div>';
    const x=setInterval(()=>{const r=Math.floor((startTs-Date.now())/1000); if(r<=0){clearInterval(x); location.reload(); return;} const h=String(Math.floor(r/3600)).padStart(2,'0'); const m=String(Math.floor((r%3600)/60)).padStart(2,'0'); const s=String(r%60).padStart(2,'0'); document.getElementById('cd').textContent=h+':'+m+':'+s;},1000);
    throw new Error("wait-start");
  }
})();

function startTimer(){
  timerInt = setInterval(() => {
    let text = "00:00:00";
    if (endTs) {
      const r = Math.floor((endTs - Date.now()) / 1000);
      if (r <= 0) {
        clearInterval(timerInt);
        text = "00:00:00";
        if (!submitted) {
          alert("Hết giờ, hệ thống tự nộp bài.");
          forceSubmit = true;
          gradeQuiz();
        }
      } else {
        const h = String(Math.floor(r / 3600)).padStart(2, '0');
        const m = String(Math.floor((r % 3600) / 60)).padStart(2, '0');
        const s = String(r % 60).padStart(2, '0');
        text = h + ":" + m + ":" + s;
      }
    }
    document.getElementById("timeBox").textContent = text;
  }, 1000);
}

function handleViolation(reason){
  if(submitted) return;
  violationCount++;
  violationDetails.push(reason);
  if(violationCount >= 3){
    alert("Vi phạm quá 3 lần, hệ thống sẽ tự nộp bài.");
    forceSubmit = true;
    gradeQuiz();
    setTimeout(()=> {
      localStorage.setItem(EXAM_KEY+"_LOCKED","Vi phạm quy chế nhiều lần");
    }, 1200);
  } else {
    alert("Cảnh báo vi phạm ("+violationCount+"/3): "+reason);
  }
}

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('cut', e => e.preventDefault());
document.addEventListener('paste', e => e.preventDefault());
document.addEventListener('visibilitychange', () => { if(document.hidden) handleViolation("Chuyển tab/thu nhỏ"); });
window.addEventListener('blur', () => handleViolation("Rời cửa sổ thi"));
document.addEventListener('keydown', e => {
  if(e.key === 'F12' || (e.ctrlKey && ['u','p','s'].includes(e.key.toLowerCase())) || (e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase()))){
    e.preventDefault();
    handleViolation("Dùng phím tắt cấm");
  }
});

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
}

function parsePart12(raw){
  const lines = raw.split(/\\r?\\n/);
  let q=[], o=[], s=[], sol=false;
  for(const line0 of lines){
    const line=line0.replace(/\\r/g,'');
    if(/^\\s*Lời giải:/.test(line)){ sol=true; s.push(line.replace(/^\\s*Lời giải:/,'')); continue; }
    if(sol) s.push(line);
    else if(/^\\s*#?\\s*[A-Ea-e]\\.\\s/.test(line)) o.push(line);
    else q.push(line);
  }
  return { q: q.join("<br>"), options: o, solution: s.join("<br>") };
}

function parsePart3(raw){
  const lines = raw.split(/\\r?\\n/);
  let q=[], a=[], s=[], sol=false;
  for(const line0 of lines){
    const line=line0.replace(/\\r/g,'');
    if(/^\\s*Lời giải:/.test(line)){ sol=true; s.push(line.replace(/^\\s*Lời giải:/,'')); continue; }
    if(sol) s.push(line);
    else if(/^\\s*#/.test(line)){ const x=line.replace(/^\\s*#/,'').trim(); if(x) a.push(x); }
    else q.push(line);
  }
  return { q: q.join("<br>"), answers: a, solution: s.join("<br>") };
}

function parsePart4(raw){
  const lines = raw.split(/\\r?\\n/);
  let q=[], s=[], answers={}, mode='q', cur=null;
  for(const line0 of lines){
    const line=line0.replace(/\\r/g,'');
    if(/^\\s*Đáp án:/.test(line)){ mode='a'; continue; }
    if(/^\\s*Lời giải:/.test(line)){ mode='s'; s.push(line.replace(/^\\s*Lời giải:/,'')); continue; }
    if(mode==='q') q.push(line);
    else if(mode==='s') s.push(line);
    else {
      const m = line.match(/^\\s*=\\s*\\((\\d+)\\)\\s*=\\s*$/);
      if(m){ cur=m[1]; answers[cur]=[]; continue; }
      if(/^\\s*#/.test(line) && cur){
        const x=line.replace(/^\\s*#/,'').trim();
        if(x) answers[cur].push(x);
      }
    }
  }
  return { q: q.join("<br>"), answers, solution: s.join("<br>") };
}

function parsePart5(raw){
  const txt = raw.replace(/\\r/g,'');
  let solution = "";
  const msol = txt.match(/Lời giải:\\s*([\\s\\S]*)$/);
  let core = txt;
  if(msol){ solution = msol[1].replace(/\\n/g,'<br>'); core = txt.replace(/Lời giải:\\s*[\\s\\S]*$/,''); }

  const headerMatch = core.match(/^([\\s\\S]*?)\\s*(?=Cột I:)/);
  const header = headerMatch ? headerMatch[1].replace(/\\n/g,'<br>') : "";

  const colIMatch = core.match(/Cột I:\\s*([\\s\\S]*?)\\s*(?=Cột II:)/);
  const colI = (colIMatch ? colIMatch[1] : "").split(/\\n/).map(x=>x.trim()).filter(Boolean);

  const colIIMatch = core.match(/Cột II:\\s*([\\s\\S]*?)\\s*(?=^#)/m);
  const colII = (colIIMatch ? colIIMatch[1] : "").split(/\\n/).map(x=>x.trim()).filter(Boolean);

  const ansMatch = core.match(/^#\\s*(.*)$/m);
  const map = {};
  if(ansMatch){
    ansMatch[1].split(/[;,]/).map(x=>x.trim()).filter(Boolean).forEach(pair=>{
      let p = pair.includes("=") ? pair.split("=") : pair.split("-");
      if(p.length>=2){
        const L = p[0].trim();
        const R = p[1].trim().toUpperCase();
        if(!map[L]) map[L]=[];
        map[L].push(R);
      }
    });
  }

  const left = colI.map(x=>{
    const m=x.match(/^(\\d+)[\\.\\-\\)]\\s*(.*)$/);
    return m?{id:m[1],text:m[2]}:{id:"",text:x};
  });
  const right = colII.map(x=>{
    const m=x.match(/^([A-Za-z])[\\.\\-\\)]\\s*(.*)$/);
    return m?{id:m[1].toUpperCase(),text:m[2]}:{id:"",text:x};
  });

  return { header, left, right, mapping: map, solution };
}

function parsePart6(raw){
  const lines = raw.split(/\\r?\\n/);
  let q=[], clues=[], keyword="", s=[], mode='q';
  for(const line0 of lines){
    const line=line0.replace(/\\r/g,'');
    if(/^\\s*Lời giải:/.test(line)){ mode='s'; s.push(line.replace(/^\\s*Lời giải:/,'')); continue; }
    if(mode==='s'){ s.push(line); continue; }

    if(/^\\s*Từ khóa:/.test(line)){
      const m=line.match(/#\\s*(.*)$/);
      if(m) keyword = m[1].trim().toUpperCase();
      continue;
    }

    const cm = line.match(/^(.*?)\\s*#\\s*(.*)$/);
    if(cm && !/^\\s*#/.test(line)){
      clues.push({ clue: cm[1].trim(), answer: cm[2].trim().toUpperCase().replace(/\\s+/g,'') });
    } else {
      q.push(line);
    }
  }
  return { q:q.join("<br>"), clues, keyword: keyword.replace(/\\s+/g,''), solution:s.join("<br>") };
}

function makeStudentBox(){
  const gf = APP_DATA.gf_config || {url:"",fields:[]};
  if(!gf.url || !Array.isArray(gf.fields) || !gf.fields.length) return "";

  let hasInput = false;
  let html = '<div class="gfbox"><h3 style="margin:0 0 10px 0;color:var(--primary)">Thông tin học sinh</h3><div style="display:flex;flex-direction:column;gap:10px">';
  gf.fields.forEach(f=>{
    if((f.type||"").includes("Học sinh")){
      hasInput = true;
      html += '<div><label style="font-weight:700">'+escapeHtml(f.title||"Trường")+(f.required?' <span style="color:#ef4444">*</span>':'')+'</label><input id="gf_'+f.id+'" type="text" placeholder="Nhập '+escapeHtml(f.title||"")+'"></div>';
    }
  });
  html += '</div></div>';
  return hasInput ? html : "";
}

function renderExam(){
  document.getElementById("studentInfo").innerHTML = makeStudentBox();

  const root = document.getElementById("examRoot");
  const parts = [1,2,3,4,5,6];
  const titles = {
    1: "Một phương án đúng",
    2: "Nhiều đáp án đúng",
    3: "Trả lời ngắn",
    4: "Điền khuyết",
    5: "Ghép đôi",
    6: "Giải ô chữ"
  };

  let html = "";
  let pcount = 1;
  parts.forEach(pt => {
    const arr = APP_DATA['part'+pt] || [];
    if(!arr.length) return;

    let qArr = arr.map(x=>x);
    shuffle(qArr);

    html += '<div class="section" data-parttype="'+pt+'" data-title="Phần '+pcount+': '+titles[pt]+'">';
    html += '<div class="section-title">Phần '+pcount+': '+titles[pt]+'</div>';
    html += '<div style="color:var(--text-muted);font-size:.92rem;margin-bottom:10px"><i>'+(pt===6?'Ô chữ: tối đa 2 điểm/hàng.':'Mỗi câu đúng 1 điểm.')+'</i></div>';

    qArr.forEach((raw, i)=>{
      const qid = 'part'+pcount+'_q'+(i+1);

      if(pt===1 || pt===2){
        const obj = parsePart12(raw);
        let options = obj.options.map(line=>{
          const ok = /^\\s*#/.test(line);
          const clean = ok ? line.replace(/^\\s*#/,'').trim() : line.trim();
          const m = clean.match(/^([A-Ea-e])\\.\\s*(.*)$/);
          const letter = m ? m[1].toUpperCase() : "";
          const text = m ? m[2] : clean;
          return {ok, letter, text};
        });

        options = options.map((o,idx)=> ({...o, orig: o.letter || String.fromCharCode(65+idx)}));
        shuffle(options);

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let corr = [];
        options = options.map((o, idx)=>{
          const nl = letters[idx];
          if(o.ok) corr.push(nl);
          return {...o, newLetter:nl};
        });

        html += '<div class="card question" id="'+qid+'">';
        html += '<div><b>Câu '+(i+1)+':</b><br>'+obj.q+'</div>';
        options.forEach(o=>{
          html += '<label class="option"><input type="'+(pt===1?'radio':'checkbox')+'" name="'+qid+'" value="'+o.newLetter+'"><div><b>'+o.newLetter+'.</b> '+o.text+'</div></label>';
        });
        html += '<div class="expl" id="'+qid+'_result" data-answer="'+corr.sort().join(',')+'" data-solution="'+encodeURIComponent(obj.solution)+'"></div></div>';
      }

      if(pt===3){
        const obj = parsePart3(raw);
        html += '<div class="card question" id="'+qid+'"><div><b>Câu '+(i+1)+':</b><br>'+obj.q+'</div>';
        html += '<div style="margin-top:10px">Đáp án: <input type="text" id="'+qid+'_input" class="blank" style="min-width:120px"></div>';
        html += '<div class="expl" id="'+qid+'_result" data-answer="'+obj.answers.map(x=>x.replace(/"/g,'&quot;')).join('||')+'" data-solution="'+encodeURIComponent(obj.solution)+'"></div></div>';
      }

      if(pt===4){
        const obj = parsePart4(raw);
        const qHtml = obj.q.replace(/=\\s*\\((\\d+)\\)\\s*=/g, (_,n)=>{
          const aa = (obj.answers[n]||[]).join("||").replace(/"/g,'&quot;');
          return '<input type="text" class="blank p4blank" data-answer="'+aa+'" id="'+qid+'_blank_'+n+'">';
        });
        html += '<div class="card question" id="'+qid+'"><div><b>Câu '+(i+1)+':</b><br>'+qHtml+'</div>';
        html += '<div class="expl" id="'+qid+'_result" data-solution="'+encodeURIComponent(obj.solution)+'"></div></div>';
      }

      if(pt===5){
        const obj = parsePart5(raw);
        const left = obj.left.map(x=>({...x}));
        const right = obj.right.map(x=>({...x}));
        shuffle(left); shuffle(right);

        const expectedPairs = [];
        Object.keys(obj.mapping).forEach(k => (obj.mapping[k]||[]).forEach(v => expectedPairs.push(k+"="+v)));

        html += '<div class="card question" id="'+qid+'">';
        html += '<div><b>Câu '+(i+1)+':</b><br>'+obj.header+'</div>';
        html += '<div class="match-wrap" id="match_'+qid+'" data-expected="'+expectedPairs.join(',')+'"><svg class="match-lines" id="svg_'+qid+'"></svg><div class="match-cols">';
        html += '<div class="match-col left">';
        left.forEach(it=> html += '<div class="match-item left-item" data-id="'+it.id+'">'+it.text+'</div>');
        html += '</div><div class="match-col right">';
        right.forEach(it=> html += '<div class="match-item right-item" data-id="'+it.id+'">'+it.text+'</div>');
        html += '</div></div><button type="button" onclick="clearMatch(\\'match_'+qid+'\\')" style="margin-top:10px">Xóa nối</button></div>';
        html += '<div class="expl" id="'+qid+'_result" data-solution="'+encodeURIComponent(obj.solution)+'"></div></div>';
      }

      if(pt===6){
        const obj = parsePart6(raw);
        const clues = obj.clues || [];

        // align keyword
        let aligned = [];
        let validKW = false;
        const kw = (obj.keyword||"").replace(/\\s+/g,'').toUpperCase();

        if(kw && kw.length === clues.length){
          validKW = true;
          const offsets = [];
          for(let i=0;i<clues.length;i++){
            const ans = clues[i].answer.replace(/\\s+/g,'').toUpperCase();
            const ch = kw[i];
            const idx = ans.indexOf(ch);
            if(idx < 0){ validKW = false; break; }
            offsets.push(idx);
          }
          if(validKW){
            const maxPad = Math.max(...offsets);
            for(let i=0;i<clues.length;i++){
              const ans = clues[i].answer.replace(/\\s+/g,'').toUpperCase();
              aligned.push({ans, pad:maxPad-offsets[i], keyIdx:offsets[i], clue:clues[i].clue});
            }
          }
        }
        if(!validKW){
          aligned = clues.map(c=>({ans:c.answer.replace(/\\s+/g,'').toUpperCase(), pad:0, keyIdx:-1, clue:c.clue}));
        }

        html += '<div class="card question" id="'+qid+'"><div><b>Câu '+(i+1)+':</b><br>'+obj.q+'</div>';
        html += '<div style="margin:8px 0;color:var(--text-muted)"><i>Bấm số để xem gợi ý</i></div>';
        html += '<div class="cw-box" id="cw_'+qid+'">';
        aligned.forEach((row,ri)=>{
          html += '<div class="cw-row"><div class="cw-num" onclick="openClue(\\''+qid+'\\','+ri+',\\''+escapeJs(row.clue)+'\\')">'+(ri+1)+'</div>';
          for(let k=0;k<row.pad;k++) html += '<div style="width:32px"></div>';
          for(let ci=0; ci<row.ans.length; ci++){
            const isKey = (ci===row.keyIdx) ? ' data-key="1" ' : '';
            html += '<input maxlength="1" class="cw-cell" '+isKey+' data-ans="'+row.ans[ci]+'" />';
          }
          html += '</div>';
        });
        html += '</div><div class="expl" id="'+qid+'_result" data-solution="'+encodeURIComponent(obj.solution)+'"></div></div>';
      }
    });

    html += '</div>';
    pcount++;
  });

  root.innerHTML = html;
  setupMatchLogic();
  setupCrosswordInputJump();
  MathJax.typesetPromise();
}

function setupMatchLogic(){
  document.querySelectorAll('.match-wrap').forEach(wrap=>{
    wrap.links = [];
    let selected = null;

    wrap.querySelectorAll('.match-item').forEach(it=>{
      it.addEventListener('click', ()=>{
        if(wrap.classList.contains('graded')) return;
        const isLeft = it.classList.contains('left-item');

        if(selected === it){
          it.classList.remove('sel');
          selected = null;
          return;
        }
        if(!selected){
          selected = it;
          it.classList.add('sel');
          return;
        }
        const selectedIsLeft = selected.classList.contains('left-item');
        if(selectedIsLeft === isLeft){
          selected.classList.remove('sel');
          selected = it;
          it.classList.add('sel');
          return;
        }

        const l = isLeft ? it.dataset.id : selected.dataset.id;
        const r = isLeft ? selected.dataset.id : it.dataset.id;

        const idx = wrap.links.findIndex(x=>x.l===l && x.r===r);
        if(idx>=0) wrap.links.splice(idx,1);
        else wrap.links.push({l,r});

        selected.classList.remove('sel');
        selected = null;
        drawMatchLines(wrap);
      });
    });

    drawMatchLines(wrap);
    window.addEventListener('resize', ()=>drawMatchLines(wrap));
  });
}

function clearMatch(id){
  const w = document.getElementById(id);
  if(!w || w.classList.contains('graded')) return;
  w.links = [];
  w.querySelectorAll('.match-item.sel').forEach(x=>x.classList.remove('sel'));
  drawMatchLines(w);
}

function drawMatchLines(wrap){
  const svg = wrap.querySelector('svg.match-lines');
  svg.innerHTML = '';
  const rect = wrap.getBoundingClientRect();

  (wrap.links||[]).forEach(link=>{
    const L = wrap.querySelector('.left-item[data-id="'+link.l+'"]');
    const R = wrap.querySelector('.right-item[data-id="'+link.r+'"]');
    if(!L || !R) return;

    const lr = L.getBoundingClientRect(), rr = R.getBoundingClientRect();
    const x1 = lr.right - rect.left;
    const y1 = lr.top + lr.height/2 - rect.top;
    const x2 = rr.left - rect.left;
    const y2 = rr.top + rr.height/2 - rect.top;

    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x1); line.setAttribute('y1',y1);
    line.setAttribute('x2',x2); line.setAttribute('y2',y2);
    line.setAttribute('stroke','#2563eb');
    line.setAttribute('stroke-width','3');
    line.setAttribute('data-l',link.l);
    line.setAttribute('data-r',link.r);
    svg.appendChild(line);
  });
}

function setupCrosswordInputJump(){
  document.querySelectorAll('.cw-cell').forEach(cell=>{
    cell.addEventListener('input', function(){
      this.value = this.value.toUpperCase();
      if(this.value.length===1){
        const n = this.nextElementSibling;
        if(n && n.classList.contains('cw-cell')) n.focus();
      }
    });
    cell.addEventListener('keydown', function(e){
      if(e.key==='Backspace' && this.value===''){
        const p = this.previousElementSibling;
        if(p && p.classList.contains('cw-cell')) p.focus();
      }
    });
  });
}

function openClue(qid, idx, clue){
  if(!clueUsed[qid]) clueUsed[qid] = new Set();
  clueUsed[qid].add(idx);
  alert("Gợi ý hàng ngang "+(idx+1)+":\\n"+clue);
}

function normalize(s){
  return String(s||'').trim().toLowerCase();
}

async function sendGoogleForm(total, max){
  const gf = APP_DATA.gf_config || {};
  if(!gf.url || !Array.isArray(gf.fields) || !gf.fields.length) return;

  const fd = new FormData();
  const violationReport = violationCount>0 ? ("Vi phạm "+violationCount+" lần ("+violationDetails.join(" | ")+")") : "Không vi phạm";

  for(const f of gf.fields){
    const type = (f.type||"").toLowerCase();
    const id = f.id;
    if(!id) continue;

    if(type.includes("học sinh")){
      const val = (document.getElementById("gf_"+id)?.value || "").trim() || "Chưa điền";
      fd.append("entry."+id, val);
    } else if(type.includes("điểm đạt") || type.includes("score")){
      fd.append("entry."+id, total);
    } else if(type.includes("tối đa") || type.includes("max")){
      fd.append("entry."+id, max);
    } else if(type.includes("vi phạm") || type.includes("báo cáo")){
      fd.append("entry."+id, violationReport);
    } else {
      fd.append("entry."+id, "");
    }
  }

  try{
    await fetch(gf.url, { method:'POST', mode:'no-cors', body:fd });
  }catch{}
}

async function gradeQuiz(){
  if(submitted) return;

  // validate required GF fields
  const gf = APP_DATA.gf_config || {};
  const missing = [];
  if(gf.url && Array.isArray(gf.fields)){
    gf.fields.forEach(f=>{
      if((f.type||"").includes("Học sinh") && f.required){
        const v=(document.getElementById("gf_"+f.id)?.value||"").trim();
        if(!v) missing.push(f.title || f.id);
      }
    });
  }
  if(missing.length && !forceSubmit){
    alert("Vui lòng điền đầy đủ: "+missing.join(", "));
    return;
  }

  if(!forceSubmit && !confirm("Bạn chắc chắn muốn nộp bài?")) return;

  document.getElementById("overlay").style.display = "flex";

  let total=0, max=0;
  const partStat = {};

  document.querySelectorAll('.section').forEach(sec=>{
    const pt = +sec.dataset.parttype;
    const title = sec.dataset.title || ("Phần "+pt);
    if(!partStat[title]) partStat[title] = {score:0,max:0};

    sec.querySelectorAll('.question').forEach(q=>{
      const qid = q.id;
      const ex = q.querySelector('.expl');
      let qScore=0, qMax=(pt===6?0:1), feedback="";

      if(pt===1){
        const sel = q.querySelector('input[type=radio]:checked');
        const cor = (ex.dataset.answer||"");
        if(!sel) feedback = '<span style="color:#ef4444">✗ Chưa trả lời. Đáp án đúng: '+cor+'</span>';
        else if(sel.value===cor){ qScore=1; feedback='<span style="color:#10b981">✓ Chính xác</span>'; }
        else feedback='<span style="color:#ef4444">✗ Sai. Đáp án đúng: '+cor+'</span>';
      }

      if(pt===2){
        const user = [...q.querySelectorAll('input[type=checkbox]:checked')].map(x=>x.value).sort().join(',');
        const cor = (ex.dataset.answer||"").split(',').filter(Boolean).sort().join(',');
        if(!user) feedback='<span style="color:#ef4444">✗ Chưa trả lời. Đáp án đúng: '+cor+'</span>';
        else if(user===cor){ qScore=1; feedback='<span style="color:#10b981">✓ Chính xác</span>'; }
        else feedback='<span style="color:#ef4444">✗ Sai. Đáp án đúng: '+cor+'</span>';
      }

      if(pt===3){
        const inp = q.querySelector('input[type=text]');
        const u = normalize(inp.value);
        const cor = (ex.dataset.answer||"").split('||').map(normalize).filter(Boolean);
        if(!u) feedback='<span style="color:#ef4444">✗ Chưa trả lời. Đáp án đúng: '+(ex.dataset.answer||"")+'</span>';
        else if(cor.includes(u)){ qScore=1; feedback='<span style="color:#10b981">✓ Chính xác</span>'; inp.style.borderColor='#10b981'; }
        else { feedback='<span style="color:#ef4444">✗ Sai. Đáp án đúng: '+(ex.dataset.answer||"")+'</span>'; inp.style.borderColor='#ef4444'; }
        inp.disabled=true;
      }

      if(pt===4){
        const blanks = q.querySelectorAll('.p4blank');
        let allOk=true;
        blanks.forEach(b=>{
          const u = normalize(b.value);
          const cor = (b.dataset.answer||"").split('||').map(normalize).filter(Boolean);
          if(!u || !cor.includes(u)){ allOk=false; b.style.borderBottomColor='#ef4444'; }
          else b.style.borderBottomColor='#10b981';
          b.disabled=true;
        });
        if(allOk){ qScore=1; feedback='<span style="color:#10b981">✓ Điền hoàn toàn chính xác</span>'; }
        else feedback='<span style="color:#ef4444">✗ Sai hoặc thiếu. Kiểm tra đáp án mẫu trong lời giải.</span>';
      }

      if(pt===5){
        const wrap = q.querySelector('.match-wrap');
        wrap.classList.add('graded');
        const expected = (wrap.dataset.expected||"").split(',').filter(Boolean).sort();
        const user = (wrap.links||[]).map(x=>x.l+"="+x.r).sort();
        const perfect = expected.length && expected.length===user.length && expected.every((x,i)=>x===user[i]);

        // color lines
        const svg = wrap.querySelector('svg');
        [...svg.querySelectorAll('line')].forEach(line=>{
          const pair = line.dataset.l+"="+line.dataset.r;
          if(expected.includes(pair)) line.setAttribute('stroke','#10b981');
          else line.setAttribute('stroke','#ef4444');
        });

        if(perfect){ qScore=1; feedback='<span style="color:#10b981">✓ Ghép đúng hoàn toàn</span>'; }
        else feedback='<span style="color:#ef4444">✗ Ghép sai/thiếu. Xem lời giải chi tiết.</span>';
      }

      if(pt===6){
        const rows = q.querySelectorAll('.cw-row');
        qMax = rows.length * 2;
        let answered = 0;
        let bonus = 0;
        let details = "";

        // keyword check
        const keyCells = [...q.querySelectorAll('.cw-cell[data-key="1"]')];
        let keywordCorrect = keyCells.length>0;
        keyCells.forEach(c=>{
          if((c.value||'').toUpperCase() !== (c.dataset.ans||'')) keywordCorrect=false;
        });

        rows.forEach((row,ri)=>{
          const cells = [...row.querySelectorAll('.cw-cell')];
          let rowOk = true;
          cells.forEach(c=>{
            const u = (c.value||'').toUpperCase();
            const a = (c.dataset.ans||'').toUpperCase();
            if(u!==a) rowOk = false;
            c.disabled = true;
            if(u===a && u!==""){ c.style.borderColor='#10b981'; c.style.color='#10b981'; }
            else { c.style.borderColor='#ef4444'; c.style.color='#ef4444'; c.value = a; c.style.opacity = '0.55'; }
          });

          const usedHint = clueUsed[qid] && clueUsed[qid].has(ri);
          let pts = 0;
          if(rowOk){
            pts = usedHint ? 1 : 2;
            answered += pts;
          } else {
            if(keywordCorrect && !usedHint){
              pts = 2;
              bonus += 2;
            }
          }
          details += '<div>- Hàng '+(ri+1)+': <b>'+pts+'/2</b> '+(usedHint?'(đã xem gợi ý)':'')+'</div>';
        });

        qScore = answered + bonus;
        feedback = '<div><b>Điểm câu ô chữ: '+qScore+'/'+qMax+'</b></div>'+details;
      }

      total += qScore; max += qMax;
      partStat[title].score += qScore;
      partStat[title].max += qMax;

      const sol = decodeURIComponent(ex.dataset.solution||"");
      ex.innerHTML = '<div>'+feedback+'</div>' + (sol ? '<hr><b>Lời giải:</b><br>'+sol : '');
      ex.style.display = 'block';
    });
  });

  await sendGoogleForm(total, max);
  submitted = true;
  localStorage.setItem(EXAM_KEY+"_SUBMITTED", "1");

  document.getElementById("scoreBox").textContent = "Điểm: "+total+" / "+max;
  document.getElementById("submitBtn").style.display = "none";
  document.querySelectorAll('input,select,textarea,button').forEach(el=>{
    if(el.id!=="submitBtn") el.disabled = true;
  });

  // summary
  const box = document.createElement('div');
  box.className = 'card';
  let t = '<h3 style="margin-top:0;color:var(--primary)">Tổng hợp điểm</h3>';
  Object.keys(partStat).forEach(k=>{
    t += '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)"><span>'+k+'</span><b>'+partStat[k].score+' / '+partStat[k].max+'</b></div>';
  });
  box.innerHTML = t;
  document.querySelector('.container').insertBefore(box, document.getElementById('examRoot'));

  document.getElementById("overlay").style.display = "none";
  window.scrollTo({top:0, behavior:'smooth'});
  MathJax.typesetPromise();
}

function escapeHtml(s){
  return String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
}
function escapeJs(s){
  return String(s||'').replaceAll('\\\\','\\\\\\\\').replaceAll("'", "\\\\'").replaceAll("\\n"," ");
}

document.getElementById('submitBtn').addEventListener('click', gradeQuiz);

renderExam();
startTimer();
<\\/script>
</body>
</html>`;
  }
};

document.addEventListener('DOMContentLoaded', () => app.init());
