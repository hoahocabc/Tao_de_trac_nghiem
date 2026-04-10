const THEMES = {
    "Mặc định (Xanh hiện đại)": ":root { --primary: #2563eb; --primary-hover: #1d4ed8; --bg: #f8fafc; --card: #ffffff; --text: #0f172a; --text-muted: #64748b; --border: #e2e8f0; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #f1f5f9; }",
    "Chế độ Tối (Dark Mode)": ":root { --primary: #3b82f6; --primary-hover: #60a5fa; --bg: #0f172a; --card: #1e293b; --text: #f8fafc; --text-muted: #94a3b8; --border: #334155; --font-family: 'Inter', sans-serif; --bg-glass: rgba(30, 41, 59, 0.85); --hover-bg: #0f172a; }",
    "Trắng tinh khiết (Clean White)": ":root { --primary: #000000; --primary-hover: #333333; --bg: #ffffff; --card: #ffffff; --text: #000000; --text-muted: #666666; --border: #e5e5e5; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.95); --hover-bg: #f5f5f5; }"
};

const GUIDES = {
    1: "Nhập câu trắc nghiệm 1 lựa chọn. Bắt đầu câu bằng ##. Đáp án đúng có dấu # ở đầu.\nVí dụ:\n##\nThủ đô của VN?\n# A. Hà Nội\nB. Huế\nLời giải:\nGiải thích...",
    2: "Nhập câu trắc nghiệm nhiều lựa chọn. Bắt đầu bằng ##. Đáp án đúng có dấu #.\nVí dụ:\n##\nChất khí?\n# A. O2\nB. NaCl\n# C. H2",
    3: "Nhập câu trả lời ngắn. Bắt đầu bằng ##. Đáp án sau dấu # (mỗi dòng 1 đáp án chấp nhận).\nVí dụ:\n##\n1+1=?\n# 2\n# hai",
    4: "Nhập điền khuyết. Vị trí khuyết =(n)=.\nVí dụ:\n##\nNước có CT là =(1)=\nĐáp án:\n=(1)=\n# H2O",
    5: "Ghép đôi. Định dạng: Cột I:, Cột II:, Đáp án nối: # 1=A, 2=B",
    6: "Giải ô chữ. Gợi ý hàng ngang: 1. ... # ĐÁP ÁN. Từ khóa dọc: Từ khóa: # KEY"
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
        lucide.createIcons();
        this.renderThemes();
        this.renderTabs();
        this.renderToolbar();
        this.switchTab(1);
    },

    renderThemes() {
        const sel = document.getElementById('themeSelect');
        sel.innerHTML = Object.keys(THEMES).map(k => `<option value="${k}">${k}</option>`).join('');
    },

    renderTabs() {
        const c = document.getElementById('tabsContainer');
        const titles = [
            {icon: 'circle-dot', text: '1. Một lựa chọn'},
            {icon: 'check-square', text: '2. Nhiều lựa chọn'},
            {icon: 'pen-line', text: '3. Trả lời ngắn'},
            {icon: 'form-input', text: '4. Điền khuyết'},
            {icon: 'arrow-right-left', text: '5. Ghép đôi'},
            {icon: 'grid-3x3', text: '6. Ô chữ'}
        ];
        
        // Sử dụng CSS Grid để hiển thị 6 tab cực đẹp
        c.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-100 p-3 rounded-t-2xl";
        
        c.innerHTML = titles.map((t, i) => `
            <button class="tab-btn ${this.activeTab === i+1 ? 'tab-active' : 'tab-inactive'}" 
                    onclick="app.switchTab(${i+1})">
                <i data-lucide="${t.icon}" class="w-5 h-5 mb-1 ${this.activeTab === i+1 ? 'text-blue-600' : 'text-slate-400'}"></i>
                <span>${t.text}</span>
            </button>
        `).join('');
        lucide.createIcons();
    },

    switchTab(tab) {
        this.activeTab = tab;
        const titles = ["Một Lựa Chọn", "Nhiều Lựa Chọn", "Trả Lời Ngắn", "Điền Khuyết", "Ghép Đôi", "Ô Chữ"];
        document.getElementById('partTitle').innerHTML = `Phần ${tab}: ${titles[tab-1]}`;
        this.renderTabs();
        this.renderQList();
        document.getElementById('qInput').value = '';
    },

    showGuide() { alert(GUIDES[this.activeTab]); },

    renderToolbar() {
        const tb = document.getElementById('editorToolbar');
        let html = '<div class="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">';
        chem_symbols.forEach(sym => {
            html += `<button class="px-2.5 py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90 font-medium" onclick="app.insertText('${sym.t}', '${sym.s||''}', '${sym.e||''}')">${sym.t}</button>`;
        });
        html += `</div><div class="w-px h-6 bg-slate-300 mx-2"></div>
                 <div class="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
                    <button class="px-3 py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md font-bold transition-all active:scale-90" onclick="app.insertText('Bold', '<b>', '</b>')">B</button>
                    <button class="px-3 py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md italic transition-all active:scale-90" onclick="app.insertText('Italic', '<i>', '</i>')">I</button>
                 </div>
                 <button class="ml-auto px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:shadow-md rounded-lg text-sm font-bold flex items-center transition-all active:scale-95 border border-indigo-100" onclick="app.insertImage()"><i data-lucide="image" class="w-4 h-4 mr-2"></i> Chèn ảnh</button>`;
        tb.innerHTML = html;
        lucide.createIcons();
    },

    insertText(t, startTag, endTag) {
        const el = document.getElementById('qInput');
        const s = el.selectionStart, e = el.selectionEnd;
        if(startTag || endTag) {
            const sel = el.value.substring(s, e);
            const r = startTag + sel + endTag;
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
                const b64 = ev.target.result;
                this.insertText('', `<img src="${b64}" style="max-width:100%; border-radius:8px;">`, '');
            };
            reader.readAsDataURL(file);
        };
        f.click();
    },

    addQuestion() {
        const val = document.getElementById('qInput').value.trim();
        if(!val) return alert("Vui lòng nhập nội dung câu hỏi!");
        const chunks = val.includes("##") ? val.split("##").filter(x => x.trim()) : [val];
        chunks.forEach(c => {
            if(c.split('\n').length >= 2) this.data['part'+this.activeTab].push(c.trim());
        });
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
            <div class="p-4 border-2 border-slate-200 rounded-xl bg-white shadow-sm hover:border-blue-400 hover:shadow-md transition-all group relative pr-12 cursor-default">
                <div class="flex items-center gap-2 mb-2">
                    <span class="bg-blue-100 text-blue-700 text-xs font-black px-2 py-1 rounded-md">Câu ${i+1}</span>
                </div>
                <div class="text-sm text-slate-700 line-clamp-3 leading-relaxed">${q.replace(/</g,'&lt;')}</div>
                <button class="absolute top-4 right-4 p-2 bg-red-50 text-red-500 hover:text-white hover:bg-red-500 rounded-lg transition-all opacity-0 group-hover:opacity-100 active:scale-90" onclick="app.removeQuestion(${i})" title="Xóa câu hỏi">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
        
        document.getElementById('qList').innerHTML = html || `
            <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 py-12">
                <div class="bg-slate-100 p-4 rounded-full"><i data-lucide="inbox" class="w-10 h-10 text-slate-300"></i></div>
                <p class="text-sm font-medium">Chưa có câu hỏi nào ở phần này</p>
            </div>`;
        
        const badge = document.getElementById('qCountBadge');
        if(badge) badge.innerText = `${arr.length} câu`;
        lucide.createIcons();
    },

    // Project Management
    newProject() {
        if(confirm("Tạo dự án mới sẽ xóa toàn bộ dữ liệu hiện tại. Bạn có chắc chắn?")) {
            this.data = { part1:[], part2:[], part3:[], part4:[], part5:[], part6:[], gf_config:{url:"", fields:[]} };
            document.querySelectorAll('input[type="text"]').forEach(e => e.value='');
            document.getElementById('quizTitle').value = "BÀI TẬP TRẮC NGHIỆM";
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
                this.data = { part1: p.part1||[], part2: p.part2||[], part3: p.part3||[], part4: p.part4||[], part5: p.part5||[], part6: p.part6||[], gf_config: p.gf_config||{url:"", fields:[]} };
                this.switchTab(1);
                alert("Tải dự án thành công!");
            };
            reader.readAsText(file);
        };
        f.click();
    },

    // Google Form Auto Analyzer
    openGFSettings() {
        document.getElementById('gfModal').classList.remove('hidden');
        document.getElementById('gfUrlInput').value = this.data.gf_config.url;
        this.renderGFFields();
    },
    closeModal(id) { document.getElementById(id).classList.add('hidden'); },
    async autoAnalyzeGF() {
        const url = document.getElementById('gfUrlInput').value.trim();
        if(!url) return alert("Vui lòng nhập link Form!");
        
        const btn = document.querySelector('#gfModal .btn-green');
        const oldHtml = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 mr-2 animate-spin"></i> Đang phân tích...';
        btn.disabled = true;
        document.getElementById('gfUrlInput').disabled = true;
        
        try {
            const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const data = await res.json();
            const html = data.contents;
            const match = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*\])\s*;/s);
            if(!match) throw new Error("Không tìm thấy cấu trúc dữ liệu. Đảm bảo Form đang mở công khai (Public).");
            
            const jsonData = JSON.parse(match[1]);
            const qs = jsonData[1][1];
            let fields = [];
            qs.forEach(q => {
                if(q[4] && q[4][0]) {
                    let type = "Học sinh tự điền";
                    let t = q[1].toLowerCase();
                    if(t.includes('điểm') && t.includes('tối đa')) type = "Điểm tối đa (Tự động)";
                    else if(t.includes('điểm') || t.includes('score')) type = "Điểm đạt được (Tự động)";
                    else if(t.includes('vi phạm')) type = "Báo cáo vi phạm (Tự động)";
                    fields.push({ id: q[4][0][0].toString(), title: q[1], type: type, required: q[4][0][2] == 1 });
                }
            });
            this.data.gf_config.fields = fields;
            this.data.gf_config.url = url.split('?')[0].replace('/edit', '/formResponse').replace('/viewform', '/formResponse');
            if(!this.data.gf_config.url.endsWith('/formResponse')) this.data.gf_config.url += '/formResponse';
            
            document.getElementById('gfUrlInput').value = this.data.gf_config.url;
            this.renderGFFields();
            lucide.createIcons();
            alert("Phân tích dữ liệu Form thành công!");
        } catch(e) {
            alert("Lỗi: " + e.message);
        } finally {
            btn.innerHTML = oldHtml;
            btn.disabled = false;
            document.getElementById('gfUrlInput').disabled = false;
            lucide.createIcons();
        }
    },
    renderGFFields() {
        const tb = document.getElementById('gfFieldsTable');
        tb.innerHTML = this.data.gf_config.fields.map((f, i) => `
            <tr class="hover:bg-blue-50/50 transition-colors">
                <td class="p-3"><input type="text" class="form-input py-2" value="${f.title}" onchange="app.data.gf_config.fields[${i}].title=this.value"></td>
                <td class="p-3"><input type="text" class="form-input py-2 bg-slate-100 text-slate-500 font-mono text-xs cursor-not-allowed" value="${f.id}" readonly></td>
                <td class="p-3">
                    <select class="form-select py-2 font-medium text-sm" onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option ${f.type==="Học sinh tự điền"?"selected":""}>✍️ Học sinh tự điền</option>
                        <option ${f.type==="Điểm đạt được (Tự động)"?"selected":""}>✅ Điểm đạt được (Tự động)</option>
                        <option ${f.type==="Điểm tối đa (Tự động)"?"selected":""}>🌟 Điểm tối đa (Tự động)</option>
                        <option ${f.type==="Báo cáo vi phạm (Tự động)"?"selected":""}>⛔ Báo cáo vi phạm (Tự động)</option>
                    </select>
                </td>
                <td class="p-3 text-center">
                    <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer" ${f.required?"checked":""} onchange="app.data.gf_config.fields[${i}].required=this.checked">
                </td>
            </tr>
        `).join('');
    },
    saveGFConfig() {
        this.data.gf_config.url = document.getElementById('gfUrlInput').value;
        this.closeModal('gfModal');
    },

    // Parser functions mimicking Python
    parsePart12(lines) {
        let qLines=[], oLines=[], sLines=[], solMode=false;
        lines.forEach(l => {
            let cl = l.trimRight();
            if(cl.trimLeft().startsWith("Lời giải:")) { solMode=true; sLines.push(cl.trimLeft().substring(9)); return;}
            if(solMode) sLines.push(cl);
            else if(/^\s*#?\s*[A-Ea-e]\.\s/.test(cl)) oLines.push(cl);
            else qLines.push(cl);
        });
        return [qLines.join('<br>'), oLines, sLines.join('<br>')];
    },
    parsePart3(lines) {
        let qLines=[], aLines=[], sLines=[], solMode=false;
        lines.forEach(l => {
            let cl = l.trimRight();
            if(cl.trimLeft().startsWith("Lời giải:")) { solMode=true; sLines.push(cl.trimLeft().substring(9)); return;}
            if(solMode) sLines.push(cl);
            else if(cl.trimLeft().startsWith("#")) { let ans=cl.trimLeft().substring(1).trim(); if(ans) aLines.push(ans);}
            else qLines.push(cl);
        });
        return [qLines.join('<br>'), aLines.join('||'), sLines.join('<br>')];
    },

    // Massive HTML Exporter
    exportHTML() {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP TRẮC NGHIỆM";
        const creator = document.getElementById('creatorName').value;
        const themeCss = THEMES[document.getElementById('themeSelect').value] || THEMES["Mặc định (Xanh hiện đại)"];
        
        let jsBuilder=[], jsValid=[], formHtml=[];
        let hasStudentInputs = false;
        
        this.data.gf_config.fields.forEach(f => {
            let sId = `field_${f.id}`;
            if(f.type.includes("tự điền")) {
                hasStudentInputs = true;
                formHtml.push(`
                    <div style="margin-bottom: 15px;">
                        <label style="font-weight:bold;">${f.title} ${f.required?'<span style="color:red">*</span>':''}</label>
                        <input type="text" id="${sId}" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:6px; margin-top:5px;" placeholder="Nhập ${f.title}..." ${f.required?'required':''}>
                    </div>
                `);
                jsBuilder.push(`formData.append("entry.${f.id}", document.getElementById("${sId}").value.trim() || "Chưa điền");`);
                if(f.required) jsValid.push(`if(!document.getElementById("${sId}").value.trim()) missing_fields.push("${f.title}");`);
            } else if(f.type.includes("đạt")) jsBuilder.push(`formData.append("entry.${f.id}", score);`);
            else if(f.type.includes("tối đa")) jsBuilder.push(`formData.append("entry.${f.id}", maxScore);`);
            else if(f.type.includes("vi phạm")) jsBuilder.push(`formData.append("entry.${f.id}", violationReport);`);
        });

        let sectionsHTML = [];
        let partCounter = 1;
        
        [1,2,3].forEach(ptype => {
            if(this.data['part'+ptype].length === 0) return;
            sectionsHTML.push(`<div class='section' id='part${partCounter}' data-parttype='${ptype}' data-title='Phần ${ptype}'>`);
            sectionsHTML.push(`<div class='section-title'>Phần ${ptype}</div><div class='score-note'><i>Mỗi câu đúng được 1 điểm.</i></div>`);
            
            this.data['part'+ptype].forEach((rawQ, idx) => {
                let lines = rawQ.split('\n');
                let qid = `part${partCounter}_q${idx+1}`;
                
                if(ptype===1 || ptype===2) {
                    let [qtext, opts, sol] = this.parsePart12(lines);
                    let letCorrect = [];
                    let optHtml = opts.map((opt, j) => {
                        let isCorrect = opt.trimLeft().startsWith("#");
                        let clean = isCorrect ? opt.trimLeft().substring(1).trim() : opt.trimLeft();
                        let letter = clean.split('.')[0].trim().toUpperCase() || String.fromCharCode(65+j);
                        if(isCorrect) letCorrect.push(letter);
                        return `<label class='option'><input type='${ptype===1?'radio':'checkbox'}' name='${qid}' value='${letter}'><div><strong>${letter}.</strong> ${clean.split('.').slice(1).join('.')}</div></label>`;
                    }).join('');
                    
                    sectionsHTML.push(`
                        <div class='question' id='${qid}'>
                            <div class='q-text'><strong>Câu ${idx+1}:</strong><br>${qtext}</div>
                            ${optHtml}
                            <div class='explanation' id='${qid}_result' data-answer='${letCorrect.join(',')}' data-solution='${encodeURIComponent(sol)}'></div>
                        </div>
                    `);
                } else if(ptype===3) {
                    let [qtext, ans, sol] = this.parsePart3(lines);
                    sectionsHTML.push(`
                        <div class='question' id='${qid}'>
                            <div class='q-text'><strong>Câu ${idx+1}:</strong><br>${qtext}</div>
                            <div class='blank-container'>Đáp án: <input type='text' id='${qid}_input' style="border-bottom: 2px solid var(--primary); outline:none; text-align:center;"></div>
                            <div class='explanation' id='${qid}_result' data-answer='${ans}' data-solution='${encodeURIComponent(sol)}'></div>
                        </div>
                    `);
                }
            });
            sectionsHTML.push('</div>');
            partCounter++;
        });

        const fullHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8"><title>${title}</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"><\/script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>
    <style>
        ${themeCss}
        * { box-sizing: border-box; } body { font-family: var(--font-family); background: var(--bg); color: var(--text); line-height: 1.6; margin: 0;}
        .navbar { position: sticky; top:0; background: var(--bg-glass); backdrop-filter: blur(10px); padding: 12px 20px; display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); z-index: 1000;}
        .container { max-width: 800px; margin: 40px auto; padding: 0 16px; }
        .question { background: var(--card); padding: 24px; border-radius: 16px; margin-bottom: 24px; border: 1px solid var(--border); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .section-title { font-size: 1.25rem; font-weight: 600; color: var(--primary); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 0.5rem;}
        .option { display: flex; padding: 12px; margin: 8px 0; border: 1px solid var(--border); border-radius: 10px; cursor: pointer; }
        .option input { margin-right: 12px; transform: scale(1.2); }
        .btn-submit { background: var(--primary); color: white; border: none; padding: 16px 24px; width: 100%; border-radius: 12px; font-size: 1.1rem; cursor: pointer; font-weight:bold; }
        .explanation { display: none; margin-top: 16px; padding: 16px; background: var(--hover-bg); border-radius: 12px; border: 1px solid var(--border); }
    </style>
</head>
<body>
    <div id="quizApp">
        <div class="navbar">
            <div style="background:var(--primary); color:white; padding:6px 16px; border-radius:99px; font-weight:bold;" id="scoreDisplay">Điểm số: 0</div>
            <div style="color:red; font-weight:bold; font-size:1.1rem; background:#fee2e2; padding:6px 16px; border-radius:99px;">⏱ <span id="timeDisplay">--:--</span></div>
        </div>
        <div class="container">
            <h1 style="text-align:center; color:var(--text);">${title}</h1>
            ${creator ? `<p style="text-align:center; color:var(--text-muted);">${creator}</p>` : ''}
            
            ${hasStudentInputs ? `<div style="background:white; padding:24px; border-radius:12px; border:2px solid var(--primary); margin-bottom:30px;">${formHtml.join('')}</div>` : ''}
            
            ${sectionsHTML.join('')}
            
            <button class="btn-submit" id="submitBtn" onclick="gradeQuiz()">NỘP BÀI VÀ XEM KẾT QUẢ</button>
        </div>
    </div>
    <script>
        const START_TIME = "${document.getElementById('startTime').value}";
        const END_TIME = "${document.getElementById('endTime').value}";
        window.violationCount = 0; window.violationDetails = [];

        document.addEventListener('visibilitychange', () => { if(document.hidden) handleViolation("Chuyển tab/Thu nhỏ"); });
        window.addEventListener('blur', () => { handleViolation("Rời cửa sổ thi"); });

        function handleViolation(r) {
            if(localStorage.getItem("SUBMITTED")) return;
            window.violationCount++; window.violationDetails.push(r);
            if(window.violationCount >= 3) { alert("⛔ VI PHẠM 3 LẦN! TỰ ĐỘNG NỘP BÀI."); gradeQuiz(); }
            else { alert("⚠️ CẢNH BÁO (" + window.violationCount + "/3): " + r); }
        }

        async function gradeQuiz() {
            let missing_fields = [];
            ${jsValid.join('\n')}
            if(missing_fields.length > 0 && window.violationCount < 3) { alert("Vui lòng điền: " + missing_fields.join(', ')); return; }

            let totalScore = 0, maxScore = 0;
            document.querySelectorAll('.section').forEach(sec => {
                let pt = sec.getAttribute('data-parttype');
                sec.querySelectorAll('.question').forEach(q => {
                    maxScore++; let qScore=0; let fb="";
                    if(pt == "1" || pt == "2") {
                        let sel = Array.from(q.querySelectorAll('input:checked')).map(e=>e.value).sort().join(',');
                        let cor = q.querySelector('.explanation').getAttribute('data-answer').split(',').sort().join(',');
                        if(sel===cor && sel!=="") { qScore=1; fb="<span style='color:green'>✓ Chính xác!</span>"; }
                        else { fb="<span style='color:red'>✗ Sai. Đáp án: " + cor + "</span>"; }
                    } else if(pt == "3") {
                        let sel = q.querySelector('input[type=text]').value.trim();
                        let cor = q.querySelector('.explanation').getAttribute('data-answer').split('||');
                        if(cor.includes(sel)) { qScore=1; fb="<span style='color:green'>✓ Chính xác!</span>"; }
                        else { fb="<span style='color:red'>✗ Sai. Đáp án: " + cor.join(' hoặc ') + "</span>"; }
                    }
                    totalScore += qScore;
                    let expl = q.querySelector('.explanation');
                    let sol = decodeURIComponent(expl.getAttribute('data-solution'));
                    expl.innerHTML = fb + (sol ? "<hr><b>Lời giải:</b><br>" + sol : "");
                    expl.style.display = "block";
                });
            });

            document.getElementById('scoreDisplay').innerText = "Điểm: " + totalScore + " / " + maxScore;
            document.getElementById('submitBtn').style.display = 'none';
            document.querySelectorAll('input').forEach(i=>i.disabled=true);
            localStorage.setItem("SUBMITTED", "true");

            const GF_URL = "${this.data.gf_config.url}";
            if(GF_URL) {
                let score = totalScore, violationReport = window.violationCount > 0 ? "Vi phạm " + window.violationCount + " lần" : "Không vi phạm";
                const formData = new FormData();
                ${jsBuilder.join('\n')}
                try { await fetch(GF_URL, { method: 'POST', mode: 'no-cors', body: formData }); } catch(e){}
            }
            window.scrollTo({top:0, behavior:'smooth'});
        }
    <\/script>
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
