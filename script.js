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
      const m = html.match(/var FB_PUBLIC_LOAD_DATA_\\s*=\\s*(\\[.*\\])\\s*;/s);
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
    a.download = (payload.title || "de_thi").replace(/\\s+/g, "_") + ".html";
    a.click();
  },

  buildExamHTML(p) {
    const dataJson = JSON.stringify(p).replace(/<\\/script>/gi, "<\\\\/script>");

    return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${(p.title || "").replace(/</g,'&lt;')}</title>
<script>window.MathJax={tex:{inlineMath:[['$','$']]},chtml:{scale:0.9}};<\\/script>
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
<div class="navbar"><div class="score" id="scoreBox">Điểm: 0</div><div class="timer">⏱ <span id="timeBox">00:00:00</span></div></div>
<div class="container">
  <h1 style="text-align:center;margin-bottom:4px">${(p.title || "").replace(/</g,'&lt;')}</h1>
  ${p.creator ? `<div style="text-align:center;color:var(--text-muted);margin-bottom:14px">${p.creator.replace(/</g,'&lt;')}</div>` : ""}
  <div id="studentInfo"></div>
  <div id="examRoot"></div>
  <button id="submitBtn" class="btn">NỘP BÀI VÀ XEM KẾT QUẢ</button>
</div>

<script>
const APP_DATA = ${dataJson};

// ---- rest runtime script kept same as previous message logic ----
// For stability in chat length, use minimal robust runtime:
(function(){
  const root = document.getElementById('examRoot');
  const submitBtn = document.getElementById('submitBtn');
  const scoreBox = document.getElementById('scoreBox');
  let total = 0, max = 0;

  function parse12(raw){
    const lines = String(raw||'').split(/\\r?\\n/);
    let q=[], o=[], s=[], sol=false;
    for(const ln of lines){
      if(/^\\s*Lời giải:/.test(ln)){ sol=true; s.push(ln.replace(/^\\s*Lời giải:/,'')); continue; }
      if(sol) s.push(ln); else if(/^\\s*#?\\s*[A-Ea-e]\\.\\s/.test(ln)) o.push(ln); else q.push(ln);
    }
    return {q:q.join('<br>'), o, s:s.join('<br>')};
  }

  function parse3(raw){
    const lines = String(raw||'').split(/\\r?\\n/);
    let q=[], a=[], s=[], sol=false;
    for(const ln of lines){
      if(/^\\s*Lời giải:/.test(ln)){ sol=true; s.push(ln.replace(/^\\s*Lời giải:/,'')); continue; }
      if(sol) s.push(ln); else if(/^\\s*#/.test(ln)){ const x=ln.replace(/^\\s*#/,'').trim(); if(x) a.push(x); } else q.push(ln);
    }
    return {q:q.join('<br>'), a, s:s.join('<br>')};
  }

  function renderPart(part, title){
    const arr = APP_DATA['part'+part] || [];
    if(!arr.length) return '';
    let h = '<div class="section-title">'+title+'</div>';
    arr.forEach((raw,idx)=>{
      const qid = 'p'+part+'_q'+(idx+1);
      if(part===1 || part===2){
        const x = parse12(raw);
        let corr = [];
        h += '<div class="card question" id="'+qid+'"><div><b>Câu '+(idx+1)+':</b><br>'+x.q+'</div>';
        x.o.forEach((line,j)=>{
          const ok = /^\\s*#/.test(line);
          const clean = ok ? line.replace(/^\\s*#/,'').trim() : line.trim();
          const m = clean.match(/^([A-Ea-e])\\.\\s*(.*)$/);
          const L = m ? m[1].toUpperCase() : String.fromCharCode(65+j);
          const T = m ? m[2] : clean;
          if(ok) corr.push(L);
          h += '<label class="option"><input type="'+(part===1?'radio':'checkbox')+'" name="'+qid+'" value="'+L+'"><div><b>'+L+'.</b> '+T+'</div></label>';
        });
        h += '<div class="expl" data-answer="'+corr.sort().join(',')+'" data-sol="'+encodeURIComponent(x.s)+'"></div></div>';
      } else if(part===3){
        const x = parse3(raw);
        h += '<div class="card question" id="'+qid+'"><div><b>Câu '+(idx+1)+':</b><br>'+x.q+'</div><div style="margin-top:10px"><input type="text" id="'+qid+'_input" class="blank" style="min-width:140px"></div><div class="expl" data-answer="'+x.a.join('||')+'" data-sol="'+encodeURIComponent(x.s)+'"></div></div>';
      } else {
        // fallback hiển thị text cho part 4-6 tránh trắng trang
        h += '<div class="card question"><div><b>Câu '+(idx+1)+':</b><br>'+String(raw).replace(/</g,'&lt;').replace(/\\n/g,'<br>')+'</div><div class="expl"></div></div>';
      }
    });
    return h;
  }

  root.innerHTML =
    renderPart(1,'Phần 1: Một phương án đúng') +
    renderPart(2,'Phần 2: Nhiều đáp án đúng') +
    renderPart(3,'Phần 3: Trả lời ngắn') +
    renderPart(4,'Phần 4: Điền khuyết') +
    renderPart(5,'Phần 5: Ghép đôi') +
    renderPart(6,'Phần 6: Ô chữ');

  submitBtn.addEventListener('click', ()=>{
    total = 0; max = 0;
    document.querySelectorAll('.question').forEach(q=>{
      max++;
      const ex = q.querySelector('.expl');
      let ok = false;
      const checks = q.querySelectorAll('input[type="radio"], input[type="checkbox"]');
      if(checks.length){
        const user = [...q.querySelectorAll('input[type="radio"]:checked,input[type="checkbox"]:checked')].map(i=>i.value).sort().join(',');
        const cor  = (ex?.dataset?.answer||'').split(',').filter(Boolean).sort().join(',');
        ok = user && user === cor;
        if(ex){ ex.innerHTML = ok ? '<span style="color:#10b981">✓ Đúng</span>' : '<span style="color:#ef4444">✗ Sai. Đáp án: '+cor+'</span>'; ex.style.display='block'; }
      } else {
        const inp = q.querySelector('input[type="text"]');
        if(inp && ex){
          const u = String(inp.value||'').trim().toLowerCase();
          const arr = (ex.dataset.answer||'').split('||').map(x=>x.trim().toLowerCase()).filter(Boolean);
          ok = u && arr.includes(u);
          ex.innerHTML = ok ? '<span style="color:#10b981">✓ Đúng</span>' : '<span style="color:#ef4444">✗ Sai. Đáp án: '+(ex.dataset.answer||'')+'</span>';
          ex.style.display='block';
        }
      }
      if(ok) total++;
    });

    scoreBox.textContent = 'Điểm: '+total+' / '+max;
    submitBtn.style.display = 'none';
    document.querySelectorAll('input').forEach(i=>i.disabled=true);
    window.scrollTo({top:0, behavior:'smooth'});
  });
})();
<\\/script>
</body>
</html>`;
  }
};

document.addEventListener('DOMContentLoaded', () => app.init());
