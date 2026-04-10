const THEMES = {
    "Mặc định (Xanh hiện đại)": ":root { --primary: #3b82f6; --primary-hover: #2563eb; --bg: #f8fafc; --card: #ffffff; --text: #0f172a; --text-muted: #64748b; --border: #e2e8f0; --font-family: 'Inter', sans-serif; --bg-glass: rgba(255, 255, 255, 0.85); --hover-bg: #f1f5f9; }",
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
            {icon: 'circle-dot', text: '1 lựa chọn'},
            {icon: 'check-square', text: 'Nhiều lựa chọn'},
            {icon: 'pen-line', text: 'Trả lời ngắn'},
            {icon: 'form-input', text: 'Điền khuyết'},
            {icon: 'arrow-right-left', text: 'Ghép đôi'},
            {icon: 'grid-3x3', text: 'Ô chữ'}
        ];
        
        c.innerHTML = titles.map((t, i) => `
            <button class="tab-btn ${this.activeTab === i+1 ? 'tab-active' : 'tab-inactive'}" 
                    onclick="app.switchTab(${i+1})">
                <i data-lucide="${t.icon}" class="w-6 h-6 mb-2 ${this.activeTab === i+1 ? 'text-blue-600' : 'text-slate-400'}"></i>
                <span class="text-center w-full truncate text-sm">Phần ${i+1}</span>
            </button>
        `).join('');
        lucide.createIcons();
    },

    switchTab(tab) {
        this.activeTab = tab;
        const titles = ["Một Lựa Chọn", "Nhiều Lựa Chọn", "Trả Lời Ngắn", "Điền Khuyết", "Ghép Đôi", "Ô Chữ"];
        document.getElementById('partTitle').innerHTML = `Phần ${tab}: <span class="text-slate-700">${titles[tab-1]}</span>`;
        this.renderTabs();
        this.renderQList();
        document.getElementById('qInput').value = '';
    },

    showGuide() { alert(GUIDES[this.activeTab]); },

    renderToolbar() {
        const tb = document.getElementById('editorToolbar');
        let html = '<div class="flex bg-white rounded-lg p-1 border-2 border-slate-200 shadow-[0_2px_0_0_#e2e8f0] gap-1">';
        chem_symbols.forEach(sym => {
            html += `<button class="px-2.5 py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all active:scale-90 font-bold" onclick="app.insertText('${sym.t}', '${sym.s||''}', '${sym.e||''}')">${sym.t}</button>`;
        });
        html += `</div><div class="w-px h-6 bg-slate-300 mx-2"></div>
                 <div class="flex bg-white rounded-lg p-1 border-2 border-slate-200 shadow-[0_2px_0_0_#e2e8f0] gap-1">
                    <button class="px-3 py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md font-black transition-all active:scale-90" onclick="app.insertText('Bold', '<b>', '</b>')">B</button>
                    <button class="px-3 py-1.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md italic font-black transition-all active:scale-90" onclick="app.insertText('Italic', '<i>', '</i>')">I</button>
                 </div>
                 <button class="ml-auto px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-2 border-indigo-200 shadow-[0_2px_0_0_#c7d2fe] rounded-lg text-sm font-bold flex items-center transition-all active:translate-y-1 active:shadow-none" onclick="app.insertImage()"><i data-lucide="image" class="w-4 h-4 mr-2"></i> Chèn ảnh</button>`;
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
                this.insertText('', `<img src="${b64}" style="max-width:100%; border-radius:8px; border:2px solid #e2e8f0; margin:10px 0;">`, '');
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
            <div class="p-4 border-2 border-slate-200 rounded-xl bg-white shadow-[0_4px_0_0_#e2e8f0] hover:border-blue-400 hover:shadow-[0_4px_0_0_#60a5fa] transition-all group relative pr-14 cursor-default transform hover:-translate-y-1">
                <div class="flex items-center gap-2 mb-3 border-b-2 border-slate-100 pb-2">
                    <span class="bg-blue-100 text-blue-700 text-xs font-black px-3 py-1.5 rounded-lg">Câu ${i+1}</span>
                </div>
                <div class="text-sm text-slate-700 line-clamp-3 leading-relaxed font-medium">${q.replace(/</g,'&lt;')}</div>
                <button class="absolute top-4 right-4 p-2.5 bg-red-50 text-red-500 hover:text-white hover:bg-red-500 border-2 border-red-100 hover:border-red-600 rounded-xl transition-all opacity-0 group-hover:opacity-100 active:scale-90 shadow-sm" onclick="app.removeQuestion(${i})" title="Xóa câu hỏi">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
        
        document.getElementById('qList').innerHTML = html || `
            <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 py-12">
                <div class="bg-slate-100 p-5 rounded-2xl shadow-inner"><i data-lucide="inbox" class="w-12 h-12 text-slate-300"></i></div>
                <p class="text-sm font-bold text-slate-400">Chưa có câu hỏi nào</p>
            </div>`;
        
        const badge = document.getElementById('qCountBadge');
        if(badge) badge.innerText = `${arr.length} câu`;
        lucide.createIcons();
    },

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

    openGFSettings() {
        const modal = document.getElementById('gfModal');
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95', 'translate-y-4');
        content.classList.add('scale-100', 'translate-y-0');

        document.getElementById('gfUrlInput').value = this.data.gf_config.url;
        this.renderGFFields();
    },
    closeModal(id) { 
        const modal = document.getElementById(id);
        const content = modal.querySelector('.modal-content');
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-100', 'translate-y-0');
        content.classList.add('scale-95', 'translate-y-4');
    },
    async autoAnalyzeGF() {
        const url = document.getElementById('gfUrlInput').value.trim();
        if(!url) return alert("Vui lòng nhập link Form!");
        
        const btn = document.getElementById('btnAnalyze');
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
                <td class="p-3"><input type="text" class="form-input py-2 font-bold" value="${f.title}" onchange="app.data.gf_config.fields[${i}].title=this.value"></td>
                <td class="p-3"><input type="text" class="form-input py-2 bg-slate-100 text-slate-500 font-mono text-xs cursor-not-allowed" value="${f.id}" readonly></td>
                <td class="p-3">
                    <select class="form-select py-2 font-bold text-sm" onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option ${f.type==="Học sinh tự điền"?"selected":""}>✍️ Học sinh tự điền</option>
                        <option ${f.type==="Điểm đạt được (Tự động)"?"selected":""}>✅ Điểm đạt được</option>
                        <option ${f.type==="Điểm tối đa (Tự động)"?"selected":""}>🌟 Điểm tối đa</option>
                        <option ${f.type==="Báo cáo vi phạm (Tự động)"?"selected":""}>⛔ Báo cáo vi phạm</option>
                    </select>
                </td>
                <td class="p-3 text-center">
                    <div class="flex justify-center items-center h-full">
                        <input type="checkbox" class="w-6 h-6 text-blue-600 rounded-md border-2 border-slate-300 focus:ring-blue-500 cursor-pointer shadow-sm" ${f.required?"checked":""} onchange="app.data.gf_config.fields[${i}].required=this.checked">
                    </div>
                </td>
            </tr>
        `).join('');
    },
    saveGFConfig() {
        this.data.gf_config.url = document.getElementById('gfUrlInput').value;
        this.closeModal('gfModal');
    },

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
                        <input type="text" id="${sId}" style="width:100%; padding:10px; border:2px solid #e2e8f0; border-radius:8px; margin-top:5px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); font-family: inherit;" placeholder="Nhập ${f.title}..." ${f.required?'required':''}>
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
                            <div class='blank-container'>Đáp án: <input type='text' id='${qid}_input' style="border-bottom: 2px solid var(--primary); border-top: none; border-left: none; border-right: none; background: transparent; outline:none; text-align:center; font-weight:bold;"></div>
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"><\/script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>
    <style>
        ${themeCss}
        * { box-sizing: border-box; } body { font-family: var(--font-family); background: var(--bg); color: var(--text); line-height: 1.6; margin: 0; padding-bottom: 50px;}
        .navbar { position: sticky; top:0; background: var(--bg-glass); backdrop-filter: blur(10px); padding: 15px 20px; display: flex; justify-content: space-between; border-bottom: 2px solid var(--border); z-index: 1000; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);}
        .container { max-width: 800px; margin: 40px auto; padding: 0 20px; }
        .question { background: var(--card); padding: 25px; border-radius: 16px; margin-bottom: 25px; border: 2px solid var(--border); box-shadow: 0 4px 0 0 var(--border); transition: transform 0.2s; }
        .question:hover { transform: translateY(-2px); border-color: var(--primary); box-shadow: 0 4px 0 0 var(--primary); }
        .section-title { font-size: 1.4rem; font-weight: 800; color: var(--primary); border-bottom: 3px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 0.5rem;}
        .option { display: flex; padding: 15px; margin: 10px 0; border: 2px solid var(--border); border-radius: 12px; cursor: pointer; transition: all 0.2s; font-weight: 500; background: var(--card);}
        .option:hover { background: var(--hover-bg); border-color: var(--primary); transform: translateY(-1px); }
        .option input { margin-right: 15px; transform: scale(1.3); cursor: pointer;}
        .btn-submit { background: var(--primary); color: white; border: none; padding: 18px 24px; width: 100%; border-radius: 14px; font-size: 1.2rem; cursor: pointer; font-weight:900; box-shadow: 0 6px 0 0 var(--primary-hover); transition: all 0.1s; text-transform: uppercase; letter-spacing: 1px;}
        .btn-submit:active { transform: translateY(4px); box-shadow: 0 2px 0 0 var(--primary-hover); }
        .explanation { display: none; margin-top: 20px; padding: 20px; background: var(--hover-bg); border-radius: 12px; border: 2px dashed var(--border); font-size: 0.95rem;}
    </style>
</head>
<body>
    <div id="quizApp">
        <div class="navbar">
            <div style="background:var(--primary); color:white; padding:8px 20px; border-radius:12px; font-weight:900; box-shadow: 0 3px 0 0 var(--primary-hover);" id="scoreDisplay">Điểm số: 0</div>
            <div style="color:#ef4444; font-weight:900; font-size:1.1rem; background:#fee2e2; padding:8px 20px; border-radius:12px; border: 2px solid #fca5a5; box-shadow: 0 3px 0 0 #fca5a5;">⏱ <span id="timeDisplay">--:--</span></div>
        </div>
        <div class="container">
            <h1 style="text-align:center; color:var(--text); font-size: 2rem; font-weight: 900; margin-bottom: 5px;">${title}</h1>
            ${creator ? `<p style="text-align:center; color:var(--text-muted); font-weight: 600; margin-bottom: 30px;">Biên soạn: ${creator}</p>` : '<div style="margin-bottom:30px;"></div>'}
            
            ${hasStudentInputs ? `<div style="background:var(--card); padding:30px; border-radius:16px; border:3px solid var(--primary); margin-bottom:40px; box-shadow: 0 6px 0 0 var(--primary-hover);">${formHtml.join('')}</div>` : ''}
            
            ${sectionsHTML.join('')}
            
            <button class="btn-submit" id="submitBtn" onclick="gradeQuiz()">Nộp Bài Chấm Điểm</button>
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
            if(missing_fields.length > 0 && window.violationCount < 3) { alert("Vui lòng điền đầy đủ các thông tin: " + missing_fields.join(', ')); return; }
            if(!confirm("Bạn có chắc chắn muốn nộp bài?")) return;

            let totalScore = 0, maxScore = 0;
            document.querySelectorAll('.section').forEach(sec => {
                let pt = sec.getAttribute('data-parttype');
                sec.querySelectorAll('.question').forEach(q => {
                    maxScore++; let qScore=0; let fb="";
                    if(pt == "1" || pt == "2") {
                        let sel = Array.from(q.querySelectorAll('input:checked')).map(e=>e.value).sort().join(',');
                        let cor = q.querySelector('.explanation').getAttribute('data-answer').split(',').sort().join(',');
                        if(sel===cor && sel!=="") { qScore=1; fb="<span style='color:#059669; font-weight:900; font-size:1.1rem;'>✓ TRẢ LỜI ĐÚNG!</span>"; }
                        else { fb="<span style='color:#dc2626; font-weight:900; font-size:1.1rem;'>✗ SAI. ĐÁP ÁN: " + cor + "</span>"; }
                    } else if(pt == "3") {
                        let sel = q.querySelector('input[type=text]').value.trim();
                        let cor = q.querySelector('.explanation').getAttribute('data-answer').split('||');
                        if(cor.includes(sel)) { qScore=1; fb="<span style='color:#059669; font-weight:900; font-size:1.1rem;'>✓ TRẢ LỜI ĐÚNG!</span>"; }
                        else { fb="<span style='color:#dc2626; font-weight:900; font-size:1.1rem;'>✗ SAI. ĐÁP ÁN: " + cor.join(' hoặc ') + "</span>"; }
                    }
                    totalScore += qScore;
                    let expl = q.querySelector('.explanation');
                    let sol = decodeURIComponent(expl.getAttribute('data-solution'));
                    expl.innerHTML = fb + (sol ? "<hr style='border:1px solid var(--border); margin:15px 0;'><b>Lời giải chi tiết:</b><br>" + sol : "");
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
