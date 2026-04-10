// ============================================================
// THEMES
// ============================================================
const THEMES = {
    "Mặc định (Xanh hiện đại)":   ":root{--primary:#2563eb;--primary-hover:#1d4ed8;--bg:#f8fafc;--card:#ffffff;--text:#0f172a;--text-muted:#64748b;--border:#e2e8f0;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(255,255,255,0.85);--hover-bg:#f1f5f9;}",
    "Chế độ Tối (Dark Mode)":      ":root{--primary:#3b82f6;--primary-hover:#60a5fa;--bg:#0f172a;--card:#1e293b;--text:#f8fafc;--text-muted:#94a3b8;--border:#334155;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(30,41,59,0.85);--hover-bg:#0f172a;}",
    "Trắng tinh khiết (Clean)":    ":root{--primary:#000000;--primary-hover:#333333;--bg:#ffffff;--card:#ffffff;--text:#000000;--text-muted:#666666;--border:#e5e5e5;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(255,255,255,0.95);--hover-bg:#f5f5f5;}",
    "Xanh thiên nhiên (Nature)":   ":root{--primary:#16a34a;--primary-hover:#15803d;--bg:#f0fdf4;--card:#ffffff;--text:#14532d;--text-muted:#166534;--border:#bbf7d0;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(255,255,255,0.85);--hover-bg:#f0fdf4;}",
    "Tím thanh lịch (Elegant)":    ":root{--primary:#7c3aed;--primary-hover:#6d28d9;--bg:#faf5ff;--card:#ffffff;--text:#4c1d95;--text-muted:#5b21b6;--border:#e9d5ff;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(255,255,255,0.85);--hover-bg:#faf5ff;}",
    "Hoàng hôn (Warm Autumn)":     ":root{--primary:#ea580c;--primary-hover:#c2410c;--bg:#fff7ed;--card:#ffffff;--text:#7c2d12;--text-muted:#9a3412;--border:#ffedd5;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(255,255,255,0.85);--hover-bg:#fff7ed;}",
    "Đại dương sâu (Ocean)":       ":root{--primary:#0891b2;--primary-hover:#0e7490;--bg:#ecfeff;--card:#ffffff;--text:#164e63;--text-muted:#155e75;--border:#cffafe;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(255,255,255,0.85);--hover-bg:#ecfeff;}",
    "Hồng Pastel (Soft Pink)":     ":root{--primary:#db2777;--primary-hover:#be185d;--bg:#fdf2f8;--card:#ffffff;--text:#831843;--text-muted:#9d174d;--border:#fbcfe8;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(255,255,255,0.85);--hover-bg:#fdf2f8;}",
    "Cổ điển (Classic Serif)":     ":root{--primary:#78350f;--primary-hover:#451a03;--bg:#fef3c7;--card:#ffedd5;--text:#451a03;--text-muted:#78350f;--border:#fdba74;--font-family:'Merriweather','Times New Roman',serif;--bg-glass:rgba(255,237,213,0.85);--hover-bg:#fef3c7;}",
    "Tối giản xám (Minimal Gray)": ":root{--primary:#475569;--primary-hover:#334155;--bg:#f1f5f9;--card:#f8fafc;--text:#334155;--text-muted:#475569;--border:#cbd5e1;--font-family:'Inter',-apple-system,sans-serif;--bg-glass:rgba(248,250,252,0.85);--hover-bg:#f1f5f9;}"
};

// ============================================================
// HƯỚNG DẪN NHẬP
// ============================================================
const GUIDES = {
    1:`📌 PHẦN 1 – TRẮC NGHIỆM MỘT LỰA CHỌN
Mỗi câu bắt đầu bằng ##. Đáp án ĐÚNG có dấu # ở đầu dòng.

Ví dụ:
##
Nguyên tố nào sau đây là kim loại kiềm?
# A. Natri (Na)
B. Magie (Mg)
C. Nhôm (Al)
D. Silic (Si)
Lời giải:
Kim loại kiềm thuộc nhóm IA, natri (Na) là kim loại kiềm điển hình.`,

    2:`📌 PHẦN 2 – TRẮC NGHIỆM NHIỀU LỰA CHỌN
Nhiều đáp án đúng, mỗi đáp án đúng thêm dấu # phía trước.

Ví dụ:
##
Hạt nào có trong hạt nhân nguyên tử?
# A. Proton
B. Electron
# C. Neutron
D. Photon
Lời giải:
Hạt nhân nguyên tử gồm proton (mang điện +) và neutron (không mang điện).`,

    3:`📌 PHẦN 3 – TRẢ LỜI NGẮN
Mỗi câu bắt đầu bằng ##. Các đáp án chấp nhận được viết sau dấu #.

Ví dụ:
##
Nguyên tử có 17 proton và 18 neutron. Tính khối lượng nguyên tử tương đối.
# 35
# 35u
Lời giải:
A = Z + N = 17 + 18 = 35`,

    4:`📌 PHẦN 4 – ĐIỀN KHUYẾT
Vị trí trống dùng ký hiệu =(n)= (n là số thứ tự ô trống).
Đáp án viết sau dòng "Đáp án:" theo từng ô.

Ví dụ:
##
Hình vuông có =(1)= cạnh bằng nhau và các góc bằng =(2)= độ.
Đáp án:
=(1)=
# 4
# bốn
=(2)=
# 90
# chín mươi
Lời giải:
Định nghĩa hình vuông: 4 cạnh bằng nhau, 4 góc vuông (90°).`,

    5:`📌 PHẦN 5 – GHÉP ĐÔI (NỐI)
Cột I và Cột II. Đáp án nối ghi sau dấu # dạng: 1=A, 2=B,...

Ví dụ:
##
Hãy ghép động vật với số chân tương ứng:
Cột I:
1. Chó
2. Gà
3. Nhện
Cột II:
A. hai chân
B. bốn chân
C. tám chân
# 1=B, 2=A, 3=C
Lời giải:
Chó 4 chân, Gà 2 chân, Nhện 8 chân.`,

    6:`📌 PHẦN 6 – Ô CHỮ (CROSSWORD)
Mỗi gợi ý hàng ngang: "Nội dung gợi ý # ĐÁP ÁN"
Từ khóa hàng dọc (tuỳ chọn): "Từ khóa: # TUKHOA"
⚠ Độ dài từ khóa PHẢI bằng số lượng hàng ngang.

Ví dụ:
##
Chủ đề: Các hạt cơ bản
1. Hạt mang điện dương trong hạt nhân # PROTON
2. Hạt không mang điện trong hạt nhân # NEUTRON
3. Hạt mang điện âm, quay quanh hạt nhân # ELECTRON
Từ khóa: # ONE
Lời giải:
P, N, E là các hạt tạo nên nguyên tử.`
};

// ============================================================
// KÝ HIỆU
// ============================================================
const CHEM_SYMS = [
    {t:"+"},{t:"-"},{t:"×"},{t:"÷"},{t:"±"},
    {t:"⇌"},{t:"→"},{t:"←"},{t:"↑"},{t:"↓"},
    {t:"≈"},{t:"≠"},{t:"≤"},{t:"≥"},
    {t:"xⁿ",s:"<sup>",e:"</sup>"},
    {t:"xₙ",s:"<sub>",e:"</sub>"}
];
const MORE_SYMS = [
    {t:"⟹"},{t:"⟸"},{t:"∑"},{t:"π"},{t:"α"},{t:"β"},{t:"γ"},
    {t:"Δ"},{t:"μ"},{t:"σ"},{t:"ρ"},{t:"η"},{t:"ν"},{t:"τ"},
    {t:"φ"},{t:"ω"},{t:"∞"},{t:"⁰"},{t:"¹"},{t:"²"},{t:"³"},
    {t:"⁴"},{t:"⁵"},{t:"⁶"},{t:"⁷"},{t:"⁸"},{t:"⁹"},{t:"°C"},{t:"e⁻"}
];

// ============================================================
// APP
// ============================================================
const app = {
    data: {
        part1:[],part2:[],part3:[],part4:[],part5:[],part6:[],
        gf_config:{url:"",fields:[]}
    },
    activeTab: 1,

    // --- INIT ---
    init() {
        lucide.createIcons();
        this.renderThemes();
        this.renderTabs();
        this.renderToolbar();
        this.switchTab(1);
        this.setupListeners();
    },

    setupListeners() {
        // Auto-phân tích khi paste link Google Form
        const gfInput = document.getElementById('gfUrlInput');
        if (gfInput) {
            gfInput.addEventListener('paste', () => {
                setTimeout(() => {
                    if (gfInput.value.includes('google.com/forms')) this.autoAnalyzeGF();
                }, 150);
            });
        }
        // Đóng popup ký hiệu khi click ngoài
        document.addEventListener('click', (e) => {
            const popup = document.getElementById('moreSymPopup');
            const btn   = document.getElementById('moreSymBtn');
            if (popup && !popup.contains(e.target) && btn && !btn.contains(e.target)) {
                popup.style.display = 'none';
            }
        });
    },

    // --- THEMES ---
    renderThemes() {
        const sel = document.getElementById('themeSelect');
        sel.innerHTML = Object.keys(THEMES).map(k=>`<option value="${k}">${k}</option>`).join('');
    },

    // --- TABS ---
    renderTabs() {
        const c = document.getElementById('tabsContainer');
        const tabs = [
            {icon:'circle-dot',       label:'1 lựa chọn'},
            {icon:'check-square',     label:'Nhiều lựa chọn'},
            {icon:'pen-line',         label:'Trả lời ngắn'},
            {icon:'layout-template',  label:'Điền khuyết'},
            {icon:'arrow-right-left', label:'Ghép đôi'},
            {icon:'grid-3x3',         label:'Ô chữ'}
        ];
        c.innerHTML = tabs.map((t,i)=>{
            const n = this.data['part'+(i+1)].length;
            const active = this.activeTab === i+1;
            return `<button class="tab-btn ${active?'tab-active':'tab-inactive'}" onclick="app.switchTab(${i+1})">
                <i data-lucide="${t.icon}" class="w-4 h-4 mb-1 ${active?'text-blue-600':'text-slate-400'}"></i>
                <span class="truncate w-full text-center text-[10px]">P${i+1}: ${t.label}</span>
                ${n>0?`<span class="bg-blue-100 text-blue-700 text-[9px] font-black px-1.5 rounded-full mt-0.5">${n}</span>`:''}
            </button>`;
        }).join('');
        lucide.createIcons();
    },

    switchTab(tab) {
        this.activeTab = tab;
        const titles = ["Một Lựa Chọn","Nhiều Lựa Chọn","Trả Lời Ngắn","Điền Khuyết","Ghép Đôi","Ô Chữ"];
        document.getElementById('partTitle').innerHTML =
            `Phần ${tab}: <span class="text-slate-600 font-semibold">${titles[tab-1]}</span>`;
        this.renderTabs();
        this.renderQList();
        document.getElementById('qInput').value = '';
        document.getElementById('qInput').focus();
    },

    // --- GUIDE ---
    showGuide() {
        document.getElementById('guideText').textContent = GUIDES[this.activeTab];
        this.openModal('guideModal');
    },

    // --- TOOLBAR ---
    renderToolbar() {
        const tb = document.getElementById('editorToolbar');

        // Nhóm ký hiệu thường
        let html = `<div class="flex flex-wrap gap-0.5 bg-white rounded-lg p-1 border-2 border-slate-200">`;
        CHEM_SYMS.forEach(sym => {
            const s = sym.s||'', e = sym.e||'';
            html += `<button type="button"
                class="px-1.5 py-1 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90 font-bold text-sm"
                onclick="app.ins('${sym.t.replace(/'/g,"\\'")}','${s}','${e}')">${sym.t}</button>`;
        });
        html += `</div>`;

        // Nút "Ký hiệu khác" + popup
        html += `<div class="relative">
            <button id="moreSymBtn" type="button"
                class="px-2.5 py-1.5 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700 border-2 border-slate-200 rounded-lg text-xs font-bold transition-all whitespace-nowrap"
                onclick="app.toggleMoreSym()">Ký hiệu ▾</button>
            <div id="moreSymPopup" style="display:none;position:absolute;top:110%;left:0;z-index:100;background:white;border:2px solid #e2e8f0;border-radius:12px;padding:8px;box-shadow:0 10px 25px rgba(0,0,0,.15);display:none;flex-wrap:wrap;gap:4px;width:260px;">
                ${MORE_SYMS.map(sym=>`<button type="button"
                    class="px-2 py-1 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md font-bold text-sm transition-all"
                    onclick="app.ins('${sym.t}','','');document.getElementById('moreSymPopup').style.display='none';">${sym.t}</button>`).join('')}
            </div>
        </div>`;

        // Ngăn cách
        html += `<div class="w-px h-6 bg-slate-300 mx-1 self-center hidden sm:block"></div>`;

        // Bold / Italic / Sup / Sub
        html += `<div class="flex gap-0.5 bg-white rounded-lg p-1 border-2 border-slate-200">
            <button type="button" title="In đậm (Ctrl+B)" class="px-2 py-1 font-black text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90"
                onclick="app.ins('','&lt;b&gt;','&lt;/b&gt;')">B</button>
            <button type="button" title="In nghiêng" class="px-2 py-1 font-black italic text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90"
                onclick="app.ins('','&lt;i&gt;','&lt;/i&gt;')">I</button>
            <button type="button" title="Chỉ số trên" class="px-2 py-1 text-xs font-black text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90"
                onclick="app.ins('','&lt;sup&gt;','&lt;/sup&gt;')">x²</button>
            <button type="button" title="Chỉ số dưới" class="px-2 py-1 text-xs font-black text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90"
                onclick="app.ins('','&lt;sub&gt;','&lt;/sub&gt;')">x₂</button>
        </div>`;

        // LaTeX
        html += `<button type="button" title="Chèn công thức LaTeX: $...$"
            class="px-2.5 py-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 border-2 border-purple-200 rounded-lg text-xs font-bold whitespace-nowrap transition-all active:scale-90"
            onclick="app.ins('','$','$')">∑ LaTeX</button>`;

        // Chèn ảnh
        html += `<button type="button" title="Chèn ảnh (chuyển thành Base64)"
            class="ml-auto px-2.5 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-2 border-indigo-200 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all active:scale-90"
            onclick="app.insertImage()">🖼 Chèn ảnh</button>`;

        tb.innerHTML = html;

        // Fix: các nút dùng HTML entity &lt; &gt; cần dùng thực
        tb.querySelectorAll('button[onclick*="&lt;"]').forEach(btn => {
            const oc = btn.getAttribute('onclick')
                .replace(/&lt;/g,'<').replace(/&gt;/g,'>');
            btn.setAttribute('onclick', oc);
        });
    },

    toggleMoreSym() {
        const popup = document.getElementById('moreSymPopup');
        const shown = popup.style.display === 'flex';
        popup.style.display = shown ? 'none' : 'flex';
    },

    // --- INS (insert text / tag) ---
    ins(char, startTag, endTag) {
        const el = document.getElementById('qInput');
        const s = el.selectionStart, e = el.selectionEnd;
        let newText, cur;
        if (startTag || endTag) {
            const sel = el.value.substring(s, e);
            newText = startTag + sel + endTag;
            el.value = el.value.substring(0,s) + newText + el.value.substring(e);
            cur = sel ? s + newText.length : s + startTag.length;
        } else {
            el.value = el.value.substring(0,s) + char + el.value.substring(e);
            cur = s + char.length;
        }
        el.setSelectionRange(cur, cur);
        el.focus();
    },

    insertImage() {
        const f = document.getElementById('fileLoader');
        f.accept = 'image/*';
        f.onchange = ev => {
            const file = ev.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = e => {
                this.ins('', `<img src="${e.target.result}" style="max-width:100%;border-radius:8px;margin:8px 0;">`, '');
            };
            reader.readAsDataURL(file);
            f.value = '';
        };
        f.click();
    },

    // --- THÊM CÂU HỎI ---
    addQuestion() {
        const val = document.getElementById('qInput').value.trim();
        if (!val) { alert("Vui lòng nhập nội dung câu hỏi!"); return; }
        const key = 'part' + this.activeTab;
        const chunks = val.includes("##")
            ? val.split("##").map(x=>x.trim()).filter(x=>x.length>0)
            : [val];
        let added = 0;
        chunks.forEach(c => {
            if (c.split('\n').filter(l=>l.trim()).length >= 1) {
                this.data[key].push(c);
                added++;
            }
        });
        if (added === 0) { alert("Câu hỏi không hợp lệ (quá ngắn)!"); return; }
        document.getElementById('qInput').value = '';
        this.renderQList();
        this.renderTabs();
    },

    removeQuestion(idx) {
        if (confirm("Xóa câu hỏi này?")) {
            this.data['part'+this.activeTab].splice(idx, 1);
            this.renderQList();
            this.renderTabs();
        }
    },

    editQuestion(idx) {
        const key = 'part' + this.activeTab;
        const current = this.data[key][idx];
        // Đưa nội dung vào textarea để sửa
        document.getElementById('qInput').value = current;
        this.data[key].splice(idx, 1);
        this.renderQList();
        this.renderTabs();
        document.getElementById('qInput').focus();
    },

    // --- RENDER DANH SÁCH ---
    renderQList() {
        const arr = this.data['part'+this.activeTab];
        const el  = document.getElementById('qList');
        if (arr.length === 0) {
            el.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-slate-400 py-16 gap-4">
                <div class="bg-slate-100 p-5 rounded-2xl"><i data-lucide="inbox" class="w-12 h-12 text-slate-300"></i></div>
                <p class="text-sm font-bold">Chưa có câu hỏi nào</p>
                <p class="text-xs text-slate-300 text-center max-w-xs">Nhập câu hỏi bên trái rồi bấm "Thêm vào danh sách"</p>
            </div>`;
        } else {
            el.innerHTML = arr.map((q,i) => {
                const preview = q.split('\n').find(l=>l.trim()) || '(trống)';
                const safe = preview.replace(/</g,'&lt;').replace(/>/g,'&gt;').substring(0,120);
                return `<div class="q-card p-3 border-2 border-slate-200 rounded-xl bg-white shadow-[0_3px_0_0_#e2e8f0] hover:border-blue-400 hover:shadow-[0_3px_0_0_#93c5fd] transition-all group">
                    <div class="flex items-center gap-2 mb-1.5">
                        <span class="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 rounded-lg shrink-0">Câu ${i+1}</span>
                        <div class="flex gap-1 ml-auto">
                            <button class="p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white border border-amber-200 rounded-lg transition-all active:scale-90 opacity-0 group-hover:opacity-100"
                                onclick="app.editQuestion(${i})" title="Sửa (đưa về textarea)">
                                <i data-lucide="pencil" class="w-3 h-3"></i>
                            </button>
                            <button class="p-1.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white border border-red-200 rounded-lg transition-all active:scale-90 opacity-0 group-hover:opacity-100"
                                onclick="app.removeQuestion(${i})" title="Xóa">
                                <i data-lucide="trash-2" class="w-3 h-3"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${safe}</div>
                </div>`;
            }).join('');
        }
        const badge = document.getElementById('qCountBadge');
        if (badge) badge.textContent = arr.length + ' câu';
        lucide.createIcons();
    },

    // --- PROJECT ---
    newProject() {
        if (!confirm("Tạo dự án mới sẽ xóa toàn bộ dữ liệu. Bạn chắc chắn?")) return;
        this.data = {part1:[],part2:[],part3:[],part4:[],part5:[],part6:[],gf_config:{url:"",fields:[]}};
        document.getElementById('quizTitle').value  = "BÀI TẬP TRẮC NGHIỆM";
        document.getElementById('creatorName').value = "";
        document.getElementById('startTime').value   = "";
        document.getElementById('endTime').value     = "";
        document.getElementById('shuffleCheck').checked = false;
        this.switchTab(1);
        this.renderTabs();
    },

    saveProject() {
        const p = {
            title:      document.getElementById('quizTitle').value,
            creator:    document.getElementById('creatorName').value,
            theme:      document.getElementById('themeSelect').value,
            start_time: document.getElementById('startTime').value,
            end_time:   document.getElementById('endTime').value,
            shuffle:    document.getElementById('shuffleCheck').checked,
            ...this.data
        };
        const blob = new Blob([JSON.stringify(p,null,2)],{type:"application/json"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = (p.title||"Project").replace(/\s+/g,'_') + ".json";
        a.click();
        URL.revokeObjectURL(a.href);
    },

    loadProject() {
        const f = document.getElementById('fileLoader');
        f.accept = '.json';
        f.onchange = ev => {
            const file = ev.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = e => {
                try {
                    const p = JSON.parse(e.target.result);
                    document.getElementById('quizTitle').value  = p.title || '';
                    document.getElementById('creatorName').value = p.creator || '';
                    document.getElementById('startTime').value   = p.start_time || '';
                    document.getElementById('endTime').value     = p.end_time || '';
                    document.getElementById('shuffleCheck').checked = !!p.shuffle;
                    const themeKeys = Object.keys(THEMES);
                    document.getElementById('themeSelect').value =
                        themeKeys.includes(p.theme) ? p.theme : themeKeys[0];
                    // Migration trường type cũ
                    if (p.gf_config && p.gf_config.fields) {
                        p.gf_config.fields.forEach(field => {
                            if (!['Tự nhập','Tự động','Báo cáo vi phạm'].includes(field.type)) {
                                if ((field.type||'').includes('điền') || (field.type||'').includes('nhập'))
                                    field.type = 'Tự nhập';
                                else if ((field.type||'').includes('vi phạm') || (field.type||'').includes('báo cáo'))
                                    field.type = 'Báo cáo vi phạm';
                                else
                                    field.type = 'Tự động';
                            }
                        });
                    }
                    this.data = {
                        part1: p.part1||[], part2: p.part2||[], part3: p.part3||[],
                        part4: p.part4||[], part5: p.part5||[], part6: p.part6||[],
                        gf_config: p.gf_config || {url:"",fields:[]}
                    };
                    this.switchTab(1);
                    this.renderTabs();
                    alert("✅ Đã tải dự án thành công!");
                } catch(err) { alert("❌ File JSON không hợp lệ!\n" + err.message); }
            };
            reader.readAsText(file);
            f.value = '';
        };
        f.click();
    },

    // --- MODAL ---
    openModal(id) {
        const modal   = document.getElementById(id);
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0','pointer-events-none');
        content.classList.remove('scale-95','translate-y-4');
        content.classList.add('scale-100','translate-y-0');
    },
    closeModal(id) {
        const modal   = document.getElementById(id);
        const content = modal.querySelector('.modal-content');
        content.classList.remove('scale-100','translate-y-0');
        content.classList.add('scale-95','translate-y-4');
        setTimeout(()=>modal.classList.add('opacity-0','pointer-events-none'), 220);
    },

    // --- GOOGLE FORM ---
    openGFSettings() {
        document.getElementById('gfUrlInput').value = this.data.gf_config.url;
        if (this.data.gf_config.fields.length > 0) this.renderGFFields();
        else document.getElementById('gfFieldsTable').innerHTML =
            `<tr><td colspan="4" class="text-center py-10 text-slate-400 italic text-sm">Dán link Form rồi bấm "Tự động phân tích"</td></tr>`;
        this.openModal('gfModal');
    },

    async fetchWithProxy(url) {
        const proxies = [
            {url:`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, json:true},
            {url:`https://corsproxy.io/?${encodeURIComponent(url)}`, json:false},
            {url:`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`, json:false}
        ];
        for (const p of proxies) {
            try {
                const res = await fetch(p.url, {cache:"no-store"});
                if (!res.ok) continue;
                if (p.json) { const d = await res.json(); if (d.contents) return d.contents; }
                else return await res.text();
            } catch { continue; }
        }
        throw new Error("Không thể kết nối qua Proxy. Kiểm tra mạng hoặc thử link khác.");
    },

    async autoAnalyzeGF() {
        let url = document.getElementById('gfUrlInput').value.trim();
        if (!url) { alert("Vui lòng nhập link Form!"); return; }
        if (url.includes("forms.gle"))
            { alert("⚠️ Link rút gọn (forms.gle) không được hỗ trợ.\nMở link đó trên trình duyệt, rồi copy URL dài dán vào đây."); return; }

        const btn = document.getElementById('btnAnalyze');
        const orig = btn.innerHTML;
        btn.innerHTML = '<svg class="spin-anim w-4 h-4 mr-2 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Đang phân tích...';
        btn.disabled = true;
        document.getElementById('gfUrlInput').disabled = true;

        try {
            const html = await this.fetchWithProxy(url);
            const match = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[[\s\S]*?\])\s*;/);
            if (!match) throw new Error("Không tìm thấy dữ liệu. Đảm bảo Form ở chế độ 'Công khai'.");
            const jsonData = JSON.parse(match[1]);
            if (!jsonData[1]||!jsonData[1][1]) throw new Error("Cấu trúc Form không hợp lệ.");

            const fields = [];
            jsonData[1][1].forEach(q => {
                if (!Array.isArray(q)||!q[4]||!q[4][0]) return;
                try {
                    const id       = q[4][0][0].toString();
                    const title    = (q[1]||'').toString().trim();
                    const required = q[4][0][2] == 1;
                    const tl       = title.toLowerCase();
                    let type = "Tự nhập";
                    if (tl.includes('điểm')||tl.includes('score')||tl.includes('tổng')) type = "Tự động";
                    else if (tl.includes('vi phạm')||tl.includes('gian lận')||tl.includes('báo cáo')) type = "Báo cáo vi phạm";
                    fields.push({id, title, type, required});
                } catch {}
            });

            if (fields.length === 0) throw new Error("Không tìm thấy trường nhập liệu nào.");

            let formUrl = url.split('?')[0].replace('/edit','').replace('/viewform','').replace(/\/+$/,'') + '/formResponse';
            this.data.gf_config.fields = fields;
            this.data.gf_config.url    = formUrl;
            document.getElementById('gfUrlInput').value = formUrl;
            this.renderGFFields();

            btn.innerHTML = '✅ Thành công!';
            setTimeout(() => {
                btn.innerHTML = orig; btn.disabled = false;
                document.getElementById('gfUrlInput').disabled = false;
                lucide.createIcons();
            }, 2000);
        } catch(e) {
            alert("❌ Lỗi: " + e.message);
            btn.innerHTML = orig; btn.disabled = false;
            document.getElementById('gfUrlInput').disabled = false;
        }
    },

    renderGFFields() {
        document.getElementById('gfFieldsTable').innerHTML =
            this.data.gf_config.fields.map((f,i) => `
            <tr class="hover:bg-blue-50/40 transition-colors">
                <td class="p-2 sm:p-3">
                    <input type="text" class="form-input py-1.5 text-xs font-semibold"
                        value="${(f.title||'').replace(/"/g,'&quot;')}"
                        onchange="app.data.gf_config.fields[${i}].title=this.value">
                </td>
                <td class="p-2 sm:p-3 hidden sm:table-cell">
                    <input type="text" class="form-input py-1.5 bg-slate-100 text-slate-500 font-mono text-[11px] cursor-not-allowed"
                        value="entry.${f.id}" readonly>
                </td>
                <td class="p-2 sm:p-3">
                    <select class="form-select py-1.5 text-xs font-semibold"
                        onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option value="Tự nhập"         ${f.type==="Tự nhập"?"selected":""}>✍️ Học sinh tự điền</option>
                        <option value="Tự động"         ${f.type==="Tự động"?"selected":""}>🎯 Điểm (Tự động)</option>
                        <option value="Báo cáo vi phạm" ${f.type==="Báo cáo vi phạm"?"selected":""}>🚨 Báo cáo vi phạm</option>
                    </select>
                </td>
                <td class="p-2 sm:p-3 text-center">
                    <input type="checkbox" class="w-5 h-5 accent-blue-600 cursor-pointer rounded"
                        ${f.required?"checked":""}
                        onchange="app.data.gf_config.fields[${i}].required=this.checked">
                </td>
            </tr>`).join('');
    },

    saveGFConfig() {
        this.data.gf_config.url = document.getElementById('gfUrlInput').value.trim();
        this.closeModal('gfModal');
        setTimeout(()=>alert("✅ Đã lưu cấu hình Google Form!\nBấm 'Xuất HTML' để tạo đề thi."), 250);
    },

    // ============================================================
    // PARSE CÂU HỎI
    // ============================================================
    parsePart12(lines) {
        let qL=[],oL=[],sL=[],sol=false;
        lines.forEach(l => {
            const c = l.trimEnd(), ct = c.trimStart();
            if (ct.startsWith("Lời giải:")||ct.startsWith("Giải thích:")) {
                sol=true;
                const after = ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if(after) sL.push(after);
                return;
            }
            if(sol){sL.push(c);return;}
            if(/^\s*#?\s*[A-Ea-e]\.\s/.test(c)){oL.push(c);return;}
            qL.push(c);
        });
        return [qL.join('<br>'), oL, sL.join('<br>')];
    },

    parsePart3(lines) {
        let qL=[],aL=[],sL=[],sol=false;
        lines.forEach(l => {
            const c=l.trimEnd(), ct=c.trimStart();
            if(ct.startsWith("Lời giải:")||ct.startsWith("Giải thích:")){
                sol=true;
                const after=ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if(after) sL.push(after); return;
            }
            if(sol){sL.push(c);return;}
            if(ct.startsWith("#")){const a=ct.substring(1).trim();if(a)aL.push(a);}
            else qL.push(c);
        });
        return [qL.join('<br>'), aL.join('||'), sL.join('<br>')];
    },

    parsePart4(lines) {
        let qL=[],sL=[],blanks={},state='q',cur=null;
        lines.forEach(l => {
            const c=l.trimEnd(), ct=c.trimStart();
            if(ct.startsWith("Đáp án:")){state='a';return;}
            if(ct.startsWith("Lời giải:")||ct.startsWith("Giải thích:")){
                state='s';
                const after=ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if(after)sL.push(after);return;
            }
            if(state==='s'){sL.push(c);return;}
            if(state==='q'){qL.push(c);return;}
            if(state==='a'){
                const bm=ct.match(/^=\s*\(\s*(\d+)\s*\)\s*=\s*$/);
                if(bm){cur=bm[1];blanks[cur]=[];return;}
                if(ct.startsWith("#")&&cur!==null){
                    const a=ct.substring(1).trim();if(a)blanks[cur].push(a);
                }
            }
        });
        return [qL.join('<br>'), blanks, sL.join('<br>')];
    },

    parsePart5(lines) {
        const text = lines.join('\n');
        const solM = text.match(/(?:Lời giải:|Giải thích:)([\s\S]*)/);
        const sol  = solM ? solM[1].trim().replace(/\n/g,'<br>') : '';
        const main = text.replace(/(?:Lời giải:|Giải thích:)[\s\S]*/,'');

        const headerM = main.match(/^([\s\S]*?)(?=Cột I:)/);
        const header  = headerM ? headerM[1].trim().replace(/\n/g,'<br>') : '';
        const colIM   = main.match(/Cột I:\s*([\s\S]*?)(?=Cột II:)/);
        const colIIM  = main.match(/Cột II:\s*([\s\S]*?)(?=^\s*#)/m);
        const ansM    = main.match(/^\s*#\s*(.+)/m);

        const left=[],right={},mapping={};
        (colIM?.[1]||'').split('\n').forEach(l=>{
            const m=l.trim().match(/^(\d+)[.\-)]\s*(.*)/);
            if(m) left.push({label:m[1],text:m[2].trim()});
        });
        const rightArr=[];
        (colIIM?.[1]||'').split('\n').forEach(l=>{
            const m=l.trim().match(/^([A-Za-z])[.\-)]\s*(.*)/);
            if(m) rightArr.push({label:m[1].toUpperCase(),text:m[2].trim()});
        });
        if(ansM){
            ansM[1].split(/[,;]/).forEach(p=>{
                const m=p.trim().match(/(\w+)\s*=\s*(\w+)/);
                if(m){mapping[m[1]]=mapping[m[1]]||[];mapping[m[1]].push(m[2].toUpperCase());}
            });
        }
        return [header,[left,rightArr,mapping],sol];
    },

    parsePart6(lines) {
        let qL=[],clues=[],kw='',sL=[],state='q';
        lines.forEach(l=>{
            const c=l.trimEnd(), ct=c.trimStart();
            if(ct.startsWith("Lời giải:")||ct.startsWith("Giải thích:")){
                state='s';
                const after=ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if(after)sL.push(after);return;
            }
            if(state==='s'){sL.push(c);return;}
            if(ct.startsWith("Từ khóa:")){
                const m=ct.match(/#\s*(.*)/);if(m)kw=m[1].trim().toUpperCase();return;
            }
            const cm=ct.match(/^(.*?)\s*#\s*(.+)$/);
            if(cm) clues.push({clue:cm[1].trim(),answer:cm[2].trim().toUpperCase()});
            else if(state==='q') qL.push(c);
        });
        return [qL.join('<br>'),clues,kw,sL.join('<br>')];
    },

    // ============================================================
    // XUẤT HTML
    // ============================================================
    exportHTML() {
        const hasAny = [1,2,3,4,5,6].some(p=>this.data['part'+p].length>0);
        if (!hasAny) { alert("Chưa có câu hỏi nào! Hãy nhập ít nhất 1 câu."); return; }

        const title     = document.getElementById('quizTitle').value.trim() || "BÀI TẬP TRẮC NGHIỆM";
        const creator   = document.getElementById('creatorName').value.trim();
        const themeCss  = THEMES[document.getElementById('themeSelect').value] || THEMES[Object.keys(THEMES)[0]];
        const startTime = document.getElementById('startTime').value.trim();
        const endTime   = document.getElementById('endTime').value.trim();
        const doShuffle = document.getElementById('shuffleCheck').checked;
        const examUUID  = 'EX_' + Date.now() + '_' + Math.random().toString(36).substr(2,9);

        // --- Build Google Form JS ---
        let jsBuilder=[], jsValid=[], formHtml=[], hasInputs=false;
        this.data.gf_config.fields.forEach(f => {
            const sid = 'gf_' + f.id;
            if (f.type === "Tự nhập") {
                hasInputs = true;
                formHtml.push(`<div style="margin-bottom:16px;">
                    <label style="font-weight:700;display:block;margin-bottom:6px;">${f.title}${f.required?' <span style="color:#ef4444">*</span>':''}</label>
                    <input type="text" id="${sid}" placeholder="Nhập ${f.title}..."
                        style="width:100%;padding:12px 16px;border:2px solid var(--border);border-radius:10px;font-size:1rem;outline:none;font-family:inherit;background:var(--card);color:var(--text);"
                        ${f.required?'required':''}></div>`);
                jsBuilder.push(`formData.append("entry.${f.id}",(document.getElementById("${sid}")||{value:""}).value.trim()||"Chưa điền");`);
                if (f.required) jsValid.push(`if(!(document.getElementById("${sid}")||{value:""}).value.trim())missingFields.push("${f.title.replace(/"/g,'')}");`);
            } else if (f.type === "Tự động") {
                jsBuilder.push(`formData.append("entry.${f.id}",totalScore+"/"+maxScore);`);
            } else if (f.type === "Báo cáo vi phạm") {
                jsBuilder.push(`formData.append("entry.${f.id}",violationReport);`);
            }
        });

        // --- Build Sections HTML ---
        let sectHTML = [];
        let pCnt = 1;
        const pLabels = ["Một Lựa Chọn","Nhiều Lựa Chọn","Trả Lời Ngắn","Điền Khuyết","Ghép Đôi","Ô Chữ"];

        [1,2,3,4,5,6].forEach(ptype => {
            const qs = this.data['part'+ptype];
            if (!qs.length) return;

            sectHTML.push(`<div class="section" id="sec${pCnt}" data-parttype="${ptype}">`);
            sectHTML.push(`<div class="section-title">Phần ${pCnt}: ${pLabels[ptype-1]}</div>`);
            sectHTML.push(`<div class="score-note"><i>Mỗi câu trả lời đúng được 1 điểm.</i></div>`);

            qs.forEach((rawQ, idx) => {
                const qid   = `p${pCnt}q${idx+1}`;
                const lines = rawQ.split('\n');

                if (ptype === 1 || ptype === 2) {
                    const [qtext, opts, sol] = this.parsePart12(lines);
                    const letCorrect = [];
                    const optHtml = opts.map((opt, j) => {
                        const isC  = opt.trimStart().startsWith("#");
                        const clean= isC ? opt.trimStart().substring(1).trim() : opt.trimStart();
                        const di   = clean.indexOf('.');
                        const letter = di > 0 ? clean.substring(0,di).trim().toUpperCase() : String.fromCharCode(65+j);
                        const text   = di > 0 ? clean.substring(di+1).trim() : clean;
                        if (isC) letCorrect.push(letter);
                        return `<label class="option"><input type="${ptype===1?'radio':'checkbox'}" name="${qid}" value="${letter}"><div><strong>${letter}.</strong> ${text}</div></label>`;
                    }).join('');
                    sectHTML.push(`<div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${qtext}</div>
                        ${optHtml}
                        <div class="explanation" id="${qid}_r" data-answer="${letCorrect.join(',')}" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                } else if (ptype === 3) {
                    const [qtext, ans, sol] = this.parsePart3(lines);
                    sectHTML.push(`<div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${qtext}</div>
                        <div style="margin-top:14px;">
                            <label style="font-weight:700;color:var(--primary);display:block;margin-bottom:6px;">Đáp án của bạn:</label>
                            <input type="text" id="${qid}_in"
                                style="width:100%;padding:12px 16px;border:2px solid var(--border);border-radius:10px;outline:none;font-weight:600;font-size:1rem;background:var(--card);color:var(--text);">
                        </div>
                        <div class="explanation" id="${qid}_r" data-answer="${ans}" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                } else if (ptype === 4) {
                    const [qtext, blanks, sol] = this.parsePart4(lines);
                    const filled = qtext.replace(/=\s*\((\d+)\)\s*=/g, (_, n) => {
                        const ans = (blanks[n]||[]).join('||');
                        return `<input type="text" id="${qid}_b${n}" data-answer="${ans}"
                            style="border:none;border-bottom:2.5px solid var(--primary);background:transparent;color:var(--primary);
                                   font-weight:700;text-align:center;font-size:1rem;width:80px;outline:none;padding:2px 4px;">`;
                    });
                    sectHTML.push(`<div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${filled}</div>
                        <div class="explanation" id="${qid}_r" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                } else if (ptype === 5) {
                    const [header,[leftCol,rightCol,mapping],sol] = this.parsePart5(lines);
                    const expectedPairs = [];
                    leftCol.forEach(item => {
                        if (mapping[item.label]) {
                            mapping[item.label].forEach(t => expectedPairs.push(`${item.label}=${t}`));
                        }
                    });
                    const shuffle = arr => [...arr].sort(()=>Math.random()-0.5);
                    const leftHtml  = shuffle(leftCol).map(item =>
                        `<div class="match-item match-left" data-id="${item.label}">${item.text}</div>`).join('');
                    const rightHtml = shuffle(rightCol).map(item =>
                        `<div class="match-item match-right" data-id="${item.label}">${item.text}</div>`).join('');
                    sectHTML.push(`<div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${header||'Hãy ghép đôi:'}</div>
                        <div class="match-wrap" id="mw_${qid}" data-expected="${expectedPairs.join(',')}">
                            <svg class="match-svg" id="svg_${qid}"></svg>
                            <div class="match-cols">
                                <div class="match-col">${leftHtml}</div>
                                <div class="match-col">${rightHtml}</div>
                            </div>
                        </div>
                        <button class="btn-clear-match" onclick="clearMatch('mw_${qid}')">⟲ Xóa tất cả đường nối</button>
                        <div class="match-tip"><i>💡 Bấm một ô trái → một ô phải để nối. Bấm vào đường kẻ để xóa.</i></div>
                        <div class="explanation" id="${qid}_r" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                } else if (ptype === 6) {
                    const [qtext, clues, keyword, sol] = this.parsePart6(lines);
                    const kw = keyword.replace(/\s/g,'').toUpperCase();
                    let grid = [], validKW = false;

                    if (kw && kw.length === clues.length) {
                        const offsets = [];
                        validKW = true;
                        for (let i=0; i<clues.length; i++) {
                            const ans = clues[i].answer.replace(/\s/g,'').toUpperCase();
                            const pos = ans.indexOf(kw[i]);
                            if (pos === -1) { validKW=false; break; }
                            offsets.push(pos);
                        }
                        if (validKW) {
                            const maxPad = Math.max(...offsets);
                            clues.forEach((c,i) => grid.push({
                                ans:    c.answer.replace(/\s/g,'').toUpperCase(),
                                pad:    maxPad - offsets[i],
                                keyIdx: offsets[i],
                                clue:   c.clue
                            }));
                        }
                    }
                    if (!validKW) clues.forEach(c => grid.push({ans:c.answer.replace(/\s/g,'').toUpperCase(),pad:0,keyIdx:-1,clue:c.clue}));

                    const gridHTML = grid.map((row, ri) => {
                        const ec = row.clue.replace(/"/g,'&quot;').replace(/'/g,"\\'");
                        let cells = `<span class="cw-num" onclick="showClue(${ri+1},'${ec}')" title="Xem gợi ý">${ri+1}</span>`;
                        for (let p=0;p<row.pad;p++) cells += `<span class="cw-empty"></span>`;
                        for (let ci=0;ci<row.ans.length;ci++) {
                            const isKey = ci===row.keyIdx?' cw-key':'';
                            cells += `<input type="text" maxlength="1" data-ans="${row.ans[ci]}" class="cw-cell${isKey}">`;
                        }
                        return `<div class="cw-row">${cells}</div>`;
                    }).join('');

                    sectHTML.push(`<div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${qtext||'Giải ô chữ:'}</div>
                        <div style="font-size:.85rem;color:var(--text-muted);text-align:center;margin-bottom:10px;"><i>👆 Bấm số thứ tự màu xanh để xem gợi ý</i></div>
                        <div class="cw-wrap"><div class="cw-grid">${gridHTML}</div></div>
                        <div class="explanation" id="${qid}_r" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);
                }
            });

            sectHTML.push('</div>');
            pCnt++;
        });

        // --- Student Box ---
        const studentBox = hasInputs ? `
        <div style="background:var(--card);padding:28px 32px;border-radius:16px;border:3px solid var(--primary);margin-bottom:36px;box-shadow:0 6px 0 0 var(--primary-hover);">
            <h3 style="margin:0 0 6px;color:var(--primary);font-size:1.2rem;border-bottom:2px solid var(--border);padding-bottom:10px;">📝 THÔNG TIN HỌC SINH</h3>
            <p style="color:#ef4444;font-size:.85rem;margin-bottom:18px;font-style:italic;">* Vui lòng điền đầy đủ thông tin trước khi làm bài.</p>
            ${formHtml.join('')}
        </div>` : '';

        const creatorLine = creator
            ? `<p style="text-align:center;color:var(--text-muted);font-weight:600;margin-bottom:8px;">Biên soạn: ${creator}</p>` : '';

        // ============================================================
        // TEMPLATE HTML ĐỀ THI XUẤT RA
        // ============================================================
        const OUTPUT = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
<script>window.MathJax={tex:{inlineMath:[['$','$'],['\\\\(','\\\\)']]},chtml:{scale:0.9}};<\/script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"><\/script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>
<style>
${themeCss}
*{box-sizing:border-box;}
body{font-family:var(--font-family);background:var(--bg);color:var(--text);margin:0;line-height:1.7;word-break:break-word;padding-bottom:80px;}
.navbar{position:sticky;top:0;background:var(--bg-glass);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:2px solid var(--border);padding:12px 20px;display:flex;justify-content:space-between;align-items:center;z-index:999;flex-wrap:wrap;gap:10px;}
.score-pill{background:var(--primary);color:#fff;padding:7px 22px;border-radius:999px;font-weight:800;font-size:1rem;box-shadow:0 3px 0 0 var(--primary-hover);}
.timer-pill{color:#dc2626;font-weight:800;font-size:1.05rem;background:#fee2e2;padding:7px 22px;border-radius:999px;border:2px solid #fca5a5;box-shadow:0 3px 0 0 #fca5a5;font-variant-numeric:tabular-nums;}
.container{max-width:820px;margin:40px auto;padding:0 18px;}
.section-title{font-size:1.35rem;font-weight:900;color:var(--primary);border-bottom:3px solid var(--border);padding-bottom:.5rem;margin:2rem 0 .4rem;}
.score-note{font-size:.88rem;color:var(--text-muted);margin-bottom:1.2rem;font-style:italic;}
.question{background:var(--card);padding:24px 28px;border-radius:16px;margin-bottom:24px;border:2px solid var(--border);box-shadow:0 4px 0 0 var(--border);transition:transform .2s,border-color .2s,box-shadow .2s;}
.question:hover{transform:translateY(-2px);border-color:var(--primary);box-shadow:0 4px 0 0 var(--primary);}
.q-text{font-size:1.05rem;margin-bottom:16px;line-height:1.75;}
.option{display:flex;align-items:flex-start;padding:13px 16px;margin:8px 0;border:2px solid var(--border);border-radius:12px;cursor:pointer;transition:all .2s;background:var(--card);font-weight:500;}
.option:hover{background:var(--hover-bg);border-color:var(--primary);transform:translateY(-1px);}
.option input{margin-top:3px;margin-right:14px;transform:scale(1.25);cursor:pointer;accent-color:var(--primary);}
.explanation{display:none;margin-top:16px;padding:18px;background:var(--hover-bg);border-radius:12px;border:2px dashed var(--border);font-size:.95rem;line-height:1.7;}
.btn-submit{display:block;width:100%;max-width:320px;margin:40px auto 0;background:var(--primary);color:#fff;border:none;padding:18px 28px;border-radius:14px;font-size:1.15rem;font-weight:900;cursor:pointer;box-shadow:0 6px 0 0 var(--primary-hover);transition:all .15s;text-transform:uppercase;letter-spacing:.5px;}
.btn-submit:hover{background:var(--primary-hover);transform:translateY(-2px);}
.btn-submit:active{transform:translateY(4px);box-shadow:0 2px 0 0 var(--primary-hover);}
/* MATCH */
.match-wrap{position:relative;margin-top:16px;}
.match-cols{display:flex;justify-content:space-between;gap:20px;}
.match-col{display:flex;flex-direction:column;gap:12px;width:45%;}
.match-item{background:var(--card);color:var(--text);border:2px solid var(--border);padding:12px 14px;border-radius:10px;cursor:pointer;text-align:center;font-weight:600;transition:all .2s;user-select:none;}
.match-item:hover{border-color:var(--primary);background:var(--hover-bg);}
.match-item.selected{border-color:var(--primary);background:var(--hover-bg);box-shadow:0 0 0 3px rgba(99,102,241,.2);}
.match-svg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;overflow:visible;pointer-events:none;}
.btn-clear-match{display:block;margin:12px auto 0;padding:8px 18px;background:var(--hover-bg);color:var(--text-muted);border:2px solid var(--border);border-radius:10px;cursor:pointer;font-size:.88rem;font-weight:600;transition:all .2s;position:relative;z-index:2;}
.btn-clear-match:hover{background:var(--border);color:var(--text);}
.match-tip{text-align:center;font-size:.82rem;color:var(--text-muted);margin-top:8px;}
/* CROSSWORD */
.cw-wrap{overflow-x:auto;padding:8px 0 12px;text-align:center;}
.cw-grid{display:inline-flex;flex-direction:column;gap:6px;}
.cw-row{display:flex;align-items:center;}
.cw-num{width:28px;height:28px;text-align:center;line-height:26px;font-weight:800;color:var(--primary);background:var(--hover-bg);border:2px solid var(--primary);border-radius:50%;cursor:pointer;font-size:.85rem;margin-right:10px;flex-shrink:0;transition:all .2s;}
.cw-num:hover{background:var(--primary);color:#fff;transform:scale(1.1);}
.cw-cell{width:36px;height:36px;text-align:center;text-transform:uppercase;font-size:1.1rem;font-weight:700;border:2px solid var(--border);border-radius:8px;margin-right:4px;outline:none;background:var(--card);color:var(--text);transition:border-color .2s;}
.cw-cell:focus{border-color:var(--primary);}
.cw-cell.cw-key{border-color:var(--primary);background:var(--hover-bg);border-width:3px;}
.cw-empty{width:36px;height:36px;margin-right:4px;display:inline-block;flex-shrink:0;}
/* CLUE MODAL */
.clue-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2000;align-items:center;justify-content:center;backdrop-filter:blur(3px);}
.clue-overlay.open{display:flex;}
.clue-box{background:var(--card);padding:28px;border-radius:18px;box-shadow:0 20px 40px rgba(0,0,0,.2);width:90%;max-width:420px;border:2px solid var(--border);animation:popIn .2s ease-out;}
@keyframes popIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
.clue-title{font-size:1.1rem;font-weight:800;color:var(--primary);margin:0 0 12px;}
.clue-text{font-size:1.05rem;color:var(--text);background:var(--hover-bg);border:2px solid var(--border);border-radius:10px;padding:14px 18px;margin-bottom:18px;line-height:1.6;}
.btn-close-clue{width:100%;padding:12px;background:var(--primary);color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;box-shadow:0 3px 0 0 var(--primary-hover);}
/* LOADING */
#loadOverlay{display:none;position:fixed;inset:0;background:rgba(255,255,255,.92);z-index:9999;flex-direction:column;align-items:center;justify-content:center;gap:16px;}
#loadOverlay.show{display:flex;}
.spinner{width:50px;height:50px;border:5px solid #e2e8f0;border-top-color:var(--primary);border-radius:50%;animation:spin 1s linear infinite;}
@keyframes spin{to{transform:rotate(360deg)}}
/* RESPONSIVE */
@media(max-width:600px){
    .match-cols{flex-direction:column;} .match-col{width:100%;}
    .cw-cell,.cw-empty{width:30px;height:30px;font-size:.95rem;} .cw-num{width:24px;height:24px;line-height:22px;}
    .question{padding:16px 14px;} .container{margin-top:20px;}
}
</style>
</head>
<body>

<!-- LOADING -->
<div id="loadOverlay">
  <div class="spinner"></div>
  <p style="font-weight:700;color:var(--primary);font-size:1.1rem;">Đang chấm và gửi kết quả...</p>
</div>

<!-- CLUE MODAL -->
<div class="clue-overlay" id="clueOverlay" onclick="closeClue()">
  <div class="clue-box" onclick="event.stopPropagation()">
    <p class="clue-title" id="clueTitle"></p>
    <div class="clue-text" id="clueText"></div>
    <button class="btn-close-clue" onclick="closeClue()">Đã hiểu ✓</button>
  </div>
</div>

<div id="quizApp" style="display:none;">
  <nav class="navbar">
    <div class="score-pill" id="scoreDisplay">📊 Điểm: 0</div>
    <div class="timer-pill">⏱ <span id="timerDisplay">00:00</span></div>
  </nav>
  <div class="container">
    <h1 style="text-align:center;font-size:2rem;font-weight:900;margin-bottom:6px;">${title}</h1>
    ${creatorLine}
    <div style="margin-bottom:32px;"></div>
    ${studentBox}
    ${sectHTML.join('\n')}
    <button class="btn-submit" id="submitBtn" onclick="gradeQuiz()">🎯 NỘP BÀI VÀ XEM KẾT QUẢ</button>
  </div>
</div>

<script>
// ---- CONSTANTS ----
const EXAM_ID    = "${examUUID}";
const START_STR  = "${startTime}";
const END_STR    = "${endTime}";
const GF_URL     = "${this.data.gf_config.url}";
const DO_SHUFFLE = ${doShuffle};

// ---- PARSE TIME ----
function parseVNTime(s) {
    if (!s||!s.trim()) return null;
    try {
        const parts = s.trim().split(' ');
        if (parts.length < 2) return null;
        const [hh,mm] = parts[0].split(':');
        const [dd,mo,yyyy] = parts[1].split('/');
        return new Date(+yyyy,+mo-1,+dd,+hh,+mm).getTime();
    } catch { return null; }
}
const T_START = parseVNTime(START_STR);
const T_END   = parseVNTime(END_STR);

// ---- LOCK PAGE ----
function lockPage(reason) {
    localStorage.setItem(EXAM_ID+'_locked', reason);
    document.documentElement.innerHTML =
        '<body style="margin:0;background:#111;color:#ef4444;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;user-select:none;">'
        +'<div style="font-size:4rem;margin-bottom:10px;">⛔</div>'
        +'<h1 style="font-size:2rem;margin-bottom:10px;">TRUY CẬP BỊ TỪ CHỐI</h1>'
        +'<p style="color:#fff;max-width:500px;line-height:1.7;">'+reason+'</p>'
        +'<p style="color:#666;margin-top:24px;font-size:.9rem;">Vui lòng liên hệ giáo viên.</p>'
        +'</body>';
}

// ---- INIT CHECK ----
(function checkInit() {
    const now = Date.now();
    if (localStorage.getItem(EXAM_ID+'_submitted')) {
        lockPage('Bạn đã hoàn thành và nộp bài thi này rồi. Không thể làm lại.');
        return;
    }
    if (localStorage.getItem(EXAM_ID+'_locked')) {
        lockPage('Bài thi đã bị khóa.<br>Lý do: '+localStorage.getItem(EXAM_ID+'_locked'));
        return;
    }
    if (T_END && now >= T_END) {
        lockPage('Kỳ thi ĐÃ KẾT THÚC!<br>Thời gian đóng: '+END_STR);
        return;
    }
    if (T_START && now < T_START) {
        document.documentElement.innerHTML =
            '<body style="margin:0;background:#f8fafc;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;color:#0f172a;">'
            +'<h2 style="color:#2563eb;margin-bottom:8px;">⏳ KỲ THI CHƯA BẮT ĐẦU</h2>'
            +'<p>Thời gian mở đề: <strong>'+START_STR+'</strong></p>'
            +'<div id="cd" style="font-size:3rem;font-weight:900;color:#dc2626;background:#fee2e2;padding:12px 32px;border-radius:14px;border:2px solid #fca5a5;margin-top:20px;font-variant-numeric:tabular-nums;">--:--:--</div>'
            +'<p style="color:#64748b;margin-top:16px;font-style:italic;">Trang sẽ tự động hiển thị bài khi đến giờ.</p>'
            +'</body>';
        const cd = document.getElementById('cd');
        const iv = setInterval(()=>{
            const rem = Math.floor((T_START-Date.now())/1000);
            if(rem<=0){clearInterval(iv);location.reload();return;}
            const h=String(Math.floor(rem/3600)).padStart(2,'0');
            const m=String(Math.floor((rem%3600)/60)).padStart(2,'0');
            const s=String(rem%60).padStart(2,'0');
            cd.textContent=(h!=='00'?h+':':'')+m+':'+s;
        },1000);
        throw 0;
    }
    document.getElementById('quizApp').style.display='block';
})();

// ---- TIMER ----
let timerSec=0, timerIv=null, forceSubmit=false;
function startTimer(){
    if(timerIv) return;
    timerIv=setInterval(()=>{
        timerSec++;
        if(T_END){
            const rem=Math.floor((T_END-Date.now())/1000);
            if(rem<=0){
                clearInterval(timerIv);
                if(document.getElementById('submitBtn')&&document.getElementById('submitBtn').style.display!=='none'){
                    alert('⏰ Đã hết giờ! Hệ thống tự động nộp bài.');
                    forceSubmit=true; gradeQuiz();
                }
                return;
            }
            const h=String(Math.floor(rem/3600)).padStart(2,'0');
            const m=String(Math.floor((rem%3600)/60)).padStart(2,'0');
            const s=String(rem%60).padStart(2,'0');
            document.getElementById('timerDisplay').textContent=(h!=='00'?h+':':'')+m+':'+s;
            if(rem<=300){
                document.querySelector('.timer-pill').style.background='#ef4444';
                document.querySelector('.timer-pill').style.color='#fff';
            }
        } else {
            const h=Math.floor(timerSec/3600),m=Math.floor((timerSec%3600)/60),s=timerSec%60;
            document.getElementById('timerDisplay').textContent=
                (h?String(h).padStart(2,'0')+':':'')+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
        }
    },1000);
}
window.addEventListener('load',startTimer);

// ---- ANTI-CHEAT ----
let violationCount=0, violationDetails=[], handlingV=false;
function handleViolation(reason){
    if(handlingV||localStorage.getItem(EXAM_ID+'_submitted')) return;
    handlingV=true; setTimeout(()=>handlingV=false,2000);
    const sb=document.getElementById('submitBtn');
    if(!sb||sb.style.display==='none') return;
    violationCount++; violationDetails.push(reason);
    if(violationCount>=3){
        alert('⛔ VI PHẠM 3 LẦN! Hệ thống tự động nộp bài và khóa vĩnh viễn.');
        forceSubmit=true;
        gradeQuiz().then(()=>lockPage('Hủy bài do vi phạm quy chế nhiều lần.'));
    } else {
        alert('⚠️ CẢNH BÁO ('+violationCount+'/3)\\nLý do: '+reason+'\\nHệ thống đã ghi nhận!');
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    document.body.style.userSelect='none';
    document.addEventListener('contextmenu',e=>e.preventDefault());
    ['copy','cut','paste'].forEach(ev=>document.addEventListener(ev,e=>{e.preventDefault();alert('⚠️ Sao chép bị vô hiệu hóa trong lúc thi!');}));
    document.addEventListener('keydown',e=>{
        if(e.key==='F12'||e.key==='PrintScreen'
            ||(e.ctrlKey&&e.shiftKey&&['I','J','C'].includes(e.key.toUpperCase()))
            ||(e.ctrlKey&&['U','P','S'].includes(e.key.toUpperCase()))){
            e.preventDefault(); handleViolation('Phím tắt bị cấm ('+e.key+')');
        }
    });
    document.addEventListener('visibilitychange',()=>{if(document.hidden)handleViolation('Chuyển Tab/Thu nhỏ trình duyệt');});
    window.addEventListener('blur',()=>{if(!(document.activeElement instanceof HTMLIFrameElement))handleViolation('Rời cửa sổ thi');});
});

// ---- SHUFFLE ----
document.addEventListener('DOMContentLoaded',()=>{
    if(!DO_SHUFFLE) return;
    const sh=arr=>{for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;};
    document.querySelectorAll('.section').forEach(sec=>{
        const qs=[...sec.querySelectorAll('.question')];
        if(qs.length>1){
            sh(qs).forEach((q,i)=>{
                sec.appendChild(q);
                const st=q.querySelector('.q-text strong');
                if(st&&st.textContent.startsWith('Câu'))st.textContent='Câu '+(i+1)+':';
            });
        }
    });
    document.querySelectorAll('.section[data-parttype="1"],.section[data-parttype="2"]').forEach(sec=>{
        sec.querySelectorAll('.question').forEach(q=>{
            const expl=q.querySelector('.explanation');
            if(!expl)return;
            const oldC=(expl.getAttribute('data-answer')||'').split(',');
            const opts=[...q.querySelectorAll('.option')];
            if(opts.length<2)return;
            sh(opts);
            const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const newC=[];
            opts.forEach((opt,i)=>{
                const inp=opt.querySelector('input');
                const oldV=inp.value;
                inp.value=letters[i];
                const st=opt.querySelector('strong');
                if(st)st.textContent=letters[i]+'.';
                if(oldC.includes(oldV))newC.push(letters[i]);
                expl.before(opt);
            });
            expl.setAttribute('data-answer',newC.sort().join(','));
        });
    });
});

// ---- MATCH (PART 5) ----
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.match-wrap').forEach(wrap=>{
        wrap.matchLinks=[];
        let sel=null;
        wrap.querySelectorAll('.match-item').forEach(item=>{
            item.addEventListener('click',()=>{
                if(wrap.classList.contains('graded'))return;
                const isL=item.classList.contains('match-left');
                if(sel===item){item.classList.remove('selected');sel=null;return;}
                if(sel){
                    const selIsL=sel.classList.contains('match-left');
                    if(selIsL===isL){sel.classList.remove('selected');sel=item;item.classList.add('selected');}
                    else{
                        const lId=isL?item.dataset.id:sel.dataset.id;
                        const rId=isL?sel.dataset.id:item.dataset.id;
                        const ex=wrap.matchLinks.findIndex(k=>k.l===lId&&k.r===rId);
                        if(ex!==-1)wrap.matchLinks.splice(ex,1);
                        else wrap.matchLinks.push({l:lId,r:rId});
                        sel.classList.remove('selected');sel=null;
                        drawLines(wrap);
                    }
                } else {sel=item;item.classList.add('selected');}
            });
        });
    });
    window.addEventListener('resize',()=>document.querySelectorAll('.match-wrap').forEach(w=>drawLines(w)));
});

function drawLines(wrap){
    const svg=wrap.querySelector('.match-svg');
    svg.innerHTML='';
    const wr=wrap.getBoundingClientRect();
    const primary=getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()||'#2563eb';
    (wrap.matchLinks||[]).forEach((link,li)=>{
        const lEl=wrap.querySelector('.match-left[data-id="'+link.l+'"]');
        const rEl=wrap.querySelector('.match-right[data-id="'+link.r+'"]');
        if(!lEl||!rEl)return;
        const lr=lEl.getBoundingClientRect(),rr=rEl.getBoundingClientRect();
        const x1=lr.right-wr.left,y1=lr.top+lr.height/2-wr.top;
        const x2=rr.left-wr.left, y2=rr.top+rr.height/2-wr.top;
        const cx=(x1+x2)/2;
        const g=document.createElementNS('http://www.w3.org/2000/svg','g');
        g.style.cursor='pointer';
        const path=document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d','M'+x1+' '+y1+' C'+cx+' '+y1+' '+cx+' '+y2+' '+x2+' '+y2);
        path.setAttribute('stroke',primary);path.setAttribute('stroke-width','2.5');
        path.setAttribute('fill','none');path.setAttribute('stroke-linecap','round');
        const hit=document.createElementNS('http://www.w3.org/2000/svg','path');
        hit.setAttribute('d','M'+x1+' '+y1+' C'+cx+' '+y1+' '+cx+' '+y2+' '+x2+' '+y2);
        hit.setAttribute('stroke','transparent');hit.setAttribute('stroke-width','16');hit.setAttribute('fill','none');
        g.addEventListener('mouseenter',()=>path.setAttribute('stroke','#ef4444'));
        g.addEventListener('mouseleave',()=>path.setAttribute('stroke',primary));
        g.addEventListener('click',()=>{wrap.matchLinks.splice(li,1);drawLines(wrap);});
        g.appendChild(path);g.appendChild(hit);svg.appendChild(g);
    });
}
function clearMatch(wrapId){
    const w=document.getElementById(wrapId);
    if(w&&!w.classList.contains('graded')){w.matchLinks=[];drawLines(w);}
}

// ---- CROSSWORD ----
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.cw-cell').forEach(cell=>{
        cell.addEventListener('input',function(){
            this.value=this.value.toUpperCase();
            if(this.value){const n=this.nextElementSibling;if(n&&n.classList.contains('cw-cell'))n.focus();}
        });
        cell.addEventListener('keydown',function(e){
            if(e.key==='Backspace'&&!this.value){const p=this.previousElementSibling;if(p&&p.classList.contains('cw-cell')){p.focus();p.value='';}}
            else if(e.key==='ArrowRight'){const n=this.nextElementSibling;if(n&&n.classList.contains('cw-cell'))n.focus();}
            else if(e.key==='ArrowLeft'){const p=this.previousElementSibling;if(p&&p.classList.contains('cw-cell'))p.focus();}
        });
    });
});
function showClue(num,text){
    document.getElementById('clueTitle').textContent='Gợi ý hàng ngang số '+num;
    document.getElementById('clueText').textContent=text;
    document.getElementById('clueOverlay').classList.add('open');
}
function closeClue(){document.getElementById('clueOverlay').classList.remove('open');}

// ---- GRADE QUIZ ----
async function gradeQuiz(){
    const missingFields=[];
    ${jsValid.join('\n    ')}
    if(missingFields.length>0&&!forceSubmit){alert('Vui lòng điền đầy đủ: '+missingFields.join(', '));return;}
    if(!forceSubmit&&!confirm('Bạn có chắc chắn muốn nộp bài?\\n(Sau khi nộp sẽ không thể làm lại)'))return;

    if(timerIv)clearInterval(timerIv);
    document.getElementById('loadOverlay').classList.add('show');
    await new Promise(r=>setTimeout(r,500));

    let totalScore=0,maxScore=0;
    const violationReport=violationCount>0?'Vi phạm '+violationCount+' lần: '+violationDetails.join(' | '):'Không vi phạm';

    document.querySelectorAll('.section').forEach(sec=>{
        const pt=parseInt(sec.dataset.parttype);
        sec.querySelectorAll('.question').forEach(q=>{
            maxScore++;
            let qScore=0,feedback='';
            const expl=q.querySelector('.explanation');

            if(pt===1||pt===2){
                const sel=[...q.querySelectorAll('input:checked')].map(i=>i.value).sort().join(',');
                const cor=(expl.getAttribute('data-answer')||'').split(',').filter(Boolean).sort().join(',');
                if(sel&&sel===cor){
                    qScore=1;
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ ĐÚNG!</span>';
                    q.style.borderColor='#059669';q.style.boxShadow='0 4px 0 0 #059669';
                } else {
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ SAI. Đáp án đúng: <strong>'+cor+'</strong></span>';
                    q.style.borderColor='#dc2626';q.style.boxShadow='0 4px 0 0 #dc2626';
                }
            }
            else if(pt===3){
                const inp=document.getElementById(q.id+'_in');
                const sel=inp?inp.value.trim().toLowerCase():'';
                const cors=(expl.getAttribute('data-answer')||'').split('||').map(c=>c.trim().toLowerCase()).filter(Boolean);
                if(sel&&cors.includes(sel)){
                    qScore=1;
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ ĐÚNG!</span>';
                    q.style.borderColor='#059669';q.style.boxShadow='0 4px 0 0 #059669';
                    if(inp){inp.style.borderColor='#059669';}
                } else {
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ SAI. Đáp án đúng: <strong>'+(expl.getAttribute('data-answer')||'').split('||').join(' hoặc ')+'</strong></span>';
                    q.style.borderColor='#dc2626';q.style.boxShadow='0 4px 0 0 #dc2626';
                    if(inp){inp.style.borderColor='#dc2626';}
                }
                if(inp)inp.disabled=true;
            }
            else if(pt===4){
                const blanks=q.querySelectorAll('input[data-answer]');
                let allOk=blanks.length>0;
                let answerList='';
                blanks.forEach((b,bi)=>{
                    const sel=b.value.trim().toLowerCase();
                    const cors=(b.getAttribute('data-answer')||'').split('||').map(c=>c.trim().toLowerCase()).filter(Boolean);
                    const ok=sel&&cors.includes(sel);
                    if(!ok)allOk=false;
                    b.style.borderBottomColor=ok?'#059669':'#dc2626';
                    b.style.color=ok?'#059669':'#dc2626';
                    b.disabled=true;
                    answerList+='Ô '+(bi+1)+': '+(b.getAttribute('data-answer')||'').split('||')[0]+' | ';
                });
                if(allOk){
                    qScore=1;
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ Điền đúng tất cả ô trống!</span>';
                    q.style.borderColor='#059669';q.style.boxShadow='0 4px 0 0 #059669';
                } else {
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ Có ô điền sai/chưa điền.<br><small>Đáp án: '+answerList.replace(/ \| $/,'')+'</small></span>';
                    q.style.borderColor='#dc2626';q.style.boxShadow='0 4px 0 0 #dc2626';
                }
            }
            else if(pt===5){
                const wrap=q.querySelector('.match-wrap');
                if(wrap){
                    wrap.classList.add('graded');
                    const expected=(wrap.getAttribute('data-expected')||'').split(',').filter(Boolean).sort();
                    const actual=(wrap.matchLinks||[]).map(k=>k.l+'='+k.r).sort();
                    const ok=JSON.stringify(expected)===JSON.stringify(actual)&&expected.length>0;
                    if(ok){
                        qScore=1;
                        feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ Nối đúng tất cả!</span>';
                        q.style.borderColor='#059669';q.style.boxShadow='0 4px 0 0 #059669';
                    } else {
                        feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ Nối sai/thiếu.<br><small>Đáp án: '+expected.map(p=>'<strong>'+p.replace('=','→')+'</strong>').join(', ')+'</small></span>';
                        q.style.borderColor='#dc2626';q.style.boxShadow='0 4px 0 0 #dc2626';
                    }
                    // Tô màu đường kẻ
                    drawLines(wrap);
                    wrap.querySelectorAll('.match-svg path.vis').forEach(p=>{
                        const g=p.parentElement;
                        const lId=g.dataset.l,rId=g.dataset.r;
                        p.setAttribute('stroke',expected.includes(lId+'='+rId)?'#059669':'#dc2626');
                    });
                    const clearBtn=q.querySelector('.btn-clear-match');
                    if(clearBtn)clearBtn.style.display='none';
                }
            }
            else if(pt===6){
                const rows=q.querySelectorAll('.cw-row');
                let correctRows=0;
                rows.forEach(row=>{
                    const cells=[...row.querySelectorAll('.cw-cell')];
                    if(cells.length===0)return;
                    const rowOk=cells.every(c=>c.value.toUpperCase()===(c.getAttribute('data-ans')||'').toUpperCase());
                    cells.forEach(c=>{
                        const cok=c.value.toUpperCase()===(c.getAttribute('data-ans')||'').toUpperCase();
                        c.style.borderColor=cok?'#059669':'#dc2626';
                        c.style.color=cok?'#059669':'#dc2626';
                        if(!c.value&&c.getAttribute('data-ans')){c.value=c.getAttribute('data-ans');c.style.opacity='.5';}
                        c.disabled=true;
                    });
                    if(rowOk)correctRows++;
                });
                if(correctRows===rows.length&&rows.length>0){
                    qScore=1;
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ Giải đúng '+correctRows+'/'+rows.length+' hàng!</span>';
                    q.style.borderColor='#059669';q.style.boxShadow='0 4px 0 0 #059669';
                } else {
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ Đúng '+correctRows+'/'+rows.length+' hàng.</span>';
                    q.style.borderColor='#dc2626';q.style.boxShadow='0 4px 0 0 #dc2626';
                }
                q.querySelectorAll('.cw-num').forEach(n=>{n.onclick=null;n.style.cursor='default';n.style.opacity='.5';});
            }

            totalScore+=qScore;
            const sol=decodeURIComponent(expl.getAttribute('data-solution')||'');
            const solClean=sol.replace(/<br\s*\\/?>/gi,'').trim();
            expl.innerHTML=feedback+(solClean?'<hr style="border:1px solid var(--border);margin:14px 0;"><strong>Lời giải chi tiết:</strong><br>'+sol:'');
            expl.style.display='block';
        });
    });

    // Gửi Google Form
    if(GF_URL){
        try{
            const formData=new FormData();
            ${jsBuilder.join('\n            ')}
            await fetch(GF_URL,{method:'POST',mode:'no-cors',body:formData});
        }catch(e){console.warn('Gửi form lỗi:',e);}
    }

    // Đánh dấu đã nộp
    localStorage.setItem(EXAM_ID+'_submitted','true');
    document.getElementById('loadOverlay').classList.remove('show');

    // Summary
    const summary=document.createElement('div');
    summary.id='resultSummary';
    summary.style.cssText='background:var(--card);padding:28px;border-radius:16px;margin-bottom:28px;border:3px solid var(--primary);box-shadow:0 6px 0 0 var(--primary-hover);animation:popIn .3s ease-out;';
    summary.innerHTML='<h2 style="margin-top:0;color:var(--primary);text-align:center;">📊 KẾT QUẢ BÀI THI</h2>'
        +'<div style="font-size:2rem;text-align:center;font-weight:900;color:var(--primary);margin-bottom:12px;">'+totalScore+' / '+maxScore+' điểm</div>'
        +'<p style="text-align:center;color:var(--text-muted);font-size:.95rem;">'+
        (violationCount>0?'⚠️ '+violationReport:'✅ Không vi phạm quy chế')+'</p>';

    const container=document.querySelector('.container');
    const h1=container.querySelector('h1');
    if(h1)h1.insertAdjacentElement('afterend',summary);

    document.getElementById('scoreDisplay').textContent='📊 Điểm: '+totalScore+' / '+maxScore;
    document.getElementById('submitBtn').style.display='none';
    document.querySelectorAll('input:not([data-ans])').forEach(i=>i.disabled=true);

    if(window.MathJax)MathJax.typesetPromise();
    window.scrollTo({top:0,behavior:'smooth'});
}
<\/script>
</body>
</html>`;

        const blob = new Blob([OUTPUT], {type:"text/html"});
        const a    = document.createElement("a");
        a.href     = URL.createObjectURL(blob);
        a.download = title.replace(/\s+/g,'_') + ".html";
        a.click();
        URL.revokeObjectURL(a.href);
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
