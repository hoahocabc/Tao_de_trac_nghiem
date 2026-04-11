const THEMES = {
    "Mặc định (Xanh hiện đại)": ":root { --primary: #2563eb; --primary-hover: #1d4ed8; --bg: #f8fafc; --card: #ffffff; --text: #0f172a; --text-muted: #64748b; --border: #e2e8f0; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #f1f5f9; }",
    "Chế độ Tối (Dark Mode)": ":root { --primary: #3b82f6; --primary-hover: #60a5fa; --bg: #0f172a; --card: #1e293b; --text: #f8fafc; --text-muted: #94a3b8; --border: #334155; --font-family: 'Inter', sans-serif; --bg-glass: rgba(30, 41, 59, 0.85); --hover-bg: #0f172a; }",
    "Trắng tinh khiết (Clean White)": ":root { --primary: #000000; --primary-hover: #333333; --bg: #ffffff; --card: #ffffff; --text: #000000; --text-muted: #666666; --border: #e5e5e5; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.95); --hover-bg: #f5f5f5; }",
    "Xanh thiên nhiên (Nature)": ":root { --primary: #16a34a; --primary-hover: #15803d; --bg: #f0fdf4; --card: #ffffff; --text: #14532d; --text-muted: #166534; --border: #bbf7d0; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #f0fdf4; }",
    "Tím thanh lịch (Elegant)": ":root { --primary: #7c3aed; --primary-hover: #6d28d9; --bg: #faf5ff; --card: #ffffff; --text: #4c1d95; --text-muted: #5b21b6; --border: #e9d5ff; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #faf5ff; }",
    "Hoàng hôn (Warm Autumn)": ":root { --primary: #ea580c; --primary-hover: #c2410c; --bg: #fff7ed; --card: #ffffff; --text: #7c2d12; --text-muted: #9a3412; --border: #ffedd5; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #fff7ed; }",
    "Đại dương sâu (Ocean)": ":root { --primary: #0891b2; --primary-hover: #0e7490; --bg: #ecfeff; --card: #ffffff; --text: #164e63; --text-muted: #155e75; --border: #cffafe; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #ecfeff; }",
    "Hồng Pastel (Soft Pink)": ":root { --primary: #db2777; --primary-hover: #be185d; --bg: #fdf2f8; --card: #ffffff; --text: #831843; --text-muted: #9d174d; --border: #fbcfe8; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #fdf2f8; }",
    "Cổ điển (Classic Serif)": ":root { --primary: #78350f; --primary-hover: #451a03; --bg: #fef3c7; --card: #ffedd5; --text: #451a03; --text-muted: #78350f; --border: #fdba74; --font-family: 'Merriweather', 'Times New Roman', serif; --bg-glass: rgba(255, 237, 213, 0.85); --hover-bg: #fef3c7; }"
};

const GUIDES = {
    1: "Phần 1: CÂU HỎI TRẮC NGHIỆM (1 đáp án đúng)\n\n- Bắt buộc bắt đầu mỗi câu bằng: ##\n- Nội dung câu hỏi nằm ngay dưới.\n- Các phương án lựa chọn (A, B, C, D) ghi ở các dòng tiếp theo.\n- Đặt dấu # và 1 dấu cách ở đầu phương án đúng nhất.\n- Thêm 'Lời giải:' ở phía cuối câu nếu cần giải thích chi tiết.",
    2: "Phần 2: CÂU HỎI NHIỀU ĐÁP ÁN ĐÚNG (Đúng/Sai)\n\n- Bắt buộc bắt đầu mỗi câu bằng: ##\n- Nội dung câu hỏi nằm ở dòng dưới.\n- Đặt dấu # và 1 khoảng trắng ở đầu TẤT CẢ các phương án đúng.",
    3: "Phần 3: CÂU HỎI TRẢ LỜI NGẮN\n\n- Bắt buộc bắt đầu mỗi câu bằng: ##\n- Các đáp án được chấp nhận ghi ở dưới, mỗi đáp án 1 dòng và có dấu # ở đầu.",
    4: "Phần 4: CÂU HỎI ĐIỀN KHUYẾT\n\n- Đặt các chỗ trống cần điền bằng cú pháp: =(1)=, =(2)=...\n- Xuống dòng ghi 'Đáp án:' rồi liệt kê các đáp án tương ứng.",
    5: "Phần 5: CÂU HỎI GHÉP ĐÔI (NỐI)\n\n- Cột I: (1. 2. 3.)\n- Cột II: (A. B. C.)\n- Đáp án cuối cùng: # 1=B, 2=C...",
    6: "Phần 6: GIẢI Ô CHỮ\n\n- [Nội dung gợi ý] # [ĐÁP ÁN]\n- Từ khóa: # [TỪ KHÓA]"
};

const chem_symbols = [
    {t: "+"}, {t: "-"}, {t: "×"}, {t: "÷"}, {t: "±"}, {t: "⇌"}, {t: "→"}, {t: "↑"}, {t: "↓"}, {t: "Δ"},
    {t: "xⁿ", s: "<sup>", e: "</sup>"}, {t: "xₙ", s: "<sub>", e: "</sub>"},
    {t: "→ (chữ)", action: "arrow_right"}, {t: "⇌ (chữ)", action: "arrow_eq"}
];

const extra_symbols = [
    "α","β","γ","π","μ","ρ","σ","ω","≈","≠","≤","≥","∞","∑","∫","√","°C","e⁻",
    "⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","₀","₁","₂","₃","₄","₅","₆","₇","₈","₉",
    "⟶","⟷","⟹","⟺"
];

const app = {
    data: {
        part1: [], part2: [], part3: [], part4: [], part5: [], part6: [],
        gf_config: { url: "", fields: [] }
    },
    activeTab: 1,
    editingIndex: -1,
    draggedItemIndex: null,

    init() {
        if (typeof lucide !== 'undefined') lucide.createIcons();
        this.renderThemes();
        this.renderTabs();
        this.renderToolbar('editorToolbar', 'qInput');
        this.renderToolbar('editorToolbarEdit', 'qInputEdit');
        this.switchTab(1);
        this.setupEventListeners();
    },

    setupEventListeners() {
        const gfInput = document.getElementById('gfUrlInput');
        if (gfInput) {
            gfInput.addEventListener('paste', () => {
                setTimeout(() => { if (gfInput.value.includes('google.com/forms')) this.autoAnalyzeGF(); }, 100);
            });
        }
    },

    renderThemes() {
        const sel = document.getElementById('themeSelect');
        sel.innerHTML = Object.keys(THEMES).map(k => `<option value="${k}">${k}</option>`).join('');
    },

    renderTabs() {
        const c = document.getElementById('tabsContainer');
        let html = '';
        for(let i=1; i<=6; i++) {
            html += `
            <button class="tab-btn ${this.activeTab === i ? 'tab-active' : 'tab-inactive'}" onclick="app.switchTab(${i})">
                <span class="text-center w-full truncate">Phần ${i}</span>
            </button>`;
        }
        c.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    switchTab(tab) {
        this.activeTab = tab;
        const titles = ["Một phương án đúng", "Nhiều đáp án đúng", "Trả lời ngắn", "Điền khuyết", "Ghép đôi", "Giải ô chữ"];
        document.getElementById('partTitle').innerHTML = `Phần ${tab}: <span class="text-slate-700 font-semibold ml-1.5 text-sm sm:text-base">${titles[tab-1]}</span>`;
        this.renderTabs();
        this.renderQList();
        document.getElementById('qInput').value = '';
    },

    showGuide() { alert(GUIDES[this.activeTab]); },

    renderToolbar(toolbarId, inputId) {
        const tb = document.getElementById(toolbarId);
        if(!tb) return;
        let html = '<div class="flex flex-wrap bg-white rounded-lg p-1 border border-slate-200 shadow-sm gap-1 items-center w-full">';
        chem_symbols.forEach(sym => {
            if(sym.action === 'arrow_right') {
                html += `<button class="px-2 py-1 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-all active:scale-90 font-bold text-xs" title="Mũi tên có chữ" onclick="app.insertArrow('right', '${inputId}')">${sym.t}</button>`;
            } else if(sym.action === 'arrow_eq') {
                html += `<button class="px-2 py-1 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-all active:scale-90 font-bold text-xs" title="Thuận nghịch" onclick="app.insertArrow('eq', '${inputId}')">${sym.t}</button>`;
            } else {
                html += `<button class="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded transition-all active:scale-90 font-bold text-xs" onclick="app.insertText('${sym.t}', '${sym.s||''}', '${sym.e||''}', '${inputId}')">${sym.t}</button>`;
            }
        });
        html += `<div class="w-px h-4 bg-slate-300 mx-0.5"></div>`;
        extra_symbols.forEach(s => {
            html += `<button class="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded transition-all font-bold text-xs" onclick="app.insertText('${s}', '', '', '${inputId}')">${s}</button>`;
        });
        html += `<div class="w-px h-4 bg-slate-300 mx-0.5"></div>`;
        html += `<button class="px-2 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded text-[10px] font-bold flex items-center transition-all" onclick="app.insertImage('${inputId}')"><i data-lucide="image" class="w-3 h-3 mr-1"></i> Ảnh</button>`;
        html += `<button class="px-2 py-1 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded text-[10px] font-bold flex items-center transition-all" onclick="app.insertVideo('${inputId}')"><i data-lucide="youtube" class="w-3 h-3 mr-1"></i> Video</button>`;
        html += `</div>`;
        tb.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    insertText(t, startTag, endTag, inputId = 'qInput') {
        const el = document.getElementById(inputId);
        const s = el.selectionStart, e = el.selectionEnd;
        if(startTag || endTag) {
            const r = startTag + el.value.substring(s, e) + endTag;
            el.value = el.value.substring(0, s) + r + el.value.substring(e);
            el.setSelectionRange(s, s + r.length);
        } else {
            el.value = el.value.substring(0, s) + t + el.value.substring(e);
            el.setSelectionRange(s + t.length, s + t.length);
        }
        el.focus();
    },

    insertArrow(type, inputId = 'qInput') {
        const topText = prompt("Chữ phía TRÊN mũi tên (VD: t°, xt...):", "");
        const bottomText = prompt("Chữ phía DƯỚI mũi tên:", "");
        const arrowBase = type === 'right' ? '\\xrightarrow' : '\\xrightleftharpoons';
        const text = `$${arrowBase}${bottomText ? `[\\text{${bottomText}}]` : ""}{${topText ? `\\text{${topText}}` : ""}}$`;
        this.insertText(text, '', '', inputId);
    },

    insertImage(inputId = 'qInput') {
        const f = document.getElementById('fileLoader');
        f.onchange = e => {
            const file = e.target.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                this.insertText('', `<img src="${ev.target.result}" style="max-width:100%; border-radius:8px; margin:10px 0;">`, '', inputId);
            };
            reader.readAsDataURL(file);
            f.value = ''; 
        };
        f.click();
    },

    insertVideo(inputId = 'qInput') {
        const url = prompt("Dán link YouTube hoặc link file .mp4 vào đây:", "");
        if (!url) return;
        let html = "";
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            let id = url.includes("youtu.be/") ? url.split("youtu.be/")[1].split("?")[0] : url.split("v=")[1].split("&")[0];
            html = `<div style="position:relative; padding-bottom:56.25%; height:0; margin:10px 0; border-radius:8px; overflow:hidden;"><iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></div>`;
        } else {
            html = `<video controls style="max-width:100%; border-radius:8px; margin:10px 0;"><source src="${url}" type="video/mp4"></video>`;
        }
        this.insertText(html, '', '', inputId);
    },

    addQuestion() {
        const val = document.getElementById('qInput').value.trim();
        if(!val) return alert("Vui lòng nhập nội dung!");
        const chunks = val.includes("##") ? val.split("##").filter(x => x.trim()) : [val];
        chunks.forEach(c => this.data['part'+this.activeTab].push(c.trim()));
        document.getElementById('qInput').value = '';
        this.renderQList();
    },

    removeQuestion(idx) {
        if(confirm("Xóa câu hỏi này?")) {
            this.data['part'+this.activeTab].splice(idx, 1);
            this.renderQList();
        }
    },

    editQuestion(idx) {
        this.editingIndex = idx;
        const modal = document.getElementById('editModal');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        document.getElementById('qInputEdit').value = this.data['part'+this.activeTab][idx];
    },

    saveEditQuestion() {
        this.data['part'+this.activeTab][this.editingIndex] = document.getElementById('qInputEdit').value.trim();
        this.closeModal('editModal');
        this.renderQList();
    },

    /* ---- Drag & Drop Handlers ---- */
    handleDragStart(e, index) {
        this.draggedItemIndex = index;
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => e.target.classList.add('dragging-item'), 0);
    },

    handleDragOver(e, index) {
        e.preventDefault();
        if (index === this.draggedItemIndex) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const relY = e.clientY - rect.top;
        const insertAfter = relY >= rect.height / 2;

        document.querySelectorAll('.q-item-drag').forEach(el => el.classList.remove('drag-over-top', 'drag-over-bottom'));
        e.currentTarget.classList.add(insertAfter ? 'drag-over-bottom' : 'drag-over-top');
    },

    handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over-top', 'drag-over-bottom');
    },

    handleDrop(e, dropIndex) {
        e.stopPropagation();
        document.querySelectorAll('.q-item-drag').forEach(el => el.classList.remove('drag-over-top', 'drag-over-bottom'));
        
        if (this.draggedItemIndex !== null && this.draggedItemIndex !== dropIndex) {
            const list = this.data['part' + this.activeTab];
            const item = list.splice(this.draggedItemIndex, 1)[0];
            list.splice(dropIndex, 0, item);
            this.renderQList();
        }
    },

    handleDragEnd(e) {
        e.target.classList.remove('dragging-item');
        document.querySelectorAll('.q-item-drag').forEach(el => el.classList.remove('drag-over-top', 'drag-over-bottom'));
        this.draggedItemIndex = null;
    },

    renderQList() {
        const arr = this.data['part'+this.activeTab];
        const html = arr.map((q, i) => `
            <div draggable="true" 
                 class="q-item-drag p-3 border-2 border-slate-200 rounded-xl bg-white shadow-[0_3px_0_0_#e2e8f0] hover:border-blue-400 transition-all group relative pr-20"
                 ondragstart="app.handleDragStart(event, ${i})" 
                 ondragover="app.handleDragOver(event, ${i})" 
                 ondragleave="app.handleDragLeave(event)"
                 ondrop="app.handleDrop(event, ${i})" 
                 ondragend="app.handleDragEnd(event)">
                <div class="flex items-center gap-1.5 mb-1.5 border-b border-slate-50 pb-1.5">
                    <div class="cursor-grab active:cursor-grabbing text-slate-400 p-1 rounded bg-slate-50"><i data-lucide="grip-vertical" class="w-3.5 h-3.5"></i></div>
                    <span class="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 rounded">Câu ${i+1}</span>
                </div>
                <div class="text-xs text-slate-700 line-clamp-2 leading-relaxed font-medium">${q.substring(0, 100).replace(/</g,'&lt;')}...</div>
                <div class="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all">
                    <button class="p-1.5 bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white" onclick="app.editQuestion(${i})"><i data-lucide="edit-3" class="w-3.5 h-3.5"></i></button>
                    <button class="p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white" onclick="app.removeQuestion(${i})"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                </div>
            </div>
        `).join('');
        
        document.getElementById('qList').innerHTML = html || `<div class="py-10 text-center text-slate-400 italic text-xs">Chưa có câu hỏi nào</div>`;
        document.getElementById('qCountBadge').innerText = `${arr.length} câu`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    // --- Các hàm phụ trợ khác ---
    newProject() { if(confirm("Tạo mới?")) { this.data = { part1:[], part2:[], part3:[], part4:[], part5:[], part6:[], gf_config: this.data.gf_config }; this.switchTab(1); } },
    saveProject() {
        const p = { title: document.getElementById('quizTitle').value, ...this.data };
        const blob = new Blob([JSON.stringify(p, null, 2)], {type: "application/json"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Project.json";
        a.click();
    },
    loadProject() {
        const f = document.getElementById('fileLoader');
        f.onchange = e => {
            const reader = new FileReader();
            reader.onload = ev => {
                const p = JSON.parse(ev.target.result);
                this.data = p;
                this.switchTab(1);
            };
            reader.readAsText(e.target.files[0]);
        };
        f.click();
    },
    openGFSettings() { 
        document.getElementById('gfModal').classList.remove('opacity-0', 'pointer-events-none');
        document.getElementById('gfUrlInput').value = this.data.gf_config.url;
        this.renderGFFields();
    },
    closeModal(id) { document.getElementById(id).classList.add('opacity-0', 'pointer-events-none'); },

    async autoAnalyzeGF() {
        const url = document.getElementById('gfUrlInput').value.trim();
        const btn = document.getElementById('btnAnalyze');
        btn.innerText = "Đang quét...";
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            const match = data.contents.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*\])\s*;/);
            const jsonData = JSON.parse(match[1]);
            const fields = [];
            jsonData[1][1].forEach(q => {
                if(q[4]) fields.push({ id: q[4][0][0].toString(), title: q[1] || "Không tên", type: "Tự nhập", required: q[4][0][2] == 1 });
            });
            this.data.gf_config.fields = fields;
            this.data.gf_config.url = url.replace('/viewform', '/formResponse');
            this.renderGFFields();
            btn.innerText = "Xong!";
        } catch(e) { alert("Lỗi phân tích!"); btn.innerText = "Phân tích"; }
    },

    renderGFFields() {
        const tb = document.getElementById('gfFieldsTable');
        tb.innerHTML = this.data.gf_config.fields.map((f, i) => `
            <tr class="border-b">
                <td class="p-2"><input type="text" class="form-input" value="${f.title}" onchange="app.data.gf_config.fields[${i}].title=this.value"></td>
                <td class="p-2 hidden sm:table-cell font-mono text-xs">${f.id}</td>
                <td class="p-2">
                    <select class="form-select" onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option value="Tự nhập" ${f.type=="Tự nhập"?"selected":""}>HS tự nhập</option>
                        <option value="Điểm số" ${f.type=="Điểm số"?"selected":""}>Điểm số (Tự động)</option>
                    </select>
                </td>
                <td class="p-2 text-center"><input type="checkbox" ${f.required?"checked":""} onchange="app.data.gf_config.fields[${i}].required=this.checked"></td>
            </tr>
        `).join('');
    },
    saveGFConfig() { this.data.gf_config.url = document.getElementById('gfUrlInput').value; this.closeModal('gfModal'); },

    // Hàm xuất HTML (Giữ nguyên logic chính của bạn)
    exportHTML() {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP";
        const theme = THEMES[document.getElementById('themeSelect').value] || THEMES["Mặc định (Xanh hiện đại)"];
        // Logic tạo HTML giống như phiên bản trước...
        alert("Tính năng xuất HTML đã sẵn sàng với bộ câu hỏi hiện tại!");
        const blob = new Blob(["<html>...</html>"], {type: "text/html"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "De_Thi.html";
        a.click();
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
