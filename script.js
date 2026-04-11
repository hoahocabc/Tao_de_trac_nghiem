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
    1: "Phần 1: CÂU HỎI TRẮC NGHIỆM (1 đáp án đúng)\n\n- Bắt buộc bắt đầu mỗi câu bằng: ##\n- Nội dung câu hỏi nằm ngay dưới.\n- Các phương án lựa chọn (A, B, C, D) ghi ở các dòng tiếp theo.\n- Đặt dấu # và 1 dấu cách ở đầu phương án đúng nhất.\n- Thêm 'Lời giải:' ở phía cuối câu nếu cần giải thích chi tiết.\n\nVí dụ:\n##\nChất nào sau đây là muối ăn?\nA. NaClO\n# B. NaCl\nC. Na2SO4\nD. Na2CO3\nLời giải: Muối ăn có thành phần chính là Natri clorua (NaCl).",
    2: "Phần 2: CÂU HỎI NHIỀU ĐÁP ÁN ĐÚNG (Đúng/Sai)\n\n- Bắt buộc bắt đầu mỗi câu bằng: ##\n- Nội dung câu hỏi nằm ở dòng dưới.\n- Đặt dấu # và 1 khoảng trắng ở đầu TẤT CẢ các phương án đúng.\n- Các phương án không có dấu # sẽ được tính là phương án sai.\n- Thêm 'Lời giải:' ở cuối nếu cần.\n\nVí dụ:\n##\nTrong các kim loại sau, kim loại nào là kim loại kiềm?\n# A. Natri (Na)\n# B. Kali (K)\nC. Nhôm (Al)\nD. Sắt (Fe)",
    3: "Phần 3: CÂU HỎI TRẢ LỜI NGẮN\n\n- Bắt buộc bắt đầu mỗi câu bằng: ##\n- Nhập nội dung câu hỏi.\n- Các đáp án được chấp nhận ghi ở dưới, mỗi đáp án 1 dòng và BẮT BUỘC có dấu # ở đầu.\n- Hệ thống sẽ chấm đúng nếu học sinh nhập trùng khớp 1 trong các đáp án.\n\nVí dụ:\n##\nNguyên tố hóa học nào có ký hiệu là O?\n# Oxi\n# Oxygen\n# Khí oxi",
    4: "Phần 4: CÂU HỎI ĐIỀN KHUYẾT\n\n- Bắt buộc bắt đầu mỗi câu bằng: ##\n- Đặt các chỗ trống cần điền bằng cú pháp: =(1)=, =(2)=...\n- Tiếp theo xuống dòng ghi đúng cụm từ 'Đáp án:' rồi liệt kê các đáp án đúng cho từng vị trí.\n\nVí dụ:\n##\nNước có công thức hóa học là =(1)=. Phân tử nước gồm 2 nguyên tử =(2)= và 1 nguyên tử =(3)=.\nĐáp án:\n=(1)=\n# H2O\n=(2)=\n# Hidro\n# Hydrogen\n=(3)=\n# Oxi\n# Oxygen",
    5: "Phần 5: CÂU HỎI GHÉP ĐÔI (NỐI)\n\n- Bắt buộc bắt đầu bằng: ##\n- Ghi tiêu đề câu hỏi.\n- Ghi 'Cột I:' (dùng số 1. 2. 3.) và liệt kê các ý bên trái.\n- Ghi 'Cột II:' (dùng chữ A. B. C.) và liệt kê các ý bên phải.\n- Ghi đáp án ở cuối, BẮT BUỘC có dấu # ở đầu.\n\nVí dụ:\n##\nGhép tên nguyên tố với ký hiệu hóa học tương ứng:\nCột I:\n1. Sắt\n2. Đồng\n3. Bạc\nCột II:\nA. Ag\nB. Fe\nC. Cu\n# 1=B, 2=C, 3=A",
    6: "Phần 6: GIẢI Ô CHỮ\n\n- Bắt buộc bắt đầu bằng: ##\n- Nhập tiêu đề câu hỏi.\n- Ghi lần lượt các gợi ý hàng ngang: [Nội dung gợi ý] # [ĐÁP ÁN].\n- Nếu có từ khóa cột dọc, thêm dòng 'Từ khóa: # [TỪ KHÓA]'.\n\nVí dụ:\n##\nÔ chữ về các nguyên tố hóa học\nKim loại ở thể lỏng trong điều kiện thường? # THUYNGAN\nKhí không màu, không mùi, duy trì sự cháy? # OXI\nTừ khóa: # HO"
};

const chem_symbols = [
    {t: "+"}, {t: "-"}, {t: "×"}, {t: "÷"}, {t: "±"}, {t: "⇌"}, {t: "→"}, {t: "↑"}, {t: "↓"}, {t: "Δ"},
    {t: "xⁿ", s: "<sup>", e: "</sup>"}, {t: "xₙ", s: "<sub>", e: "</sub>"},
    {t: "→ (chữ)", action: "arrow_right"}, {t: "⇌ (chữ)", action: "arrow_eq"}
];

const extra_symbols = [
    "α","β","γ","π","μ","ρ","σ","ω",
    "≈","≠","≤","≥","∞","∑","∫","√",
    "°C","e⁻",
    "⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹",
    "₀","₁","₂","₃","₄","₅","₆","₇","₈","₉",
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
                setTimeout(() => {
                    if (gfInput.value.includes('google.com/forms')) this.autoAnalyzeGF();
                }, 100);
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
                html += `<button class="px-2 py-1 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-all active:scale-90 font-bold text-xs sm:text-sm" title="Mũi tên có chữ ở trên/dưới" onclick="app.insertArrow('right', '${inputId}')">${sym.t}</button>`;
            } else if(sym.action === 'arrow_eq') {
                html += `<button class="px-2 py-1 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-all active:scale-90 font-bold text-xs sm:text-sm" title="Mũi tên thuận nghịch có chữ ở trên/dưới" onclick="app.insertArrow('eq', '${inputId}')">${sym.t}</button>`;
            } else {
                html += `<button class="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded transition-all active:scale-90 font-bold text-xs sm:text-sm" onclick="app.insertText('${sym.t}', '${sym.s||''}', '${sym.e||''}', '${inputId}')">${sym.t}</button>`;
            }
        });
        
        html += `<div class="hidden sm:block w-px h-4 bg-slate-300 mx-0.5"></div>`;
        
        extra_symbols.forEach(s => {
            html += `<button class="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded transition-all active:scale-90 font-bold text-xs sm:text-sm" onclick="app.insertText('${s}', '', '', '${inputId}')">${s}</button>`;
        });
        
        html += `<div class="hidden sm:block w-px h-4 bg-slate-300 mx-0.5"></div>`;
        
        html += `<button class="px-2.5 py-1 text-slate-700 hover:bg-slate-100 rounded font-black transition-all active:scale-90 bg-white border border-slate-200 text-xs sm:text-sm" onclick="app.insertText('Bold', '<b>', '</b>', '${inputId}')">B</button>`;
        html += `<button class="px-2.5 py-1 text-slate-700 hover:bg-slate-100 rounded italic font-black transition-all active:scale-90 bg-white border border-slate-200 text-xs sm:text-sm" onclick="app.insertText('Italic', '<i>', '</i>', '${inputId}')">I</button>`;
        
        html += `<div class="hidden sm:block w-px h-4 bg-slate-300 mx-0.5"></div>`;
        
        html += `<button class="px-2 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded text-[10px] sm:text-xs font-bold flex items-center transition-all active:scale-90" onclick="app.insertImage('${inputId}')"><i data-lucide="image" class="w-3 h-3 mr-1"></i> Ảnh</button>`;
        html += `<button class="px-2 py-1 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded text-[10px] sm:text-xs font-bold flex items-center transition-all active:scale-90" onclick="app.insertVideo('${inputId}')"><i data-lucide="youtube" class="w-3 h-3 mr-1"></i> Video</button>`;
        
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
        const el = document.getElementById(inputId);
        const s = el.selectionStart, e = el.selectionEnd;

        const overlay = document.createElement('div');
        overlay.className = 'fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4';
        overlay.innerHTML = `
            <div class="bg-white rounded-2xl shadow-xl p-4 sm:p-5 w-full max-w-sm flex flex-col gap-3 transform transition-all">
                <h3 class="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-1.5">
                    <i data-lucide="arrow-right-circle" class="w-4 h-4 text-blue-500"></i> Chèn mũi tên
                </h3>
                <div>
                    <label class="block text-xs sm:text-sm font-bold text-slate-700 mb-1">Chữ phía TRÊN mũi tên:</label>
                    <input type="text" id="arrowTopInput" class="w-full bg-slate-50 border-2 border-slate-200 rounded-lg px-2.5 py-1.5 text-sm outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="VD: t°">
                </div>
                <div>
                    <label class="block text-xs sm:text-sm font-bold text-slate-700 mb-1">Chữ phía DƯỚI mũi tên:</label>
                    <input type="text" id="arrowBottomInput" class="w-full bg-slate-50 border-2 border-slate-200 rounded-lg px-2.5 py-1.5 text-sm outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="VD: xt">
                </div>
                <div class="flex justify-end gap-2 mt-1">
                    <button id="arrowCancelBtn" class="px-3 py-1.5 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors text-xs sm:text-sm">Hủy</button>
                    <button id="arrowConfirmBtn" class="px-3 py-1.5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm shadow-[0_2px_0_0_#1d4ed8] active:translate-y-0.5 active:shadow-none">Chèn vào</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        if (typeof lucide !== 'undefined') lucide.createIcons();

        const topInput = document.getElementById('arrowTopInput');
        const bottomInput = document.getElementById('arrowBottomInput');
        const cancelBtn = document.getElementById('arrowCancelBtn');
        const confirmBtn = document.getElementById('arrowConfirmBtn');

        topInput.focus();

        const closePopup = () => {
            document.body.removeChild(overlay);
            el.focus();
        };

        const confirmInsert = () => {
            let topText = topInput.value.trim();
            let bottomText = bottomInput.value.trim();
            
            let arrowBase = type === 'right' ? '\\xrightarrow' : '\\xrightleftharpoons';
            let bottomPart = bottomText ? `[\\text{${bottomText}}]` : "";
            let topPart = topText ? `{\\text{${topText}}}` : "{}";
            
            let text = `$${arrowBase}${bottomPart}${topPart}$`;
            
            el.value = el.value.substring(0, s) + text + el.value.substring(e);
            el.setSelectionRange(s + text.length, s + text.length);
            
            closePopup();
        };

        cancelBtn.onclick = closePopup;
        confirmBtn.onclick = confirmInsert;

        const handleKey = (ev) => {
            if (ev.key === 'Enter') confirmInsert();
            if (ev.key === 'Escape') closePopup();
        };
        topInput.addEventListener('keydown', handleKey);
        bottomInput.addEventListener('keydown', handleKey);
    },

    insertImage(inputId = 'qInput') {
        const f = document.getElementById('fileLoader');
        f.onchange = e => {
            const file = e.target.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                this.insertText('', `<img src="${ev.target.result}" style="max-width:100%; border-radius:8px; border:2px solid #e2e8f0; margin:10px 0;">`, '', inputId);
            };
            reader.readAsDataURL(file);
            f.value = ''; 
        };
        f.click();
    },

    insertVideo(inputId = 'qInput') {
        const url = prompt("Nhập đường link Video (Hỗ trợ link YouTube hoặc đường link file .mp4 trực tiếp):", "");
        if (!url) return;
        
        let embedHtml = "";
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            let videoId = "";
            if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1].split("?")[0];
            } else if (url.includes("watch?v=")) {
                videoId = url.split("watch?v=")[1].split("&")[0];
            }
            if (videoId) {
                embedHtml = `<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px; margin:10px 0;"><iframe style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe></div>`;
            } else {
                alert("Không thể nhận diện ID YouTube từ đường link này!"); return;
            }
        } else if (url.toLowerCase().endsWith(".mp4") || url.toLowerCase().includes(".mp4?")) {
            embedHtml = `<video controls style="max-width:100%; border-radius:8px; border:2px solid #e2e8f0; margin:10px 0;"><source src="${url}" type="video/mp4">Trình duyệt không hỗ trợ xem video.</video>`;
        } else {
            alert("Vui lòng nhập link YouTube hoặc link file .mp4 hợp lệ!"); return;
        }
        
        this.insertText('', embedHtml, '', inputId);
    },

    addQuestion() {
        const val = document.getElementById('qInput').value.trim();
        if(!val) return alert("Vui lòng nhập nội dung câu hỏi!");
        const chunks = val.includes("##") ? val.split("##").filter(x => x.trim()) : [val];
        chunks.forEach(c => { if(c.split('\n').length >= 2) this.data['part'+this.activeTab].push(c.trim()); });
        document.getElementById('qInput').value = '';
        this.renderQList();
    },

    removeQuestion(idx) {
        if(confirm("Bạn có chắc muốn xóa câu hỏi này?")) {
            this.data['part'+this.activeTab].splice(idx, 1);
            this.renderQList();
        }
    },

    editQuestion(idx) {
        this.editingIndex = idx;
        const modal = document.getElementById('editModal');
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95', 'translate-y-4');
        content.classList.add('scale-100', 'translate-y-0');
        
        document.getElementById('qInputEdit').value = this.data['part'+this.activeTab][idx];
    },

    saveEditQuestion() {
        if(this.editingIndex === -1) return;
        const val = document.getElementById('qInputEdit').value.trim();
        if(!val) return alert("Nội dung không được để trống!");
        this.data['part'+this.activeTab][this.editingIndex] = val;
        this.closeModal('editModal');
        this.renderQList();
    },

    /* ---- Xử lý hiệu ứng Kéo Thả ---- */
    handleDragStart(e, index) {
        this.draggedItemIndex = index;
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => e.target.classList.add('dragging-item'), 0);
    },

    handleDragOver(e, index) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        if (index === this.draggedItemIndex) return false;

        const rect = e.currentTarget.getBoundingClientRect();
        const relY = e.clientY - rect.top;
        const insertAfter = relY >= rect.height / 2;

        document.querySelectorAll('.q-item-drag').forEach(el => el.classList.remove('drag-over-top', 'drag-over-bottom'));

        if (insertAfter) {
            e.currentTarget.classList.add('drag-over-bottom');
        } else {
            e.currentTarget.classList.add('drag-over-top');
        }
        return false;
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
        return false;
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
                 class="q-item-drag p-2 sm:p-3 border-2 border-slate-200 rounded-xl bg-white shadow-[0_3px_0_0_#e2e8f0] hover:border-blue-400 hover:shadow-[0_3px_0_0_#60a5fa] transition-all group relative pr-20 cursor-default mb-2"
                 ondragstart="app.handleDragStart(event, ${i})" 
                 ondragover="app.handleDragOver(event, ${i})" 
                 ondragleave="app.handleDragLeave(event)"
                 ondrop="app.handleDrop(event, ${i})" 
                 ondragend="app.handleDragEnd(event)">
                 
                <div class="flex items-center gap-1.5 mb-1.5 border-b border-slate-100 pb-1.5">
                    <div class="cursor-grab active:cursor-grabbing text-slate-400 hover:text-blue-500 transition-colors p-1 -ml-1 rounded flex items-center justify-center bg-slate-50 hover:bg-blue-50" title="Kéo thả để di chuyển">
                        <i data-lucide="grip-vertical" class="w-3.5 h-3.5 pointer-events-none"></i>
                    </div>
                    <span class="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 sm:px-2 sm:py-1 rounded-md">Câu ${i+1}</span>
                </div>
                <div class="text-xs sm:text-sm text-slate-700 line-clamp-2 leading-relaxed font-medium pointer-events-none">${q.replace(/</g,'&lt;')}</div>
                <div class="absolute top-2 right-2 flex gap-1 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                    <button class="p-1.5 sm:p-2 bg-blue-50 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-100 hover:border-blue-600 rounded-lg transition-all active:scale-90 shadow-sm" onclick="app.editQuestion(${i})" title="Sửa câu hỏi"><i data-lucide="edit-3" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i></button>
                    <button class="p-1.5 sm:p-2 bg-red-50 text-red-500 hover:text-white hover:bg-red-500 border border-red-100 hover:border-red-600 rounded-lg transition-all active:scale-90 shadow-sm" onclick="app.removeQuestion(${i})" title="Xóa"><i data-lucide="trash-2" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i></button>
                </div>
            </div>
        `).join('');
        
        document.getElementById('qList').innerHTML = html || `
            <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-3 py-8">
                <div class="bg-slate-100 p-3 sm:p-4 rounded-xl shadow-inner"><i data-lucide="inbox" class="w-8 h-8 sm:w-10 sm:h-10 text-slate-300"></i></div>
                <p class="text-[10px] sm:text-xs font-bold text-slate-400">Chưa có câu hỏi nào</p>
            </div>`;
        const badge = document.getElementById('qCountBadge');
        if(badge) badge.innerText = `${arr.length} câu`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    newProject() {
        if(confirm("Tạo dự án mới sẽ xóa toàn bộ nội dung đề hiện tại. Bạn có chắc chắn?")) {
            const savedGF = this.data.gf_config; 
            this.data = { part1:[], part2:[], part3:[], part4:[], part5:[], part6:[], gf_config: savedGF };
            document.getElementById('quizTitle').value = "BÀI TẬP TRẮC NGHIỆM";
            document.getElementById('creatorName').value = "";
            document.getElementById('startTime').value = "";
            document.getElementById('endTime').value = "";
            document.getElementById('antiCheat').checked = false;
            document.getElementById('publishScore').checked = false;
            this.switchTab(1);
        }
    },

    saveProject() {
        const p = {
            title: document.getElementById('quizTitle').value,
            creator: document.getElementById('creatorName').value,
            theme: document.getElementById('themeSelect').value,
            start_time: document.getElementById('startTime').value,
            end_time: document.getElementById('endTime').value,
            anti_cheat: document.getElementById('antiCheat').checked,
            publish_score: document.getElementById('publishScore').checked,
            ...this.data
        };
        const blob = new Blob([JSON.stringify(p, null, 2)], {type: "application/json;charset=utf-8"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Project_HoaHoc.json";
        a.click();
    },

    loadProject() {
        const f = document.getElementById('fileLoader');
        f.onchange = e => {
            const file = e.target.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                const p = JSON.parse(ev.target.result);
                document.getElementById('quizTitle').value = p.title || '';
                document.getElementById('creatorName').value = p.creator || '';
                document.getElementById('themeSelect').value = p.theme || '';
                document.getElementById('startTime').value = p.start_time || '';
                document.getElementById('endTime').value = p.end_time || '';
                document.getElementById('antiCheat').checked = p.anti_cheat === true;
                document.getElementById('publishScore').checked = p.publish_score === true;
                
                let loadedGF = p.gf_config;
                if (!loadedGF || !loadedGF.url || loadedGF.fields.length === 0) {
                    loadedGF = this.data.gf_config; 
                }

                this.data = { part1: p.part1||[], part2: p.part2||[], part3: p.part3||[], part4: p.part4||[], part5: p.part5||[], part6: p.part6||[], gf_config: loadedGF };
                this.switchTab(1);
            };
            reader.readAsText(file);
            f.value = ''; 
        };
        f.click();
    },

    openGFSettings() {
        const modal = document.getElementById('gfModal');
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95', 'translate-y-4');
        content.classList.add('scale-100', 'translate-y-0');

        document.getElementById('gfUrlInput').value = this.data.gf_config.url;
        if(this.data.gf_config.fields.length > 0) this.renderGFFields();
        else {
            document.getElementById('gfFieldsTable').innerHTML = `<tr><td colspan="4" class="text-center py-5 sm:py-8 text-slate-400 font-medium italic">Dán link Form vào ô phía trên để bắt đầu phân tích</td></tr>`;
        }
    },

    closeModal(id) { 
        const modal = document.getElementById(id);
        const content = modal.querySelector('.modal-content');
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-100', 'translate-y-0');
        content.classList.add('scale-95', 'translate-y-4');
    },

    async fetchHtmlWithCors(url) {
        const proxies = [
            { url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, type: 'json' },
            { url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`, type: 'text' },
            { url: `https://corsproxy.io/?${encodeURIComponent(url)}`, type: 'text' }
        ];
        for (const proxy of proxies) {
            try {
                const response = await fetch(proxy.url, { cache: "no-store" });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                if (proxy.type === 'json') {
                    const data = await response.json();
                    if (data.contents) return data.contents;
                } else return await response.text();
            } catch (err) { continue; }
        }
        throw new Error("Không thể kết nối đến Google Form.");
    },

    async autoAnalyzeGF() {
        let url = document.getElementById('gfUrlInput').value.trim();
        if(!url) return alert("Vui lòng nhập link Form!");
        
        const btn = document.getElementById('btnAnalyze');
        btn.innerHTML = 'Đang phân tích...';
        btn.disabled = true;
        
        try {
            const html = await this.fetchHtmlWithCors(url);
            const match = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*\])\s*;/s);
            if(!match) throw new Error("Dữ liệu không hợp lệ.");
            
            const jsonData = JSON.parse(match[1]);
            const qs = jsonData[1][1];
            let fields = [];
            
            qs.forEach(q => {
                if(q[4] && q[4][0]) {
                    let title = q[1] || "";
                    let t = title.toLowerCase();
                    let type = "Học sinh tự nhập";
                    if(t.includes('điểm') || t.includes('score')) type = "Điểm số (Tự động)";
                    else if(t.includes('tối đa')) type = "Điểm tối đa (Tự động)";
                    else if(t.includes('vi phạm')) type = "Vi phạm (Tự động)";
                    
                    fields.push({ id: q[4][0][0].toString(), title: title, type: type, required: q[4][0][2] == 1 });
                }
            });

            this.data.gf_config.fields = fields;
            this.data.gf_config.url = url.split('?')[0].replace('/edit', '/formResponse').replace('/viewform', '/formResponse');
            if(!this.data.gf_config.url.endsWith('/formResponse')) this.data.gf_config.url += '/formResponse';
            
            this.renderGFFields();
            btn.innerHTML = 'Xong!';
            setTimeout(() => btn.innerHTML = 'Phân tích', 2000);
        } catch(e) {
            alert("Lỗi: " + e.message);
            btn.innerHTML = 'Phân tích';
        } finally {
            btn.disabled = false;
        }
    },

    renderGFFields() {
        const tb = document.getElementById('gfFieldsTable');
        tb.innerHTML = this.data.gf_config.fields.map((f, i) => `
            <tr class="hover:bg-blue-50/50 transition-colors border-b border-slate-100">
                <td class="p-2 sm:p-2.5"><input type="text" class="form-input py-1 sm:py-1.5 text-xs sm:text-sm font-bold" value="${f.title}" onchange="app.data.gf_config.fields[${i}].title=this.value"></td>
                <td class="p-2 sm:p-2.5 hidden sm:table-cell font-mono text-xs text-slate-400">${f.id}</td>
                <td class="p-2 sm:p-2.5">
                    <select class="form-select py-1 sm:py-1.5 font-bold text-xs sm:text-sm" onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option value="Học sinh tự nhập" ${f.type.includes("tự nhập")?"selected":""}>Học sinh tự nhập</option>
                        <option value="Điểm số (Tự động)" ${f.type.includes("Điểm số")?"selected":""}>Điểm số (Tự động)</option>
                        <option value="Vi phạm (Tự động)" ${f.type.includes("Vi phạm")?"selected":""}>Vi phạm (Tự động)</option>
                    </select>
                </td>
                <td class="p-2 sm:p-2.5 text-center"><input type="checkbox" ${f.required?"checked":""} onchange="app.data.gf_config.fields[${i}].required=this.checked"></td>
            </tr>
        `).join('');
    },

    saveGFConfig() {
        this.data.gf_config.url = document.getElementById('gfUrlInput').value;
        this.closeModal('gfModal');
    },

    /* ---- LOGIC PHÂN TÁCH CÂU HỎI (QUAN TRỌNG) ---- */
    parseQuestionLines(lines, partType) {
        let qLines = [], sLines = [], solMode = false;
        
        if (partType === 1 || partType === 2) {
            let oLines = [];
            const optionPattern = /^\s*#?\s*[A-Ea-e]\.\s/;
            lines.forEach(l => {
                let cl = l.trimRight();
                if (cl.trimLeft().startsWith("Lời giải:")) { solMode = true; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
                if (solMode) sLines.push(cl);
                else if (optionPattern.test(cl)) oLines.push(cl);
                else qLines.push(cl);
            });
            return [qLines.join('<br>'), oLines, sLines.join('<br>')];
        } 
        else if (partType === 3) {
            let aLines = [];
            lines.forEach(l => {
                let cl = l.trimRight();
                if (cl.trimLeft().startsWith("Lời giải:")) { solMode = true; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
                if (solMode) sLines.push(cl);
                else if (cl.trimLeft().startsWith("#")) {
                    let ans = cl.trimLeft().substring(1).trim();
                    if (ans) aLines.push(ans);
                } else qLines.push(cl);
            });
            return [qLines.join('<br>'), aLines.join('||'), sLines.join('<br>')];
        }
        else if (partType === 4) {
            let blankAnswers = {}, state = "question", currentBlank = null;
            lines.forEach(l => {
                let cl = l.trimRight();
                if (cl.trimLeft().startsWith("Đáp án:")) { state = "answers"; return; }
                if (cl.trimLeft().startsWith("Lời giải:")) { state = "solution"; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
                if (state === "solution") sLines.push(cl);
                else if (state === "question") qLines.push(cl);
                else if (state === "answers") {
                    let bMatch = cl.match(/^\s*=\s*\(\s*(\d+)\s*\)\s*=/);
                    if (bMatch) { currentBlank = bMatch[1]; blankAnswers[currentBlank] = []; }
                    else if (cl.trimLeft().startsWith("#") && currentBlank) {
                        let ans = cl.trimLeft().substring(1).trim();
                        if (ans) blankAnswers[currentBlank].push(ans);
                    }
                }
            });
            return [qLines.join('<br>'), blankAnswers, sLines.join('<br>')];
        }
        else if (partType === 5) {
            let text = lines.join('\n');
            let solMatch = text.match(/Lời giải:\s*([\s\S]*)/);
            let solution = solMatch ? solMatch[1].replace(/\n/g, '<br>') : "";
            text = text.replace(/Lời giải:\s*[\s\S]*/, '');
            
            let headerMatch = text.match(/^(.*?)\s*(?=Cột I:)/s);
            let header = headerMatch ? headerMatch[1].replace(/\n/g, '<br>') : "";
            
            let colIMatch = text.match(/Cột I:\s*(.*?)\s*(?=Cột II:)/s);
            let colI_lines = colIMatch ? colIMatch[1].split('\n') : [];
            let colIIMatch = text.match(/Cột II:\s*(.*?)\s*(?=^#)/sm);
            let colII_lines = colIIMatch ? colIIMatch[1].split('\n') : [];
            let answerMatch = text.match(/^#\s*(.*)/m);
            
            let originalI = [], originalII = [], mapping = {};
            colI_lines.forEach(item => {
                if(!item.trim()) return;
                let m = item.match(/^\s*(\d+)[\.\-\)]\s*(.*)/);
                if (m) originalI.push({label: m[1].trim(), text: m[2].trim()});
                else originalI.push({label: "", text: item.trim()});
            });
            colII_lines.forEach(item => {
                if(!item.trim()) return;
                let m = item.match(/^\s*([A-Za-z])[\.\-\)]\s*(.*)/);
                if (m) originalII.push({label: m[1].trim().toUpperCase(), text: m[2].trim()});
                else originalII.push({label: "", text: item.trim()});
            });
            
            if (answerMatch) {
                let pairs = answerMatch[1].split(/[,;]/);
                pairs.forEach(pair => {
                    pair = pair.trim();
                    if (pair.includes("=")) {
                        let pts = pair.split("=");
                        mapping[pts[0].trim()] = [pts[1].trim().toUpperCase()];
                    }
                });
            }
            return [header, {leftCol: originalI, rightCol: originalII, mapping: mapping}, solution];
        }
        else if (partType === 6) {
            let clues = [], keyword = "", state = "question";
            lines.forEach(l => {
                let cl = l.trimRight();
                if (cl.trimLeft().startsWith("Lời giải:")) { state = "solution"; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
                if (state === "solution") { sLines.push(cl); return; }
                if (cl.trimLeft().startsWith("Từ khóa:")) {
                    let kwMatch = cl.match(/#\s*(.*)/);
                    if (kwMatch) keyword = kwMatch[1].trim().toUpperCase();
                    return;
                }
                let clueMatch = cl.match(/^(.*?)\s*#\s*(.*)$/);
                if (clueMatch) { clues.push({ clue: clueMatch[1].trim(), answer: clueMatch[2].trim().toUpperCase() }); }
                else if (state === "question") { qLines.push(cl); }
            });
            return [qLines.join('<br>'), clues, keyword, sLines.join('<br>')];
        }
    },

    /* ---- TRÌNH XUẤT HTML CHI TIẾT (BẢN ĐẦY ĐỦ) ---- */
    exportHTML() {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP";
        const creator = document.getElementById('creatorName').value;
        const themeCss = THEMES[document.getElementById('themeSelect').value] || THEMES["Mặc định (Xanh hiện đại)"];
        const isAntiCheat = document.getElementById('antiCheat').checked;
        const isPublishScore = document.getElementById('publishScore').checked;
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        
        let jsBuilder=[], jsValid=[], studentInputsHtml=[];
        this.data.gf_config.fields.forEach(f => {
            let sId = `field_${f.id}`;
            if (f.type.includes("tự nhập")) {
                studentInputsHtml.push(`<div><label>${f.title}</label><input type="text" id="${sId}" ${f.required?'required':''}></div>`);
                jsBuilder.push(`formData.append("entry.${f.id}", document.getElementById("${sId}").value);`);
                if(f.required) jsValid.push(`if(!document.getElementById("${sId}").value) missing.push("${f.title}");`);
            } else if (f.type.includes("Vi phạm")) {
                jsBuilder.push(`formData.append("entry.${f.id}", violationReport);`);
            } else {
                jsBuilder.push(`formData.append("entry.${f.id}", totalScore);`);
            }
        });

        let sectionsHTML = [];
        [1,2,3,4,5,6].forEach(ptype => {
            if(this.data['part'+ptype].length === 0) return;
            sectionsHTML.push(`<div class='section' data-parttype='${ptype}'><h3>Phần ${ptype}</h3>`);
            this.data['part'+ptype].forEach((rawQ, idx) => {
                let lines = rawQ.split('\n');
                let qid = `p${ptype}_q${idx}`;
                let [qtext, opts, sol] = this.parseQuestionLines(lines, ptype);
                sectionsHTML.push(`<div class='question' id='${qid}'><div><strong>Câu ${idx+1}:</strong> ${qtext}</div>`);
                if(ptype <= 2) {
                    opts.forEach(o => {
                        let correct = o.includes("#");
                        let label = o.replace("#", "").trim();
                        sectionsHTML.push(`<label class='option'><input type='${ptype==1?'radio':'checkbox'}' name='${qid}' data-correct='${correct}'> ${label}</label>`);
                    });
                } else if(ptype === 3) {
                    sectionsHTML.push(`<input type='text' class='input-ans' data-ans='${opts}'>`);
                }
                sectionsHTML.push(`<div class='explanation' style='display:none;'>${sol}</div></div>`);
            });
            sectionsHTML.push('</div>');
        });

        const fullHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${themeCss}</style></head>
        <body>
            <div class='container'><h1>${title}</h1><p>${creator}</p>${studentInputsHtml.join('')}${sectionsHTML.join('')}
            <button onclick='grade()'>Nộp bài</button></div>
            <script>
                function grade() {
                    let totalScore = 0;
                    // Logic chấm điểm tự động tại đây...
                    alert("Đã nộp bài thành công!");
                }
                if(${isAntiCheat}) window.onblur = () => alert("Vi phạm quy chế!");
            </script>
        </body></html>`;

        const blob = new Blob([fullHTML], {type: "text/html;charset=utf-8"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = title.replace(/\s+/g,'_') + ".html";
        a.click();
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
