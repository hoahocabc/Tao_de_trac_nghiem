// ===================================================================
// THEMES - 10 giao diện từ dự án Python gốc
// ===================================================================
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

// ===================================================================
// HƯỚNG DẪN NHẬP - đầy đủ 6 loại
// ===================================================================
const GUIDES = {
    1: `📌 PHẦN 1 – TRẮC NGHIỆM MỘT LỰA CHỌN
Mỗi câu bắt đầu bằng ##. Đáp án ĐÚNG có dấu # ở đầu dòng.

Ví dụ:
##
Nguyên tử có 17 proton và 18 neutron. Khối lượng nguyên tử tương đối là?
# A. 35
B. 17
C. 18
D. 34
Lời giải:
A = Z + N = 17 + 18 = 35`,

    2: `📌 PHẦN 2 – TRẮC NGHIỆM NHIỀU LỰA CHỌN
Nhiều đáp án đúng, mỗi đáp án đúng thêm dấu # phía trước.

Ví dụ:
##
Hạt nào có trong hạt nhân nguyên tử?
# A. Proton
B. Electron
# C. Neutron
D. Photon
Lời giải:
Hạt nhân gồm proton và neutron.`,

    3: `📌 PHẦN 3 – TRẢ LỜI NGẮN
Mỗi câu bắt đầu bằng ##. Các đáp án chấp nhận được viết sau dấu #.

Ví dụ:
##
Nguyên tử có 17 proton và 18 neutron. Tính khối lượng nguyên tử tương đối.
# 35
# 35u
Lời giải:
A = 17 + 18 = 35`,

    4: `📌 PHẦN 4 – ĐIỀN KHUYẾT
Vị trí trống dùng ký hiệu =(n)= (n là số thứ tự).
Đáp án viết sau dòng "Đáp án:" theo từng ô.

Ví dụ:
##
Hình vuông có =(1)= cạnh bằng nhau, các góc bằng =(2)= độ.
Đáp án:
=(1)=
# 4
# bốn
=(2)=
# 90
# chín mươi
Lời giải:
Đây là định nghĩa hình vuông.`,

    5: `📌 PHẦN 5 – GHÉP ĐÔI (NỐI)
Cột I và Cột II. Đáp án nối ghi sau dấu # dạng: 1=A, 2=B,...

Ví dụ:
##
Ghép động vật với số chân:
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

    6: `📌 PHẦN 6 – Ô CHỮ (CROSSWORD)
Mỗi g��i ý hàng ngang: "Nội dung gợi ý # ĐÁP ÁN"
Từ khóa hàng dọc (nếu có): "Từ khóa: # TUKHOA"
⚠ Độ dài từ khóa PHẢI bằng số lượng gợi ý hàng ngang.

Ví dụ:
##
Chủ đề: Hạt cơ bản
1. Hạt mang điện dương trong hạt nhân # PROTON
2. Hạt không mang điện trong hạt nhân # NEUTRON
3. Hạt mang điện âm # ELECTRON
Từ khóa: # ONE
Lời giải:
Hạt nhân gồm proton và neutron.`
};

// ===================================================================
// KÝ HIỆU HOÁ HỌC / TOÁN
// ===================================================================
const CHEM_SYMBOLS = [
    {t:"+"},{t:"-"},{t:"×"},{t:"÷"},{t:"±"},{t:"⇌"},{t:"→"},{t:"←"},{t:"↑"},{t:"↓"},{t:"≈"},{t:"≠"},{t:"≤"},{t:"≥"},
    {t:"xⁿ", s:"<sup>", e:"</sup>"},{t:"xₙ", s:"<sub>", e:"</sub>"}
];
const MORE_SYMBOLS = [
    {t:"⟹"},{t:"⟸"},{t:"∑"},{t:"π"},{t:"α"},{t:"β"},{t:"γ"},{t:"Δ"},{t:"μ"},{t:"σ"},
    {t:"ρ"},{t:"η"},{t:"ν"},{t:"τ"},{t:"φ"},{t:"ω"},{t:"∞"},
    {t:"⁰"},{t:"¹"},{t:"²"},{t:"³"},{t:"⁴"},{t:"⁵"},{t:"⁶"},{t:"⁷"},{t:"⁸"},{t:"⁹"},
    {t:"°C"},{t:"e⁻"}
];

// ===================================================================
// APP OBJECT
// ===================================================================
const app = {
    data: {
        part1:[], part2:[], part3:[], part4:[], part5:[], part6:[],
        gf_config: { url:"", fields:[] }
    },
    activeTab: 1,
    _moreSymOpen: false,

    // ----- INIT -----
    init() {
        lucide.createIcons();
        this.renderThemes();
        this.renderTabs();
        this.renderToolbar();
        this.switchTab(1);
        this.setupEventListeners();
    },

    setupEventListeners() {
        // Auto-phân tích khi paste link form
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
            const btn = document.getElementById('moreSymBtn');
            if (popup && !popup.contains(e.target) && btn && !btn.contains(e.target)) {
                popup.classList.add('hidden');
                this._moreSymOpen = false;
            }
        });
    },

    // ----- THEMES -----
    renderThemes() {
        const sel = document.getElementById('themeSelect');
        sel.innerHTML = Object.keys(THEMES).map(k => `<option value="${k}">${k}</option>`).join('');
    },

    // ----- TABS -----
    renderTabs() {
        const c = document.getElementById('tabsContainer');
        const tabs = [
            {icon:'circle-dot',    text:'1 lựa chọn'},
            {icon:'check-square',  text:'Nhiều lựa chọn'},
            {icon:'pen-line',      text:'Trả lời ngắn'},
            {icon:'form-input',    text:'Điền khuyết'},
            {icon:'arrow-right-left', text:'Ghép đôi'},
            {icon:'grid-3x3',      text:'Ô chữ'}
        ];
        c.innerHTML = tabs.map((t,i) => `
            <button class="tab-btn ${this.activeTab===i+1?'tab-active':'tab-inactive'}" onclick="app.switchTab(${i+1})">
                <i data-lucide="${t.icon}" class="w-5 h-5 mb-1 ${this.activeTab===i+1?'text-blue-600':'text-slate-400'}"></i>
                <span class="text-[10px] sm:text-xs truncate w-full text-center">Phần ${i+1}</span>
                ${this.data['part'+(i+1)].length>0?`<span class="bg-blue-100 text-blue-700 text-[9px] font-black px-1.5 rounded-full mt-0.5">${this.data['part'+(i+1)].length}</span>`:''}
            </button>
        `).join('');
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

    // ----- GUIDE -----
    showGuide() {
        document.getElementById('guideText').textContent = GUIDES[this.activeTab];
        const modal = document.getElementById('guideModal');
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0','pointer-events-none');
        content.classList.remove('scale-95','translate-y-4');
        content.classList.add('scale-100','translate-y-0');
    },

    // ----- TOOLBAR -----
    renderToolbar() {
        const tb = document.getElementById('editorToolbar');
        // Nhóm ký hiệu thường
        let html = `<div class="flex flex-wrap gap-1 bg-white rounded-lg p-1 border-2 border-slate-200 shadow-[0_2px_0_0_#e2e8f0]">`;
        CHEM_SYMBOLS.forEach(sym => {
            html += `<button type="button" title="${sym.t}" class="px-2 py-1 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90 font-bold text-sm"
                onclick="app.insertText('${sym.t}','${sym.s||''}','${sym.e||''}')">${sym.t}</button>`;
        });
        html += `</div>`;
        // Nút ký hiệu khác
        html += `<button id="moreSymBtn" type="button" class="px-3 py-1.5 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700 border-2 border-slate-200 shadow-[0_2px_0_0_#e2e8f0] rounded-lg text-xs font-bold transition-all whitespace-nowrap active:scale-90"
            onclick="app.toggleMoreSymbols()">Ký hiệu ▾</button>`;
        // Popup ký hiệu
        html += `<div id="moreSymPopup" class="hidden absolute top-full left-0 mt-1 z-50 bg-white border-2 border-slate-200 rounded-xl shadow-xl p-2 flex flex-wrap gap-1 max-w-xs">`;
        MORE_SYMBOLS.forEach(sym => {
            html += `<button type="button" class="px-2 py-1 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all font-bold text-sm active:scale-90"
                onclick="app.insertText('${sym.t}','','');document.getElementById('moreSymPopup').classList.add('hidden')">${sym.t}</button>`;
        });
        html += `</div>`;
        // Ngăn cách
        html += `<div class="hidden sm:block w-px h-7 bg-slate-300 mx-1 self-center"></div>`;
        // Bold / Italic
        html += `<div class="flex gap-1 bg-white rounded-lg p-1 border-2 border-slate-200 shadow-[0_2px_0_0_#e2e8f0]">
            <button type="button" title="In đậm" class="px-2.5 py-1 font-black text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90" onclick="app.insertText('','<b>','</b>')">B</button>
            <button type="button" title="In nghiêng" class="px-2.5 py-1 font-black italic text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90" onclick="app.insertText('','<i>','</i>')">I</button>
            <button type="button" title="Chỉ số trên" class="px-2 py-1 text-xs font-black text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90" onclick="app.insertText('','<sup>','</sup>')">x²</button>
            <button type="button" title="Chỉ số dưới" class="px-2 py-1 text-xs font-black text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90" onclick="app.insertText('','<sub>','</sub>')">x₂</button>
        </div>`;
        // Toán LaTeX
        html += `<button type="button" title="Công thức LaTeX" class="px-3 py-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 border-2 border-purple-200 shadow-[0_2px_0_0_#e9d5ff] rounded-lg text-xs font-bold whitespace-nowrap transition-all active:scale-90"
            onclick="app.insertText('','$','$')">∑ LaTeX</button>`;
        // Chèn ảnh
        html += `<button type="button" title="Chèn ảnh (Base64)" class="ml-auto px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-2 border-indigo-200 shadow-[0_2px_0_0_#c7d2fe] rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all active:translate-y-0.5"
            onclick="app.insertImage()"><i data-lucide="image" class="w-3.5 h-3.5"></i> Chèn ảnh</button>`;

        // Bọc trong div relative để popup định vị đúng
        const wrapper = document.createElement('div');
        wrapper.className = 'relative flex flex-wrap gap-1.5 items-center w-full';
        wrapper.innerHTML = html;
        tb.innerHTML = '';
        tb.appendChild(wrapper);
        lucide.createIcons();
    },

    toggleMoreSymbols() {
        const popup = document.getElementById('moreSymPopup');
        this._moreSymOpen = !this._moreSymOpen;
        popup.classList.toggle('hidden', !this._moreSymOpen);
    },

    // ----- INSERT TEXT -----
    insertText(char, startTag, endTag) {
        const el = document.getElementById('qInput');
        const s = el.selectionStart, e = el.selectionEnd;
        let newText, newCursor;
        if (startTag || endTag) {
            const selected = el.value.substring(s, e);
            newText = startTag + selected + endTag;
            el.value = el.value.substring(0,s) + newText + el.value.substring(e);
            newCursor = selected ? s + newText.length : s + startTag.length;
        } else {
            el.value = el.value.substring(0,s) + char + el.value.substring(e);
            newCursor = s + char.length;
        }
        el.setSelectionRange(newCursor, newCursor);
        el.focus();
    },

    // ----- INSERT IMAGE -----
    insertImage() {
        const f = document.getElementById('fileLoader');
        f.accept = 'image/*';
        f.onchange = e => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                this.insertText('', `<img src="${ev.target.result}" style="max-width:100%;border-radius:8px;border:2px solid #e2e8f0;margin:8px 0;">`, '');
            };
            reader.readAsDataURL(file);
            f.value = '';
        };
        f.click();
    },

    // ----- THÊM CÂU HỎI -----
    addQuestion() {
        const val = document.getElementById('qInput').value.trim();
        if (!val) return alert("Vui lòng nhập nội dung câu hỏi!");
        const key = 'part' + this.activeTab;
        const chunks = val.includes("##")
            ? val.split("##").map(x => x.trim()).filter(x => x.length > 0)
            : [val];
        let added = 0;
        chunks.forEach(c => {
            if (c.split('\n').filter(l => l.trim()).length >= 1) {
                this.data[key].push(c);
                added++;
            }
        });
        if (added === 0) return alert("Câu hỏi quá ngắn hoặc không hợp lệ!");
        document.getElementById('qInput').value = '';
        this.renderQList();
        this.renderTabs();
    },

    // ----- XÓA CÂU HỎI -----
    removeQuestion(idx) {
        if (confirm("Xóa câu hỏi này?")) {
            this.data['part'+this.activeTab].splice(idx, 1);
            this.renderQList();
            this.renderTabs();
        }
    },

    // ----- SỬA CÂU HỎI -----
    editQuestion(idx) {
        const key = 'part' + this.activeTab;
        const val = prompt("Sửa câu hỏi:", this.data[key][idx]);
        if (val !== null && val.trim()) {
            this.data[key][idx] = val.trim();
            this.renderQList();
        }
    },

    // ----- RENDER DANH SÁCH -----
    renderQList() {
        const arr = this.data['part'+this.activeTab];
        const container = document.getElementById('qList');
        if (arr.length === 0) {
            container.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 py-12">
                    <div class="bg-slate-100 p-5 rounded-2xl shadow-inner"><i data-lucide="inbox" class="w-12 h-12 text-slate-300"></i></div>
                    <p class="text-sm font-bold text-slate-400">Chưa có câu hỏi nào</p>
                    <p class="text-xs text-slate-300 text-center max-w-[200px]">Nhập câu hỏi bên trái và bấm "Thêm vào danh sách"</p>
                </div>`;
        } else {
            container.innerHTML = arr.map((q, i) => {
                // Lấy dòng đầu tiên không rỗng để preview
                const preview = q.split('\n').find(l => l.trim()) || '(trống)';
                const safePreview = preview.replace(/</g,'&lt;').replace(/>/g,'&gt;');
                return `
                <div class="q-card p-3 border-2 border-slate-200 rounded-xl bg-white shadow-[0_3px_0_0_#e2e8f0] hover:border-blue-400 hover:shadow-[0_3px_0_0_#93c5fd] transition-all group relative">
                    <div class="flex items-center gap-2 mb-1.5">
                        <span class="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 rounded-lg shrink-0">Câu ${i+1}</span>
                        <div class="flex gap-1 ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white border border-amber-200 rounded-lg transition-all active:scale-90" onclick="app.editQuestion(${i})" title="Sửa">
                                <i data-lucide="pencil" class="w-3 h-3"></i>
                            </button>
                            <button class="p-1.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white border border-red-200 rounded-lg transition-all active:scale-90" onclick="app.removeQuestion(${i})" title="Xóa">
                                <i data-lucide="trash-2" class="w-3 h-3"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">${safePreview}</div>
                </div>`;
            }).join('');
        }
        const badge = document.getElementById('qCountBadge');
        if (badge) badge.textContent = `${arr.length} câu`;
        lucide.createIcons();
    },

    // ----- DỰ ÁN MỚI -----
    newProject() {
        if (!confirm("Tạo dự án mới sẽ xóa toàn bộ dữ liệu. Bạn chắc chắn?")) return;
        this.data = { part1:[],part2:[],part3:[],part4:[],part5:[],part6:[], gf_config:{url:"",fields:[]} };
        document.getElementById('quizTitle').value = "BÀI TẬP TRẮC NGHIỆM";
        document.getElementById('creatorName').value = "";
        document.getElementById('startTime').value = "";
        document.getElementById('endTime').value = "";
        document.getElementById('shuffleCheck').checked = false;
        this.switchTab(1);
        this.renderTabs();
    },

    // ----- LƯU DỰ ÁN -----
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
        const blob = new Blob([JSON.stringify(p, null, 2)], {type:"application/json"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = (p.title || "Project").replace(/\s+/g,'_') + ".json";
        a.click();
        URL.revokeObjectURL(a.href);
    },

    // ----- MỞ DỰ ÁN -----
    loadProject() {
        const f = document.getElementById('fileLoader');
        f.accept = '.json';
        f.onchange = e => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                try {
                    const p = JSON.parse(ev.target.result);
                    document.getElementById('quizTitle').value = p.title || '';
                    document.getElementById('creatorName').value = p.creator || '';
                    document.getElementById('startTime').value = p.start_time || '';
                    document.getElementById('endTime').value = p.end_time || '';
                    document.getElementById('shuffleCheck').checked = !!p.shuffle;
                    // Migration theme
                    const themeKeys = Object.keys(THEMES);
                    const savedTheme = p.theme || '';
                    document.getElementById('themeSelect').value =
                        themeKeys.includes(savedTheme) ? savedTheme : themeKeys[0];
                    // Migration gf_config
                    if (p.gf_config && p.gf_config.fields) {
                        p.gf_config.fields.forEach(field => {
                            if (!['Tự nhập','Tự động','Điểm đạt được (Tự động)','Báo cáo vi phạm (Tự động)'].includes(field.type)) {
                                field.type = (field.type||'').includes('tự điền') ? 'Tự nhập' : 'Tự động';
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
                } catch(err) {
                    alert("❌ File JSON không hợp lệ: " + err.message);
                }
            };
            reader.readAsText(file);
            f.value = '';
        };
        f.click();
    },

    // ----- MODAL -----
    openGFSettings() {
        const modal = document.getElementById('gfModal');
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0','pointer-events-none');
        content.classList.remove('scale-95','translate-y-4');
        content.classList.add('scale-100','translate-y-0');
        document.getElementById('gfUrlInput').value = this.data.gf_config.url;
        if (this.data.gf_config.fields.length > 0) this.renderGFFields();
        else {
            document.getElementById('gfFieldsTable').innerHTML =
                `<tr><td colspan="4" class="text-center py-10 text-slate-400 italic text-sm">Dán link Form rồi bấm "Tự động phân tích"</td></tr>`;
        }
    },

    closeModal(id) {
        const modal = document.getElementById(id);
        const content = modal.querySelector('.modal-content');
        content.classList.remove('scale-100','translate-y-0');
        content.classList.add('scale-95','translate-y-4');
        setTimeout(() => modal.classList.add('opacity-0','pointer-events-none'), 200);
    },

    // ----- FETCH FORM QUA PROXY -----
    async fetchWithProxy(url) {
        const proxies = [
            { url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, json: true },
            { url: `https://corsproxy.io/?${encodeURIComponent(url)}`, json: false },
            { url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`, json: false }
        ];
        for (const p of proxies) {
            try {
                const res = await fetch(p.url, { cache:"no-store" });
                if (!res.ok) continue;
                if (p.json) { const d = await res.json(); if (d.contents) return d.contents; }
                else return await res.text();
            } catch { continue; }
        }
        throw new Error("Không thể kết nối qua Proxy. Kiểm tra lại mạng hoặc link Form.");
    },

    // ----- TỰ ĐỘNG PHÂN TÍCH GOOGLE FORM -----
    async autoAnalyzeGF() {
        let url = document.getElementById('gfUrlInput').value.trim();
        if (!url) return alert("Vui lòng nhập link Form!");
        if (url.includes("forms.gle"))
            return alert("⚠️ Link rút gọn (forms.gle) không được hỗ trợ. Vui lòng mở link đó trên trình duyệt rồi copy URL dài dán vào đây.");

        const btn = document.getElementById('btnAnalyze');
        const origHTML = btn.innerHTML;
        btn.innerHTML = '<svg class="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Đang phân tích...';
        btn.disabled = true;
        document.getElementById('gfUrlInput').disabled = true;

        try {
            const html = await this.fetchWithProxy(url);
            const match = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[[\s\S]*?\])\s*;/);
            if (!match) throw new Error("Không tìm thấy dữ liệu. Đảm bảo Form ở chế độ 'Công khai' (không yêu cầu đăng nhập).");

            const jsonData = JSON.parse(match[1]);
            if (!jsonData[1] || !jsonData[1][1]) throw new Error("Cấu trúc Form không hợp lệ hoặc Form chưa có câu hỏi.");

            const qs = jsonData[1][1];
            const fields = [];
            qs.forEach(q => {
                if (!Array.isArray(q) || !q[4] || !q[4][0]) return;
                try {
                    const entryId = q[4][0][0].toString();
                    const title = (q[1] || "").toString().trim();
                    const required = q[4][0][2] == 1;
                    // Tự động nhận diện loại
                    const tLow = title.toLowerCase();
                    let type = "Tự nhập";
                    if (tLow.includes('điểm') || tLow.includes('score') || tLow.includes('tự động') || tLow.includes('tổng điểm')) type = "Tự động";
                    else if (tLow.includes('vi phạm') || tLow.includes('gian lận') || tLow.includes('báo cáo')) type = "Báo cáo vi phạm (Tự động)";
                    fields.push({ id: entryId, title, type, required });
                } catch { /* bỏ qua field lỗi */ }
            });

            if (fields.length === 0) throw new Error("Không tìm thấy trường nhập liệu nào trong Form.");

            // Chuẩn hóa URL
            let formUrl = url.split('?')[0];
            formUrl = formUrl.replace('/edit','').replace('/viewform','').replace(/\/+$/,'') + '/formResponse';
            this.data.gf_config.fields = fields;
            this.data.gf_config.url = formUrl;
            document.getElementById('gfUrlInput').value = formUrl;
            this.renderGFFields();

            btn.innerHTML = '<i data-lucide="check" class="w-4 h-4 mr-2"></i>Thành công!';
            btn.classList.replace('bg-emerald-500','bg-blue-500');
            lucide.createIcons();
            setTimeout(() => {
                btn.innerHTML = origHTML; btn.disabled = false;
                btn.classList.replace('bg-blue-500','bg-emerald-500');
                document.getElementById('gfUrlInput').disabled = false;
                lucide.createIcons();
            }, 2500);

        } catch(e) {
            alert("❌ Lỗi phân tích Form:\n\n" + e.message);
            btn.innerHTML = origHTML;
            btn.disabled = false;
            document.getElementById('gfUrlInput').disabled = false;
            lucide.createIcons();
        }
    },

    // ----- RENDER BẢNG FIELD GF -----
    renderGFFields() {
        const tb = document.getElementById('gfFieldsTable');
        tb.innerHTML = this.data.gf_config.fields.map((f,i) => `
            <tr class="hover:bg-blue-50/40 transition-colors">
                <td class="p-2 sm:p-3">
                    <input type="text" class="form-input py-1.5 text-xs font-semibold" value="${this._esc(f.title)}"
                        onchange="app.data.gf_config.fields[${i}].title=this.value">
                </td>
                <td class="p-2 sm:p-3 hidden sm:table-cell">
                    <input type="text" class="form-input py-1.5 bg-slate-100 text-slate-500 font-mono text-[11px] cursor-not-allowed" value="entry.${f.id}" readonly>
                </td>
                <td class="p-2 sm:p-3">
                    <select class="form-select py-1.5 text-xs font-semibold" onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option value="Tự nhập"                    ${f.type==="Tự nhập"?"selected":""}>✍️ Học sinh tự điền</option>
                        <option value="Tự động"                    ${f.type==="Tự động"?"selected":""}>🎯 Điểm đạt được (Tự động)</option>
                        <option value="Báo cáo vi phạm (Tự động)" ${f.type==="Báo cáo vi phạm (Tự động)"?"selected":""}>🚨 Báo cáo vi phạm (Tự động)</option>
                    </select>
                </td>
                <td class="p-2 sm:p-3 text-center">
                    <input type="checkbox" class="w-5 h-5 text-blue-600 rounded cursor-pointer" ${f.required?"checked":""}
                        onchange="app.data.gf_config.fields[${i}].required=this.checked">
                </td>
            </tr>
        `).join('');
    },

    saveGFConfig() {
        this.data.gf_config.url = document.getElementById('gfUrlInput').value.trim();
        this.closeModal('gfModal');
        setTimeout(() => alert("✅ Đã lưu cấu hình Google Form!\nBấm 'Xuất HTML' để tạo đề thi."), 250);
    },

    // ----- HELPERS -----
    _esc(str) { return (str||'').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); },

    // ===================================================================
    // PARSE CÂU HỎI
    // ===================================================================

    // Part 1 & 2
    parsePart12(lines) {
        let qLines=[], oLines=[], sLines=[], solMode=false;
        lines.forEach(l => {
            const cl = l.trimEnd();
            const cl2 = cl.trimStart();
            if (cl2.startsWith("Lời giải:") || cl2.startsWith("Giải thích:")) {
                solMode = true;
                const after = cl2.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if (after) sLines.push(after);
                return;
            }
            if (solMode) { sLines.push(cl); return; }
            if (/^\s*#?\s*[A-Ea-e]\.\s/.test(cl)) { oLines.push(cl); return; }
            qLines.push(cl);
        });
        return [qLines.join('<br>'), oLines, sLines.join('<br>')];
    },

    // Part 3 (trả lời ngắn)
    parsePart3(lines) {
        let qLines=[], aLines=[], sLines=[], solMode=false;
        lines.forEach(l => {
            const cl = l.trimEnd(); const cl2 = cl.trimStart();
            if (cl2.startsWith("Lời giải:") || cl2.startsWith("Giải thích:")) {
                solMode = true;
                const after = cl2.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if (after) sLines.push(after); return;
            }
            if (solMode) { sLines.push(cl); return; }
            if (cl2.startsWith("#")) {
                const ans = cl2.substring(1).trim();
                if (ans) aLines.push(ans);
            } else qLines.push(cl);
        });
        return [qLines.join('<br>'), aLines.join('||'), sLines.join('<br>')];
    },

    // Part 4 (điền khuyết)
    parsePart4(lines) {
        let qLines=[], sLines=[], blankAnswers={}, state='question', currentBlank=null;
        lines.forEach(l => {
            const cl = l.trimEnd(); const cl2 = cl.trimStart();
            if (cl2.startsWith("Đáp án:")) { state='answers'; return; }
            if (cl2.startsWith("Lời giải:") || cl2.startsWith("Giải thích:")) {
                state='solution';
                const after = cl2.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if (after) sLines.push(after); return;
            }
            if (state==='solution') { sLines.push(cl); return; }
            if (state==='question') { qLines.push(cl); return; }
            if (state==='answers') {
                const bm = cl2.match(/^=\s*\(\s*(\d+)\s*\)\s*=\s*$/);
                if (bm) { currentBlank = bm[1]; blankAnswers[currentBlank] = []; return; }
                if (cl2.startsWith("#") && currentBlank !== null) {
                    const ans = cl2.substring(1).trim();
                    if (ans) blankAnswers[currentBlank].push(ans);
                }
            }
        });
        return [qLines.join('<br>'), blankAnswers, sLines.join('<br>')];
    },

    // Part 5 (ghép đôi)
    parsePart5(lines) {
        const text = lines.join('\n');
        const solMatch = text.match(/(?:Lời giải:|Giải thích:)([\s\S]*)/);
        const solution = solMatch ? solMatch[1].trim().replace(/\n/g,'<br>') : '';
        const mainText = text.replace(/(?:Lời giải:|Giải thích:)[\s\S]*/,'');

        const headerMatch = mainText.match(/^([\s\S]*?)(?=Cột I:)/);
        const header = headerMatch ? headerMatch[1].trim().replace(/\n/g,'<br>') : '';

        const colIMatch = mainText.match(/Cột I:\s*([\s\S]*?)(?=Cột II:)/);
        const colIIMatch = mainText.match(/Cột II:\s*([\s\S]*?)(?=^\s*#)/m);
        const ansMatch = mainText.match(/^\s*#\s*(.+)/m);

        const leftCol = [], rightCol = [], mapping = {};
        (colIMatch?.[1]||'').split('\n').forEach(l => {
            const m = l.trim().match(/^(\d+)[.\-)]\s*(.*)/);
            if (m) leftCol.push({label: m[1], text: m[2].trim()});
        });
        (colIIMatch?.[1]||'').split('\n').forEach(l => {
            const m = l.trim().match(/^([A-Za-z])[.\-)]\s*(.*)/);
            if (m) rightCol.push({label: m[1].toUpperCase(), text: m[2].trim()});
        });
        if (ansMatch) {
            ansMatch[1].split(/[,;]/).forEach(pair => {
                const m = pair.trim().match(/(\w+)\s*=\s*(\w+)/);
                if (m) { mapping[m[1]] = mapping[m[1]] || []; mapping[m[1]].push(m[2].toUpperCase()); }
            });
        }
        return [header, [leftCol, rightCol, mapping], solution];
    },

    // Part 6 (ô chữ)
    parsePart6(lines) {
        let qLines=[], clues=[], keyword='', sLines=[], state='question';
        lines.forEach(l => {
            const cl = l.trimEnd(); const cl2 = cl.trimStart();
            if (cl2.startsWith("Lời giải:") || cl2.startsWith("Giải thích:")) {
                state = 'solution';
                const after = cl2.replace(/^(Lời giải:|Giải thích:)/,'').trim();
                if (after) sLines.push(after); return;
            }
            if (state==='solution') { sLines.push(cl); return; }
            if (cl2.startsWith("Từ khóa:")) {
                const m = cl2.match(/#\s*(.*)/); if (m) keyword = m[1].trim().toUpperCase(); return;
            }
            const clueMatch = cl2.match(/^(.*?)\s*#\s*(.+)$/);
            if (clueMatch) {
                clues.push({ clue: clueMatch[1].trim(), answer: clueMatch[2].trim().toUpperCase() });
            } else if (state==='question') qLines.push(cl);
        });
        return [qLines.join('<br>'), clues, keyword, sLines.join('<br>')];
    },

    // ===================================================================
    // XUẤT HTML
    // ===================================================================
    exportHTML() {
        const hasAny = [1,2,3,4,5,6].some(p => this.data['part'+p].length > 0);
        if (!hasAny) return alert("Chưa có câu hỏi nào! Hãy nhập ít nhất 1 câu.");

        const title      = document.getElementById('quizTitle').value.trim() || "BÀI TẬP TRẮC NGHIỆM";
        const creator    = document.getElementById('creatorName').value.trim();
        const themeName  = document.getElementById('themeSelect').value;
        const themeCss   = THEMES[themeName] || THEMES[Object.keys(THEMES)[0]];
        const startTime  = document.getElementById('startTime').value.trim();
        const endTime    = document.getElementById('endTime').value.trim();
        const doShuffle  = document.getElementById('shuffleCheck').checked;

        // UUID độc lập cho mỗi lần xuất
        const examUUID = 'EXAM_' + Date.now() + '_' + Math.random().toString(36).substr(2,9);

        // ---- BUILD GOOGLE FORM INPUTS ----
        let jsBuilder=[], jsValid=[], formHtml=[], hasStudentInputs=false;
        this.data.gf_config.fields.forEach(f => {
            const sId = `gf_${f.id}`;
            if (f.type === "Tự nhập") {
                hasStudentInputs = true;
                formHtml.push(`
                <div style="margin-bottom:16px;">
                    <label style="font-weight:700;display:block;margin-bottom:6px;">${f.title}${f.required?' <span style="color:#ef4444">*</span>':''}</label>
                    <input type="text" id="${sId}" placeholder="Nhập ${f.title}..."
                        style="width:100%;padding:12px 16px;border:2px solid var(--border);border-radius:10px;font-size:1rem;outline:none;font-family:inherit;background:var(--bg);color:var(--text);transition:border-color .2s;"
                        onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'"
                        ${f.required?'required':''}>
                </div>`);
                jsBuilder.push(`formData.append("entry.${f.id}", (document.getElementById("${sId}")||{value:""}).value.trim()||"Chưa điền");`);
                if (f.required) jsValid.push(`if(!(document.getElementById("${sId}")||{}).value||!document.getElementById("${sId}").value.trim()) missingFields.push("${f.title.replace(/"/g,'')}")`);
            } else if (f.type === "Tự động" || f.type === "Điểm đạt được (Tự động)") {
                jsBuilder.push(`formData.append("entry.${f.id}", totalScore + "/" + maxScore);`);
            } else if (f.type === "Báo cáo vi phạm (Tự động)") {
                jsBuilder.push(`formData.append("entry.${f.id}", violationReport);`);
            }
        });

        // ---- BUILD SECTIONS HTML ----
        let sectionsHTML = [];
        let pCounter = 1;
        const partLabels = ["Một Lựa Chọn","Nhiều Lựa Chọn","Trả Lời Ngắn","Điền Khuyết","Ghép Đôi","Ô Chữ"];

        [1,2,3,4,5,6].forEach(ptype => {
            const questions = this.data['part'+ptype];
            if (questions.length === 0) return;
            sectionsHTML.push(`<div class="section" id="sec${pCounter}" data-parttype="${ptype}">`);
            sectionsHTML.push(`<div class="section-title">Phần ${pCounter}: ${partLabels[ptype-1]}</div>`);
            sectionsHTML.push(`<div class="score-note"><i>Mỗi câu trả lời đúng được 1 điểm.</i></div>`);

            questions.forEach((rawQ, idx) => {
                const qid = `p${pCounter}q${idx+1}`;
                const lines = rawQ.split('\n');

                // ---- PART 1 & 2 ----
                if (ptype === 1 || ptype === 2) {
                    const [qtext, opts, sol] = this.parsePart12(lines);
                    const letCorrect = [];
                    const optHtml = opts.map((opt, j) => {
                        const isCorrect = opt.trimStart().startsWith("#");
                        const clean = isCorrect ? opt.trimStart().substring(1).trim() : opt.trimStart();
                        const dotIdx = clean.indexOf('.');
                        const letter = dotIdx > 0 ? clean.substring(0, dotIdx).trim().toUpperCase() : String.fromCharCode(65+j);
                        const text   = dotIdx > 0 ? clean.substring(dotIdx+1).trim() : clean;
                        if (isCorrect) letCorrect.push(letter);
                        return `<label class="option"><input type="${ptype===1?'radio':'checkbox'}" name="${qid}" value="${letter}"><div><strong>${letter}.</strong> ${text}</div></label>`;
                    }).join('');
                    sectionsHTML.push(`
                    <div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${qtext}</div>
                        ${optHtml}
                        <div class="explanation" id="${qid}_r" data-answer="${letCorrect.join(',')}" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                // ---- PART 3 ----
                } else if (ptype === 3) {
                    const [qtext, ans, sol] = this.parsePart3(lines);
                    sectionsHTML.push(`
                    <div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${qtext}</div>
                        <div class="input-wrap" style="margin-top:14px;">
                            <label style="font-weight:600;color:var(--primary);display:block;margin-bottom:6px;">Đáp án của bạn:</label>
                            <input type="text" id="${qid}_in" style="width:100%;padding:12px 16px;border:2px solid var(--border);border-radius:10px;outline:none;font-weight:600;font-size:1rem;background:var(--bg);color:var(--text);transition:border-color .2s;"
                                onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">
                        </div>
                        <div class="explanation" id="${qid}_r" data-answer="${ans}" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                // ---- PART 4 ----
                } else if (ptype === 4) {
                    const [qtext, blankAnswers, sol] = this.parsePart4(lines);
                    const qtextFilled = qtext.replace(/=\s*\((\d+)\)\s*=/g, (_, n) => {
                        const ans = (blankAnswers[n]||[]).join('||');
                        return `<input type="text" id="${qid}_b${n}" data-answer="${ans}"
                            style="border:none;border-bottom:2.5px solid var(--primary);background:transparent;color:var(--primary);font-weight:700;text-align:center;font-size:1rem;width:70px;outline:none;padding:2px 4px;transition:border-color .2s;"
                            onfocus="this.style.borderBottomColor='var(--primary-hover)'" onblur="this.style.borderBottomColor='var(--primary)'">`;
                    });
                    sectionsHTML.push(`
                    <div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${qtextFilled}</div>
                        <div class="explanation" id="${qid}_r" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                // ---- PART 5 ----
                } else if (ptype === 5) {
                    const [header, [leftCol, rightCol, mapping], sol] = this.parsePart5(lines);
                    const expectedPairs = [];
                    leftCol.forEach(item => {
                        if (mapping[item.label]) {
                            mapping[item.label].forEach(target => {
                                const rItem = rightCol.find(r => r.label===target);
                                expectedPairs.push(`${item.label}=${target}`);
                            });
                        }
                    });
                    // Shuffle copies
                    const shuffled = arr => [...arr].sort(()=>Math.random()-0.5);
                    const leftItems = shuffled(leftCol).map(item =>
                        `<div class="match-item match-left" data-id="${item.label}">${item.text}</div>`).join('');
                    const rightItems = shuffled(rightCol).map(item =>
                        `<div class="match-item match-right" data-id="${item.label}">${item.text}</div>`).join('');

                    sectionsHTML.push(`
                    <div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${header||'Hãy ghép đôi các ý tương ứng:'}</div>
                        <div class="match-wrap" id="mw_${qid}" data-expected="${expectedPairs.join(',')}">
                            <svg class="match-svg" id="svg_${qid}"></svg>
                            <div class="match-cols">
                                <div class="match-col">${leftItems}</div>
                                <div class="match-col">${rightItems}</div>
                            </div>
                        </div>
                        <button class="btn-clear-match" onclick="clearMatch('mw_${qid}')">⟲ Xóa tất cả đường nối</button>
                        <div class="match-tip"><i>💡 Bấm một ô bên trái rồi một ô bên phải để nối. Bấm đường kẻ để xóa.</i></div>
                        <div class="explanation" id="${qid}_r" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);

                // ---- PART 6 ----
                } else if (ptype === 6) {
                    const [qtext, clues, keyword, sol] = this.parsePart6(lines);
                    const kw = keyword.replace(/\s/g,'').toUpperCase();
                    let grid = [];
                    let validKW = false;

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
                            clues.forEach((c,i) => {
                                grid.push({ans:c.answer.replace(/\s/g,'').toUpperCase(), pad:maxPad-offsets[i], keyIdx:offsets[i], clue:c.clue});
                            });
                        }
                    }
                    if (!validKW) {
                        clues.forEach(c => grid.push({ans:c.answer.replace(/\s/g,'').toUpperCase(), pad:0, keyIdx:-1, clue:c.clue}));
                    }

                    const gridHTML = grid.map((row, ri) => {
                        const escapedClue = row.clue.replace(/"/g,'&quot;').replace(/'/g,"\\'");
                        let cells = `<span class="cw-num" onclick="showClue(${ri+1},'${escapedClue}')" title="Xem gợi ý">${ri+1}</span>`;
                        for (let e=0; e<row.pad; e++) cells += `<span class="cw-empty"></span>`;
                        for (let ci=0; ci<row.ans.length; ci++) {
                            const isKey = ci===row.keyIdx ? ' cw-key' : '';
                            cells += `<input type="text" maxlength="1" data-ans="${row.ans[ci]}" class="cw-cell${isKey}">`;
                        }
                        return `<div class="cw-row">${cells}</div>`;
                    }).join('');

                    sectionsHTML.push(`
                    <div class="question" id="${qid}">
                        <div class="q-text"><strong>Câu ${idx+1}:</strong><br>${qtext||'Giải ô ch�� sau:'}</div>
                        <div style="font-size:.85rem;color:var(--text-muted);text-align:center;margin-bottom:12px;"><i>👆 Bấm số thứ tự màu xanh để xem gợi ý</i></div>
                        <div class="cw-wrap"><div class="cw-grid">${gridHTML}</div></div>
                        <div class="explanation" id="${qid}_r" data-solution="${encodeURIComponent(sol)}"></div>
                    </div>`);
                }
            });

            sectionsHTML.push('</div>');
            pCounter++;
        });

        // ---- STUDENT INPUT BOX ----
        const studentBox = hasStudentInputs ? `
        <div style="background:var(--card);padding:28px 32px;border-radius:16px;border:3px solid var(--primary);margin-bottom:36px;box-shadow:0 6px 0 0 var(--primary-hover);">
            <h3 style="margin:0 0 6px;color:var(--primary);font-size:1.2rem;border-bottom:2px solid var(--border);padding-bottom:10px;">📝 THÔNG TIN HỌC SINH</h3>
            <p style="color:#ef4444;font-size:.85rem;margin-bottom:18px;font-style:italic;">* Vui lòng điền đầy đủ thông tin bắt buộc trước khi bắt đầu làm bài.</p>
            ${formHtml.join('')}
        </div>` : '';

        const creatorLine = creator
            ? `<p style="text-align:center;color:var(--text-muted);font-weight:600;margin-bottom:8px;">Biên soạn: ${creator}</p>` : '';

        // ===================================================================
        // TOÀN BỘ HTML XUẤT RA
        // ===================================================================
        const fullHTML = `<!DOCTYPE html>
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
body{font-family:var(--font-family);background:var(--bg);color:var(--text);margin:0;line-height:1.7;word-break:break-word;padding-bottom:60px;}
.navbar{position:sticky;top:0;background:var(--bg-glass);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:2px solid var(--border);padding:12px 20px;display:flex;justify-content:space-between;align-items:center;z-index:999;gap:12px;flex-wrap:wrap;}
.score-pill{background:var(--primary);color:#fff;padding:7px 20px;border-radius:999px;font-weight:800;font-size:1rem;box-shadow:0 3px 0 0 var(--primary-hover);}
.timer-pill{color:#dc2626;font-weight:800;font-size:1.05rem;background:#fee2e2;padding:7px 20px;border-radius:999px;border:2px solid #fca5a5;box-shadow:0 3px 0 0 #fca5a5;font-variant-numeric:tabular-nums;}
.container{max-width:820px;margin:36px auto;padding:0 18px;}
.section-title{font-size:1.35rem;font-weight:900;color:var(--primary);border-bottom:3px solid var(--border);padding-bottom:.5rem;margin:2rem 0 .4rem;}
.score-note{font-size:.88rem;color:var(--text-muted);margin-bottom:1rem;font-style:italic;}
.question{background:var(--card);padding:24px 28px;border-radius:16px;margin-bottom:24px;border:2px solid var(--border);box-shadow:0 4px 0 0 var(--border);transition:transform .2s,box-shadow .2s,border-color .2s;}
.question:hover{transform:translateY(-2px);border-color:var(--primary);box-shadow:0 4px 0 0 var(--primary);}
.q-text{font-size:1.05rem;margin-bottom:16px;line-height:1.7;}
.option{display:flex;align-items:flex-start;padding:13px 16px;margin:8px 0;border:2px solid var(--border);border-radius:12px;cursor:pointer;transition:all .2s;background:var(--card);font-weight:500;}
.option:hover{background:var(--hover-bg);border-color:var(--primary);transform:translateY(-1px);}
.option input{margin-top:3px;margin-right:14px;transform:scale(1.25);cursor:pointer;accent-color:var(--primary);}
.explanation{display:none;margin-top:16px;padding:18px;background:var(--hover-bg);border-radius:12px;border:2px dashed var(--border);font-size:.95rem;line-height:1.7;}
/* MATCH */
.match-wrap{position:relative;margin-top:14px;}
.match-cols{display:flex;justify-content:space-between;gap:20px;}
.match-col{display:flex;flex-direction:column;gap:12px;width:45%;}
.match-item{background:var(--card);color:var(--text);border:2px solid var(--border);padding:12px 14px;border-radius:10px;cursor:pointer;text-align:center;font-weight:600;transition:all .2s;user-select:none;font-size:.95rem;}
.match-item:hover{border-color:var(--primary);background:var(--hover-bg);}
.match-item.selected{border-color:var(--primary);background:var(--hover-bg);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 20%,transparent);}
.match-svg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;overflow:visible;pointer-events:none;}
.btn-clear-match{display:block;margin:12px auto 0;padding:8px 18px;background:var(--hover-bg);color:var(--text-muted);border:2px solid var(--border);border-radius:10px;cursor:pointer;font-size:.88rem;font-weight:600;transition:all .2s;position:relative;z-index:2;}
.btn-clear-match:hover{background:var(--border);color:var(--text);}
.match-tip{text-align:center;font-size:.82rem;color:var(--text-muted);margin-top:8px;font-style:italic;}
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
.clue-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2000;backdrop-filter:blur(3px);}
.clue-overlay.open{display:flex;align-items:center;justify-content:center;}
.clue-box{background:var(--card);padding:28px;border-radius:18px;box-shadow:0 20px 40px rgba(0,0,0,.2);width:90%;max-width:420px;border:2px solid var(--border);animation:popIn .2s ease-out;}
@keyframes popIn{from{opacity:0;transform:scale(.9) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}
.clue-title{font-size:1.15rem;font-weight:800;color:var(--primary);margin:0 0 12px;}
.clue-text{font-size:1.05rem;color:var(--text);background:var(--hover-bg);border:2px solid var(--border);border-radius:10px;padding:14px 18px;margin-bottom:18px;line-height:1.6;}
.btn-close-clue{width:100%;padding:12px;background:var(--primary);color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;transition:background .2s;box-shadow:0 3px 0 0 var(--primary-hover);}
.btn-close-clue:hover{background:var(--primary-hover);}
/* LOADING */
#loadOverlay{display:none;position:fixed;inset:0;background:rgba(255,255,255,.9);z-index:9999;flex-direction:column;align-items:center;justify-content:center;gap:16px;}
#loadOverlay.show{display:flex;}
.spinner{width:48px;height:48px;border:5px solid #e2e8f0;border-top-color:var(--primary);border-radius:50%;animation:spin 1s linear infinite;}
@keyframes spin{to{transform:rotate(360deg)}}
/* SUBMIT BTN */
.btn-submit{display:block;width:100%;max-width:320px;margin:40px auto 0;background:var(--primary);color:#fff;border:none;padding:18px 28px;border-radius:14px;font-size:1.15rem;font-weight:900;cursor:pointer;box-shadow:0 6px 0 0 var(--primary-hover);transition:all .15s;letter-spacing:.5px;text-transform:uppercase;}
.btn-submit:hover{background:var(--primary-hover);transform:translateY(-2px);}
.btn-submit:active{transform:translateY(4px);box-shadow:0 2px 0 0 var(--primary-hover);}
@media(max-width:600px){
  .match-cols{flex-direction:column;}
  .match-col{width:100%;}
  .cw-cell,.cw-empty{width:30px;height:30px;font-size:1rem;}
  .question{padding:16px 14px;}
  .navbar{padding:10px 14px;}
}
</style>
</head>
<body>

<!-- LOADING OVERLAY -->
<div id="loadOverlay">
  <div class="spinner"></div>
  <p style="font-weight:700;color:var(--primary);font-size:1.1rem;">Đang chấm bài và gửi kết quả...</p>
</div>

<!-- CLUE MODAL (Ô chữ) -->
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
    <div class="timer-pill">⏱ <span id="timerDisplay">--:--:--</span></div>
  </nav>

  <div class="container">
    <h1 style="text-align:center;font-size:2rem;font-weight:900;margin-bottom:6px;">${title}</h1>
    ${creatorLine}
    <div style="margin-bottom:32px;"></div>
    ${studentBox}
    ${sectionsHTML.join('\n')}
    <button class="btn-submit" id="submitBtn" onclick="gradeQuiz()">🎯 NỘP BÀI VÀ XEM KẾT QUẢ</button>
  </div>
</div>

<script>
// ================================================================
// CONSTANTS
// ================================================================
const EXAM_ID   = "${examUUID}";
const START_STR = "${startTime}";
const END_STR   = "${endTime}";
const GF_URL    = "${this.data.gf_config.url}";
const DO_SHUFFLE = ${doShuffle};

// ================================================================
// TIME LOCK
// ================================================================
function parseVNTime(s) {
    if (!s || !s.trim()) return null;
    try {
        const [time, date] = s.trim().split(' ');
        const [hh, mm] = time.split(':');
        const [dd, mo, yyyy] = date.split('/');
        return new Date(+yyyy, +mo-1, +dd, +hh, +mm).getTime();
    } catch { return null; }
}

const T_START = parseVNTime(START_STR);
const T_END   = parseVNTime(END_STR);

function lockPage(reason) {
    localStorage.setItem(EXAM_ID + '_locked', reason);
    document.documentElement.innerHTML =
        '<body style="margin:0;background:#111;color:#ef4444;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;user-select:none;">' +
        '<div style="font-size:3.5rem;margin-bottom:12px;">⛔</div>' +
        '<h1 style="font-size:2rem;margin-bottom:8px;">TRUY CẬP BỊ TỪ CHỐI</h1>' +
        '<p style="color:#fff;max-width:500px;line-height:1.6;">' + reason + '</p>' +
        '<p style="color:#666;margin-top:24px;font-size:.9rem;">Mọi thắc mắc vui lòng liên hệ giáo viên.</p>' +
        '</body>';
}

(function checkInit() {
    const now = Date.now();
    if (localStorage.getItem(EXAM_ID + '_submitted')) {
        lockPage('Bạn đã hoàn thành và nộp bài thi này rồi. Không thể làm lại.');
        return;
    }
    if (localStorage.getItem(EXAM_ID + '_locked')) {
        lockPage('Bài thi đã bị khóa.<br>Lý do: ' + localStorage.getItem(EXAM_ID + '_locked'));
        return;
    }
    if (T_END && now >= T_END) {
        lockPage('Kỳ thi ĐÃ KẾT THÚC!<br>Thời gian đóng: ' + END_STR);
        return;
    }
    if (T_START && now < T_START) {
        // Màn hình đếm ngược
        document.documentElement.innerHTML =
            '<body style="margin:0;background:#f8fafc;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;color:#0f172a;">' +
            '<h2 style="color:#2563eb;margin-bottom:6px;">⏳ KỲ THI CHƯA BẮT ĐẦU</h2>' +
            '<p style="margin:6px 0;">Thời gian mở đề: <strong>' + START_STR + '</strong></p>' +
            '<div id="cd" style="font-size:3rem;font-weight:900;color:#dc2626;background:#fee2e2;padding:12px 32px;border-radius:14px;border:2px solid #fca5a5;margin-top:20px;">--:--:--</div>' +
            '<p style="color:#64748b;margin-top:16px;font-style:italic;">Trang sẽ tự hiển thị bài khi đến giờ.</p>' +
            '</body>';
        const cd = document.getElementById('cd');
        const iv = setInterval(() => {
            const rem = Math.floor((T_START - Date.now())/1000);
            if (rem <= 0) { clearInterval(iv); location.reload(); return; }
            const h = String(Math.floor(rem/3600)).padStart(2,'0');
            const m = String(Math.floor((rem%3600)/60)).padStart(2,'0');
            const s = String(rem%60).padStart(2,'0');
            cd.textContent = (h!=='00'?h+':':'') + m + ':' + s;
        }, 1000);
        throw 0; // stop script
    }
    document.getElementById('quizApp').style.display = 'block';
})();

// ================================================================
// TIMER (đếm lên)
// ================================================================
let timerSec = 0, timerInterval = null;
function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timerSec++;
        const h=Math.floor(timerSec/3600), m=Math.floor((timerSec%3600)/60), s=timerSec%60;
        document.getElementById('timerDisplay').textContent =
            (h?String(h).padStart(2,'0')+':':'') + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
        // Kiểm tra hết giờ
        if (T_END && Date.now() >= T_END) {
            clearInterval(timerInterval);
            alert('⏰ Đã hết thời gian! Bài thi sẽ tự động nộp.');
            forceSubmit = true;
            gradeQuiz();
        }
    }, 1000);
}
// Tự khởi động timer khi load
window.addEventListener('load', startTimer);

// ================================================================
// ANTI-CHEAT
// ================================================================
let violationCount = 0, violationDetails = [], forceSubmit = false, handlingViolation = false;

function handleViolation(reason) {
    if (handlingViolation || localStorage.getItem(EXAM_ID+'_submitted')) return;
    handlingViolation = true;
    setTimeout(() => handlingViolation=false, 2000);
    if (!document.getElementById('submitBtn') || document.getElementById('submitBtn').style.display==='none') return;
    violationCount++;
    violationDetails.push(reason);
    if (violationCount >= 3) {
        alert('⛔ VI PHẠM QUY CHẾ 3 LẦN! Hệ thống tự động nộp bài và khóa vĩnh viễn.');
        forceSubmit = true;
        gradeQuiz().finally(() => lockPage('Hủy bài do vi phạm quy chế nhiều lần.'));
    } else {
        alert('⚠️ CẢNH BÁO VI PHẠM (' + violationCount + '/3)\\nLý do: ' + reason + '\\nHệ thống đã ghi nhận!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.userSelect = 'none';
    document.addEventListener('contextmenu', e => e.preventDefault());
    ['copy','cut','paste'].forEach(ev =>
        document.addEventListener(ev, e => { e.preventDefault(); alert('⚠️ Sao chép / dán bị vô hiệu hóa!'); })
    );
    document.addEventListener('keydown', e => {
        if (e.key==='F12' || e.key==='PrintScreen' ||
            (e.ctrlKey&&e.shiftKey&&['I','J','C'].includes(e.key.toUpperCase())) ||
            (e.ctrlKey&&['U','P','S'].includes(e.key.toUpperCase()))) {
            e.preventDefault();
            handleViolation('Sử dụng phím tắt bị cấm (' + e.key + ')');
        }
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) handleViolation('Chuyển Tab / Thu nhỏ trình duyệt');
    });
    window.addEventListener('blur', () => {
        if (!(document.activeElement instanceof HTMLIFrameElement))
            handleViolation('Rời khỏi cửa sổ thi (mở ứng dụng khác)');
    });
});

// ================================================================
// SHUFFLE (nếu bật)
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
    if (!DO_SHUFFLE) return;
    const shuffle = arr => { for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}  return arr; };

    // Xáo câu hỏi trong mỗi section
    document.querySelectorAll('.section').forEach(sec => {
        const qs = [...sec.querySelectorAll('.question')];
        if (qs.length>1) {
            shuffle(qs).forEach((q,i) => {
                sec.appendChild(q);
                const strong = q.querySelector('.q-text strong');
                if (strong) strong.textContent = 'Câu ' + (i+1) + ':';
            });
        }
    });

    // Xáo đáp án part 1 & 2
    document.querySelectorAll('.section[data-parttype="1"], .section[data-parttype="2"]').forEach(sec => {
        sec.querySelectorAll('.question').forEach(q => {
            const expl = q.querySelector('.explanation');
            if (!expl) return;
            const oldCorrect = (expl.getAttribute('data-answer')||'').split(',');
            const opts = [...q.querySelectorAll('.option')];
            if (opts.length < 2) return;
            shuffle(opts);
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const newCorrect = [];
            opts.forEach((opt, i) => {
                const inp = opt.querySelector('input');
                const oldVal = inp.value;
                const newLetter = letters[i];
                inp.value = newLetter;
                const strong = opt.querySelector('strong');
                if (strong) strong.textContent = newLetter + '.';
                if (oldCorrect.includes(oldVal)) newCorrect.push(newLetter);
                expl.before(opt);
            });
            expl.setAttribute('data-answer', newCorrect.sort().join(','));
        });
    });
});

// ================================================================
// MATCHING (PART 5) - SVG Lines
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.match-wrap').forEach(wrap => {
        wrap.matchLinks = [];
        let selected = null;

        wrap.querySelectorAll('.match-item').forEach(item => {
            item.addEventListener('click', () => {
                if (wrap.classList.contains('graded')) return;
                const isLeft = item.classList.contains('match-left');
                if (selected === item) { item.classList.remove('selected'); selected=null; return; }
                if (selected) {
                    const selIsLeft = selected.classList.contains('match-left');
                    if (selIsLeft === isLeft) {
                        selected.classList.remove('selected'); selected=item; item.classList.add('selected');
                    } else {
                        const lId = isLeft ? item.dataset.id : selected.dataset.id;
                        const rId = isLeft ? selected.dataset.id : item.dataset.id;
                        const existIdx = wrap.matchLinks.findIndex(k=>k.l===lId&&k.r===rId);
                        if (existIdx !== -1) wrap.matchLinks.splice(existIdx,1);
                        else wrap.matchLinks.push({l:lId, r:rId});
                        selected.classList.remove('selected'); selected=null;
                        drawLines(wrap);
                    }
                } else { selected=item; item.classList.add('selected'); }
            });
        });
    });
    window.addEventListener('resize', () => {
        document.querySelectorAll('.match-wrap').forEach(w => drawLines(w));
    });
});

function drawLines(wrap) {
    const svg = wrap.querySelector('.match-svg');
    svg.innerHTML = '';
    const wRect = wrap.getBoundingClientRect();
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#2563eb';
    wrap.matchLinks.forEach((link, li) => {
        const lEl = wrap.querySelector('.match-left[data-id="'+link.l+'"]');
        const rEl = wrap.querySelector('.match-right[data-id="'+link.r+'"]');
        if (!lEl || !rEl) return;
        const lr = lEl.getBoundingClientRect(), rr = rEl.getBoundingClientRect();
        const x1 = lr.right - wRect.left, y1 = lr.top + lr.height/2 - wRect.top;
        const x2 = rr.left  - wRect.left, y2 = rr.top + rr.height/2 - wRect.top;
        const cx = (x1+x2)/2;
        const g = document.createElementNS('http://www.w3.org/2000/svg','g');
        g.style.cursor='pointer';
        const path = document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d','M'+x1+' '+y1+' C'+cx+' '+y1+' '+cx+' '+y2+' '+x2+' '+y2);
        path.setAttribute('stroke', primary); path.setAttribute('stroke-width','2.5');
        path.setAttribute('fill','none'); path.setAttribute('stroke-linecap','round');
        const hit = document.createElementNS('http://www.w3.org/2000/svg','path');
        hit.setAttribute('d','M'+x1+' '+y1+' C'+cx+' '+y1+' '+cx+' '+y2+' '+x2+' '+y2);
        hit.setAttribute('stroke','transparent'); hit.setAttribute('stroke-width','14'); hit.setAttribute('fill','none');
        g.addEventListener('mouseenter', ()=>path.setAttribute('stroke','#ef4444'));
        g.addEventListener('mouseleave', ()=>path.setAttribute('stroke',primary));
        g.addEventListener('click', () => { wrap.matchLinks.splice(li,1); drawLines(wrap); });
        g.appendChild(path); g.appendChild(hit); svg.appendChild(g);
    });
}

function clearMatch(wrapId) {
    const wrap = document.getElementById(wrapId);
    if (wrap) { wrap.matchLinks=[]; drawLines(wrap); }
}

// ================================================================
// CROSSWORD
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cw-cell').forEach(cell => {
        cell.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
            if (this.value) {
                const next = this.nextElementSibling;
                if (next && next.classList.contains('cw-cell')) next.focus();
            }
        });
        cell.addEventListener('keydown', function(e) {
            if (e.key==='Backspace'&&!this.value) {
                const prev = this.previousElementSibling;
                if (prev&&prev.classList.contains('cw-cell')) { prev.focus(); prev.value=''; }
            } else if (e.key==='ArrowRight') {
                const n=this.nextElementSibling; if(n&&n.classList.contains('cw-cell')) n.focus();
            } else if (e.key==='ArrowLeft') {
                const p=this.previousElementSibling; if(p&&p.classList.contains('cw-cell')) p.focus();
            }
        });
    });
});

function showClue(num, text) {
    document.getElementById('clueTitle').textContent = 'Gợi ý hàng ngang số ' + num;
    document.getElementById('clueText').textContent = text;
    document.getElementById('clueOverlay').classList.add('open');
}
function closeClue() { document.getElementById('clueOverlay').classList.remove('open'); }

// ================================================================
// GRADE QUIZ
// ================================================================
async function gradeQuiz() {
    // Validate inputs
    const missingFields = [];
    ${jsValid.join('\n    ')}
    if (missingFields.length > 0 && !forceSubmit) {
        alert('Vui lòng điền đầy đủ: ' + missingFields.join(', '));
        return;
    }
    if (!forceSubmit && !confirm('Bạn có chắc chắn muốn nộp bài?\\n\\n(Sau khi nộp sẽ không thể làm lại)')) return;

    if (timerInterval) clearInterval(timerInterval);
    document.getElementById('loadOverlay').classList.add('show');
    await new Promise(r => setTimeout(r, 400));

    let totalScore=0, maxScore=0;

    document.querySelectorAll('.section').forEach(sec => {
        const pt = parseInt(sec.dataset.parttype);

        sec.querySelectorAll('.question').forEach(q => {
            maxScore++;
            let qScore=0, feedback='';
            const expl = q.querySelector('.explanation');

            // Part 1 & 2
            if (pt===1 || pt===2) {
                const sel = [...q.querySelectorAll('input:checked')].map(i=>i.value).sort().join(',');
                const cor = (expl.getAttribute('data-answer')||'').split(',').sort().join(',');
                if (sel && sel===cor) {
                    qScore=1;
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ ĐÚNG!</span>';
                    q.style.borderColor='#059669'; q.style.boxShadow='0 4px 0 0 #059669';
                } else {
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ SAI. Đáp án đúng: <strong>' + cor + '</strong></span>';
                    q.style.borderColor='#dc2626'; q.style.boxShadow='0 4px 0 0 #dc2626';
                }
            }
            // Part 3
            else if (pt===3) {
                const inp = q.querySelector('#'+q.id+'_in');
                const sel = inp ? inp.value.trim().toLowerCase() : '';
                const cors = (expl.getAttribute('data-answer')||'').split('||').map(c=>c.trim().toLowerCase()).filter(Boolean);
                if (sel && cors.includes(sel)) {
                    qScore=1;
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ ĐÚNG!</span>';
                    q.style.borderColor='#059669'; q.style.boxShadow='0 4px 0 0 #059669';
                } else {
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ SAI. Đáp án đúng: <strong>' +
                        (expl.getAttribute('data-answer')||'').split('||').join(' hoặc ') + '</strong></span>';
                    q.style.borderColor='#dc2626'; q.style.boxShadow='0 4px 0 0 #dc2626';
                }
            }
            // Part 4
            else if (pt===4) {
                const blanks = q.querySelectorAll('input[data-answer]');
                let allCorrect = blanks.length > 0;
                blanks.forEach(b => {
                    const sel = b.value.trim().toLowerCase();
                    const cors = (b.getAttribute('data-answer')||'').split('||').map(c=>c.trim().toLowerCase()).filter(Boolean);
                    if (!sel || !cors.includes(sel)) allCorrect=false;
                    b.style.borderBottomColor = (sel && cors.includes(sel)) ? '#059669' : '#dc2626';
                });
                if (allCorrect && blanks.length>0) {
                    qScore=1;
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ Điền đúng tất cả ô trống!</span>';
                    q.style.borderColor='#059669'; q.style.boxShadow='0 4px 0 0 #059669';
                } else {
                    const correct_list = [...blanks].map((b,i) => {
                        const cors = (b.getAttribute('data-answer')||'').split('||')[0];
                        return 'Ô ('+(i+1)+'): '+cors;
                    }).join(' | ');
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ SAI. Đáp án đúng: ' + correct_list + '</span>';
                    q.style.borderColor='#dc2626'; q.style.boxShadow='0 4px 0 0 #dc2626';
                }
            }
            // Part 5
            else if (pt===5) {
                const wrap = q.querySelector('.match-wrap');
                if (wrap) {
                    const expected = (wrap.getAttribute('data-expected')||'').split(',').filter(Boolean).sort();
                    const actual = (wrap.matchLinks||[]).map(k=>k.l+'='+k.r).sort();
                    if (JSON.stringify(expected)===JSON.stringify(actual) && expected.length>0) {
                        qScore=1;
                        feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ Ghép đúng tất cả!</span>';
                        q.style.borderColor='#059669'; q.style.boxShadow='0 4px 0 0 #059669';
                    } else {
                        feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ SAI. Đáp án đúng: ' +
                            expected.map(p=>'<strong>'+p.replace('=','→')+'</strong>').join(', ') + '</span>';
                        q.style.borderColor='#dc2626'; q.style.boxShadow='0 4px 0 0 #dc2626';
                    }
                    wrap.classList.add('graded');
                    drawLines(wrap);
                }
            }
            // Part 6
            else if (pt===6) {
                const rows = q.querySelectorAll('.cw-row');
                let rowScores=0;
                rows.forEach(row => {
                    const cells=[...row.querySelectorAll('.cw-cell')];
                    const correct = cells.every(c=>c.value.toUpperCase()===(c.getAttribute('data-ans')||'').toUpperCase());
                    cells.forEach(c=>{
                        c.style.borderColor = (c.value.toUpperCase()===(c.getAttribute('data-ans')||'').toUpperCase()) ? '#059669':'#dc2626';
                    });
                    if(correct&&cells.length>0) rowScores++;
                });
                qScore = rowScores > 0 ? 1 : 0;
                if (qScore) {
                    feedback='<span style="color:#059669;font-weight:900;font-size:1.05rem;">✓ Giải đúng ô chữ! (+' + rowScores + ' hàng)</span>';
                    q.style.borderColor='#059669'; q.style.boxShadow='0 4px 0 0 #059669';
                } else {
                    feedback='<span style="color:#dc2626;font-weight:900;font-size:1.05rem;">✗ Còn lỗi trong ô chữ.</span>';
                    q.style.borderColor='#dc2626'; q.style.boxShadow='0 4px 0 0 #dc2626';
                }
            }

            totalScore += qScore;

            // Hiển thị lời giải
            const sol = decodeURIComponent(expl.getAttribute('data-solution')||'');
            expl.innerHTML = feedback + (sol ? '<hr style="border:1px solid var(--border);margin:
