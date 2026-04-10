// ============================================================
// CONFIG: THEMES
// ============================================================
var THEMES = {
    "Mặc định (Xanh hiện đại)": ":root{--primary:#2563eb;--primary-hover:#1d4ed8;--bg:#f8fafc;--card:#ffffff;--text:#0f172a;--text-muted:#64748b;--border:#e2e8f0;--hover-bg:#f1f5f9;--font:'Inter',sans-serif;}",
    "Chế độ Tối (Dark Mode)":   ":root{--primary:#3b82f6;--primary-hover:#60a5fa;--bg:#0f172a;--card:#1e293b;--text:#f8fafc;--text-muted:#94a3b8;--border:#334155;--hover-bg:#1e293b;--font:'Inter',sans-serif;}",
    "Trắng tinh khiết":         ":root{--primary:#18181b;--primary-hover:#3f3f46;--bg:#ffffff;--card:#ffffff;--text:#09090b;--text-muted:#71717a;--border:#e4e4e7;--hover-bg:#f4f4f5;--font:'Inter',sans-serif;}",
    "Xanh thiên nhiên":         ":root{--primary:#16a34a;--primary-hover:#15803d;--bg:#f0fdf4;--card:#ffffff;--text:#14532d;--text-muted:#166534;--border:#bbf7d0;--hover-bg:#f0fdf4;--font:'Inter',sans-serif;}",
    "Tím thanh lịch":           ":root{--primary:#7c3aed;--primary-hover:#6d28d9;--bg:#faf5ff;--card:#ffffff;--text:#4c1d95;--text-muted:#5b21b6;--border:#e9d5ff;--hover-bg:#faf5ff;--font:'Inter',sans-serif;}",
    "Hoàng hôn":                ":root{--primary:#ea580c;--primary-hover:#c2410c;--bg:#fff7ed;--card:#ffffff;--text:#7c2d12;--text-muted:#9a3412;--border:#ffedd5;--hover-bg:#fff7ed;--font:'Inter',sans-serif;}",
    "Đại dương":                ":root{--primary:#0891b2;--primary-hover:#0e7490;--bg:#ecfeff;--card:#ffffff;--text:#164e63;--text-muted:#155e75;--border:#cffafe;--hover-bg:#ecfeff;--font:'Inter',sans-serif;}",
    "Hồng Pastel":              ":root{--primary:#db2777;--primary-hover:#be185d;--bg:#fdf2f8;--card:#ffffff;--text:#831843;--text-muted:#9d174d;--border:#fbcfe8;--hover-bg:#fdf2f8;--font:'Inter',sans-serif;}",
    "Tối giản xám":             ":root{--primary:#475569;--primary-hover:#334155;--bg:#f1f5f9;--card:#f8fafc;--text:#334155;--text-muted:#475569;--border:#cbd5e1;--hover-bg:#f1f5f9;--font:'Inter',sans-serif;}"
};

// ============================================================
// CONFIG: HƯỚNG DẪN
// ============================================================
var GUIDES = {
    1: "PHẦN 1 – TRẮC NGHIỆM MỘT LỰA CHỌN\n\nMỗi câu bắt đầu bằng ##\nĐáp án ĐÚNG có dấu # ở đầu dòng.\n\nVí dụ:\n##\nNguyên tố nào sau đây là kim loại kiềm?\n# A. Natri (Na)\nB. Magie (Mg)\nC. Nhôm (Al)\nD. Silic (Si)\nLời giải:\nNatri (Na) thuộc nhóm IA - kim loại kiềm.",

    2: "PHẦN 2 – TRẮC NGHIỆM NHIỀU LỰA CHỌN\n\nCó thể có nhiều đáp án đúng.\nMỗi đáp án ĐÚNG có dấu # ở đầu dòng.\n\nVí dụ:\n##\nHạt nào có trong hạt nhân nguyên tử?\n# A. Proton\nB. Electron\n# C. Neutron\nD. Photon",

    3: "PHẦN 3 – TRẢ LỜI NGẮN\n\nMỗi câu bắt đầu bằng ##\nĐáp án chấp nhận viết sau dấu # (có thể nhiều đáp án)\n\nVí dụ:\n##\nNguyên tử có 17 proton và 18 neutron. Khối lượng nguyên tử?\n# 35\n# 35u\nLời giải:\nA = Z + N = 17 + 18 = 35",

    4: "PHẦN 4 – ĐIỀN KHUYẾT\n\nVị trí trống dùng ký hiệu =(n)=\nĐáp án viết sau dòng 'Đáp án:' theo từng ô.\n\nVí dụ:\n##\nHình vuông có =(1)= cạnh bằng nhau và các góc bằng =(2)= độ.\nĐáp án:\n=(1)=\n# 4\n# bốn\n=(2)=\n# 90\n# chín mươi",

    5: "PHẦN 5 – GHÉP ĐÔI\n\nCột I và Cột II. Đáp án nối ghi sau dấu #\n\nVí dụ:\n##\nGhép động vật với số chân:\nCột I:\n1. Chó\n2. Gà\n3. Nhện\nCột II:\nA. hai chân\nB. bốn chân\nC. tám chân\n# 1=B, 2=A, 3=C",

    6: "PHẦN 6 – Ô CHỮ\n\nMỗi gợi ý: 'Nội dung # ĐÁP ÁN'\nTừ khóa dọc (tùy chọn): 'Từ khóa: # TUKHOA'\n⚠ Độ dài từ khóa = số hàng ngang\n\nVí dụ:\n##\nChủ đề: Hạt cơ bản\n1. Hạt mang điện dương trong hạt nhân # PROTON\n2. Hạt không mang điện # NEUTRON\n3. Hạt mang điện âm # ELECTRON\nTừ khóa: # ONE"
};

// ============================================================
// CONFIG: KÝ HIỆU
// ============================================================
var SYMS = ["+","-","×","÷","±","⇌","→","←","↑","↓","≈","≠","≤","≥","π","α","β","γ","Δ","∞","°C"];
var MORE_SYMS = ["⟹","⟸","∑","μ","σ","ρ","η","ν","τ","φ","ω","⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","e⁻"];

// ============================================================
// DATA
// ============================================================
var AppData = {
    part1: [], part2: [], part3: [], part4: [], part5: [], part6: [],
    gf_config: { url: "", fields: [] }
};
var activeTab = 1;

// ============================================================
// KHỞI TẠO
// ============================================================
var App = {};

App.init = function() {
    // Themes
    var sel = document.getElementById('themeSelect');
    sel.innerHTML = '';
    Object.keys(THEMES).forEach(function(k) {
        var opt = document.createElement('option');
        opt.value = k; opt.textContent = k;
        sel.appendChild(opt);
    });

    App.renderTabs();
    App.renderToolbar();
    App.renderQList();

    // Lucide icons
    if (window.lucide) lucide.createIcons();
};

// ============================================================
// TABS
// ============================================================
App.renderTabs = function() {
    var container = document.getElementById('tabsContainer');
    var titles = ["1 Lựa chọn","Nhiều lựa chọn","Trả lời ngắn","Điền khuyết","Ghép đôi","Ô chữ"];
    var icons  = ["circle-dot","check-square","pen-line","layout-template","arrow-right-left","grid-3x3"];
    var html = '';
    for (var i = 1; i <= 6; i++) {
        var n = AppData['part'+i].length;
        var active = (activeTab === i) ? ' active' : '';
        html += '<button class="tab-btn' + active + '" onclick="App.switchTab(' + i + ')">'
              + '<i data-lucide="' + icons[i-1] + '" style="width:18px;height:18px;margin-bottom:3px;"></i>'
              + '<span>P' + i + '</span>'
              + (n > 0 ? '<span style="background:#dbeafe;color:#1d4ed8;font-size:9px;font-weight:900;padding:1px 5px;border-radius:99px;">' + n + '</span>' : '')
              + '</button>';
    }
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
};

App.switchTab = function(tab) {
    activeTab = tab;
    var titles = ["Một Lựa Chọn","Nhiều Lựa Chọn","Trả Lời Ngắn","Điền Khuyết","Ghép Đôi","Ô Chữ"];
    document.getElementById('partTitle').textContent = 'Phần ' + tab + ': ' + titles[tab-1];
    document.getElementById('qInput').value = '';
    App.renderTabs();
    App.renderQList();
};

// ============================================================
// TOOLBAR
// ============================================================
App.renderToolbar = function() {
    var tb = document.getElementById('toolbar');
    var html = '';

    // Ký hiệu thường
    SYMS.forEach(function(s) {
        html += '<button class="tb-btn" onclick="App.ins(\'' + s.replace(/'/g,"\\'") + '\',\'\',\'\')" title="' + s + '">' + s + '</button>';
    });

    // Sup/Sub
    html += '<button class="tb-btn" onclick="App.ins(\'\',\'<sup>\',\'</sup>\')" title="Chỉ số trên">x²</button>';
    html += '<button class="tb-btn" onclick="App.ins(\'\',\'<sub>\',\'</sub>\')" title="Chỉ số dưới">x₂</button>';

    // Ngăn cách
    html += '<span style="width:1px;height:20px;background:#e2e8f0;display:inline-block;margin:0 4px;"></span>';

    // Bold / Italic
    html += '<button class="tb-btn" style="font-weight:900;" onclick="App.ins(\'\',\'<b>\',\'</b>\')" title="In đậm">B</button>';
    html += '<button class="tb-btn" style="font-style:italic;font-weight:900;" onclick="App.ins(\'\',\'<i>\',\'</i>\')" title="In nghiêng">I</button>';

    // LaTeX
    html += '<button class="tb-btn" style="color:#7c3aed;font-size:0.8rem;" onclick="App.ins(\'\',\'$\',\'$\')" title="Công thức LaTeX">∑ LaTeX</button>';

    // Ký hiệu khác
    html += '<div style="position:relative;display:inline-block;">'
          + '<button class="tb-btn" id="moreSymBtn" onclick="App.toggleMoreSym()" style="font-size:0.78rem;">Ký hiệu ▾</button>'
          + '<div id="moreSymPopup" style="display:none;position:absolute;top:110%;left:0;z-index:200;background:white;border:2px solid #e2e8f0;border-radius:12px;padding:8px;box-shadow:0 8px 25px rgba(0,0,0,0.15);width:240px;flex-wrap:wrap;gap:3px;">';
    MORE_SYMS.forEach(function(s) {
        html += '<button class="tb-btn" onclick="App.ins(\'' + s.replace(/'/g,"\\'") + '\',\'\',\'\');App.closeMoreSym();">' + s + '</button>';
    });
    html += '</div></div>';

    // Chèn ảnh
    html += '<button class="tb-btn" onclick="App.insertImage()" style="margin-left:auto;color:#4f46e5;font-size:0.78rem;border:2px solid #e0e7ff;background:#eef2ff;border-radius:8px;padding:4px 10px;">🖼 Ảnh</button>';

    tb.innerHTML = html;
};

App.toggleMoreSym = function() {
    var p = document.getElementById('moreSymPopup');
    if (!p) return;
    p.style.display = (p.style.display === 'none' || p.style.display === '') ? 'flex' : 'none';
};

App.closeMoreSym = function() {
    var p = document.getElementById('moreSymPopup');
    if (p) p.style.display = 'none';
};

// Đóng popup khi click ngoài
document.addEventListener('click', function(e) {
    var btn = document.getElementById('moreSymBtn');
    var popup = document.getElementById('moreSymPopup');
    if (popup && btn && !btn.contains(e.target) && !popup.contains(e.target)) {
        popup.style.display = 'none';
    }
});

App.ins = function(char, startTag, endTag) {
    var el = document.getElementById('qInput');
    var s = el.selectionStart, e = el.selectionEnd;
    var val = el.value;
    var newText, cur;
    if (startTag || endTag) {
        var sel = val.substring(s, e);
        newText = startTag + sel + endTag;
        el.value = val.substring(0, s) + newText + val.substring(e);
        cur = sel.length > 0 ? s + newText.length : s + startTag.length;
    } else {
        el.value = val.substring(0, s) + char + val.substring(e);
        cur = s + char.length;
    }
    el.setSelectionRange(cur, cur);
    el.focus();
};

App.insertImage = function() {
    var f = document.getElementById('fileLoader');
    f.accept = 'image/*';
    f.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
            App.ins('', '<img src="' + ev.target.result + '" style="max-width:100%;border-radius:8px;margin:8px 0;">', '');
        };
        reader.readAsDataURL(file);
        f.value = '';
    };
    f.click();
};

// ============================================================
// THÊM / SỬA / XÓA CÂU HỎI
// ============================================================
App.addQuestion = function() {
    var val = document.getElementById('qInput').value.trim();
    if (!val) { alert('Vui lòng nhập nội dung câu hỏi!'); return; }
    var key = 'part' + activeTab;
    var chunks;
    if (val.indexOf('##') !== -1) {
        chunks = val.split('##').map(function(x) { return x.trim(); }).filter(function(x) { return x.length > 0; });
    } else {
        chunks = [val];
    }
    var added = 0;
    chunks.forEach(function(c) {
        if (c.split('\n').filter(function(l) { return l.trim(); }).length >= 1) {
            AppData[key].push(c);
            added++;
        }
    });
    if (added === 0) { alert('Câu hỏi quá ngắn hoặc không hợp lệ!'); return; }
    document.getElementById('qInput').value = '';
    App.renderTabs();
    App.renderQList();
};

App.removeQuestion = function(idx) {
    if (confirm('Xóa câu hỏi này?')) {
        AppData['part' + activeTab].splice(idx, 1);
        App.renderTabs();
        App.renderQList();
    }
};

App.editQuestion = function(idx) {
    var key = 'part' + activeTab;
    document.getElementById('qInput').value = AppData[key][idx];
    AppData[key].splice(idx, 1);
    App.renderTabs();
    App.renderQList();
    document.getElementById('qInput').focus();
};

// ============================================================
// RENDER DANH SÁCH
// ============================================================
App.renderQList = function() {
    var arr = AppData['part' + activeTab];
    var el = document.getElementById('qList');

    if (arr.length === 0) {
        el.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:200px;color:#94a3b8;text-align:center;">'
            + '<div style="font-size:3rem;margin-bottom:8px;">📭</div>'
            + '<p style="font-weight:700;margin-bottom:4px;">Chưa có câu hỏi nào</p>'
            + '<p style="font-size:0.8rem;">Nhập câu hỏi bên trái rồi bấm "Thêm"</p>'
            + '</div>';
    } else {
        var html = '';
        arr.forEach(function(q, i) {
            var lines = q.split('\n').filter(function(l) { return l.trim(); });
            var preview = (lines[0] || '').replace(/</g,'&lt;').replace(/>/g,'&gt;').substring(0, 100);
            html += '<div class="q-card fade-in">'
                + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">'
                + '<span style="background:#dbeafe;color:#1d4ed8;font-size:11px;font-weight:900;padding:2px 8px;border-radius:6px;">Câu ' + (i+1) + '</span>'
                + '<div style="margin-left:auto;display:flex;gap:4px;">'
                + '<button onclick="App.editQuestion(' + i + ')" style="padding:4px 8px;background:#fef3c7;color:#d97706;border:1px solid #fde68a;border-radius:7px;cursor:pointer;font-size:11px;font-weight:700;" title="Sửa">✏️</button>'
                + '<button onclick="App.removeQuestion(' + i + ')" style="padding:4px 8px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:7px;cursor:pointer;font-size:11px;font-weight:700;" title="Xóa">🗑️</button>'
                + '</div></div>'
                + '<div style="font-size:12px;color:#475569;line-height:1.5;">' + preview + '</div>'
                + '</div>';
        });
        el.innerHTML = html;
    }

    var badge = document.getElementById('qCountBadge');
    if (badge) badge.textContent = arr.length + ' câu';
};

// ============================================================
// MODAL
// ============================================================
App.openModal = function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
};
App.closeModal = function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('hidden');
};

App.showGuide = function() {
    document.getElementById('guideText').textContent = GUIDES[activeTab];
    App.openModal('guideModal');
};

// ============================================================
// PROJECT: LƯU / MỞ / TẠO MỚI
// ============================================================
App.newProject = function() {
    if (!confirm('Tạo dự án mới sẽ xóa toàn bộ dữ liệu. Bạn chắc chắn?')) return;
    AppData = { part1:[], part2:[], part3:[], part4:[], part5:[], part6:[], gf_config:{url:'',fields:[]} };
    document.getElementById('quizTitle').value = 'BÀI TẬP TRẮC NGHIỆM';
    document.getElementById('creatorName').value = '';
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
    document.getElementById('shuffleCheck').checked = false;
    activeTab = 1;
    App.renderTabs();
    App.renderQList();
};

App.saveProject = function() {
    var p = {
        title:      document.getElementById('quizTitle').value,
        creator:    document.getElementById('creatorName').value,
        theme:      document.getElementById('themeSelect').value,
        start_time: document.getElementById('startTime').value,
        end_time:   document.getElementById('endTime').value,
        shuffle:    document.getElementById('shuffleCheck').checked,
        part1: AppData.part1, part2: AppData.part2, part3: AppData.part3,
        part4: AppData.part4, part5: AppData.part5, part6: AppData.part6,
        gf_config: AppData.gf_config
    };
    var blob = new Blob([JSON.stringify(p, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (p.title || 'Project').replace(/\s+/g,'_') + '.json';
    a.click();
    URL.revokeObjectURL(a.href);
};

App.loadProject = function() {
    var f = document.getElementById('fileLoader');
    f.accept = '.json';
    f.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
            try {
                var p = JSON.parse(ev.target.result);
                document.getElementById('quizTitle').value  = p.title || '';
                document.getElementById('creatorName').value = p.creator || '';
                document.getElementById('startTime').value   = p.start_time || '';
                document.getElementById('endTime').value     = p.end_time || '';
                document.getElementById('shuffleCheck').checked = !!p.shuffle;
                var themeKeys = Object.keys(THEMES);
                document.getElementById('themeSelect').value =
                    themeKeys.indexOf(p.theme) !== -1 ? p.theme : themeKeys[0];
                AppData = {
                    part1: p.part1||[], part2: p.part2||[], part3: p.part3||[],
                    part4: p.part4||[], part5: p.part5||[], part6: p.part6||[],
                    gf_config: p.gf_config || {url:'',fields:[]}
                };
                activeTab = 1;
                App.renderTabs();
                App.renderQList();
                alert('Đã tải dự án thành công!');
            } catch(err) { alert('File JSON không hợp lệ!\n' + err.message); }
        };
        reader.readAsText(file);
        f.value = '';
    };
    f.click();
};

// ============================================================
// GOOGLE FORM
// ============================================================
App.openGF = function() {
    document.getElementById('gfUrlInput').value = AppData.gf_config.url || '';
    if (AppData.gf_config.fields.length > 0) {
        App.renderGFFields();
    } else {
        document.getElementById('gfFieldsBody').innerHTML =
            '<tr><td colspan="4" style="text-align:center;padding:32px;color:#94a3b8;font-style:italic;">Dán link Form rồi bấm "Phân tích"</td></tr>';
    }
    App.openModal('gfModal');
};

App.fetchWithProxy = function(url) {
    var proxies = [
        'https://api.allorigins.win/get?url=' + encodeURIComponent(url),
        'https://corsproxy.io/?' + encodeURIComponent(url),
        'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(url)
    ];
    var i = 0;
    function tryNext() {
        if (i >= proxies.length) return Promise.reject(new Error('Không thể kết nối qua Proxy. Kiểm tra mạng.'));
        var proxyUrl = proxies[i++];
        var isJson = proxyUrl.indexOf('allorigins') !== -1;
        return fetch(proxyUrl, { cache: 'no-store' })
            .then(function(r) {
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return isJson ? r.json().then(function(d) { return d.contents || ''; }) : r.text();
            })
            .catch(function() { return tryNext(); });
    }
    return tryNext();
};

App.autoAnalyzeGF = function() {
    var url = document.getElementById('gfUrlInput').value.trim();
    if (!url) { alert('Vui lòng nhập link Form!'); return; }
    if (url.indexOf('forms.gle') !== -1) {
        alert('Link rút gọn (forms.gle) không được hỗ trợ.\nMở link đó trên trình duyệt, copy URL dài rồi dán lại.');
        return;
    }
    var btn = document.getElementById('btnAnalyze');
    btn.textContent = '⏳ Đang phân tích...';
    btn.disabled = true;
    document.getElementById('gfUrlInput').disabled = true;

    App.fetchWithProxy(url)
        .then(function(html) {
            var match = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[[\s\S]*?\])\s*;/);
            if (!match) throw new Error('Không tìm thấy dữ liệu. Form phải ở chế độ Công khai.');
            var jsonData = JSON.parse(match[1]);
            if (!jsonData[1] || !jsonData[1][1]) throw new Error('Cấu trúc Form không hợp lệ.');
            var fields = [];
            jsonData[1][1].forEach(function(q) {
                if (!Array.isArray(q) || !q[4] || !q[4][0]) return;
                try {
                    var id       = q[4][0][0].toString();
                    var title    = (q[1] || '').toString().trim();
                    var required = q[4][0][2] == 1;
                    var tl       = title.toLowerCase();
                    var type     = 'Tự nhập';
                    if (tl.indexOf('điểm') !== -1 || tl.indexOf('score') !== -1 || tl.indexOf('tổng') !== -1) type = 'Tự động';
                    else if (tl.indexOf('vi phạm') !== -1 || tl.indexOf('báo cáo') !== -1) type = 'Báo cáo vi phạm';
                    fields.push({ id: id, title: title, type: type, required: required });
                } catch(e) {}
            });
            if (fields.length === 0) throw new Error('Không tìm thấy trường nhập liệu nào.');
            var formUrl = url.split('?')[0].replace('/edit','').replace('/viewform','').replace(/\/+$/,'') + '/formResponse';
            AppData.gf_config.fields = fields;
            AppData.gf_config.url    = formUrl;
            document.getElementById('gfUrlInput').value = formUrl;
            App.renderGFFields();
            btn.textContent = '✅ Thành công!';
            setTimeout(function() {
                btn.innerHTML = '<i data-lucide="zap" style="width:16px;height:16px;display:inline;margin-right:4px;"></i> Phân tích';
                btn.disabled = false;
                document.getElementById('gfUrlInput').disabled = false;
                if (window.lucide) lucide.createIcons();
            }, 2000);
        })
        .catch(function(err) {
            alert('Lỗi: ' + err.message);
            btn.innerHTML = '<i data-lucide="zap" style="width:16px;height:16px;display:inline;margin-right:4px;"></i> Phân tích';
            btn.disabled = false;
            document.getElementById('gfUrlInput').disabled = false;
        });
};

App.renderGFFields = function() {
    var html = '';
    AppData.gf_config.fields.forEach(function(f, i) {
        var t1 = f.type === 'Tự nhập'         ? ' selected' : '';
        var t2 = f.type === 'Tự động'          ? ' selected' : '';
        var t3 = f.type === 'Báo cáo vi phạm' ? ' selected' : '';
        html += '<tr>'
            + '<td style="padding:8px;">'
            +   '<input type="text" class="inp" style="padding:6px 10px;" value="' + (f.title||'').replace(/"/g,'&quot;') + '"'
            +   ' onchange="AppData.gf_config.fields[' + i + '].title=this.value">'
            + '</td>'
            + '<td style="padding:8px;" class="hidden sm:table-cell">'
            +   '<input type="text" class="inp" style="padding:6px 10px;background:#f1f5f9;font-family:monospace;font-size:11px;cursor:default;" value="entry.' + f.id + '" readonly>'
            + '</td>'
            + '<td style="padding:8px;">'
            +   '<select class="inp" style="padding:6px 10px;" onchange="AppData.gf_config.fields[' + i + '].type=this.value">'
            +   '<option value="Tự nhập"' + t1 + '>✍️ Học sinh tự điền</option>'
            +   '<option value="Tự động"' + t2 + '>🎯 Điểm (Tự động)</option>'
            +   '<option value="Báo cáo vi phạm"' + t3 + '>🚨 Báo cáo vi phạm</option>'
            +   '</select>'
            + '</td>'
            + '<td style="padding:8px;text-align:center;">'
            +   '<input type="checkbox" style="width:18px;height:18px;accent-color:#3b82f6;cursor:pointer;"'
            +   (f.required ? ' checked' : '') + ' onchange="AppData.gf_config.fields[' + i + '].required=this.checked">'
            + '</td>'
            + '</tr>';
    });
    document.getElementById('gfFieldsBody').innerHTML = html;
};

App.saveGFConfig = function() {
    AppData.gf_config.url = document.getElementById('gfUrlInput').value.trim();
    App.closeModal('gfModal');
    setTimeout(function() { alert('Đã lưu cấu hình Google Form!\nBấm "Xuất HTML" để tạo đề thi.'); }, 200);
};

// ============================================================
// PARSE CÂU HỎI
// ============================================================
function parsePart12(lines) {
    var qL=[], oL=[], sL=[], sol=false;
    lines.forEach(function(l) {
        var c = l.replace(/\s+$/,''), ct = c.replace(/^\s+/,'');
        if (ct.indexOf('Lời giải:') === 0 || ct.indexOf('Giải thích:') === 0) {
            sol = true;
            var after = ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
            if (after) sL.push(after);
            return;
        }
        if (sol) { sL.push(c); return; }
        if (/^\s*#?\s*[A-Ea-e]\.\s/.test(c)) { oL.push(c); return; }
        qL.push(c);
    });
    return [qL.join('<br>'), oL, sL.join('<br>')];
}

function parsePart3(lines) {
    var qL=[], aL=[], sL=[], sol=false;
    lines.forEach(function(l) {
        var c = l.replace(/\s+$/,''), ct = c.replace(/^\s+/,'');
        if (ct.indexOf('Lời giải:') === 0 || ct.indexOf('Giải thích:') === 0) {
            sol = true;
            var after = ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
            if (after) sL.push(after);
            return;
        }
        if (sol) { sL.push(c); return; }
        if (ct.charAt(0) === '#') { var a = ct.substring(1).trim(); if (a) aL.push(a); }
        else qL.push(c);
    });
    return [qL.join('<br>'), aL.join('||'), sL.join('<br>')];
}

function parsePart4(lines) {
    var qL=[], sL=[], blanks={}, state='q', cur=null;
    lines.forEach(function(l) {
        var c = l.replace(/\s+$/,''), ct = c.replace(/^\s+/,'');
        if (ct.indexOf('Đáp án:') === 0) { state='a'; return; }
        if (ct.indexOf('Lời giải:') === 0 || ct.indexOf('Giải thích:') === 0) {
            state='s';
            var after = ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
            if (after) sL.push(after);
            return;
        }
        if (state === 's') { sL.push(c); return; }
        if (state === 'q') { qL.push(c); return; }
        if (state === 'a') {
            var bm = ct.match(/^=\s*\(\s*(\d+)\s*\)\s*=\s*$/);
            if (bm) { cur = bm[1]; blanks[cur] = []; return; }
            if (ct.charAt(0) === '#' && cur !== null) {
                var a = ct.substring(1).trim();
                if (a) blanks[cur].push(a);
            }
        }
    });
    return [qL.join('<br>'), blanks, sL.join('<br>')];
}

function parsePart5(lines) {
    var text = lines.join('\n');
    var solM = text.match(/(?:Lời giải:|Giải thích:)([\s\S]*)/);
    var sol  = solM ? solM[1].trim().replace(/\n/g,'<br>') : '';
    var main = text.replace(/(?:Lời giải:|Giải thích:)[\s\S]*/,'');
    var headerM = main.match(/^([\s\S]*?)(?=Cột I:)/);
    var header  = headerM ? headerM[1].trim().replace(/\n/g,'<br>') : '';
    var colIM   = main.match(/Cột I:\s*([\s\S]*?)(?=Cột II:)/);
    var colIIM  = main.match(/Cột II:\s*([\s\S]*?)(?=^\s*#)/m);
    var ansM    = main.match(/^\s*#\s*(.+)/m);
    var left=[], right=[], mapping={};
    (colIM && colIM[1] || '').split('\n').forEach(function(l) {
        var m = l.trim().match(/^(\d+)[.\-)]\s*(.*)/);
        if (m) left.push({label:m[1], text:m[2].trim()});
    });
    (colIIM && colIIM[1] || '').split('\n').forEach(function(l) {
        var m = l.trim().match(/^([A-Za-z])[.\-)]\s*(.*)/);
        if (m) right.push({label:m[1].toUpperCase(), text:m[2].trim()});
    });
    if (ansM) {
        ansM[1].split(/[,;]/).forEach(function(p) {
            var m = p.trim().match(/(\w+)\s*=\s*(\w+)/);
            if (m) { mapping[m[1]] = mapping[m[1]] || []; mapping[m[1]].push(m[2].toUpperCase()); }
        });
    }
    return [header, [left, right, mapping], sol];
}

function parsePart6(lines) {
    var qL=[], clues=[], kw='', sL=[], state='q';
    lines.forEach(function(l) {
        var c = l.replace(/\s+$/,''), ct = c.replace(/^\s+/,'');
        if (ct.indexOf('Lời giải:') === 0 || ct.indexOf('Giải thích:') === 0) {
            state='s';
            var after = ct.replace(/^(Lời giải:|Giải thích:)/,'').trim();
            if (after) sL.push(after);
            return;
        }
        if (state==='s') { sL.push(c); return; }
        if (ct.indexOf('Từ khóa:') === 0) {
            var m = ct.match(/#\s*(.*)/);
            if (m) kw = m[1].trim().toUpperCase();
            return;
        }
        var cm = ct.match(/^(.*?)\s*#\s*(.+)$/);
        if (cm) clues.push({clue: cm[1].trim(), answer: cm[2].trim().toUpperCase()});
        else if (state==='q') qL.push(c);
    });
    return [qL.join('<br>'), clues, kw, sL.join('<br>')];
}

// ============================================================
// XUẤT HTML
// ============================================================
App.exportHTML = function() {
    var hasAny = false;
    for (var pi=1; pi<=6; pi++) { if (AppData['part'+pi].length > 0) { hasAny=true; break; } }
    if (!hasAny) { alert('Chưa có câu hỏi nào! Hãy nhập ít nhất 1 câu.'); return; }

    var title     = document.getElementById('quizTitle').value.trim() || 'BÀI TẬP TRẮC NGHIỆM';
    var creator   = document.getElementById('creatorName').value.trim();
    var themeName = document.getElementById('themeSelect').value;
    var themeCss  = THEMES[themeName] || THEMES[Object.keys(THEMES)[0]];
    var startTime = document.getElementById('startTime').value.trim();
    var endTime   = document.getElementById('endTime').value.trim();
    var doShuffle = document.getElementById('shuffleCheck').checked;
    var examID    = 'EX' + Date.now().toString(36).toUpperCase();

    // Build Google Form JS
    var jsBuilder = [], jsValid = [], formHtmlParts = [], hasInputs = false;
    AppData.gf_config.fields.forEach(function(f) {
        var sid = 'gf_' + f.id;
        if (f.type === 'Tự nhập') {
            hasInputs = true;
            formHtmlParts.push(
                '<div style="margin-bottom:14px;">'
                + '<label style="font-weight:700;display:block;margin-bottom:5px;">' + f.title
                + (f.required ? ' <span style="color:#ef4444">*</span>' : '') + '</label>'
                + '<input type="text" id="' + sid + '" placeholder="Nhập ' + f.title + '..."'
                + ' style="width:100%;padding:10px 14px;border:2px solid var(--border);border-radius:10px;font-size:1rem;outline:none;font-family:inherit;background:var(--card);color:var(--text);"'
                + (f.required ? ' required' : '') + '>'
                + '</div>'
            );
            jsBuilder.push('formData.append("entry.' + f.id + '",(document.getElementById("' + sid + '")||{value:""}).value.trim()||"Chưa điền");');
            if (f.required) jsValid.push('if(!(document.getElementById("' + sid + '")||{value:""}).value.trim())missingFields.push("' + f.title.replace(/"/g,'') + '");');
        } else if (f.type === 'Tự động') {
            jsBuilder.push('formData.append("entry.' + f.id + '",totalScore+"/"+maxScore);');
        } else if (f.type === 'Báo cáo vi phạm') {
            jsBuilder.push('formData.append("entry.' + f.id + '",violationReport);');
        }
    });

    // Build Sections
    var pLabels = ['Một Lựa Chọn','Nhiều L��a Chọn','Trả Lời Ngắn','Điền Khuyết','Ghép Đôi','Ô Chữ'];
    var sectParts = [];
    var pCnt = 1;

    for (var ptype=1; ptype<=6; ptype++) {
        var qs = AppData['part'+ptype];
        if (!qs.length) continue;

        sectParts.push('<div class="section" data-pt="' + ptype + '">');
        sectParts.push('<div class="sec-title">Phần ' + pCnt + ': ' + pLabels[ptype-1] + '</div>');
        sectParts.push('<div class="score-note"><i>Mỗi câu trả lời đúng được 1 điểm.</i></div>');

        qs.forEach(function(rawQ, idx) {
            var qid   = 'p' + pCnt + 'q' + (idx+1);
            var lines = rawQ.split('\n');

            if (ptype === 1 || ptype === 2) {
                var parsed = parsePart12(lines);
                var qtext = parsed[0], opts = parsed[1], sol = parsed[2];
                var letCorrect = [];
                var optHtml = '';
                opts.forEach(function(opt, j) {
                    var isC   = /^\s*#/.test(opt);
                    var clean = isC ? opt.replace(/^\s*#\s*/,'') : opt.replace(/^\s*/,'');
                    var di    = clean.indexOf('.');
                    var letter = di > 0 ? clean.substring(0,di).trim().toUpperCase() : String.fromCharCode(65+j);
                    var text   = di > 0 ? clean.substring(di+1).trim() : clean;
                    if (isC) letCorrect.push(letter);
                    var itype  = ptype === 1 ? 'radio' : 'checkbox';
                    optHtml += '<label class="option"><input type="' + itype + '" name="' + qid + '" value="' + letter + '"><div><strong>' + letter + '.</strong> ' + text + '</div></label>';
                });
                sectParts.push(
                    '<div class="question" id="' + qid + '">'
                    + '<div class="q-text"><strong>Câu ' + (idx+1) + ':</strong><br>' + qtext + '</div>'
                    + optHtml
                    + '<div class="expl" id="' + qid + '_r" data-ans="' + letCorrect.join(',') + '" data-sol="' + encodeURIComponent(sol) + '"></div>'
                    + '</div>'
                );

            } else if (ptype === 3) {
                var parsed3 = parsePart3(lines);
                var qtext3 = parsed3[0], ans3 = parsed3[1], sol3 = parsed3[2];
                sectParts.push(
                    '<div class="question" id="' + qid + '">'
                    + '<div class="q-text"><strong>Câu ' + (idx+1) + ':</strong><br>' + qtext3 + '</div>'
                    + '<div style="margin-top:12px;"><label style="font-weight:700;color:var(--primary);display:block;margin-bottom:6px;">Đáp án của bạn:</label>'
                    + '<input type="text" id="' + qid + '_in" style="width:100%;padding:11px 14px;border:2px solid var(--border);border-radius:10px;outline:none;font-weight:600;font-size:1rem;background:var(--card);color:var(--text);">'
                    + '</div>'
                    + '<div class="expl" id="' + qid + '_r" data-ans="' + ans3 + '" data-sol="' + encodeURIComponent(sol3) + '"></div>'
                    + '</div>'
                );

            } else if (ptype === 4) {
                var parsed4 = parsePart4(lines);
                var qtext4 = parsed4[0], blanks4 = parsed4[1], sol4 = parsed4[2];
                var filled = qtext4.replace(/=\s*\((\d+)\)\s*=/g, function(_, n) {
                    var a = (blanks4[n] || []).join('||');
                    return '<input type="text" id="' + qid + '_b' + n + '" data-ans="' + a + '" '
                        + 'style="border:none;border-bottom:2.5px solid var(--primary);background:transparent;color:var(--primary);'
                        + 'font-weight:700;text-align:center;font-size:1rem;width:80px;outline:none;padding:2px 4px;">';
                });
                sectParts.push(
                    '<div class="question" id="' + qid + '">'
                    + '<div class="q-text"><strong>Câu ' + (idx+1) + ':</strong><br>' + filled + '</div>'
                    + '<div class="expl" id="' + qid + '_r" data-sol="' + encodeURIComponent(sol4) + '"></div>'
                    + '</div>'
                );

            } else if (ptype === 5) {
                var parsed5 = parsePart5(lines);
                var header5 = parsed5[0], colData5 = parsed5[1], sol5 = parsed5[2];
                var leftCol5 = colData5[0], rightCol5 = colData5[1], mapping5 = colData5[2];

                var expected5 = [];
                leftCol5.forEach(function(item) {
                    if (mapping5[item.label]) {
                        mapping5[item.label].forEach(function(t) { expected5.push(item.label + '=' + t); });
                    }
                });

                // shuffle inline
                function sh(a) { var b=a.slice(); for(var i=b.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=b[i];b[i]=b[j];b[j]=t;} return b; }
                var leftH  = sh(leftCol5).map(function(item) { return '<div class="mi ml" data-id="' + item.label + '">' + item.text + '</div>'; }).join('');
                var rightH = sh(rightCol5).map(function(item) { return '<div class="mi mr" data-id="' + item.label + '">' + item.text + '</div>'; }).join('');

                sectParts.push(
                    '<div class="question" id="' + qid + '">'
                    + '<div class="q-text"><strong>Câu ' + (idx+1) + ':</strong><br>' + (header5 || 'Hãy ghép đôi:') + '</div>'
                    + '<div class="mw" id="mw_' + qid + '" data-exp="' + expected5.join(',') + '">'
                    +   '<svg class="ms" id="svg_' + qid + '"></svg>'
                    +   '<div class="mc"><div class="mcol">' + leftH + '</div><div class="mcol">' + rightH + '</div></div>'
                    + '</div>'
                    + '<button class="btn-clr" onclick="clearMatch(\'mw_' + qid + '\')">⟲ Xóa đường nối</button>'
                    + '<div class="expl" id="' + qid + '_r" data-exp5="' + expected5.join(',') + '" data-sol="' + encodeURIComponent(sol5) + '"></div>'
                    + '</div>'
                );

            } else if (ptype === 6) {
                var parsed6 = parsePart6(lines);
                var qtext6 = parsed6[0], clues6 = parsed6[1], kw6 = parsed6[2], sol6 = parsed6[3];
                var kwClean = kw6.replace(/\s/g,'').toUpperCase();
                var grid6 = [], validKW = false;

                if (kwClean && kwClean.length === clues6.length) {
                    var offsets = [], ok = true;
                    for (var ci=0; ci<clues6.length; ci++) {
                        var ans6 = clues6[ci].answer.replace(/\s/g,'').toUpperCase();
                        var pos  = ans6.indexOf(kwClean[ci]);
                        if (pos === -1) { ok=false; break; }
                        offsets.push(pos);
                    }
                    if (ok) {
                        validKW = true;
                        var maxPad = Math.max.apply(null, offsets);
                        clues6.forEach(function(c, ci) {
                            grid6.push({ ans: c.answer.replace(/\s/g,'').toUpperCase(), pad: maxPad-offsets[ci], keyIdx: offsets[ci], clue: c.clue });
                        });
                    }
                }
                if (!validKW) {
                    clues6.forEach(function(c) {
                        grid6.push({ ans: c.answer.replace(/\s/g,'').toUpperCase(), pad: 0, keyIdx: -1, clue: c.clue });
                    });
                }

                var gridH = '';
                grid6.forEach(function(row, ri) {
                    var ec = row.clue.replace(/"/g,'&quot;').replace(/'/g,'&#39;');
                    gridH += '<div class="cw-row">';
                    gridH += '<span class="cw-num" onclick="showClue(' + (ri+1) + ',\'' + ec + '\')">' + (ri+1) + '</span>';
                    for (var p=0; p<row.pad; p++) gridH += '<span class="cw-empty"></span>';
                    for (var k=0; k<row.ans.length; k++) {
                        var isKey = (k === row.keyIdx) ? ' cw-key' : '';
                        gridH += '<input type="text" maxlength="1" data-ans="' + row.ans[k] + '" class="cw-cell' + isKey + '">';
                    }
                    gridH += '</div>';
                });

                sectParts.push(
                    '<div class="question" id="' + qid + '">'
                    + '<div class="q-text"><strong>Câu ' + (idx+1) + ':</strong><br>' + (qtext6 || 'Giải ô chữ:') + '</div>'
                    + '<p style="text-align:center;font-size:.83rem;color:var(--text-muted);margin-bottom:10px;"><i>👆 Bấm số thứ tự màu xanh để xem gợi ý</i></p>'
                    + '<div class="cw-wrap"><div class="cw-grid">' + gridH + '</div></div>'
                    + '<div class="expl" id="' + qid + '_r" data-sol="' + encodeURIComponent(sol6) + '"></div>'
                    + '</div>'
                );
            }
        });

        sectParts.push('</div>');
        pCnt++;
    }

    var studentBox = '';
    if (hasInputs) {
        studentBox = '<div style="background:var(--card);padding:26px 28px;border-radius:14px;border:3px solid var(--primary);margin-bottom:32px;box-shadow:0 5px 0 0 var(--primary-hover);">'
            + '<h3 style="margin:0 0 6px;color:var(--primary);font-size:1.15rem;padding-bottom:10px;border-bottom:2px solid var(--border);">📝 THÔNG TIN HỌC SINH</h3>'
            + '<p style="color:#ef4444;font-size:.83rem;margin-bottom:16px;font-style:italic;">* Vui lòng điền đầy đủ trước khi làm bài.</p>'
            + formHtmlParts.join('')
            + '</div>';
    }

    var creatorLine = creator
        ? '<p style="text-align:center;color:var(--text-muted);font-weight:600;margin-bottom:8px;">Biên soạn: ' + creator + '</p>' : '';

    // Inline JS strings (avoid template literal)
    var jsBuilderStr  = jsBuilder.join('\n          ');
    var jsValidStr    = jsValid.join('\n          ');
    var shuffleStr    = doShuffle ? 'true' : 'false';
    var gfUrlStr      = AppData.gf_config.url || '';

    // ---- Build Output (NO template literals - dùng string concat) ----
    var OUT = '<!DOCTYPE html>\n'
        + '<html lang="vi">\n'
        + '<head>\n'
        + '<meta charset="UTF-8">\n'
        + '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
        + '<title>' + title + '</title>\n'
        + '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">\n'
        + '<script>window.MathJax={tex:{inlineMath:[["$","$"]]}}<\/script>\n'
        + '<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"><\/script>\n'
        + '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script>\n'
        + '<style>\n'
        + themeCss + '\n'
        + '*{box-sizing:border-box;}\n'
        + 'body{font-family:var(--font,"Inter",sans-serif);background:var(--bg);color:var(--text);margin:0;line-height:1.7;padding-bottom:80px;}\n'
        + '.navbar{position:sticky;top:0;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-bottom:2px solid var(--border);padding:12px 20px;display:flex;justify-content:space-between;align-items:center;z-index:100;}\n'
        + '.score-pill{background:var(--primary);color:#fff;padding:7px 20px;border-radius:99px;font-weight:800;}\n'
        + '.timer-pill{color:#dc2626;font-weight:800;background:#fee2e2;padding:7px 20px;border-radius:99px;border:2px solid #fca5a5;font-variant-numeric:tabular-nums;}\n'
        + '.container{max-width:820px;margin:36px auto;padding:0 18px;}\n'
        + '.sec-title{font-size:1.3rem;font-weight:900;color:var(--primary);border-bottom:3px solid var(--border);padding-bottom:.5rem;margin:2rem 0 .4rem;}\n'
        + '.score-note{font-size:.85rem;color:var(--text-muted);margin-bottom:1.2rem;font-style:italic;}\n'
        + '.question{background:var(--card);padding:22px 26px;border-radius:14px;margin-bottom:22px;border:2px solid var(--border);box-shadow:0 4px 0 0 var(--border);transition:all .2s;}\n'
        + '.question:hover{transform:translateY(-2px);border-color:var(--primary);box-shadow:0 4px 0 0 var(--primary);}\n'
        + '.q-text{font-size:1.05rem;margin-bottom:14px;line-height:1.75;}\n'
        + '.option{display:flex;align-items:flex-start;padding:12px 16px;margin:8px 0;border:2px solid var(--border);border-radius:12px;cursor:pointer;transition:all .2s;background:var(--card);font-weight:500;}\n'
        + '.option:hover{background:var(--hover-bg);border-color:var(--primary);transform:translateY(-1px);}\n'
        + '.option input{margin-top:3px;margin-right:12px;transform:scale(1.2);cursor:pointer;accent-color:var(--primary);}\n'
        + '.expl{display:none;margin-top:14px;padding:16px;background:var(--hover-bg);border-radius:12px;border:2px dashed var(--border);font-size:.93rem;line-height:1.7;}\n'
        + '.btn-submit{display:block;width:100%;max-width:300px;margin:36px auto 0;background:var(--primary);color:#fff;border:none;padding:16px;border-radius:14px;font-size:1.1rem;font-weight:900;cursor:pointer;box-shadow:0 5px 0 0 var(--primary-hover);transition:all .15s;}\n'
        + '.btn-submit:hover{transform:translateY(-2px);}\n'
        + '.btn-submit:active{transform:translateY(3px);box-shadow:0 2px 0 0 var(--primary-hover);}\n'
        + '/* MATCH */\n'
        + '.mw{position:relative;margin-top:14px;}\n'
        + '.mc{display:flex;justify-content:space-between;gap:16px;}\n'
        + '.mcol{display:flex;flex-direction:column;gap:10px;width:44%;}\n'
        + '.mi{background:var(--card);color:var(--text);border:2px solid var(--border);padding:11px 14px;border-radius:10px;cursor:pointer;text-align:center;font-weight:600;transition:all .2s;user-select:none;position:relative;z-index:2;}\n'
        + '.mi:hover{border-color:var(--primary);background:var(--hover-bg);}\n'
        + '.mi.sel{border-color:var(--primary);background:var(--hover-bg);box-shadow:0 0 0 3px rgba(99,102,241,.2);}\n'
        + '.ms{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;overflow:visible;pointer-events:none;}\n'
        + '.btn-clr{display:block;margin:10px auto 0;padding:7px 16px;background:var(--hover-bg);color:var(--text-muted);border:2px solid var(--border);border-radius:10px;cursor:pointer;font-size:.85rem;font-weight:600;position:relative;z-index:2;}\n'
        + '/* CROSSWORD */\n'
        + '.cw-wrap{overflow-x:auto;padding:8px 0;text-align:center;}\n'
        + '.cw-grid{display:inline-flex;flex-direction:column;gap:5px;}\n'
        + '.cw-row{display:flex;align-items:center;}\n'
        + '.cw-num{width:26px;height:26px;text-align:center;line-height:24px;font-weight:800;color:var(--primary);background:var(--hover-bg);border:2px solid var(--primary);border-radius:50%;cursor:pointer;font-size:.8rem;margin-right:8px;flex-shrink:0;transition:all .2s;}\n'
        + '.cw-num:hover{background:var(--primary);color:#fff;}\n'
        + '.cw-cell{width:34px;height:34px;text-align:center;text-transform:uppercase;font-size:1rem;font-weight:700;border:2px solid var(--border);border-radius:7px;margin-right:4px;outline:none;background:var(--card);color:var(--text);transition:border-color .2s;}\n'
        + '.cw-cell:focus{border-color:var(--primary);}\n'
        + '.cw-cell.cw-key{border-color:var(--primary);background:var(--hover-bg);border-width:3px;}\n'
        + '.cw-empty{width:34px;height:34px;margin-right:4px;display:inline-block;flex-shrink:0;}\n'
        + '/* CLUE MODAL */\n'
        + '#clueOverlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2000;align-items:center;justify-content:center;backdrop-filter:blur(3px);}\n'
        + '#clueOverlay.open{display:flex;}\n'
        + '#clueBox{background:var(--card);padding:26px;border-radius:18px;box-shadow:0 20px 40px rgba(0,0,0,.2);width:90%;max-width:400px;border:2px solid var(--border);animation:popIn .2s ease-out;}\n'
        + '@keyframes popIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}\n'
        + '#loadOverlay{display:none;position:fixed;inset:0;background:rgba(255,255,255,.9);z-index:9999;flex-direction:column;align-items:center;justify-content:center;gap:14px;}\n'
        + '#loadOverlay.show{display:flex;}\n'
        + '.spin{width:46px;height:46px;border:5px solid #e2e8f0;border-top-color:var(--primary);border-radius:50%;animation:spin 1s linear infinite;}\n'
        + '@keyframes spin{to{transform:rotate(360deg)}}\n'
        + '@media(max-width:600px){.mc{flex-direction:column;}.mcol{width:100%;}.cw-cell,.cw-empty{width:28px;height:28px;}.question{padding:14px 12px;}}\n'
        + '</style>\n'
        + '</head>\n'
        + '<body>\n'
        + '<div id="loadOverlay"><div class="spin"></div><p style="font-weight:700;color:var(--primary);">Đang chấm bài...</p></div>\n'
        + '<div id="clueOverlay" onclick="closeClue()">\n'
        + '  <div id="clueBox" onclick="event.stopPropagation()">\n'
        + '    <p id="clueTitle" style="font-size:1.05rem;font-weight:800;color:var(--primary);margin:0 0 10px;"></p>\n'
        + '    <div id="clueText" style="font-size:1.05rem;background:var(--hover-bg);border:2px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:16px;line-height:1.6;"></div>\n'
        + '    <button onclick="closeClue()" style="width:100%;padding:11px;background:var(--primary);color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;">Đã hiểu ✓</button>\n'
        + '  </div>\n'
        + '</div>\n'
        + '<div id="quizApp" style="display:none;">\n'
        + '  <nav class="navbar">\n'
        + '    <div class="score-pill" id="scoreDisplay">📊 Điểm: 0</div>\n'
        + '    <div class="timer-pill">⏱ <span id="timerDisp">00:00</span></div>\n'
        + '  </nav>\n'
        + '  <div class="container">\n'
        + '    <h1 style="text-align:center;font-size:1.9rem;font-weight:900;margin-bottom:6px;">' + title + '</h1>\n'
        + creatorLine + '\n'
        + '    <div style="margin-bottom:28px;"></div>\n'
        + studentBox + '\n'
        + sectParts.join('\n') + '\n'
        + '    <button class="btn-submit" id="submitBtn" onclick="gradeQuiz()">🎯 NỘP BÀI VÀ XEM KẾT QUẢ</button>\n'
        + '  </div>\n'
        + '</div>\n'
        + '<script>\n'
        + 'var EXAM_ID="' + examID + '";\n'
        + 'var START_STR="' + startTime + '";\n'
        + 'var END_STR="' + endTime + '";\n'
        + 'var GF_URL="' + gfUrlStr + '";\n'
        + 'var DO_SHUFFLE=' + shuffleStr + ';\n'
        + 'var violationCount=0,violationDetails=[],forceSubmit=false;\n'
        + '\n'
        + 'function parseVNTime(s){\n'
        + '  if(!s||!s.trim())return null;\n'
        + '  try{\n'
        + '    var parts=s.trim().split(" ");\n'
        + '    if(parts.length<2)return null;\n'
        + '    var tp=parts[0].split(":"),dp=parts[1].split("/");\n'
        + '    return new Date(+dp[2],+dp[1]-1,+dp[0],+tp[0],+tp[1]).getTime();\n'
        + '  }catch(e){return null;}\n'
        + '}\n'
        + 'var T_START=parseVNTime(START_STR),T_END=parseVNTime(END_STR);\n'
        + '\n'
        + 'function lockPage(reason){\n'
        + '  localStorage.setItem(EXAM_ID+"_lk",reason);\n'
        + '  document.documentElement.innerHTML="<body style=\'margin:0;background:#111;color:#ef4444;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;\'>"\n'
        + '    +"<div style=\'font-size:3.5rem;\'>⛔</div>"\n'
        + '    +"<h2>TRUY CẬP BỊ TỪ CHỐI</h2>"\n'
        + '    +"<p style=\'color:#fff;max-width:500px;\'>"+reason+"</p>"\n'
        + '    +"</body>";\n'
        + '}\n'
        + '\n'
        + '(function init(){\n'
        + '  var now=Date.now();\n'
        + '  if(localStorage.getItem(EXAM_ID+"_done")){lockPage("Bạn đã nộp bài rồi. Không thể làm lại.");return;}\n'
        + '  if(localStorage.getItem(EXAM_ID+"_lk")){lockPage("Bài thi đã bị khóa. Lý do: "+localStorage.getItem(EXAM_ID+"_lk"));return;}\n'
        + '  if(T_END&&now>=T_END){lockPage("Kỳ thi đã KẾT THÚC lúc "+END_STR);return;}\n'
        + '  if(T_START&&now<T_START){\n'
        + '    document.documentElement.innerHTML="<body style=\'margin:0;background:#f8fafc;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;color:#0f172a;\'>"\n'
        + '      +"<h2 style=\'color:#2563eb;\'>⏳ KỲ THI CHƯA BẮT ĐẦU</h2>"\n'
        + '      +"<p>Thời gian mở đề: <b>"+START_STR+"</b></p>"\n'
        + '      +"<div id=\'cd\' style=\'font-size:3rem;font-weight:900;color:#dc2626;background:#fee2e2;padding:10px 28px;border-radius:12px;margin-top:16px;\'>--:--:--</div>"\n'
        + '      +"<p style=\'color:#64748b;margin-top:14px;font-style:italic;\'>Trang sẽ tự động hiển thị bài khi đến giờ.</p>"\n'
        + '      +"</body>";\n'
        + '    var iv=setInterval(function(){\n'
        + '      var rem=Math.floor((T_START-Date.now())/1000);\n'
        + '      if(rem<=0){clearInterval(iv);location.reload();return;}\n'
        + '      var h=String(Math.floor(rem/3600)).padStart(2,"0"),m=String(Math.floor((rem%3600)/60)).padStart(2,"0"),s=String(rem%60).padStart(2,"0");\n'
        + '      document.getElementById("cd").textContent=(h!=="00"?h+":":"")+m+":"+s;\n'
        + '    },1000);\n'
        + '    return;\n'
        + '  }\n'
        + '  document.getElementById("quizApp").style.display="block";\n'
        + '})();\n'
        + '\n'
        + '// TIMER\n'
        + 'var timerSec=0,timerIv=null;\n'
        + 'function startTimer(){\n'
        + '  if(timerIv)return;\n'
        + '  timerIv=setInterval(function(){\n'
        + '    timerSec++;\n'
        + '    var disp;\n'
        + '    if(T_END){\n'
        + '      var rem=Math.floor((T_END-Date.now())/1000);\n'
        + '      if(rem<=0){clearInterval(timerIv);if(document.getElementById("submitBtn")&&document.getElementById("submitBtn").style.display!=="none"){alert("⏰ Hết giờ! Tự động nộp bài.");forceSubmit=true;gradeQuiz();}return;}\n'
        + '      var h=String(Math.floor(rem/3600)).padStart(2,"0"),m=String(Math.floor((rem%3600)/60)).padStart(2,"0"),s=String(rem%60).padStart(2,"0");\n'
        + '      disp=(h!=="00"?h+":":"")+m+":"+s;\n'
        + '      if(rem<=300){document.querySelector(".timer-pill").style.background="#ef4444";document.querySelector(".timer-pill").style.color="#fff";}\n'
        + '    }else{\n'
        + '      var h=Math.floor(timerSec/3600),m=Math.floor((timerSec%3600)/60),s=timerSec%60;\n'
        + '      disp=(h?String(h).padStart(2,"0")+":":"")+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");\n'
        + '    }\n'
        + '    document.getElementById("timerDisp").textContent=disp;\n'
        + '  },1000);\n'
        + '}\n'
        + 'window.addEventListener("load",startTimer);\n'
        + '\n'
        + '// ANTI-CHEAT\n'
        + 'var _hv=false;\n'
        + 'function handleV(r){\n'
        + '  if(_hv||localStorage.getItem(EXAM_ID+"_done"))return;\n'
        + '  _hv=true;setTimeout(function(){_hv=false;},2000);\n'
        + '  var sb=document.getElementById("submitBtn");\n'
        + '  if(!sb||sb.style.display==="none")return;\n'
        + '  violationCount++;violationDetails.push(r);\n'
        + '  if(violationCount>=3){alert("⛔ VI PHẠM 3 LẦN! Tự động nộp bài.");forceSubmit=true;gradeQuiz();}\n'
        + '  else alert("⚠️ CẢNH BÁO ("+violationCount+"/3)\\nLý do: "+r);\n'
        + '}\n'
        + 'document.addEventListener("DOMContentLoaded",function(){\n'
        + '  document.body.style.userSelect="none";\n'
        + '  document.addEventListener("contextmenu",function(e){e.preventDefault();});\n'
        + '  ["copy","cut","paste"].forEach(function(ev){document.addEventListener(ev,function(e){e.preventDefault();alert("⚠️ Sao chép bị vô hiệu hóa!");});});\n'
        + '  document.addEventListener("keydown",function(e){\n'
        + '    if(e.key==="F12"||(e.ctrlKey&&e.shiftKey&&["I","J","C"].includes(e.key.toUpperCase()))||(e.ctrlKey&&["U","P","S"].includes(e.key.toUpperCase()))){\n'
        + '      e.preventDefault();handleV("Phím tắt: "+e.key);\n'
        + '    }\n'
        + '  });\n'
        + '  document.addEventListener("visibilitychange",function(){if(document.hidden)handleV("Chuyển tab");});\n'
        + '  window.addEventListener("blur",function(){if(!(document.activeElement instanceof HTMLIFrameElement))handleV("Rời cửa sổ");});\n'
        + '});\n'
        + '\n'
        + '// SHUFFLE\n'
        + 'document.addEventListener("DOMContentLoaded",function(){\n'
        + '  if(!DO_SHUFFLE)return;\n'
        + '  function sh(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}\n'
        + '  document.querySelectorAll(".section").forEach(function(sec){\n'
        + '    var qs=[].slice.call(sec.querySelectorAll(".question"));\n'
        + '    if(qs.length>1){\n'
        + '      sh(qs).forEach(function(q,i){sec.appendChild(q);var st=q.querySelector(".q-text strong");if(st&&st.textContent.indexOf("Câu")===0)st.textContent="Câu "+(i+1)+":";});\n'
        + '    }\n'
        + '  });\n'
        + '  document.querySelectorAll(".section[data-pt=\'1\'],.section[data-pt=\'2\']").forEach(function(sec){\n'
        + '    sec.querySelectorAll(".question").forEach(function(q){\n'
        + '      var expl=q.querySelector(".expl");if(!expl)return;\n'
        + '      var oldC=(expl.getAttribute("data-ans")||"").split(",").filter(Boolean);\n'
        + '      var opts=[].slice.call(q.querySelectorAll(".option"));if(opts.length<2)return;\n'
        + '      sh(opts);\n'
        + '      var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",newC=[];\n'
        + '      opts.forEach(function(opt,i){\n'
        + '        var inp=opt.querySelector("input"),oldV=inp.value;\n'
        + '        inp.value=letters[i];\n'
        + '        var st=opt.querySelector("strong");if(st)st.textContent=letters[i]+".";\n'
        + '        if(oldC.indexOf(oldV)!==-1)newC.push(letters[i]);\n'
        + '        expl.parentNode.insertBefore(opt,expl);\n'
        + '      });\n'
        + '      expl.setAttribute("data-ans",newC.sort().join(","));\n'
        + '    });\n'
        + '  });\n'
        + '});\n'
        + '\n'
        + '// MATCH (PART 5)\n'
        + 'document.addEventListener("DOMContentLoaded",function(){\n'
        + '  document.querySelectorAll(".mw").forEach(function(wrap){\n'
        + '    wrap.links=[];\n'
        + '    var sel=null;\n'
        + '    wrap.querySelectorAll(".mi").forEach(function(item){\n'
        + '      item.addEventListener("click",function(){\n'
        + '        if(wrap.classList.contains("graded"))return;\n'
        + '        var isL=item.classList.contains("ml");\n'
        + '        if(sel===item){item.classList.remove("sel");sel=null;return;}\n'
        + '        if(sel){\n'
        + '          var selIsL=sel.classList.contains("ml");\n'
        + '          if(selIsL===isL){sel.classList.remove("sel");sel=item;item.classList.add("sel");}\n'
        + '          else{\n'
        + '            var lId=isL?item.dataset.id:sel.dataset.id,rId=isL?sel.dataset.id:item.dataset.id;\n'
        + '            var ex=wrap.links.findIndex(function(k){return k.l===lId&&k.r===rId;});\n'
        + '            if(ex!==-1)wrap.links.splice(ex,1);else wrap.links.push({l:lId,r:rId});\n'
        + '            sel.classList.remove("sel");sel=null;\n'
        + '            drawLines(wrap);\n'
        + '          }\n'
        + '        }else{sel=item;item.classList.add("sel");}\n'
        + '      });\n'
        + '    });\n'
        + '  });\n'
        + '  window.addEventListener("resize",function(){document.querySelectorAll(".mw").forEach(drawLines);});\n'
        + '});\n'
        + '\n'
        + 'function drawLines(wrap){\n'
        + '  var svg=wrap.querySelector(".ms");if(!svg)return;\n'
        + '  svg.innerHTML="";\n'
        + '  var wr=wrap.getBoundingClientRect();\n'
        + '  var col=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#2563eb";\n'
        + '  (wrap.links||[]).forEach(function(link,li){\n'
        + '    var lEl=wrap.querySelector(".ml[data-id=\'"+link.l+"\']");\n'
        + '    var rEl=wrap.querySelector(".mr[data-id=\'"+link.r+"\']");\n'
        + '    if(!lEl||!rEl)return;\n'
        + '    var lr=lEl.getBoundingClientRect(),rr=rEl.getBoundingClientRect();\n'
        + '    var x1=lr.right-wr.left,y1=lr.top+lr.height/2-wr.top;\n'
        + '    var x2=rr.left-wr.left, y2=rr.top+rr.height/2-wr.top;\n'
        + '    var cx=(x1+x2)/2;\n'
        + '    var g=document.createElementNS("http://www.w3.org/2000/svg","g");\n'
        + '    var path=document.createElementNS("http://www.w3.org/2000/svg","path");\n'
        + '    path.setAttribute("d","M"+x1+" "+y1+" C"+cx+" "+y1+" "+cx+" "+y2+" "+x2+" "+y2);\n'
        + '    path.setAttribute("stroke",col);path.setAttribute("stroke-width","2.5");path.setAttribute("fill","none");path.setAttribute("stroke-linecap","round");\n'
        + '    var hit=document.createElementNS("http://www.w3.org/2000/svg","path");\n'
        + '    hit.setAttribute("d","M"+x1+" "+y1+" C"+cx+" "+y1+" "+cx+" "+y2+" "+x2+" "+y2);\n'
        + '    hit.setAttribute("stroke","transparent");hit.setAttribute("stroke-width","16");hit.setAttribute("fill","none");\n'
        + '    g.style.cursor="pointer";\n'
        + '    g.addEventListener("mouseenter",function(){path.setAttribute("stroke","#ef4444");});\n'
        + '    g.addEventListener("mouseleave",function(){path.setAttribute("stroke",col);});\n'
        + '    ;(function(idx){g.addEventListener("click",function(){wrap.links.splice(idx,1);drawLines(wrap);});})(li);\n'
        + '    g.appendChild(path);g.appendChild(hit);svg.appendChild(g);\n'
        + '  });\n'
        + '}\n'
        + 'function clearMatch(id){var w=document.getElementById(id);if(w&&!w.classList.contains("graded")){w.links=[];drawLines(w);}}\n'
        + '\n'
        + '// CROSSWORD\n'
        + 'document.addEventListener("DOMContentLoaded",function(){\n'
        + '  document.querySelectorAll(".cw-cell").forEach(function(cell){\n'
        + '    cell.addEventListener("input",function(){this.value=this.value.toUpperCase();if(this.value){var n=this.nextElementSibling;if(n&&n.classList.contains("cw-cell"))n.focus();}});\n'
        + '    cell.addEventListener("keydown",function(e){\n'
        + '      if(e.key==="Backspace"&&!this.value){var p=this.previousElementSibling;if(p&&p.classList.contains("cw-cell")){p.focus();p.value="";}} \n'
        + '      else if(e.key==="ArrowRight"){var n=this.nextElementSibling;if(n&&n.classList.contains("cw-cell"))n.focus();}\n'
        + '      else if(e.key==="ArrowLeft"){var p=this.previousElementSibling;if(p&&p.classList.contains("cw-cell"))p.focus();}\n'
        + '    });\n'
        + '  });\n'
        + '});\n'
        + 'function showClue(n,t){document.getElementById("clueTitle").textContent="Gợi ý hàng ngang số "+n;document.getElementById("clueText").textContent=t;document.getElementById("clueOverlay").classList.add("open");}\n'
        + 'function closeClue(){document.getElementById("clueOverlay").classList.remove("open");}\n'
        + '\n'
        + '// GRADE\n'
        + 'function gradeQuiz(){\n'
        + '  var missingFields=[];\n'
        + '  ' + jsValidStr + '\n'
        + '  if(missingFields.length>0&&!forceSubmit){alert("Vui lòng điền đầy đủ: "+missingFields.join(", "));return;}\n'
        + '  if(!forceSubmit&&!confirm("Bạn có chắc muốn nộp bài?\\n(Không thể làm lại sau khi nộp)"))return;\n'
        + '  if(timerIv)clearInterval(timerIv);\n'
        + '  document.getElementById("loadOverlay").classList.add("show");\n'
        + '  setTimeout(function(){\n'
        + '    var totalScore=0,maxScore=0;\n'
        + '    var violationReport=violationCount>0?"Vi phạm "+violationCount+" lần: "+violationDetails.join("|"):"Không vi phạm";\n'
        + '    document.querySelectorAll(".section").forEach(function(sec){\n'
        + '      var pt=parseInt(sec.getAttribute("data-pt"));\n'
        + '      sec.querySelectorAll(".question").forEach(function(q){\n'
        + '        maxScore++;\n'
        + '        var qScore=0,feedback="";\n'
        + '        var expl=q.querySelector(".expl");\n'
        + '        if(pt===1||pt===2){\n'
        + '          var sel=[].slice.call(q.querySelectorAll("input:checked")).map(function(i){return i.value;}).sort().join(",");\n'
        + '          var cor=(expl.getAttribute("data-ans")||"").split(",").filter(Boolean).sort().join(",");\n'
        + '          if(sel&&sel===cor){qScore=1;feedback=\'<span style="color:#059669;font-weight:900;">✓ ĐÚNG!</span>\';q.style.borderColor="#059669";q.style.boxShadow="0 4px 0 0 #059669";}\n'
        + '          else{feedback=\'<span style="color:#dc2626;font-weight:900;">✗ SAI. Đáp án: <strong>\'+cor+\'</strong></span>\';q.style.borderColor="#dc2626";q.style.boxShadow="0 4px 0 0 #dc2626";}\n'
        + '        }else if(pt===3){\n'
        + '          var inp=document.getElementById(q.id+"_in");\n'
        + '          var sel=inp?inp.value.trim().toLowerCase():"";\n'
        + '          var cors=(expl.getAttribute("data-ans")||"").split("||").map(function(c){return c.trim().toLowerCase();}).filter(Boolean);\n'
        + '          if(sel&&cors.indexOf(sel)!==-1){qScore=1;feedback=\'<span style="color:#059669;font-weight:900;">✓ ĐÚNG!</span>\';q.style.borderColor="#059669";if(inp)inp.style.borderColor="#059669";}\n'
        + '          else{feedback=\'<span style="color:#dc2626;font-weight:900;">✗ SAI. Đáp án: <strong>\'+(expl.getAttribute("data-ans")||"").split("||").join(" hoặc ")+\'</strong></span>\';q.style.borderColor="#dc2626";if(inp)inp.style.borderColor="#dc2626";}\n'
        + '          if(inp)inp.disabled=true;\n'
        + '        }else if(pt===4){\n'
        + '          var blanks=[].slice.call(q.querySelectorAll("input[data-ans]"));\n'
        + '          var allOk=blanks.length>0;var aList="";\n'
        + '          blanks.forEach(function(b,bi){\n'
        + '            var sel=b.value.trim().toLowerCase();\n'
        + '            var cors=(b.getAttribute("data-ans")||"").split("||").map(function(c){return c.trim().toLowerCase();}).filter(Boolean);\n'
        + '            var ok=sel&&cors.indexOf(sel)!==-1;\n'
        + '            if(!ok)allOk=false;\n'
        + '            b.style.borderBottomColor=ok?"#059669":"#dc2626";\n'
        + '            b.style.color=ok?"#059669":"#dc2626";\n'
        + '            b.disabled=true;\n'
        + '            aList+="Ô "+(bi+1)+": "+(b.getAttribute("data-ans")||"").split("||")[0]+" | ";\n'
        + '          });\n'
        + '          if(allOk){qScore=1;feedback=\'<span style="color:#059669;font-weight:900;">✓ Điền đúng tất cả!</span>\';q.style.borderColor="#059669";}\n'
        + '          else{feedback=\'<span style="color:#dc2626;font-weight:900;">✗ Có ô sai/thiếu.<br><small>Đáp án: \'+aList.replace(/ \\| $/,"")+"</small></span>";q.style.borderColor="#dc2626";}\n'
        + '        }else if(pt===5){\n'
        + '          var wrap=q.querySelector(".mw");\n'
        + '          if(wrap){\n'
        + '            wrap.classList.add("graded");\n'
        + '            var expected=(wrap.getAttribute("data-exp")||"").split(",").filter(Boolean).sort();\n'
        + '            var actual=(wrap.links||[]).map(function(k){return k.l+"="+k.r;}).sort();\n'
        + '            var ok=JSON.stringify(expected)===JSON.stringify(actual)&&expected.length>0;\n'
        + '            if(ok){qScore=1;feedback=\'<span style="color:#059669;font-weight:900;">✓ Nối đúng!</span>\';q.style.borderColor="#059669";}\n'
        + '            else{feedback=\'<span style="color:#dc2626;font-weight:900;">✗ Sai/thiếu.<br><small>Đáp án đúng: \'+expected.map(function(p){return p.replace("=","→");}).join(", ")+"</small></span>";q.style.borderColor="#dc2626";}\n'
        + '            var cb=q.querySelector(".btn-clr");if(cb)cb.style.display="none";\n'
        + '          }\n'
        + '        }else if(pt===6){\n'
        + '          var rows=[].slice.call(q.querySelectorAll(".cw-row"));\n'
        + '          var ok6=0;\n'
        + '          rows.forEach(function(row){\n'
        + '            var cells=[].slice.call(row.querySelectorAll(".cw-cell"));\n'
        + '            var rowOk=cells.length>0&&cells.every(function(c){return c.value.toUpperCase()===(c.getAttribute("data-ans")||"").toUpperCase();});\n'
        + '            cells.forEach(function(c){\n'
        + '              var cok=c.value.toUpperCase()===(c.getAttribute("data-ans")||"").toUpperCase();\n'
        + '              c.style.borderColor=cok?"#059669":"#dc2626";\n'
        + '              c.style.color=cok?"#059669":"#dc2626";\n'
        + '              if(!c.value&&c.getAttribute("data-ans")){c.value=c.getAttribute("data-ans");c.style.opacity=".5";}\n'
        + '              c.disabled=true;\n'
        + '            });\n'
        + '            if(rowOk)ok6++;\n'
        + '          });\n'
        + '          if(ok6===rows.length&&rows.length>0){qScore=1;feedback=\'<span style="color:#059669;font-weight:900;">✓ Giải đúng '+' '+' tất cả hàng!</span>\';q.style.borderColor="#059669";}\n'
        + '          else{feedback=\'<span style="color:#dc2626;font-weight:900;">✗ Đúng \'+ok6+"/"+rows.length+\' hàng.</span>\';q.style.borderColor="#dc2626";}\n'
        + '          [].slice.call(q.querySelectorAll(".cw-num")).forEach(function(n){n.onclick=null;n.style.cursor="default";n.style.opacity=".5";});\n'
        + '        }\n'
        + '        totalScore+=qScore;\n'
        + '        var sol=decodeURIComponent(expl.getAttribute("data-sol")||"");\n'
        + '        var sc=sol.replace(/<br\\s*\\/?>/gi,"").trim();\n'
        + '        expl.innerHTML=feedback+(sc?\'<hr style="border:1px solid var(--border);margin:12px 0;"><strong>Lời giải:</strong><br>\'+sol:"");\n'
        + '        expl.style.display="block";\n'
        + '      });\n'
        + '    });\n'
        + '\n'
        + '    // Gửi Google Form\n'
        + '    if(GF_URL){\n'
        + '      try{\n'
        + '        var formData=new FormData();\n'
        + '        ' + jsBuilderStr + '\n'
        + '        fetch(GF_URL,{method:"POST",mode:"no-cors",body:formData});\n'
        + '      }catch(e){console.warn("GF Error",e);}\n'
        + '    }\n'
        + '\n'
        + '    localStorage.setItem(EXAM_ID+"_done","1");\n'
        + '    document.getElementById("loadOverlay").classList.remove("show");\n'
        + '\n'
        + '    // Summary\n'
        + '    var sum=document.createElement("div");\n'
        + '    sum.style.cssText="background:var(--card);padding:24px;border-radius:14px;margin-bottom:24px;border:3px solid var(--primary);box-shadow:0 5px 0 0 var(--primary-hover);";\n'
        + '    sum.innerHTML=\'<h2 style="margin-top:0;color:var(--primary);text-align:center;">📊 KẾT QUẢ BÀI THI</h2>\'\n'
        + '      +\'<div style="font-size:2rem;text-align:center;font-weight:900;color:var(--primary);margin-bottom:10px;">\'+totalScore+" / "+maxScore+" điểm</div>"\n'
        + '      +\'<p style="text-align:center;color:var(--text-muted);font-size:.9rem;">\'\n'
        + '      +(violationCount>0?"⚠️ "+violationReport:"✅ Không vi phạm quy chế")\n'
        + '      +"</p>";\n'
        + '    var h1=document.querySelector(".container h1");\n'
        + '    if(h1)h1.insertAdjacentElement("afterend",sum);\n'
        + '\n'
        + '    document.getElementById("scoreDisplay").textContent="📊 Điểm: "+totalScore+" / "+maxScore;\n'
        + '    document.getElementById("submitBtn").style.display="none";\n'
        + '    [].slice.call(document.querySelectorAll("input:not([data-ans])")).forEach(function(i){i.disabled=true;});\n'
        + '    if(window.MathJax)MathJax.typesetPromise();\n'
        + '    window.scrollTo({top:0,behavior:"smooth"});\n'
        + '  },600);\n'
        + '}\n'
        + '<\/script>\n'
        + '</body>\n'
        + '</html>';

    var blob = new Blob([OUT], { type: 'text/html' });
    var a    = document.createElement('a');
    a.href   = URL.createObjectURL(blob);
    a.download = title.replace(/\s+/g,'_') + '.html';
    a.click();
    URL.revokeObjectURL(a.href);
};

// ============================================================
// START
// ============================================================
document.addEventListener('DOMContentLoaded',
