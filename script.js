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
    1: "Nhập câu hỏi trắc nghiệm nhiều lựa chọn (có 1 phương án đúng). Mỗi câu bắt đầu bằng dấu ##. Phương án đúng được thêm dấu # ở đầu.\nVí dụ:\n##\nThủ đô của VN?\n# A. Hà Nội\nB. Huế\nLời giải:\nGiải thích...",
    2: "Nhập câu trắc nghiệm (có thể có nhiều đáp án đúng). Bắt đầu bằng ##. Đáp án đúng có dấu #.\nVí dụ:\n##\nHạt trong hạt nhân?\n# A. Proton\nB. Electron\n# C. Neutron",
    3: "Nhập câu trả lời ngắn. Bắt đầu bằng ##. Đáp án sau dấu #, nếu có nhiều cách ghi thì mỗi dòng 1 dấu #.\nVí dụ:\n##\nKhối lượng của Cl?\n# 35.5\n# 35,5",
    4: "Nhập điền khuyết. Các vị trí khuyết ghi =(n)=. Đáp án ghi sau chữ 'Đáp án:'.\nVí dụ:\n##\nHình vuông có =(1)= cạnh.\nĐáp án:\n=(1)=\n# 4\n# bốn",
    5: "Ghép đôi. Định dạng: Cột I:, Cột II:, Đáp án ghép nối ghi sau dấu #.\nVí dụ:\n##\nCột I:\n1. Gà\n2. Chó\nCột II:\nA. 4 chân\nB. 2 chân\n# 1=B, 2=A",
    6: "Giải ô chữ. Gợi ý hàng ngang: 1. ... # ĐÁP ÁN. Từ khóa dọc: Từ khóa: # KEY.\nVí dụ:\n##\n1. Hạt mang điện dương # PROTON\nTừ khóa: # ON"
};

const chem_symbols = [
    {t: "+"}, {t: "-"}, {t: "×"}, {t: "÷"}, {t: "±"}, {t: "⇌"}, {t: "→"}, {t: "↑"}, {t: "↓"},
    {t: "xⁿ", s: "<sup>", e: "</sup>"}, {t: "xₙ", s: "<sub>", e: "</sub>"}
];

const app = {
    data: {
        part1: [], part2: [], part3: [], part4: [], part5: [], part6: [],
        gf_config: { url: "", fields: [] }
    },
    activeTab: 1,

    init() {
        if (typeof lucide !== 'undefined') lucide.createIcons();
        this.renderThemes();
        this.renderTabs();
        this.renderToolbar();
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
        const titles = [
            {icon: 'circle-dot', text: '1 lựa chọn'}, {icon: 'check-square', text: 'Nhiều lựa chọn'},
            {icon: 'pen-line', text: 'Trả lời ngắn'}, {icon: 'form-input', text: 'Điền khuyết'},
            {icon: 'arrow-right-left', text: 'Ghép đôi'}, {icon: 'grid-3x3', text: 'Ô chữ'}
        ];
        c.innerHTML = titles.map((t, i) => `
            <button class="tab-btn ${this.activeTab === i+1 ? 'tab-active' : 'tab-inactive'} p-1.5 sm:p-3" onclick="app.switchTab(${i+1})">
                <i data-lucide="${t.icon}" class="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 ${this.activeTab === i+1 ? 'text-blue-600' : 'text-slate-400'}"></i>
                <span class="text-center w-full truncate text-[10px] sm:text-sm">Phần ${i+1}</span>
            </button>
        `).join('');
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    switchTab(tab) {
        this.activeTab = tab;
        const titles = ["Một phương án đúng", "Nhiều đáp án đúng", "Trả lời ngắn", "Điền khuyết", "Ghép đôi", "Giải ô chữ"];
        document.getElementById('partTitle').innerHTML = `Phần ${tab}: <span class="text-slate-700">${titles[tab-1]}</span>`;
        this.renderTabs();
        this.renderQList();
        document.getElementById('qInput').value = '';
    },

    showGuide() { alert(GUIDES[this.activeTab]); },

    renderToolbar() {
        const tb = document.getElementById('editorToolbar');
        let html = '<div class="flex flex-wrap bg-white rounded-lg p-1 border-2 border-slate-200 shadow-[0_2px_0_0_#e2e8f0] gap-1">';
        chem_symbols.forEach(sym => {
            html += `<button class="px-2 py-1 sm:px-2.5 sm:py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90 font-bold" onclick="app.insertText('${sym.t}', '${sym.s||''}', '${sym.e||''}')">${sym.t}</button>`;
        });
        html += `</div><div class="hidden sm:block w-px h-6 bg-slate-300 mx-2"></div>
                 <div class="flex bg-white rounded-lg p-1 border-2 border-slate-200 shadow-[0_2px_0_0_#e2e8f0] gap-1">
                    <button class="px-2 py-1 sm:px-3 sm:py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md font-black transition-all active:scale-90" onclick="app.insertText('Bold', '<b>', '</b>')">B</button>
                    <button class="px-2 py-1 sm:px-3 sm:py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md italic font-black transition-all active:scale-90" onclick="app.insertText('Italic', '<i>', '</i>')">I</button>
                 </div>
                 <button class="ml-auto px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-2 border-indigo-200 shadow-[0_2px_0_0_#c7d2fe] rounded-lg text-xs sm:text-sm font-bold flex items-center transition-all active:translate-y-1 active:shadow-none" onclick="app.insertImage()"><i data-lucide="image" class="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"></i> Chèn ảnh</button>`;
        tb.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    insertText(t, startTag, endTag) {
        const el = document.getElementById('qInput');
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

    insertImage() {
        const f = document.getElementById('fileLoader');
        f.onchange = e => {
            const file = e.target.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                this.insertText('', `<img src="${ev.target.result}" style="max-width:100%; border-radius:8px; border:2px solid #e2e8f0; margin:10px 0;">`, '');
            };
            reader.readAsDataURL(file);
        };
        f.click();
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

    renderQList() {
        const arr = this.data['part'+this.activeTab];
        const html = arr.map((q, i) => `
            <div class="p-3 sm:p-4 border-2 border-slate-200 rounded-xl bg-white shadow-[0_4px_0_0_#e2e8f0] hover:border-blue-400 hover:shadow-[0_4px_0_0_#60a5fa] transition-all group relative pr-10 sm:pr-14 cursor-default transform hover:-translate-y-1">
                <div class="flex items-center gap-2 mb-2 border-b-2 border-slate-100 pb-2"><span class="bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-black px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg">Câu ${i+1}</span></div>
                <div class="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed font-medium">${q.replace(/</g,'&lt;')}</div>
                <button class="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 sm:p-2.5 bg-red-50 text-red-500 hover:text-white hover:bg-red-500 border-2 border-red-100 hover:border-red-600 rounded-xl transition-all sm:opacity-0 sm:group-hover:opacity-100 active:scale-90 shadow-sm" onclick="app.removeQuestion(${i})"><i data-lucide="trash-2" class="w-3 h-3 sm:w-4 sm:h-4"></i></button>
            </div>
        `).join('');
        
        document.getElementById('qList').innerHTML = html || `
            <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 py-12">
                <div class="bg-slate-100 p-4 sm:p-5 rounded-2xl shadow-inner"><i data-lucide="inbox" class="w-10 h-10 sm:w-12 sm:h-12 text-slate-300"></i></div>
                <p class="text-xs sm:text-sm font-bold text-slate-400">Chưa có câu hỏi nào</p>
            </div>`;
        const badge = document.getElementById('qCountBadge');
        if(badge) badge.innerText = `${arr.length} câu`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    newProject() {
        if(confirm("Tạo dự án mới sẽ xóa toàn bộ dữ liệu hiện tại. Bạn có chắc chắn?")) {
            this.data = { part1:[], part2:[], part3:[], part4:[], part5:[], part6:[], gf_config:{url:"", fields:[]} };
            document.getElementById('quizTitle').value = "BÀI TẬP TRẮC NGHIỆM";
            document.getElementById('creatorName').value = "";
            document.getElementById('startTime').value = "";
            document.getElementById('endTime').value = "";
            document.getElementById('antiCheat').checked = true;
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
            ...this.data
        };
        const blob = new Blob([JSON.stringify(p, null, 2)], {type: "application/json"});
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
                
                document.getElementById('antiCheat').checked = p.anti_cheat !== undefined ? p.anti_cheat : true;
                
                if(p.gf_config && p.gf_config.fields) {
                    p.gf_config.fields.forEach(field => {
                        if(field.type && (!field.type.includes("Tự") && !field.type.includes("tự"))) {
                            field.type = field.type.includes("tự điền") ? "Học sinh tự điền" : "Điểm đạt được (Tự động)";
                        }
                    });
                }

                this.data = { part1: p.part1||[], part2: p.part2||[], part3: p.part3||[], part4: p.part4||[], part5: p.part5||[], part6: p.part6||[], gf_config: p.gf_config||{url:"", fields:[]} };
                this.switchTab(1);
            };
            reader.readAsText(file);
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
            document.getElementById('gfFieldsTable').innerHTML = `<tr><td colspan="4" class="text-center py-6 sm:py-10 text-slate-400 font-medium italic"><i data-lucide="link" class="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 text-slate-300"></i>Dán link Form vào ô phía trên để bắt đầu phân tích</td></tr>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
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
        throw new Error("Không thể kết nối đến Google Form qua các Proxy. Vui lòng kiểm tra mạng.");
    },

    async autoAnalyzeGF() {
        let url = document.getElementById('gfUrlInput').value.trim();
        if(!url) return alert("Vui lòng nhập link Form!");
        if(url.includes("forms.gle")) return alert("⚠️ Vui lòng mở link rút gọn bằng trình duyệt, copy đường link dài rồi dán lại vào đây.");

        const btn = document.getElementById('btnAnalyze');
        const oldHtml = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i> Đang phân tích...';
        btn.disabled = true; document.getElementById('gfUrlInput').disabled = true;
        
        try {
            const html = await this.fetchHtmlWithCors(url);
            const match = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*\])\s*;/s);
            if(!match) throw new Error("Không tìm thấy dữ liệu. Đảm bảo Form đang được thiết lập 'Công khai'.");
            
            const jsonData = JSON.parse(match[1]);
            const qs = jsonData[1][1];
            let fields = [];
            
            qs.forEach(q => {
                if(q[4] && q[4][0]) {
                    let title = q[1] || "";
                    let t = title.toLowerCase();
                    let type = "Học sinh tự điền";
                    if(t.includes('điểm') && t.includes('tối đa')) type = "Điểm tối đa (Tự động)";
                    else if(t.includes('điểm') || t.includes('score')) type = "Điểm đạt được (Tự động)";
                    else if(t.includes('vi phạm') || t.includes('gian lận')) type = "Báo cáo vi phạm (Tự động)";
                    
                    fields.push({ id: q[4][0][0].toString(), title: title, type: type, required: q[4][0][2] == 1 });
                }
            });

            this.data.gf_config.fields = fields;
            this.data.gf_config.url = url.split('?')[0].replace('/edit', '/formResponse').replace('/viewform', '/formResponse');
            if(!this.data.gf_config.url.endsWith('/formResponse')) this.data.gf_config.url += '/formResponse';
            
            document.getElementById('gfUrlInput').value = this.data.gf_config.url;
            this.renderGFFields();
            
            btn.innerHTML = '<i data-lucide="check" class="w-4 h-4 mr-2"></i>Xong!';
            btn.classList.replace('from-emerald-500', 'from-blue-500');
            setTimeout(() => { btn.innerHTML = oldHtml; btn.classList.replace('from-blue-500', 'from-emerald-500'); if (typeof lucide !== 'undefined') lucide.createIcons(); }, 2000);

        } catch(e) {
            alert("❌ Lỗi: " + e.message);
            btn.innerHTML = oldHtml;
        } finally {
            btn.disabled = false; document.getElementById('gfUrlInput').disabled = false; if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    },

    renderGFFields() {
        const tb = document.getElementById('gfFieldsTable');
        tb.innerHTML = this.data.gf_config.fields.map((f, i) => `
            <tr class="hover:bg-blue-50/50 transition-colors border-b border-slate-100">
                <td class="p-2 sm:p-3"><input type="text" class="form-input py-1.5 sm:py-2 text-xs sm:text-sm font-bold" value="${f.title}" onchange="app.data.gf_config.fields[${i}].title=this.value"></td>
                <td class="p-2 sm:p-3 hidden sm:table-cell"><input type="text" class="form-input py-1.5 sm:py-2 bg-slate-100 text-slate-500 font-mono text-[10px] sm:text-xs cursor-not-allowed" value="${f.id}" readonly></td>
                <td class="p-2 sm:p-3">
                    <select class="form-select py-1.5 sm:py-2 font-bold text-xs sm:text-sm" onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option value="Học sinh tự điền" ${f.type==="Học sinh tự điền"?"selected":""}>Học sinh tự điền</option>
                        <option value="Điểm đạt được (Tự động)" ${f.type==="Điểm đạt được (Tự động)"?"selected":""}>Điểm đạt được (Tự động)</option>
                        <option value="Điểm tối đa (Tự động)" ${f.type==="Điểm tối đa (Tự động)"?"selected":""}>Điểm tối đa (Tự động)</option>
                        <option value="Báo cáo vi phạm (Tự động)" ${f.type==="Báo cáo vi phạm (Tự động)"?"selected":""}>Báo cáo vi phạm (Tự động)</option>
                    </select>
                </td>
                <td class="p-2 sm:p-3 text-center">
                    <div class="flex justify-center items-center h-full">
                        <input type="checkbox" class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 rounded-md border-2 border-slate-300 focus:ring-blue-500 cursor-pointer shadow-sm" ${f.required?"checked":""} onchange="app.data.gf_config.fields[${i}].required=this.checked">
                    </div>
                </td>
            </tr>
        `).join('');
    },

    saveGFConfig() {
        this.data.gf_config.url = document.getElementById('gfUrlInput').value;
        this.closeModal('gfModal');
        alert("✅ Đã lưu cấu hình Google Form vào bộ nhớ.\nBạn hãy bấm 'XUẤT HTML' để tạo file đề thi.");
    },

    parseQuestionLines(lines, partType) {
        let qLines = [], sLines = [], solMode = false;
        
        if (partType === 1 || partType === 2) {
            let oLines = [];
            const optionPattern = /^\s*#?\s*[A-Ea-e]\.\s/;
            lines.forEach(l => {
                let cl = l.trimRight();
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { solMode = true; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
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
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { solMode = true; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
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
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { state = "solution"; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
                
                if (state === "solution") sLines.push(cl);
                else if (state === "question") qLines.push(cl);
                else if (state === "answers") {
                    let bMatch = cl.match(/^\s*=\s*\(\s*(\d+)\s*\)\s*=\s*$/);
                    if (bMatch) {
                        currentBlank = bMatch[1];
                        blankAnswers[currentBlank] = [];
                    } else if (cl.trimLeft().startsWith("#") && currentBlank) {
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
                        let l = pts[0].trim(), r = pts[1].trim().toUpperCase();
                        if(!mapping[l]) mapping[l] = [];
                        mapping[l].push(r);
                    } else if (pair.includes("-")) {
                        let pts = pair.split("-");
                        let l = pts[0].trim(), r = pts[pts.length-1].trim().toUpperCase();
                        if(!mapping[l]) mapping[l] = [];
                        mapping[l].push(r);
                    }
                });
            }
            return [header, {leftCol: originalI, rightCol: originalII, mapping: mapping}, solution];
        }
        else if (partType === 6) {
            let clues = [], keyword = "", state = "question";
            lines.forEach(l => {
                let cl = l.trimRight();
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { state = "solution"; sLines.push(cl.trimLeft().replace(/^Lời giải:\s*/, '')); return; }
                if (state === "solution") { sLines.push(cl); return; }
                if (cl.trimLeft().startsWith("Từ khóa:")) {
                    let kwMatch = cl.match(/#\s*(.*)/);
                    if (kwMatch) keyword = kwMatch[1].trim().toUpperCase();
                    return;
                }
                let clueMatch = cl.match(/^(.*?)\s*#\s*(.*)$/);
                if (clueMatch && !cl.trimLeft().startsWith("#")) {
                    clues.push({ clue: clueMatch[1].trim(), answer: clueMatch[2].trim().toUpperCase() });
                } else if (state === "question") {
                    qLines.push(cl);
                }
            });
            return [qLines.join('<br>'), clues, keyword, sLines.join('<br>')];
        }
    },

    exportHTML() {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP TRẮC NGHIỆM";
        const creator = document.getElementById('creatorName').value;
        const themeCss = THEMES[document.getElementById('themeSelect').value] || THEMES["Mặc định (Xanh hiện đại)"];
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const isAntiCheat = document.getElementById('antiCheat').checked;
        
        let jsBuilder=[], jsValid=[], studentInputsHtml=[];
        let hasStudentInputs = false;
        
        this.data.gf_config.fields.forEach(f => {
            let sId = `field_${f.id}`;
            let safeTitle = f.title.replace(/"/g, '\\"');
            
            if (f.type.includes("tự điền") || f.type.includes("Học sinh")) {
                hasStudentInputs = true;
                let reqStr = f.required ? "required" : "";
                let reqStar = f.required ? " <span style='color:#ef4444;'>*</span>" : "";
                
                studentInputsHtml.push(`
                    <div>
                        <label style="font-weight: 600; display: block; margin-bottom: 5px;">${f.title}${reqStar}</label>
                        <input type="text" id="${sId}" placeholder="Nhập ${f.title}..." style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 8px; font-size: 1rem; outline: none;" ${reqStr}>
                    </div>
                `);
                jsBuilder.push(`formData.append("entry.${f.id}", document.getElementById("${sId}").value.trim() || "Chưa điền");`);
                if (f.required) jsValid.push(`if(!document.getElementById("${sId}").value.trim()) missing_fields.push("${safeTitle}");`);
            } 
            else if (f.type.includes("Điểm đạt")) jsBuilder.push(`formData.append("entry.${f.id}", totalScore);`);
            else if (f.type.includes("tối đa")) jsBuilder.push(`formData.append("entry.${f.id}", maxPossibleScore);`);
            else if (f.type.includes("vi phạm")) jsBuilder.push(`formData.append("entry.${f.id}", violationReport);`);
        });

        let sectionsHTML = [];
        let partCounter = 1;
        let leTitles = {1: "Một phương án đúng", 2: "Nhiều đáp án đúng", 3: "Trả lời ngắn", 4: "Điền khuyết", 5: "Ghép đôi (Nối)", 6: "Giải ô chữ"};
        
        [1,2,3,4,5,6].forEach(ptype => {
            if(this.data['part'+ptype].length === 0) return;
            let sectionTitle = `Phần ${partCounter}: ${leTitles[ptype]}`;
            sectionsHTML.push(`<div class='section' id='part${partCounter}' data-parttype='${ptype}' data-title='${sectionTitle}'>`);
            
            if(ptype === 6) {
                sectionsHTML.push(`<div class='section-title'><span>${sectionTitle}</span> <button onclick='openNoteModal()' class='btn-note'>Lưu ý</button></div>`);
                sectionsHTML.push(`<div class='score-note'><i>Điểm tối đa: 2 điểm / hàng ngang.</i></div>`);
            } else {
                sectionsHTML.push(`<div class='section-title'>${sectionTitle}</div>`);
                sectionsHTML.push(`<div class='score-note'><i>Mỗi câu trả lời đúng được 1 điểm.</i></div>`);
            }
            
            this.data['part'+ptype].forEach((rawQ, idx) => {
                let lines = rawQ.split('\n');
                let qid = `part${partCounter}_q${idx+1}`;
                
                if(ptype===1 || ptype===2) {
                    let [qtext, opts, sol] = this.parseQuestionLines(lines, ptype);
                    let encodedSol = encodeURIComponent(sol);
                    let letCorrect = [];
                    
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${qtext}</div>`);
                    opts.forEach((opt, j) => {
                        let isCorrect = opt.trimLeft().startsWith("#");
                        let clean = isCorrect ? opt.trimLeft().substring(1).trim() : opt.trimLeft();
                        let parts = clean.split('.');
                        let letter = parts[0].trim().toUpperCase() || String.fromCharCode(65+j);
                        let text = parts.slice(1).join('.').trim() || clean;
                        
                        if(isCorrect) letCorrect.push(letter);
                        let inputType = ptype===1 ? 'radio' : 'checkbox';
                        sectionsHTML.push(`<label class='option'><input type='${inputType}' name='${qid}' value='${letter}'><div><strong>${letter}.</strong>&nbsp; ${text}</div></label>`);
                    });
                    sectionsHTML.push(`<div class='explanation' id='${qid}_result' data-answer='${letCorrect.join(',')}' data-solution='${encodedSol}'></div></div>`);
                } 
                else if(ptype===3) {
                    let [qtext, ans, sol] = this.parseQuestionLines(lines, ptype);
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${qtext}</div>`);
                    sectionsHTML.push(`<div class='blank-container'>Đáp án của bạn: <input type='text' id='${qid}_input' oninput="this.style.width=Math.max(60, (this.value.length+2)*10)+'px';"></div>`);
                    sectionsHTML.push(`<div class='explanation' id='${qid}_result' data-answer='${ans.replace(/'/g,"&apos;")}' data-solution='${encodeURIComponent(sol)}'></div></div>`);
                }
                else if(ptype===4) {
                    let [qtext, blankAnswers, sol] = this.parseQuestionLines(lines, ptype);
                    let displayQtext = qtext.replace(/=\s*\(\s*(\d+)\s*\)\s*=/g, (match, num) => {
                        let ansAttr = (blankAnswers[num] || []).join('||').replace(/'/g,"&apos;");
                        return `<span class='blank-container'><input type='text' id='${qid}_blank${num}' data-answer='${ansAttr}' oninput="this.style.width=Math.max(60, (this.value.length+2)*10)+'px';"></span>`;
                    });
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${displayQtext}</div><div class='explanation' id='${qid}_result' data-solution='${encodeURIComponent(sol)}'></div></div>`);
                }
                else if(ptype===5) {
                    let [header, {leftCol, rightCol, mapping}, sol] = this.parseQuestionLines(lines, ptype);
                    let answerPairs = [], expectedMapping = [];
                    leftCol.forEach(item => {
                        let l_label = item.label;
                        if(l_label && mapping[l_label]) {
                            mapping[l_label].forEach(target => {
                                expectedMapping.push(`${l_label}=${target}`);
                                let rightItem = rightCol.find(r => r.label === target);
                                let rightText = rightItem ? rightItem.text : "";
                                answerPairs.push(`${item.text} ➜ ${rightText}`);
                            });
                        }
                    });
                    
                    let expectedStr = expectedMapping.join(',');
                    let randomLeft = [...leftCol].sort(() => 0.5 - Math.random());
                    let randomRight = [...rightCol].sort(() => 0.5 - Math.random());
                    
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${header}</div>`);
                    sectionsHTML.push(`<div class='match-container' id='match_${qid}' data-expected='${expectedStr}'><svg class='match-lines' id='svg_${qid}'></svg><div class='match-columns'>`);
                    
                    sectionsHTML.push(`<div class='match-col match-left'>`);
                    randomLeft.forEach(item => sectionsHTML.push(`<div class='match-item match-item-left' data-id='${item.label}'>${item.text}</div>`));
                    sectionsHTML.push(`</div><div class='match-col match-right'>`);
                    randomRight.forEach(item => sectionsHTML.push(`<div class='match-item match-item-right' data-id='${item.label}'>${item.text}</div>`));
                    sectionsHTML.push(`</div></div>`);
                    sectionsHTML.push(`<button class='btn-clear-match' onclick='clearMatch("match_${qid}")'>⟲ Xóa tất cả đường kẻ</button><div class='match-tip'><i>(Mẹo: Rê chuột và bấm trực tiếp vào đường kẻ hoặc bấm lại vào hai ô đã nối để xóa)</i></div></div>`);
                    sectionsHTML.push(`<div class='explanation' id='${qid}_result' data-answer-pairs='${answerPairs.join('<br>').replace(/'/g,"&apos;")}' data-solution='${encodeURIComponent(sol)}'></div></div>`);
                }
                else if(ptype===6) {
                    let [qtext, clues, keyword, sol] = this.parseQuestionLines(lines, ptype);
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${qtext}</div><div style='font-size:0.95rem; color:var(--text-muted); margin-bottom:12px; text-align:center;'><i>(Bấm vào các số thứ tự màu xanh để xem gợi ý tương ứng)</i></div>`);
                    sectionsHTML.push(`<div class='cw-container' id='cw_${qid}'><div class='cw-grid'>`);
                    
                    let alignedGrid = [];
                    let kwClean = keyword.replace(/\s/g, '').toUpperCase();
                    let validKw = false;
                    
                    if(kwClean && kwClean.length === clues.length) {
                        validKw = true;
                        let offsets = [];
                        for(let i=0; i<clues.length; i++) {
                            let ansClean = clues[i].answer.replace(/\s/g, '').toUpperCase();
                            let char = kwClean[i];
                            let idxFound = ansClean.indexOf(char);
                            if(idxFound === -1) { validKw = false; break; }
                            offsets.push(idxFound);
                        }
                        if(validKw) {
                            let maxPad = Math.max(...offsets);
                            for(let i=0; i<clues.length; i++) {
                                alignedGrid.push({
                                    ans: clues[i].answer.replace(/\s/g, '').toUpperCase(),
                                    pad: maxPad - offsets[i],
                                    keyIdx: offsets[i],
                                    clue: clues[i].clue
                                });
                            }
                        }
                    }
                    if(!validKw) {
                        clues.forEach(c => alignedGrid.push({ans: c.answer.replace(/\s/g, '').toUpperCase(), pad: 0, keyIdx: -1, clue: c.clue}));
                    }
                    
                    alignedGrid.forEach((row, rIdx) => {
                        sectionsHTML.push(`<div class='cw-row'>`);
                        let escapedClue = row.clue.replace(/"/g, '&quot;').replace(/'/g, "\\'");
                        sectionsHTML.push(`<div class='cw-num' onclick='openClueModal("Gợi ý hàng ngang số ${rIdx + 1}", "${escapedClue}", "${qid}", ${rIdx})' title='Nhấn để xem gợi ý'>${rIdx + 1}</div>`);
                        
                        for(let k=0; k<row.pad; k++) sectionsHTML.push(`<div class='cw-empty'></div>`);
                        for(let k=0; k<row.ans.length; k++) {
                            let isKey = (k === row.keyIdx) ? " cw-key" : "";
                            sectionsHTML.push(`<input type='text' maxlength='1' data-ans='${row.ans[k]}' class='cw-cell${isKey}'>`);
                        }
                        sectionsHTML.push(`</div>`);
                    });
                    
                    sectionsHTML.push(`</div></div><div class='explanation' id='${qid}_result' data-solution='${encodeURIComponent(sol)}'></div></div>`);
                }
            });
            sectionsHTML.push('</div>');
            partCounter++;
        });

        let studentFormHtml = "";
        if(hasStudentInputs) {
            studentFormHtml = `
            <div id="studentInfoBox" style="background: white; padding: 24px; border-radius: 12px; border: 2px solid var(--primary); margin-bottom: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <h3 style="margin-top:0; color: var(--primary); text-align: center; font-size: 1.3rem;">Thông tin học sinh</h3>
                <div style="color: #ef4444; font-size: 0.9rem; text-align: center; margin-bottom: 15px; font-style: italic;">* Vui lòng điền các thông tin bắt buộc</div>
                <div style="display: flex; flex-direction: column; gap: 15px; max-width: 400px; margin: 0 auto;">
                    ${studentInputsHtml.join('')}
                </div>
            </div>`;
        }

        const creatorHtml = creator ? `<div style='color: var(--text-muted); font-size: 1.1rem; font-weight: 500; margin-top: 8px;'>${creator}</div>` : "";
        const examUUID = "EXAM_UID_" + Math.random().toString(36).substring(2, 15);

        const fullHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <script>window.MathJax = { tex: { inlineMath: [['$', '$']] }, chtml: { scale: 0.9, mtextInheritFont: true }, svg: { fontCache: 'global', mtextInheritFont: true } };</script>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <style>
    ${themeCss}
    * { box-sizing: border-box; }
    body { font-family: var(--font-family); background: var(--bg); color: var(--text); margin: 0; padding: 0; line-height: 1.6; word-break: break-word; }
    .navbar { position: sticky; top: 0; background: var(--bg-glass); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; z-index: 1000; }
    .score-box { background: var(--primary); color: white; padding: 6px 16px; border-radius: 9999px; font-weight: 600; font-size: 1rem; }
    .timer-container { display: flex; align-items: center; gap: 12px; }
    .timer { font-size: 1.1rem; font-weight: 700; color: #dc2626; font-variant-numeric: tabular-nums; background: #fee2e2; padding: 6px 16px; border-radius: 9999px; }
    .btn-start { background: var(--primary); color: white; border: none; padding: 8px 16px; border-radius: 9999px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
    .btn-start:hover { background: var(--primary-hover); }
    .container { max-width: 800px; margin: 40px auto; padding: 0 16px; }
    .header { text-align: center; margin-bottom: 40px; }
    .header h1 { margin: 0; font-size: 2rem; color: var(--text); font-weight: 700; letter-spacing: -0.025em; }
    .section-title { font-size: 1.25rem; font-weight: 600; color: var(--primary); margin: 2rem 0 0.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border); display: flex; align-items: center; }
    .btn-note { margin-left: 12px; padding: 4px 10px; background: var(--hover-bg); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 600; color: var(--primary); transition: all 0.2s; }
    .btn-note:hover { background: var(--primary); color: white; }
    .score-note { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 16px; }
    .question { background: var(--card); padding: 24px; border-radius: 16px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); margin-bottom: 24px; border: 1px solid var(--border); transition: box-shadow 0.2s; }
    .question:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .q-text { font-size: 1.05rem; margin-bottom: 16px; color: var(--text); }
    .option { display: flex; align-items: flex-start; padding: 12px 16px; margin: 8px 0; border: 1px solid var(--border); border-radius: 10px; cursor: pointer; transition: all 0.2s; background: var(--card); color: var(--text); }
    .option:hover { background: var(--hover-bg); }
    .option input { margin-top: 4px; margin-right: 12px; transform: scale(1.2); accent-color: var(--primary); cursor: pointer; }
    .blank-container input { -webkit-appearance: none; border-radius: 0; border: none; border-bottom: 2px solid var(--primary); background: transparent; color: var(--primary); font-weight: 600; text-align: center; font-size: 1.05rem; padding: 2px 4px; outline: none; transition: border-color 0.2s; width: 60px; }
    .match-container { position: relative; margin-top: 15px; }
    .match-columns { display: flex; justify-content: space-between; }
    .match-col { display: flex; flex-direction: column; gap: 15px; width: 40%; z-index: 2; }
    .match-item { background: var(--card); color: var(--text); border: 2px solid var(--border); padding: 12px 16px; border-radius: 8px; cursor: pointer; text-align: center; font-weight: 500; transition: all 0.2s; user-select: none; }
    .match-item:hover { border-color: var(--primary); background: var(--hover-bg); }
    .match-item.selected { border-color: var(--primary); background: var(--hover-bg); box-shadow: 0 0 0 3px rgba(100, 100, 100, 0.1); }
    .match-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; overflow: visible; pointer-events: none; }
    .match-line-group { cursor: pointer; pointer-events: stroke; outline: none; }
    .match-line-group:hover .visible-line { stroke: #ef4444 !important; stroke-width: 5px; }
    .btn-clear-match { margin-top: 15px; background: var(--hover-bg); color: var(--text-muted); border: 1px solid var(--border); padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 0.9rem; transition: background 0.2s; display: block; margin-left: auto; margin-right: auto; z-index: 2; position: relative;}
    .match-tip { text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 8px; }
    .cw-container { overflow-x: auto; margin-top: 15px; padding-bottom: 10px; text-align: center; }
    .cw-grid { display: inline-flex; flex-direction: column; gap: 6px; font-family: monospace; }
    .cw-row { display: flex; align-items: center; }
    .cw-num { width: 28px; height: 28px; text-align: center; line-height: 26px; margin-right: 12px; font-weight: bold; color: var(--primary); background: var(--bg); border-radius: 50%; cursor: pointer; border: 1px solid var(--primary); flex-shrink: 0; }
    .cw-num:hover { background: var(--primary); color: white; transform: scale(1.1); }
    .cw-cell { width: 34px; height: 34px; text-align: center; text-transform: uppercase; font-size: 1.1rem; font-weight: bold; border: 2px solid var(--border); border-radius: 6px; margin-right: 4px; outline: none; background: var(--card); color: var(--text); transition: all 0.2s; }
    .cw-cell.cw-key { border-color: var(--primary); background-color: var(--hover-bg); border-width: 3px; }
    .cw-empty { width: 34px; height: 34px; margin-right: 4px; display: inline-block; }
    .clue-modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; backdrop-filter: blur(2px); }
    .clue-modal { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--card); padding: 24px; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); z-index: 2001; width: 90%; max-width: 450px; border: 1px solid var(--border); text-align: center; }
    .clue-modal-overlay.active { display: block; }
    .clue-modal.active { display: block; animation: popIn 0.2s ease-out forwards; }
    @keyframes popIn { from { opacity: 0; transform: translate(-50%, -45%) scale(0.95); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
    .explanation { margin-top: 16px; padding: 16px; background: var(--hover-bg); border-radius: 12px; display: none; font-size: 0.95rem; border: 1px solid var(--border); }
    .btn-submit { display: block; width: 100%; max-width: 300px; margin: 40px auto; background: var(--primary); color: white; border: none; padding: 16px 24px; border-radius: 12px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn-submit:hover { background: var(--primary-hover); transform: translateY(-2px); }
    #loadingOverlay { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.9); z-index:9999; justify-content:center; align-items:center; flex-direction:column; }
    .spinner { border: 5px solid #f3f3f3; border-top: 5px solid var(--primary); border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @media (max-width: 640px) {
        .navbar { flex-direction: column; gap: 12px; padding: 16px; border-radius: 0 0 16px 16px;}
        .match-col { width: 45%; }
        .cw-cell { width: 28px; height: 28px; font-size: 1rem; }
        .cw-empty { width: 28px; }
        .cw-num { width: 24px; height: 24px; line-height: 22px; font-size: 0.9rem; }
    }
  </style>
</head>
<body>
  <div id="quizApp" style="display:none;">
      <div id="loadingOverlay"><div class="spinner"></div><h3 style="color:var(--primary); margin-top:20px;">Đang chấm và gửi điểm...</h3></div>
      <div class='navbar'>
        <div class='score-box' id='scoreDisplay'>Điểm số: 0</div>
        <div class='timer-container'>
            <span class='timer'>⏱ <span id='timeDisplay'>00:00:00</span></span>
            <button class='btn-start' onclick='startTimer()' id='btnStartTimer'>Bắt đầu</button>
        </div>
      </div>
      <div class='container'>
        <div class='header'><h1>${title}</h1>${creatorHtml}</div>
        ${studentFormHtml}
        ${sectionsHTML.join('\n')}
        <button class='btn-submit' id='submitBtn' onclick='gradeQuiz();'>NỘP BÀI VÀ XEM KẾT QUẢ</button>
      </div>
  </div>
  
  <div id="clueModalOverlay" class="clue-modal-overlay" onclick="closeClueModal()"></div>
  <div id="clueModal" class="clue-modal">
      <h3 id="clueModalTitle" style="margin-top:0; color:var(--primary); font-size:1.3rem;"></h3>
      <div id="clueModalText" style="font-size:1.1rem; color:var(--text); margin-bottom:20px; padding:12px; background:var(--hover-bg); border-radius:8px; border:1px solid var(--border); line-height: 1.5;"></div>
      <button onclick="closeClueModal()" style="width:100%; padding:12px; background:var(--primary); color:white; border:none; border-radius:8px; font-size:1.05rem; font-weight:bold; cursor:pointer;">Đã hiểu</button>
  </div>

  <div id="noteModalOverlay" class="clue-modal-overlay" onclick="closeNoteModal()"></div>
  <div id="noteModal" class="clue-modal">
      <h3 style="margin-top:0; color:var(--primary); font-size:1.3rem;">Lưu ý cách tính điểm</h3>
      <div style="font-size:1.05rem; color:var(--text); margin-bottom:20px; text-align:left; line-height:1.6; padding: 0 8px;">
          - Trả lời đúng mỗi hàng (KHÔNG xem gợi ý): <strong>2 điểm</strong><br>
          - Trả lời đúng mỗi hàng (CÓ xem gợi ý): <strong>1 điểm</strong><br>
          - Trả lời sai hoặc không trả lời: <strong>0 điểm</strong><br><br>
          <div style="color: #10b981; background: #ecfdf5; padding: 10px; border-radius: 8px; border: 1px solid #a7f3d0;">
              ⭐ <strong>Đặc biệt (Từ khóa hàng dọc):</strong><br>
              + Nếu trả lời đúng tất cả từ khóa: Tổng điểm = (Số hàng chưa trả lời có từ khóa đúng và không xem gợi ý) × 2 + Điểm các hàng đã trả lời.<br>
              + Nếu sai/không trả lời từ khóa: Tổng điểm = Điểm các hàng đã trả lời.
          </div>
      </div>
      <button onclick="closeNoteModal()" style="width:100%; padding:12px; background:var(--primary); color:white; border:none; border-radius:8px; font-size:1.05rem; font-weight:bold; cursor:pointer;">Đã hiểu</button>
  </div>

  <script>
      const START_TIME_STR = "${startTime}";
      const END_TIME_STR = "${endTime}";
      const EXAM_ID = "${examUUID}";
      const GF_URL = "${this.data.gf_config.url}";
      const IS_ANTI_CHEAT = ${isAntiCheat};

      function parseDateVN(dateStr) {
          if (!dateStr || dateStr.trim() === "") return null;
          try {
              let parts = dateStr.trim().split(" ");
              if(parts.length < 2) return null;
              let timeParts = parts[0].split(":");
              let dateParts = parts[1].split("/");
              return new Date(dateParts[2], parseInt(dateParts[1]) - 1, dateParts[0], timeParts[0], timeParts[1]).getTime();
          } catch(e) { return null; }
      }
      const START_TIME = parseDateVN(START_TIME_STR);
      const END_TIME = parseDateVN(END_TIME_STR);

      function lockExam(reason) {
          if (IS_ANTI_CHEAT) localStorage.setItem(EXAM_ID + "_LOCKED", reason);
          document.documentElement.innerHTML = \`<body style="background:#111; color:#ef4444; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; margin:0; font-family:sans-serif; text-align:center; user-select:none;">
              <h1 style="font-size:3rem; margin-bottom:10px;">⛔ TRUY CẬP BỊ TỪ CHỐI</h1>
              <h3 style="color:#fff; font-weight:normal; max-width:80%; line-height:1.5;">\${reason}</h3>
              <p style="color:#888; margin-top:20px;">Mọi thắc mắc vui lòng liên hệ giáo viên của bạn.</p>
          </body>\`;
      }

      let nowInit = new Date().getTime();
      if (IS_ANTI_CHEAT && localStorage.getItem(EXAM_ID + "_SUBMITTED")) lockExam("Bạn đã hoàn thành và nộp bài thi này. Không thể làm lại.");
      else if (IS_ANTI_CHEAT && localStorage.getItem(EXAM_ID + "_LOCKED")) lockExam("Bài thi đã bị khóa!<br>Lý do: " + localStorage.getItem(EXAM_ID + "_LOCKED"));
      else if (END_TIME && nowInit >= END_TIME) lockExam("Kỳ thi ĐÃ KẾT THÚC!<br>Thời gian đóng form: " + END_TIME_STR);
      else if (START_TIME && nowInit < START_TIME) {
          document.documentElement.innerHTML = \`<body style="background:#f8fafc; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; margin:0; font-family:sans-serif; text-align:center; color:#0f172a; user-select:none;">
              <h1 style="color:#2563eb; margin-bottom:10px;">KỲ THI CHƯA BẮT ĐẦU</h1>
              <p style="font-size:1.2rem; margin:5px 0;">Thời gian mở đề: <b>\${START_TIME_STR}</b></p>
              <div id="countdownWatch" style="font-size:3.5rem; font-weight:bold; color:#ef4444; margin-top:20px; font-variant-numeric:tabular-nums; background:#fee2e2; padding:10px 30px; border-radius:12px; border:2px solid #fca5a5; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">--:--:--</div>
              <p style="color:#64748b; margin-top:20px; font-style:italic;">Trang web sẽ tự động hiển thị bài thi khi thời gian đếm ngược kết thúc.</p>
          </body>\`;
          let waitInterval = setInterval(() => {
              let r = Math.floor((START_TIME - new Date().getTime()) / 1000);
              if (r <= 0) { clearInterval(waitInterval); location.reload(); }
              else {
                  let h = Math.floor(r / 3600).toString().padStart(2, '0');
                  let m = Math.floor((r % 3600) / 60).toString().padStart(2, '0');
                  let s = (r % 60).toString().padStart(2, '0');
                  document.getElementById('countdownWatch').innerText = (h !== "00" ? h + ":" : "") + m + ":" + s;
              }
          }, 1000);
          throw new Error("Waiting for start time");
      } else { document.getElementById('quizApp').style.display = 'block'; }

      window.violationCount = 0; window.violationDetails = []; window.isForceSubmit = false; let isHandlingViolation = false;
      function handleViolation(reason) {
          if (!IS_ANTI_CHEAT) return;
          if (isHandlingViolation || localStorage.getItem(EXAM_ID + "_SUBMITTED")) return;
          isHandlingViolation = true; setTimeout(() => { isHandlingViolation = false; }, 1500);
          if (document.getElementById('submitBtn') && document.getElementById('submitBtn').style.display !== 'none') {
              window.violationCount++; window.violationDetails.push(reason);
              if (window.violationCount >= 3) {
                  alert("⛔ BẠN ĐÃ VI PHẠM QUÁ 3 LẦN! Hệ thống sẽ tự động nộp bài và khóa vĩnh viễn kỳ thi này.");
                  window.isForceSubmit = true;
                  if (typeof gradeQuiz === 'function') gradeQuiz();
                  setTimeout(() => lockExam("Hủy bài thi do vi phạm quy chế nhiều lần."), 3500);
              } else alert(\`⚠️ CẢNH BÁO GIAN LẬN (\${window.violationCount}/3)!\\nLý do: \${reason}.\\nHệ thống đã ghi nhận vào báo cáo!\`);
          }
      }
      
      document.addEventListener('DOMContentLoaded', () => {
          // LUÔN chặn copy, paste, click chuột phải và bôi đen để bảo vệ đề
          document.body.style.userSelect = 'none'; 
          document.body.style.webkitUserSelect = 'none';
          document.addEventListener('contextmenu', e => e.preventDefault());
          
          ['copy', 'cut', 'paste'].forEach(evt => document.addEventListener(evt, e => { 
              e.preventDefault(); 
              navigator.clipboard.writeText(''); 
              
              if (IS_ANTI_CHEAT) {
                  handleViolation("Hành vi sao chép/dán dữ liệu");
              } else {
                  alert("⚠️ Tính năng sao chép và dán đã bị vô hiệu hóa!"); 
              }
          }));
          
          document.addEventListener('keydown', function(e) {
              if (e.key === 'F12' || e.key === 'PrintScreen' || 
                 (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) || 
                 (e.ctrlKey && ['U', 'P', 'S', 'C'].includes(e.key.toUpperCase()))) {
                  e.preventDefault(); 
                  if (IS_ANTI_CHEAT) handleViolation("Sử dụng phím tắt bị cấm");
              }
          });
          
          // Chuyển tab / Mở cửa sổ khác CHỈ phạt nếu bật Chống gian lận
          document.addEventListener('visibilitychange', () => { 
              if (document.hidden && IS_ANTI_CHEAT) handleViolation("Chuyển Tab hoặc Thu nhỏ Trình duyệt"); 
          });
          
          window.addEventListener('blur', () => { 
              if (document.activeElement instanceof HTMLIFrameElement) return; 
              if (IS_ANTI_CHEAT) handleViolation("Mở ứng dụng khác / Rời khỏi cửa sổ thi"); 
          });
      });

      document.addEventListener('DOMContentLoaded', () => {
          function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }
          document.querySelectorAll('.section').forEach(section => {
              let questions = Array.from(section.querySelectorAll('.question'));
              if (questions.length > 1) {
                  shuffleArray(questions);
                  questions.forEach((q, index) => { section.appendChild(q); let qText = q.querySelector('.q-text strong'); if (qText && qText.innerText.startsWith('Câu')) qText.innerText = \`Câu \${index + 1}:\`; });
              }
          });
          document.querySelectorAll('.section[data-parttype="1"], .section[data-parttype="2"]').forEach(section => {
              section.querySelectorAll('.question').forEach(q => {
                  let options = Array.from(q.querySelectorAll('.option'));
                  if(options.length < 2) return;
                  let expl = q.querySelector('.explanation');
                  let correctAttr = expl.getAttribute('data-answer');
                  if (!correctAttr) return;
                  let correctAnswers = correctAttr.split(',');
                  shuffleArray(options); 
                  let newCorrectAnswers = []; let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  options.forEach((opt, index) => {
                      let newLetter = letters[index]; let input = opt.querySelector('input'); let oldVal = input.value;
                      input.value = newLetter; let strongTag = opt.querySelector('div strong'); if (strongTag) strongTag.innerHTML = \`\${newLetter}.\`;
                      if (correctAnswers.includes(oldVal)) newCorrectAnswers.push(newLetter);
                      q.insertBefore(opt, expl);
                  });
                  newCorrectAnswers.sort(); expl.setAttribute('data-answer', newCorrectAnswers.join(','));
              });
          });
      });

      window.usedClues = {}; 
      function openClueModal(title, text, qid, rIdx) {
          if (!window.usedClues[qid]) window.usedClues[qid] = new Set();
          window.usedClues[qid].add(rIdx);
          document.getElementById('clueModalTitle').innerText = title;
          document.getElementById('clueModalText').innerText = text;
          document.getElementById('clueModalOverlay').classList.add('active');
          document.getElementById('clueModal').classList.add('active');
      }
      function closeClueModal() { document.getElementById('clueModalOverlay').classList.remove('active'); document.getElementById('clueModal').classList.remove('active'); }
      function openNoteModal() { document.getElementById('noteModalOverlay').classList.add('active'); document.getElementById('noteModal').classList.add('active'); }
      function closeNoteModal() { document.getElementById('noteModalOverlay').classList.remove('active'); document.getElementById('noteModal').classList.remove('active'); }

      document.addEventListener('DOMContentLoaded', () => {
          document.querySelectorAll('.cw-cell').forEach(cell => {
              cell.addEventListener('input', function() { this.value = this.value.toUpperCase(); if (this.value.length === 1) { let next = this.nextElementSibling; if (next && next.classList.contains('cw-cell')) next.focus(); } });
              cell.addEventListener('keydown', function(e) {
                  if (e.key === 'Backspace' && this.value === '') { let prev = this.previousElementSibling; if (prev && prev.classList.contains('cw-cell')) { prev.focus(); prev.value = ''; } }
                  else if (e.key === 'ArrowRight') { let next = this.nextElementSibling; if (next && next.classList.contains('cw-cell')) next.focus(); }
                  else if (e.key === 'ArrowLeft') { let prev = this.previousElementSibling; if (prev && prev.classList.contains('cw-cell')) prev.focus(); }
              });
          });
      });

      function getPrimaryColor() { return getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#2563eb'; }
      document.addEventListener('DOMContentLoaded', () => {
          document.querySelectorAll('.match-container').forEach(container => {
              container.matchLinks = []; let selectedItem = null;
              container.querySelectorAll('.match-item').forEach(item => {
                  item.addEventListener('click', () => {
                      if (container.classList.contains('graded')) return;
                      if (selectedItem === item) { item.classList.remove('selected'); selectedItem = null; return; }
                      let isLeft = item.classList.contains('match-item-left');
                      if (selectedItem) {
                          let selectedIsLeft = selectedItem.classList.contains('match-item-left');
                          if (selectedIsLeft === isLeft) { selectedItem.classList.remove('selected'); selectedItem = item; item.classList.add('selected'); } 
                          else {
                              let leftId = isLeft ? item.dataset.id : selectedItem.dataset.id;
                              let rightId = isLeft ? selectedItem.dataset.id : item.dataset.id;
                              let existingIdx = container.matchLinks.findIndex(link => link.l === leftId && link.r === rightId);
                              if (existingIdx !== -1) container.matchLinks.splice(existingIdx, 1);
                              else container.matchLinks.push({l: leftId, r: rightId});
                              selectedItem.classList.remove('selected'); selectedItem = null; drawMatchLines(container);
                          }
                      } else { selectedItem = item; item.classList.add('selected'); }
                  });
              });
          });
          window.addEventListener('resize', () => { document.querySelectorAll('.match-container').forEach(c => drawMatchLines(c)); });
      });

      function clearMatch(containerId) {
          let container = document.getElementById(containerId);
          if(container && !container.classList.contains('graded')) { container.matchLinks = []; container.querySelectorAll('.match-item.selected').forEach(el => el.classList.remove('selected')); drawMatchLines(container); }
      }
      function drawMatchLines(container) {
          let svg = container.querySelector('.match-lines'); svg.innerHTML = '';
          let cRect = container.getBoundingClientRect(); let primaryColor = getPrimaryColor(); let isGraded = container.classList.contains('graded');
          container.matchLinks.forEach((link) => {
              let leftEl = container.querySelector(\`.match-item-left[data-id="\${link.l}"]\`);
              let rightEl = container.querySelector(\`.match-item-right[data-id="\${link.r}"]\`);
              if (leftEl && rightEl) {
                  let lRect = leftEl.getBoundingClientRect(), rRect = rightEl.getBoundingClientRect();
                  let x1 = lRect.right - cRect.left, y1 = lRect.top + lRect.height/2 - cRect.top;
                  let x2 = rRect.left - cRect.left, y2 = rRect.top + rRect.height/2 - cRect.top;
                  let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                  if (!isGraded) g.setAttribute('class', 'match-line-group');
                  let visibleLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                  visibleLine.setAttribute('x1', x1); visibleLine.setAttribute('y1', y1); visibleLine.setAttribute('x2', x2); visibleLine.setAttribute('y2', y2);
                  visibleLine.setAttribute('stroke', primaryColor); visibleLine.setAttribute('stroke-width', '3'); visibleLine.setAttribute('class', 'visible-line');
                  visibleLine.setAttribute('data-left', link.l); visibleLine.setAttribute('data-right', link.r);
                  let hitboxLine = null;
                  if (!isGraded) {
                      hitboxLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                      hitboxLine.setAttribute('x1', x1); hitboxLine.setAttribute('y1', y1); hitboxLine.setAttribute('x2', x2); hitboxLine.setAttribute('y2', y2);
                      hitboxLine.setAttribute('stroke', 'transparent'); hitboxLine.setAttribute('stroke-width', '20'); hitboxLine.setAttribute('class', 'hitbox-line');
                      g.addEventListener('click', (e) => { e.stopPropagation(); container.matchLinks = container.matchLinks.filter(l => !(l.l === link.l && l.r === link.r)); drawMatchLines(container); });
                  }
                  g.appendChild(visibleLine); if (hitboxLine) g.appendChild(hitboxLine); svg.appendChild(g);
              }
          });
      }

      let timerInterval; let seconds = 0;
      function startTimer() {
        document.getElementById('btnStartTimer').style.display = 'none';
        timerInterval = setInterval(() => {
            let displayStr = "";
            if (END_TIME) {
                let now = new Date().getTime(); let remain = Math.floor((END_TIME - now) / 1000);
                if (remain <= 0) {
                    displayStr = "00:00:00"; clearInterval(timerInterval);
                    if (document.getElementById('submitBtn') && document.getElementById('submitBtn').style.display !== 'none') {
                        alert("⏳ ĐÃ HẾT GIỜ LÀM BÀI! Hệ thống sẽ tự động nộp bài."); window.isForceSubmit = true;
                        if(typeof gradeQuiz === 'function') gradeQuiz();
                    }
                } else {
                    let h = Math.floor(remain / 3600).toString().padStart(2, '0'); let m = Math.floor((remain % 3600) / 60).toString().padStart(2, '0'); let s = (remain % 60).toString().padStart(2, '0');
                    displayStr = (h !== "00" ? h + ":" : "") + m + ":" + s;
                    if (remain <= 300) { document.querySelector('.timer').style.backgroundColor = '#ef4444'; document.querySelector('.timer').style.color = '#ffffff'; }
                }
            } else {
                seconds++; let h = Math.floor(seconds / 3600).toString().padStart(2, '0'); let m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0'); let s = (seconds % 60).toString().padStart(2, '0');
                displayStr = (h !== "00" ? h + ":" : "") + m + ":" + s;
            }
            document.getElementById('timeDisplay').innerText = displayStr;
        }, 1000);
      }

      async function sendToGoogleForm(totalScore, maxPossibleScore) {
          if (!GF_URL) return; 
          let violationReport = (window.violationCount > 0) ? "Vi phạm " + window.violationCount + " lần (" + window.violationDetails.join(" | ") + ")" : "Không vi phạm";
          const formData = new FormData();
          ${jsBuilder.join('\n          ')}
          try { await fetch(GF_URL, { method: 'POST', mode: 'no-cors', body: formData }); } catch (err) { console.error("Lỗi khi gửi Google Form:", err); }
      }

      async function gradeQuiz() {
         if (GF_URL) {
             let missing_fields = [];
             ${jsValid.join('\n             ')}
             if (missing_fields.length > 0 && !window.isForceSubmit) { alert("⚠️ Vui lòng điền đầy đủ các thông tin bắt buộc: " + missing_fields.join(", ") + " trước khi nộp bài!"); return; }
         }
         if (typeof timerInterval !== 'undefined') clearInterval(timerInterval); 
         let overlay = document.getElementById('loadingOverlay'); overlay.style.display = 'flex';
         let totalScore = 0; let maxPossibleScore = 0; let partStats = {};

         document.querySelectorAll('.section').forEach(function(section) {
           let partType = section.getAttribute('data-parttype'); let partTitle = section.getAttribute('data-title'); partStats[partTitle] = { score: 0, max: 0 };
           section.querySelectorAll('.question').forEach(function(q) {
             let qid = q.id; let feedback = ""; let qScore = 0; let qMax = 1; 
             if (partType === "1") {
               let selected = q.querySelector('input[name="' + qid + '"]:checked'); let correct = q.querySelector('.explanation').getAttribute('data-answer');
               if (!selected) feedback = '<span style="color:#ef4444;">✗ Bạn chưa trả lời. Đáp án đúng: ' + correct + '</span>';
               else if (selected.value === correct) { qScore = 1; feedback = '<span style="color:#10b981;">✓ Chính xác!</span>'; }
               else feedback = '<span style="color:#ef4444;">✗ Sai. Đáp án đúng: ' + correct + '</span>'; 
             } else if (partType === "2") {
               let selectedList = q.querySelectorAll('input[name="' + qid + '"]:checked');
               if (selectedList.length === 0) { let correct = q.querySelector('.explanation').getAttribute('data-answer'); feedback = '<span style="color:#ef4444;">✗ Bạn chưa trả lời. Đáp án đúng: ' + correct + '</span>'; }
               else {
                 let userAnswers = []; selectedList.forEach(function(el) { userAnswers.push(el.value); });
                 let correct = q.querySelector('.explanation').getAttribute('data-answer').split(',');
                 userAnswers.sort(); correct.sort();
                 if (userAnswers.join() === correct.join()) { qScore = 1; feedback = '<span style="color:#10b981;">✓ Chính xác!</span>'; }
                 else feedback = '<span style="color:#ef4444;">✗ Sai. Đáp án đúng: ' + correct.join(', ') + '</span>'; 
               }
             } else if (partType === "3") {
               let inputElem = document.getElementById(qid + '_input'); let userInput = inputElem.value.trim().toLowerCase();
               let correctData = q.querySelector('.explanation').getAttribute('data-answer'); let accepted = correctData.split('||').map(s => s.trim().toLowerCase());
               if (!userInput) feedback = '<span style="color:#ef4444;">✗ Bạn chưa trả lời. Đáp án đúng: ' + correctData.replace(/\\|\\|/g, " hoặc ") + '</span>';
               else {
                 if (accepted.includes(userInput)) { qScore = 1; feedback = '<span style="color:#10b981;">✓ Chính xác!</span>'; inputElem.style.color = '#10b981'; inputElem.style.borderColor = '#10b981'; }
                 else { feedback = '<span style="color:#ef4444;">✗ Sai. Đáp án đúng: ' + correctData.replace(/\\|\\|/g, " hoặc ") + '</span>'; inputElem.style.color = '#ef4444'; inputElem.style.borderColor = '#ef4444'; }
                 inputElem.disabled = true;
               }
             } else if (partType === "4") {
               let inputs = q.querySelectorAll('input'); let blankResults = [];
               inputs.forEach(function(inp, index) {
                 let accepted = inp.getAttribute('data-answer').split('||').map(s => s.trim().toLowerCase()); let userAnswer = inp.value.trim().toLowerCase();
                 if (userAnswer !== "") { if (accepted.includes(userAnswer)) blankResults.push({blank: index+1, correct: true, answer: userAnswer, accepted: accepted}); else blankResults.push({blank: index+1, correct: false, answer: userAnswer, accepted: accepted}); }
                 else blankResults.push({blank: index+1, answered: false, accepted: accepted}); 
               });
               inputs.forEach(function(inp, index) { let res = blankResults[index]; inp.style.color = res.correct ? '#10b981' : '#ef4444'; inp.style.borderColor = res.correct ? '#10b981' : '#ef4444'; inp.disabled = true; });
               let wrongBlanks = []; let unansweredBlanks = [];
               blankResults.forEach(function(r) { if (r.answered === false) unansweredBlanks.push(r.blank); else if (!r.correct) wrongBlanks.push(r.blank); });
               if (wrongBlanks.length === 0 && unansweredBlanks.length === 0) { feedback = '<span style="color:#10b981;">✓ Hoàn toàn chính xác!</span>'; qScore = 1; }
               else {
                 let answerList = ""; blankResults.forEach(function(r) { answerList += 'Vị trí ' + r.blank + ': ' + r.accepted.join(' hoặc ') + '<br>'; });
                 feedback = '<span style="color:#ef4444;">✗ Có chỗ điền sai hoặc chưa điền. Đáp án đúng:<br>' + answerList + '</span>';
               }
             } else if (partType === "5") {
               let matchContainer = q.querySelector('.match-container'); matchContainer.classList.add('graded'); drawMatchLines(matchContainer);
               let expectedStr = matchContainer.getAttribute('data-expected'); let expectedPairs = expectedStr ? expectedStr.split(',').sort() : [];
               let userLinksStr = matchContainer.matchLinks.map(link => link.l + '=' + link.r).sort();
               let isPerfect = true; let svg = matchContainer.querySelector('.match-lines');
               svg.querySelectorAll('.visible-line').forEach(line => {
                   let l = line.getAttribute('data-left'); let r = line.getAttribute('data-right'); let pairStr = l + '=' + r;
                   if (expectedPairs.includes(pairStr)) line.setAttribute('stroke', '#10b981'); 
                   else { line.setAttribute('stroke', '#ef4444'); isPerfect = false; }
               });
               if (userLinksStr.length !== expectedPairs.length || JSON.stringify(userLinksStr) !== JSON.stringify(expectedPairs)) isPerfect = false;
               if (isPerfect && expectedPairs.length > 0) { feedback = '<span style="color:#10b981;">✓ Nối hoàn toàn chính xác!</span>'; qScore = 1; }
               else { let answerPairs = q.querySelector('.explanation').getAttribute('data-answer-pairs'); feedback = '<span style="color:#ef4444;">✗ Sai hoặc nối thiếu. Đáp án đúng là:<br>' + answerPairs + '</span>'; }
               let clearBtn = q.querySelector('.btn-clear-match'); let matchTip = q.querySelector('.match-tip');
               if(clearBtn) clearBtn.style.display = 'none'; if(matchTip) matchTip.style.display = 'none';
             } else if (partType === "6") {
                 let cwContainer = q.querySelector('.cw-container'); let rows = cwContainer.querySelectorAll('.cw-row'); qMax = rows.length * 2; 
                 let keyCells = cwContainer.querySelectorAll('.cw-key'); let keywordCorrect = false;
                 if (keyCells.length > 0) {
                     keywordCorrect = true;
                     keyCells.forEach(k => { let correctChar = k.getAttribute('data-ans').toUpperCase(); let userChar = k.value.trim().toUpperCase(); if (userChar !== correctChar) keywordCorrect = false; });
                 }
                 let answeredScore = 0; let bonusScore = 0; let rowDetailsHtml = "";
                 rows.forEach((row, rIdx) => {
                     let inputs = row.querySelectorAll('.cw-cell'); let rowCorrect = true;
                     inputs.forEach(inp => {
                         let correctChar = inp.getAttribute('data-ans').toUpperCase(); let userChar = inp.value.trim().toUpperCase();
                         if (userChar !== correctChar) rowCorrect = false;
                         if (userChar === correctChar && userChar !== "") { inp.style.color = '#10b981'; inp.style.borderColor = '#10b981'; if (!inp.classList.contains('cw-key')) inp.style.backgroundColor = '#ecfdf5'; }
                         else { inp.style.color = '#ef4444'; inp.style.borderColor = '#ef4444'; if (!inp.classList.contains('cw-key')) inp.style.backgroundColor = '#fef2f2'; if (userChar === "") { inp.value = correctChar; inp.style.opacity = '0.5'; } else { inp.value = correctChar; } }
                         inp.disabled = true;
                     });
                     let usedHint = window.usedClues && window.usedClues[qid] && window.usedClues[qid].has(rIdx); let rowPts = 0; let statusText = "";
                     if (rowCorrect) { rowPts = usedHint ? 1 : 2; answeredScore += rowPts; statusText = usedHint ? '<span style="color:#2563eb;">(Đã xem gợi ý)</span>' : '<span style="color:#10b981;">(Đúng, không xem gợi ý)</span>'; }
                     else {
                         if (keywordCorrect && !usedHint) { rowPts = 2; bonusScore += 2; statusText = '<span style="color:#10b981;">(Từ khóa đúng, không xem gợi ý)</span>'; }
                         else { rowPts = 0; statusText = usedHint ? '<span style="color:#ef4444;">(Sai/Bỏ trống, đã xem gợi ý)</span>' : '<span style="color:#ef4444;">(Sai/Bỏ trống)</span>'; }
                     }
                     rowDetailsHtml += \`<div style="margin-bottom: 6px;">- Hàng ngang số \${rIdx + 1}: <strong>\${rowPts} / 2</strong> điểm \${statusText}</div>\`;
                 });
                 qScore = answeredScore + bonusScore;
                 if (keywordCorrect && keyCells.length > 0) rowDetailsHtml += \`<div style="margin-top: 12px; color: #10b981; font-weight: bold; background: #ecfdf5; padding: 10px; border-radius: 8px;">⭐ Bạn đã trả lời đúng toàn bộ Từ khóa hàng dọc! Các hàng chưa trả lời (và không xem gợi ý) được tính trọn điểm.</div>\`;
                 else if (keyCells.length > 0) rowDetailsHtml += \`<div style="margin-top: 12px; color: #ef4444; font-weight: bold; background: #fef2f2; padding: 10px; border-radius: 8px;">⚠ Trả lời sai/thiếu từ khóa hàng dọc. Chỉ tính điểm các hàng ngang đã trả lời.</div>\`;
                 cwContainer.querySelectorAll('.cw-num').forEach(numBtn => { numBtn.onclick = null; numBtn.style.cursor = 'default'; numBtn.style.opacity = '0.5'; });
                 let titleColor = (qScore === qMax) ? '#10b981' : (qScore > 0 ? '#f59e0b' : '#ef4444');
                 feedback = \`<span style="color:\${titleColor}; font-size:1.15rem; font-weight: bold;">Điểm đạt được: \${qScore} / \${qMax} điểm</span><div style="font-size:0.95rem; color:var(--text); margin-top:12px; padding:12px; background:white; border-radius:8px; border:1px solid var(--border);">\${rowDetailsHtml}</div>\`;
             }
             
             partStats[partTitle].score += qScore; partStats[partTitle].max += qMax; totalScore += qScore; maxPossibleScore += qMax;
             let expl = q.querySelector('.explanation'); let encodedSolution = expl.getAttribute('data-solution'); let solution = encodedSolution ? decodeURIComponent(encodedSolution) : ""; let cleanedSolution = solution.replace(/<br\\s*\\/?>/gi, '').trim();
             expl.innerHTML = \`<div style="margin-bottom: 8px;">\${feedback}</div>\`;
             if (cleanedSolution !== "") expl.innerHTML += \`<hr style="border: 0; border-top: 1px solid var(--border); margin: 12px 0;"><div style="color: var(--text-muted);"><strong>Lời giải chi tiết:</strong><br>\${solution}</div>\`; 
             expl.style.display = "block";
             if (partType === "6") q.style.borderLeftColor = qScore === qMax ? '#10b981' : (qScore > 0 ? '#f59e0b' : '#ef4444'); 
             else q.style.borderLeftColor = qScore > 0 ? '#10b981' : '#ef4444'; 
           });
         });
         
         await sendToGoogleForm(totalScore, maxPossibleScore);
         if (IS_ANTI_CHEAT) localStorage.setItem(EXAM_ID + "_SUBMITTED", "true");
         overlay.style.display = 'none';
         
         let summaryHtml = \`<div id='resultSummary' style='background:var(--card); padding:24px; border-radius:16px; margin-bottom:30px; border:2px solid var(--primary); box-shadow:0 4px 6px rgba(0,0,0,0.05); animation: popIn 0.3s ease-out;'><h2 style='margin-top:0; color:var(--primary); text-align:center;'>📊 BẢNG TỔNG HỢP ĐIỂM SỐ</h2><div style='font-size:1.8rem; text-align:center; font-weight:bold; margin-bottom:20px; color:var(--text);'>Tổng cộng: <span style='color:var(--primary);'>\${totalScore} / \${maxPossibleScore}</span></div><table style='width:100%; border-collapse:collapse; margin-top:10px;'>\`;
         for (let p in partStats) if (partStats[p].max > 0) summaryHtml += \`<tr><td style='padding:12px 8px; border-bottom:1px solid var(--border); font-size:1.05rem;'>\${p}</td><td style='padding:12px 8px; border-bottom:1px solid var(--border); text-align:right; font-weight:bold; font-size:1.1rem; color:var(--primary);'>\${partStats[p].score} / \${partStats[p].max}</td></tr>\`;
         summaryHtml += \`</table></div>\`;
         
         let container = document.querySelector('.container'); let header = container.querySelector('.header'); let existingSummary = document.getElementById('resultSummary');
         if(existingSummary) existingSummary.remove();
         header.insertAdjacentHTML('afterend', summaryHtml);
         document.getElementById('scoreDisplay').innerHTML = 'Tổng điểm: ' + totalScore + ' / ' + maxPossibleScore;
         document.querySelectorAll('input:not(.cw-cell), select').forEach(function(inp) { inp.disabled = true; });
         let sb = document.getElementById('submitBtn'); if(sb) sb.style.display = 'none';
         MathJax.typesetPromise(); window.scrollTo({top: 0, behavior: 'smooth'});
      }
  </script>
</body>
</html>`;

        const blob = new Blob([fullHTML], {type: "text/html"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = title.replace(/\s+/g,'_') + ".html";
        a.click();
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
