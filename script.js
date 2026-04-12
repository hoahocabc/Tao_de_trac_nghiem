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
    1: `<div class="space-y-3 text-slate-700 leading-relaxed"><p class="text-blue-700 text-lg"><b>Dạng 1: CÂU HỎI TRẮC NGHIỆM (1 đáp án đúng)</b></p>
        <ul class="list-disc pl-5 space-y-1.5">
            <li>Nhập nội dung câu hỏi ở dòng đầu tiên.</li>
            <li>Các phương án (A, B, C, D...) ghi ở các dòng tiếp theo (bắt buộc có dấu chấm sau chữ cái, VD: <code>A. </code>).</li>
            <li>Đặt dấu <code>#</code> và một khoảng trắng ở ngay trước phương án <b>ĐÚNG</b>.</li>
            <li>Thêm dòng <code>Lời giải:</code> (hoặc <code>Giải thích:</code>) ở cuối cùng để cung cấp đáp án chi tiết cho học sinh (không bắt buộc).</li>
            <li><i>Mẹo: Nếu nhập nhiều câu cùng lúc từ ngoài vào, hãy ngăn cách các câu bằng <code>##</code>.</i></li>
        </ul>
        <div class="mt-3 font-semibold text-slate-800">Ví dụ chuẩn:</div>
        <pre class="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-mono whitespace-pre-wrap">Kim loại nào sau đây ở trạng thái lỏng ở điều kiện thường?
A. Sắt (Fe)
B. Đồng (Cu)
# C. Thủy ngân (Hg)
D. Bạc (Ag)
Lời giải: Thủy ngân (Hg) là kim loại duy nhất tồn tại ở trạng thái lỏng ở nhiệt độ phòng.</pre></div>`,

    2: `<div class="space-y-3 text-slate-700 leading-relaxed"><p class="text-blue-700 text-lg"><b>Dạng 2: CÂU HỎI NHIỀU ĐÁP ÁN ĐÚNG (Hộp kiểm)</b></p>
        <ul class="list-disc pl-5 space-y-1.5">
            <li>Nhập nội dung câu hỏi ở dòng đầu tiên.</li>
            <li>Các phương án ghi ở các dòng tiếp theo (A., B., C., D...).</li>
            <li>Đặt dấu <code>#</code> ở đầu <b>TẤT CẢ</b> các phương án đúng. Các phương án không có <code>#</code> hệ thống sẽ tự hiểu là sai.</li>
            <li>Thêm dòng <code>Lời giải:</code> ở cuối cùng để giải thích chi tiết.</li>
            <li><i>Ngăn cách nhiều câu bằng <code>##</code>.</i></li>
        </ul>
        <div class="mt-3 font-semibold text-slate-800">Ví dụ chuẩn:</div>
        <pre class="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-mono whitespace-pre-wrap">Những khí nào sau đây nhẹ hơn không khí (M = 29)?
# A. H2 (M = 2)
B. CO2 (M = 44)
# C. N2 (M = 28)
D. O2 (M = 32)
Lời giải: Khí H2 (2 < 29) và N2 (28 < 29) nhẹ hơn không khí.</pre></div>`,

    3: `<div class="space-y-3 text-slate-700 leading-relaxed"><p class="text-blue-700 text-lg"><b>Dạng 3: CÂU HỎI TRẢ LỜI NGẮN (Điền từ)</b></p>
        <ul class="list-disc pl-5 space-y-1.5">
            <li>Nhập nội dung câu hỏi ở dòng đầu tiên.</li>
            <li>Các đáp án được chấp nhận ghi ở dưới cùng, <b>mỗi đáp án 1 dòng</b> và <b>BẮT BUỘC</b> có dấu <code>#</code> ở đầu. (Hệ thống chấm không phân biệt chữ hoa/thường).</li>
            <li>Thêm dòng <code>Lời giải:</code> ở cuối cùng để giải thích.</li>
            <li><i>Ngăn cách nhiều câu bằng <code>##</code>.</i></li>
        </ul>
        <div class="mt-3 font-semibold text-slate-800">Ví dụ chuẩn:</div>
        <pre class="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-mono whitespace-pre-wrap">Công thức hóa học của nước là gì?
# H2O
# h2o
Lời giải: Nước được tạo thành từ 2 nguyên tử Hidro và 1 nguyên tử Oxi, công thức là H2O.</pre></div>`,

    4: `<div class="space-y-3 text-slate-700 leading-relaxed"><p class="text-blue-700 text-lg"><b>Dạng 4: CÂU HỎI ĐIỀN KHUYẾT (Nhiều chỗ trống)</b></p>
        <ul class="list-disc pl-5 space-y-1.5">
            <li>Trong câu hỏi, đánh dấu các chỗ trống cần điền bằng cú pháp: <code>=(1)=</code>, <code>=(2)=</code>...</li>
            <li>Sau câu hỏi, bắt buộc ghi một dòng chữ: <code>Đáp án:</code></li>
            <li>Bên dưới, liệt kê lần lượt các vị trí (VD: <code>=(1)=</code>) và bên dưới nó là các phương án được chấp nhận (có dấu <code>#</code> ở đầu).</li>
            <li>Cuối cùng, ghi <code>Lời giải:</code> (nếu có).</li>
        </ul>
        <div class="mt-3 font-semibold text-slate-800">Ví dụ chuẩn:</div>
        <pre class="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-mono whitespace-pre-wrap">Phản ứng hóa học là quá trình biến đổi từ =(1)= thành =(2)=.
Đáp án:
=(1)=
# chất ban đầu
# chất tham gia
=(2)=
# chất mới
# sản phẩm
Lời giải: Theo định nghĩa SGK, phản ứng hóa học biến đổi chất tham gia (chất ban đầu) thành sản phẩm (chất mới).</pre></div>`,

    5: `<div class="space-y-3 text-slate-700 leading-relaxed"><p class="text-blue-700 text-lg"><b>Dạng 5: CÂU HỎI GHÉP ĐÔI (NỐI)</b></p>
        <ul class="list-disc pl-5 space-y-1.5">
            <li>Ghi câu dẫn (nếu có). Sau đó ghi chính xác chữ <code>Cột I:</code> và liệt kê các ý (dùng số 1., 2., 3...).</li>
            <li>Ghi chính xác chữ <code>Cột II:</code> và liệt kê các ý (dùng chữ A., B., C...).</li>
            <li>Dòng đáp án bắt buộc có dấu <code>#</code> ở đầu, định dạng: <code># 1=A, 2=B, 3=C</code>.</li>
            <li>Dòng <code>Lời giải:</code> đặt ở cuối cùng.</li>
        </ul>
        <div class="mt-3 font-semibold text-slate-800">Ví dụ chuẩn:</div>
        <pre class="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-mono whitespace-pre-wrap">Hãy nối tên gọi ở Cột I với công thức ở Cột II cho phù hợp:
Cột I:
1. Axit clohidric
2. Natri hiđroxit
Cột II:
A. NaOH
B. HCl
# 1=B, 2=A
Lời giải: HCl là axit clohidric, NaOH là natri hiđroxit (xút).</pre></div>`,

    6: `<div class="space-y-3 text-slate-700 leading-relaxed"><p class="text-blue-700 text-lg"><b>Dạng 6: GIẢI Ô CHỮ</b></p>
        <ul class="list-disc pl-5 space-y-1.5">
            <li>Ghi câu dẫn đầu tiên (nếu có).</li>
            <li>Ghi lần lượt các gợi ý hàng ngang theo cấu trúc: <code>[Gợi ý] # [ĐÁP ÁN KHÔNG DẤU TIẾNG VIỆT]</code>. (Nên viết liền không khoảng trắng).</li>
            <li>Thêm dòng <code>Từ khóa: # [TỪ KHÓA]</code> ở cuối. <b>Lưu ý quan trọng:</b> Số chữ cái của từ khóa phải bằng số hàng ngang, và mỗi chữ cái của từ khóa phải xuất hiện trong đáp án hàng ngang tương ứng (để hệ thống tự xếp dọc).</li>
            <li>Cuối cùng ghi <code>Lời giải:</code> (nếu có).</li>
        </ul>
        <div class="mt-3 font-semibold text-slate-800">Ví dụ chuẩn:</div>
        <pre class="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-mono whitespace-pre-wrap">Giải ô chữ sau đây:
Hạt không mang điện trong hạt nhân? # NEUTRON
Ký hiệu hóa học của Đồng? # CU
Khí duy trì sự cháy? # OXI
Ký hiệu hóa học của Canxi? # CA
Từ khóa: # NUOC
Lời giải: 
- Hàng 1: NEUTRO[N] (Chữ N)
- Hàng 2: C[U] (Chữ U)
- Hàng 3: [O]XI (Chữ O)
- Hàng 4: [C]A (Chữ C)
=> Từ khóa ghép dọc lại là NUOC.</pre></div>`
};

const FULL_GUIDE = `
<div class="space-y-6 text-slate-800 leading-relaxed">
    <div class="text-center mb-6">
        <h3 class="text-xl sm:text-2xl font-black text-blue-700 uppercase tracking-wide">Hướng dẫn sử dụng chi tiết</h3>
        <p class="text-slate-600 text-sm mt-1">Dành cho mọi giáo viên, không yêu cầu am hiểu kỹ thuật.</p>
    </div>
    
    <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
        <h4 class="font-bold text-blue-800 text-lg mb-2 flex items-center gap-2"><i data-lucide="info" class="w-5 h-5"></i> Tổng quan quy trình</h4>
        <p class="text-sm">Ứng dụng này giúp thầy cô tạo ra một <b>Trang web làm bài kiểm tra Online</b> hoặc <b>File Word/PDF</b> để in ra giấy. Quy trình gồm 3 bước: <b>(1) Nhập câu hỏi -> (2) Cấu hình điểm/thời gian -> (3) Xuất file đề thi.</b></p>
    </div>

    <div>
        <h4 class="font-bold text-blue-600 text-lg border-b-2 border-blue-100 pb-1 mb-3 flex items-center gap-2"><i data-lucide="edit-3" class="w-5 h-5"></i> Bước 1: Nhập và soạn thảo câu hỏi</h4>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Cách 1 (Soạn trực tiếp):</b> Chọn loại câu hỏi ở các Tab (Dạng 1 đến Dạng 6). Gõ nội dung vào ô trống lớn, sau đó bắt buộc bấm nút xanh <b>"Thêm vào danh sách"</b>. Câu hỏi sẽ chạy sang danh sách bên phải. Thầy cô có thể bôi đen chữ rồi dùng thanh công cụ để <b>In đậm</b>, <i>In nghiêng</i>, hoặc chèn công thức hóa học.</li>
            <li><b>Cách 2 (Nhập nhanh từ file TXT):</b> Thầy cô có thể soạn sẵn hàng chục câu hỏi trên máy tính, lưu thành file <code>.txt</code> rồi bấm nút <b>"Nhập TXT"</b> trên cùng để đưa tất cả vào phần mềm trong 1 giây. (Nên dùng tính năng này cho nhanh).</li>
            <li><b>Chèn Ảnh/Video:</b> Đặt con trỏ chuột vào vị trí muốn chèn trong ô soạn thảo, bấm nút "Ảnh" hoặc "Video" trên thanh công cụ.</li>
            <li><b>Sửa/Xóa:</b> Nhìn sang danh sách câu hỏi bên phải, rê chuột vào từng câu sẽ thấy biểu tượng cây bút (để sửa) và thùng rác (để xóa). Có thể giữ chuột để kéo thả thay đổi thứ tự câu hỏi.</li>
        </ul>
    </div>

    <div>
        <h4 class="font-bold text-blue-600 text-lg border-b-2 border-blue-100 pb-1 mb-3 flex items-center gap-2"><i data-lucide="settings" class="w-5 h-5"></i> Bước 2: Thiết lập chung & Chống gian lận</h4>
        <ul class="list-disc pl-5 space-y-2">
            <li>Điền đầy đủ <b>Tên bài kiểm tra</b>, <b>Người tạo</b>, <b>Thời gian bắt đầu/kết thúc</b> (đúng định dạng VD: 08:00 20/11/2026). Trẻ sẽ không thể làm bài nếu chưa tới giờ.</li>
            <li><b>Chống gian lận:</b> Nếu tích chọn, khi học sinh đang làm bài mà mở sang Tab khác hoặc mở ứng dụng khác quá 3 lần, hệ thống sẽ <b>khóa bài và nộp bài bắt buộc</b>.</li>
            <li><b>Công bố điểm:</b> Nếu tích chọn, học sinh nộp bài xong sẽ xem được ngay điểm số, câu đúng, câu sai và lời giải chi tiết. Nếu tắt đi, các em chỉ nhận được thông báo "Đã nộp bài".</li>
        </ul>
    </div>

    <div>
        <h4 class="font-bold text-emerald-600 text-lg border-b-2 border-emerald-100 pb-1 mb-3 flex items-center gap-2"><i data-lucide="database" class="w-5 h-5"></i> Bước 3: Liên kết Google Form (Để lấy điểm)</h4>
        <p class="text-sm mb-2 italic text-slate-600">Lưu ý: Nếu chỉ in ra Word/PDF thì bỏ qua bước này. Nếu thi Online, thầy cô PHẢI làm bước này để học sinh nộp bài điểm sẽ bay về Google Sheet của thầy cô.</p>
        <ul class="list-decimal pl-5 space-y-2">
            <li>Mở Google Form, tạo một Form mới. Tạo các câu hỏi ngắn yêu cầu học sinh điền tên, lớp... (KHÔNG tạo câu hỏi trắc nghiệm ở đây). Cài đặt form sang chế độ "Cho phép mọi người xem/trả lời" (Bỏ yêu cầu đăng nhập email).</li>
            <li>Bấm biểu tượng con mắt (Xem trước) của Google Form, copy đường link dài trên trình duyệt.</li>
            <li>Quay lại phần mềm này, bấm nút <b>"Form"</b> màu xanh lá ở góc phải trên. Dán link vừa copy vào ô trống, bấm <b>"Phân tích"</b>.</li>
            <li>Hệ thống sẽ tự động quét các ô điền tên, lớp. Thầy cô chỉ cần tích chọn ô nào "Bắt buộc điền", ô nào là "Tự nhập" hoặc "Tự động" (Tự động lưu điểm trắc nghiệm vào cột đó). Cuối cùng bấm <b>"Lưu thông tin"</b>.</li>
        </ul>
    </div>

    <div>
        <h4 class="font-bold text-blue-600 text-lg border-b-2 border-blue-100 pb-1 mb-3 flex items-center gap-2"><i data-lucide="share" class="w-5 h-5"></i> Bước 4: Xuất đề thi và Lưu trữ</h4>
        <ul class="list-disc pl-5 space-y-2">
            <li><b>Xuất HTML (Thi Online):</b> Bấm nút này, hệ thống sẽ tải về máy thầy cô một file có đuôi <code>.html</code>. Thầy cô chỉ cần gửi trực tiếp file này cho học sinh (qua Zalo, Facebook...). Học sinh tải về, bấm đúp chuột mở bằng trình duyệt web (Chrome, Safari, Cốc Cốc) là có thể làm bài.</li>
            <li><b>Xuất Word / PDF:</b> Dùng để in ra giấy.</li>
            <li><b>Lưu lại:</b> Bấm nút "Lưu lại" để lưu toàn bộ dự án đang làm dở thành 1 file <code>Project_HoaHoc.json</code>. Lần sau muốn sửa đề, thầy cô chỉ cần mở phần mềm lên, bấm <b>"Mở file"</b> và chọn file json này là dữ liệu sẽ phục hồi đầy đủ.</li>
        </ul>
    </div>

    <div class="mt-8 pt-6 border-t-2 border-slate-200 text-right">
        <p class="font-black text-blue-700 text-xl tracking-wider">HÓA HỌC ABC</p>
        <p class="text-slate-500 text-sm">Nền tảng hỗ trợ giáo dục 4.0 - Phiên bản 2.0</p>
    </div>
</div>
`;

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

    toggleMenu() {
        const menu = document.getElementById('mobileMenu');
        const icon = document.querySelector('#mobileMenuBtn i');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            if(typeof lucide !== 'undefined') {
                icon.setAttribute('data-lucide', 'x');
                lucide.createIcons();
            }
        } else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            if(typeof lucide !== 'undefined') {
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        }
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
                <span class="text-center w-full truncate">Dạng ${i}</span>
            </button>`;
        }
        c.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    switchTab(tab) {
        const qInput = document.getElementById('qInput');
        if(qInput && qInput.value.trim().length > 5 && this.activeTab !== tab) {
            if(!confirm("Bạn đang có câu hỏi chưa được 'Thêm vào danh sách'. Chuyển tab sẽ làm mất nội dung này. Tiếp tục?")) return;
        }

        this.activeTab = tab;
        const titles = ["Một phương án đúng", "Nhiều đáp án đúng", "Trả lời ngắn", "Điền khuyết", "Ghép đôi", "Giải ô chữ"];
        document.getElementById('partTitle').innerHTML = `Dạng ${tab}: <span class="text-slate-700 font-semibold ml-1.5 text-sm sm:text-lg">${titles[tab-1]}</span>`;
        this.renderTabs();
        this.renderQList();
        if(qInput) qInput.value = '';
    },

    showGuide() { 
        document.getElementById('guideModalTitle').innerHTML = '<i data-lucide="help-circle" class="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"></i> Hướng dẫn nhập liệu';
        document.getElementById('guideModalContent').innerHTML = GUIDES[this.activeTab];
        if (typeof lucide !== 'undefined') lucide.createIcons();
        const modal = document.getElementById('guideModal');
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95', 'translate-y-4');
        content.classList.add('scale-100', 'translate-y-0');
    },

    openFullGuide() {
        document.getElementById('guideModalTitle').innerHTML = '<i data-lucide="book-open" class="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"></i> Hướng dẫn sử dụng';
        document.getElementById('guideModalContent').innerHTML = FULL_GUIDE;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        const modal = document.getElementById('guideModal');
        const content = modal.querySelector('.modal-content');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-95', 'translate-y-4');
        content.classList.add('scale-100', 'translate-y-0');
    },

    renderToolbar(toolbarId, inputId) {
        const tb = document.getElementById(toolbarId);
        if(!tb) return;
        let html = '<div class="flex flex-wrap bg-white rounded-lg p-1 border border-slate-200 shadow-sm gap-1 items-center w-full">';
        
        chem_symbols.forEach(sym => {
            if(sym.action === 'arrow_right') {
                html += `<button class="px-1.5 py-1 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-all active:scale-90 font-bold text-sm sm:text-base" title="Mũi tên có chữ ở trên/dưới" onclick="app.insertArrow('right', '${inputId}')">${sym.t}</button>`;
            } else if(sym.action === 'arrow_eq') {
                html += `<button class="px-1.5 py-1 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-all active:scale-90 font-bold text-sm sm:text-base" title="Mũi tên thuận nghịch có chữ ở trên/dưới" onclick="app.insertArrow('eq', '${inputId}')">${sym.t}</button>`;
            } else {
                html += `<button class="px-1.5 py-1 text-slate-700 hover:bg-slate-100 rounded transition-all active:scale-90 font-bold text-sm sm:text-base" onclick="app.insertText('${sym.t}', '${sym.s||''}', '${sym.e||''}', '${inputId}')">${sym.t}</button>`;
            }
        });
        
        html += `<div class="w-px h-4 bg-slate-300 mx-0.5"></div>`;
        
        extra_symbols.forEach(s => {
            html += `<button class="px-1.5 py-1 text-slate-700 hover:bg-slate-100 rounded transition-all active:scale-90 font-bold text-sm sm:text-base" onclick="app.insertText('${s}', '', '', '${inputId}')">${s}</button>`;
        });
        
        html += `<div class="w-px h-4 bg-slate-300 mx-0.5"></div>`;
        
        html += `<button class="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded font-black transition-all active:scale-90 bg-white border border-slate-200 text-sm sm:text-base" onclick="app.insertText('Bold', '<b>', '</b>', '${inputId}')">B</button>`;
        html += `<button class="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded italic font-black transition-all active:scale-90 bg-white border border-slate-200 text-sm sm:text-base" onclick="app.insertText('Italic', '<i>', '</i>', '${inputId}')">I</button>`;
        
        html += `<div class="w-px h-4 bg-slate-300 mx-0.5"></div>`;
        
        html += `<button class="px-2 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded text-xs sm:text-sm font-bold flex items-center transition-all active:scale-90" onclick="app.insertImage('${inputId}')"><i data-lucide="image" class="w-4 h-4 mr-1"></i> Ảnh</button>`;
        html += `<button class="px-2 py-1 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded text-xs sm:text-sm font-bold flex items-center transition-all active:scale-90" onclick="app.insertVideo('${inputId}')"><i data-lucide="youtube" class="w-4 h-4 mr-1"></i> Video</button>`;
        
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
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-1.5">
                    <i data-lucide="arrow-right-circle" class="w-5 h-5 text-blue-500"></i> Chèn mũi tên
                </h3>
                <div>
                    <label class="block text-sm sm:text-base font-bold text-slate-700 mb-1">Chữ phía TRÊN mũi tên:</label>
                    <input type="text" id="arrowTopInput" class="w-full bg-slate-50 border-2 border-slate-200 rounded-lg px-2.5 py-1.5 text-base outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="VD: t°">
                </div>
                <div>
                    <label class="block text-sm sm:text-base font-bold text-slate-700 mb-1">Chữ phía DƯỚI mũi tên:</label>
                    <input type="text" id="arrowBottomInput" class="w-full bg-slate-50 border-2 border-slate-200 rounded-lg px-2.5 py-1.5 text-base outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="VD: xt">
                </div>
                <div class="flex justify-end gap-2 mt-1">
                    <button id="arrowCancelBtn" class="px-3 py-1.5 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors text-sm sm:text-base">Hủy</button>
                    <button id="arrowConfirmBtn" class="px-3 py-1.5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base shadow-[0_2px_0_0_#1d4ed8] active:translate-y-0.5 active:shadow-none">Chèn vào</button>
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

        const closePopup = () => { document.body.removeChild(overlay); el.focus(); };

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

        cancelBtn.onclick = closePopup; confirmBtn.onclick = confirmInsert;
        const handleKey = (ev) => { if (ev.key === 'Enter') confirmInsert(); if (ev.key === 'Escape') closePopup(); };
        topInput.addEventListener('keydown', handleKey); bottomInput.addEventListener('keydown', handleKey);
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
        const url = prompt("Nhập đường link Video (Hỗ trợ YouTube hoặc link file .mp4 trực tiếp):", "");
        if (!url) return;
        let embedHtml = "";
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            let videoId = "";
            if (url.includes("youtu.be/")) videoId = url.split("youtu.be/")[1].split("?")[0];
            else if (url.includes("watch?v=")) videoId = url.split("watch?v=")[1].split("&")[0];
            
            if (videoId) embedHtml = `<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px; margin:10px 0;"><iframe style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe></div>`;
            else { alert("Không thể nhận diện ID YouTube!"); return; }
        } else if (url.toLowerCase().endsWith(".mp4") || url.toLowerCase().includes(".mp4?")) {
            embedHtml = `<video controls style="max-width:100%; border-radius:8px; border:2px solid #e2e8f0; margin:10px 0;"><source src="${url}" type="video/mp4">Trình duyệt không hỗ trợ xem video.</video>`;
        } else { alert("Vui lòng nhập link YouTube hoặc .mp4 hợp lệ!"); return; }
        
        this.insertText('', embedHtml, '', inputId);
    },

    addQuestion() {
        const val = document.getElementById('qInput').value.trim();
        if(!val) return alert("Vui lòng nhập nội dung câu hỏi!");
        const chunks = val.includes("##") ? val.split("##").filter(x => x.trim()) : [val];
        chunks.forEach(c => { if(c.split(/\r?\n/).length >= 2) this.data['part'+this.activeTab].push(c.trim()); });
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

    handleDragStart(e, index) {
        this.draggedItemIndex = index;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', index);
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
        if (insertAfter) e.currentTarget.classList.add('drag-over-bottom');
        else e.currentTarget.classList.add('drag-over-top');
        return false;
    },

    handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over-top', 'drag-over-bottom');
    },

    handleDrop(e, dropIndex) {
        e.stopPropagation();
        document.querySelectorAll('.q-item-drag').forEach(el => el.classList.remove('drag-over-top', 'drag-over-bottom'));
        
        let dragIndex = this.draggedItemIndex !== null ? this.draggedItemIndex : parseInt(e.dataTransfer.getData('text/plain'));
        
        if (dragIndex !== null && !isNaN(dragIndex) && dragIndex !== dropIndex) {
            const rect = e.currentTarget.getBoundingClientRect();
            const relY = e.clientY - rect.top;
            const insertAfter = relY >= rect.height / 2;
            
            const list = this.data['part' + this.activeTab];
            let insertIndex = dropIndex;
            
            if (dragIndex < dropIndex && insertAfter) insertIndex = dropIndex;
            else if (dragIndex < dropIndex && !insertAfter) insertIndex = dropIndex - 1;
            else if (dragIndex > dropIndex && insertAfter) insertIndex = dropIndex + 1;
            else if (dragIndex > dropIndex && !insertAfter) insertIndex = dropIndex;
            
            const item = list.splice(dragIndex, 1)[0];
            list.splice(insertIndex, 0, item);
            this.renderQList();
        }
        return false;
    },

    handleDragEnd(e) {
        e.target.classList.remove('dragging-item');
        document.querySelectorAll('.q-item-drag').forEach(el => el.classList.remove('drag-over-top', 'drag-over-bottom'));
        this.draggedItemIndex = null;
    },

    // Hàm chuyển đổi Công thức Hóa học sang dạng văn bản HTML cho Word
    convertLatexForWord(text) {
        if(!text) return text;
        return text.replace(/\$(.*?)\$/g, (match, formula) => {
            let html = formula.trim();
            html = html.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');
            html = html.replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>');
            html = html.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
            html = html.replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>');
            html = html.replace(/\\rightarrow/g, '→');
            html = html.replace(/\\rightleftharpoons/g, '⇌');
            html = html.replace(/\\xrightarrow\s*\[\\text\{([^}]+)\}\]\s*\{\\text\{([^}]+)\}\}/g, ' → (xt: $1, t°: $2) ');
            html = html.replace(/\\xrightarrow\s*\{\\text\{([^}]+)\}\}/g, ' → (t°: $1) ');
            html = html.replace(/\\xrightleftharpoons\s*\[\\text\{([^}]+)\}\]\s*\{\\text\{([^}]+)\}\}/g, ' ⇌ (xt: $1, t°: $2) ');
            html = html.replace(/\\xrightleftharpoons\s*\{\\text\{([^}]+)\}\}/g, ' ⇌ (t°: $1) ');
            html = html.replace(/\\text\{([^}]+)\}/g, '$1');
            html = html.replace(/\\[a-zA-Z]+/g, ''); 
            return html;
        });
    },

    renderQList() {
        const arr = this.data['part'+this.activeTab];
        const html = arr.map((q, i) => `
            <div draggable="true" 
                 class="q-item-drag p-2 sm:p-3 border-2 border-slate-200 rounded-xl bg-white shadow-[0_3px_0_0_#e2e8f0] hover:border-blue-400 hover:shadow-[0_3px_0_0_#60a5fa] transition-all group relative pr-16 sm:pr-20 cursor-default mb-2"
                 ondragstart="app.handleDragStart(event, ${i})" 
                 ondragover="app.handleDragOver(event, ${i})" 
                 ondragleave="app.handleDragLeave(event)"
                 ondrop="app.handleDrop(event, ${i})" 
                 ondragend="app.handleDragEnd(event)">
                 
                <div class="flex items-center gap-1.5 mb-1.5 border-b border-slate-100 pb-1.5">
                    <div class="drag-handle cursor-grab active:cursor-grabbing text-slate-400 hover:text-blue-500 transition-colors p-1 -ml-1 rounded flex items-center justify-center bg-slate-50 hover:bg-blue-50" title="Kéo thả để di chuyển">
                        <i data-lucide="grip-vertical" class="w-4 h-4 sm:w-5 sm:h-5 pointer-events-none"></i>
                    </div>
                    <span class="bg-blue-100 text-blue-700 text-xs sm:text-sm font-black px-2 py-0.5 sm:px-2 sm:py-1 rounded-md">Câu ${i+1}</span>
                </div>
                <div class="text-sm sm:text-base text-slate-700 line-clamp-3 leading-relaxed font-medium pointer-events-none">${q.replace(/</g,'&lt;')}</div>
                <div class="absolute top-2 right-2 flex gap-1 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                    <button class="p-1.5 sm:p-2 bg-blue-50 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-100 hover:border-blue-600 rounded-lg transition-all active:scale-90 shadow-sm" onclick="app.editQuestion(${i})" title="Sửa câu hỏi"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
                    <button class="p-1.5 sm:p-2 bg-red-50 text-red-500 hover:text-white hover:bg-red-500 border border-red-100 hover:border-red-600 rounded-lg transition-all active:scale-90 shadow-sm" onclick="app.removeQuestion(${i})" title="Xóa"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
            </div>
        `).join('');
        
        document.getElementById('qList').innerHTML = html || `
            <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-3 py-8">
                <div class="bg-slate-100 p-3 sm:p-4 rounded-xl shadow-inner"><i data-lucide="inbox" class="w-8 h-8 sm:w-10 sm:h-10 text-slate-300"></i></div>
                <p class="text-sm sm:text-base font-bold text-slate-400">Chưa có câu hỏi nào</p>
            </div>`;
        const badge = document.getElementById('qCountBadge');
        if(badge) badge.innerText = `${arr.length} câu`;
        if (typeof lucide !== 'undefined') lucide.createIcons();

        // Kích hoạt MathJax để vẽ lại công thức hóa học vừa load vào danh sách hiển thị
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise([document.getElementById('qList')]).catch(err => console.log(err));
        }
    },

    newProject() {
        if(confirm("Tạo dự án mới sẽ xóa toàn bộ nội dung đề hiện tại. Bạn có chắc chắn?")) {
            const savedGF = this.data.gf_config; 
            this.data = { part1:[], part2:[], part3:[], part4:[], part5:[], part6:[], gf_config: savedGF };
            document.getElementById('quizTitle').value = "BÀI TẬP TRẮC NGHIỆM";
            document.getElementById('creatorName').value = "";
            document.getElementById('startTime').value = "";
            document.getElementById('endTime').value = "";
            
            const acBox = document.getElementById('antiCheat');
            const psBox = document.getElementById('publishScore');
            if (acBox) acBox.checked = false;
            if (psBox) psBox.checked = false;
            
            this.switchTab(1);
        }
    },
    saveProject() {
        const acBox = document.getElementById('antiCheat');
        const psBox = document.getElementById('publishScore');
        const p = {
            title: document.getElementById('quizTitle').value,
            creator: document.getElementById('creatorName').value,
            theme: document.getElementById('themeSelect').value,
            start_time: document.getElementById('startTime').value,
            end_time: document.getElementById('endTime').value,
            anti_cheat: acBox ? acBox.checked : false,
            publish_score: psBox ? psBox.checked : false,
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
                try {
                    const p = JSON.parse(ev.target.result);
                    document.getElementById('quizTitle').value = p.title || '';
                    document.getElementById('creatorName').value = p.creator || '';
                    document.getElementById('themeSelect').value = p.theme || '';
                    document.getElementById('startTime').value = p.start_time || '';
                    document.getElementById('endTime').value = p.end_time || '';
                    
                    const acBox = document.getElementById('antiCheat');
                    const psBox = document.getElementById('publishScore');
                    if (acBox) acBox.checked = p.anti_cheat === true;
                    if (psBox) psBox.checked = p.publish_score === true;
                    
                    let loadedGF = p.gf_config;
                    if (!loadedGF || !loadedGF.url || loadedGF.fields.length === 0) { loadedGF = this.data.gf_config; }
                    
                    const cleanQuestions = (arr) => (arr || []).map(q => q.replace(/^(##\s*)+/, '').trim());

                    this.data = { 
                        part1: cleanQuestions(p.part1), 
                        part2: cleanQuestions(p.part2), 
                        part3: cleanQuestions(p.part3), 
                        part4: cleanQuestions(p.part4), 
                        part5: cleanQuestions(p.part5), 
                        part6: cleanQuestions(p.part6), 
                        gf_config: loadedGF 
                    };
                    this.switchTab(1);
                } catch(err) { alert("Lỗi khi đọc file. File không đúng định dạng!"); }
            };
            reader.readAsText(file);
            f.value = ''; 
        };
        f.click();
    },
    importTXT(event) {
        const file = event.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            let text = ev.target.result;
            text = text.replace(/^(Dạng|Phần)\s*\d+.*$/gim, '');
            const chunks = text.split("##").map(c => c.trim()).filter(c => c.length > 0);
            let count = 0;
            chunks.forEach(c => {
                const lines = c.split(/\r?\n/);
                let type = 1;
                
                if (c.includes("Cột I:") && c.includes("Cột II:")) {
                    type = 5;
                } else if (c.match(/=\(\s*\d+\s*\)=/) && c.includes("Đáp án:")) {
                    type = 4;
                } else if (lines.some(l => l.match(/^.+?#.+$/) && !l.trimLeft().startsWith("#")) || c.includes("Từ khóa:")) {
                    type = 6;
                } else {
                    const optionLines = lines.filter(l => l.match(/^\s*#?\s*[A-Ea-e]\.\s/));
                    if (optionLines.length > 0) {
                        const correctCount = optionLines.filter(l => l.trimLeft().startsWith("#")).length;
                        type = correctCount > 1 ? 2 : 1;
                    } else {
                        type = 3;
                    }
                }
                this.data['part'+type].push(c);
                count++;
            });
            alert(`Đã nhập thành công ${count} câu hỏi từ file TXT.`);
            this.switchTab(this.activeTab);
        };
        reader.readAsText(file);
        event.target.value = '';
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
            document.getElementById('gfFieldsTable').innerHTML = `<tr><td colspan="4" class="text-center py-5 sm:py-8 text-slate-400 font-medium italic"><i data-lucide="link" class="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-slate-300"></i>Dán link Form vào ô phía trên để bắt đầu phân tích</td></tr>`;
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
        
        const fetchWithTimeout = (resource, options) => {
            const { timeout = 8000 } = options;
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            return fetch(resource, { ...options, signal: controller.signal }).finally(() => clearTimeout(id));
        };

        for (const proxy of proxies) {
            try {
                const response = await fetchWithTimeout(proxy.url, { cache: "no-store", timeout: 10000 });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                if (proxy.type === 'json') {
                    const data = await response.json();
                    if (data.contents) return data.contents;
                } else return await response.text();
            } catch (err) { continue; }
        }
        throw new Error("Không thể kết nối đến Google Form qua các máy chủ trung gian. Vui lòng thử lại sau.");
    },

    async autoAnalyzeGF() {
        let url = document.getElementById('gfUrlInput').value.trim();
        if(!url) return alert("Vui lòng nhập link Form!");
        if(url.includes("forms.gle")) return alert("⚠️ Vui lòng mở link rút gọn bằng trình duyệt, copy đường link dài (docs.google.com/forms...) rồi dán lại vào đây.");

        const btn = document.getElementById('btnAnalyze');
        const oldHtml = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 mr-2 animate-spin"></i> Đang phân tích...';
        btn.disabled = true; document.getElementById('gfUrlInput').disabled = true;
        
        try {
            const html = await this.fetchHtmlWithCors(url);
            const match = html.match(/var FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*\])\s*;/s);
            if(!match) throw new Error("Không tìm thấy dữ liệu. Đảm bảo Form đang được thiết lập 'Công khai' (Public).");
            
            const jsonData = JSON.parse(match[1]);
            const qs = jsonData[1][1];
            let fields = [];
            
            qs.forEach(q => {
                if(q[4] && q[4][0]) {
                    let title = q[1] || ""; let t = title.toLowerCase(); let type = "Tự nhập";
                    if(t.includes('điểm') || t.includes('score') || t.includes('tổng') || 
                       t.includes('tối đa') || t.includes('max') || 
                       t.includes('vi phạm') || t.includes('gian lận') || 
                       t.includes('chi tiết') || t.includes('thống kê') || t.includes('bài làm') || t.includes('lỗi')) {
                        type = "Tự động";
                    }
                    fields.push({ id: q[4][0][0].toString(), title: title, type: type, required: q[4][0][2] == 1 });
                }
            });

            this.data.gf_config.fields = fields;
            this.data.gf_config.url = url.split('?')[0].replace('/edit', '/formResponse').replace('/viewform', '/formResponse');
            if(!this.data.gf_config.url.endsWith('/formResponse')) this.data.gf_config.url += '/formResponse';
            
            document.getElementById('gfUrlInput').value = this.data.gf_config.url;
            this.renderGFFields();
            
            btn.innerHTML = '<i data-lucide="check" class="w-5 h-5 mr-2"></i>Xong!';
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
                <td class="p-2 sm:p-2.5"><input type="text" class="form-input py-1 sm:py-1.5 text-xs sm:text-base font-bold" value="${f.title.replace(/"/g, '&quot;')}" onchange="app.data.gf_config.fields[${i}].title=this.value"></td>
                <td class="p-2 sm:p-2.5 hidden sm:table-cell"><input type="text" class="form-input py-1 sm:py-1.5 bg-slate-100 text-slate-500 font-mono text-sm cursor-not-allowed" value="${f.id}" readonly></td>
                <td class="p-2 sm:p-2.5">
                    <select class="form-select py-1 sm:py-1.5 font-bold text-xs sm:text-base" onchange="app.data.gf_config.fields[${i}].type=this.value">
                        <option value="Tự nhập" ${f.type==="Tự nhập"||f.type==="Học sinh tự nhập"?"selected":""}>Tự nhập</option>
                        <option value="Tự động" ${f.type==="Tự động"||f.type!=="Tự nhập"?"selected":""}>Tự động</option>
                    </select>
                </td>
                <td class="p-2 sm:p-2.5 text-center">
                    <div class="flex justify-center items-center h-full">
                        <input type="checkbox" class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 rounded-md border-2 border-slate-300 focus:ring-blue-500 cursor-pointer shadow-sm" ${f.required?"checked":""} onchange="app.data.gf_config.fields[${i}].required=this.checked">
                    </div>
                </td>
            </tr>
        `).join('');
    },

    saveGFConfig() {
        this.data.gf_config.url = document.getElementById('gfUrlInput').value;
        this.closeModal('gfModal');
        alert("✅ Đã lưu cấu hình Google Form.\nBạn hãy bấm 'XUẤT HTML' để tạo file đề thi.");
    },

    parseQuestionLines(lines, partType) {
        let qLines = [], sLines = [], solMode = false;
        
        if (partType === 1 || partType === 2) {
            let oLines = [];
            const optionPattern = /^\s*#?\s*[A-Ea-e]\.\s/;
            lines.forEach(l => {
                let cl = l.trimRight();
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { solMode = true; sLines.push(cl.trimLeft().replace(/^(Lời giải|Giải thích):\s*/, '')); return; }
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
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { solMode = true; sLines.push(cl.trimLeft().replace(/^(Lời giải|Giải thích):\s*/, '')); return; }
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
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { state = "solution"; sLines.push(cl.trimLeft().replace(/^(Lời giải|Giải thích):\s*/, '')); return; }
                
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
            let solMatch = text.match(/(?:Lời giải|Giải thích):\s*([\s\S]*)/);
            let solution = solMatch ? solMatch[1].replace(/\n/g, '<br>') : "";
            text = text.replace(/(?:Lời giải|Giải thích):\s*[\s\S]*/, '');
            
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
                if (cl.trimLeft().startsWith("Lời giải:") || cl.trimLeft().startsWith("Giải thích:")) { state = "solution"; sLines.push(cl.trimLeft().replace(/^(Lời giải|Giải thích):\s*/, '')); return; }
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

    buildDocumentHTML(isWord = false) {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP TRẮC NGHIỆM";
        let html = '';
        
        if (isWord) {
            html += `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>${title}</title>
            <style>
                body { font-family: 'Times New Roman', serif; font-size: 14pt; line-height: 1.5; }
                .title { text-align: center; font-size: 16pt; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; }
                .q-container { margin-bottom: 15px; page-break-inside: avoid; }
                .q-text { font-weight: bold; margin-bottom: 5px; }
                .section-title { font-size: 15pt; font-weight: bold; margin-top: 20px; margin-bottom: 10px; color: #1d4ed8; text-transform: uppercase;}
            </style>
            </head><body><div class="title">${title}</div>`;
        } else {
            html += `<div style="font-family: 'Times New Roman', serif; font-size: 14pt; color: black; padding: 20px;">
                <h1 style="text-align: center; font-size: 18pt; text-transform: uppercase; margin-bottom: 20px;">${title}</h1>`;
        }

        // Helper để chuyển đổi cho file Word nếu cần, bỏ qua cho PDF để MathJax lo
        const formatText = (txt) => isWord ? this.convertLatexForWord(txt) : txt;

        let leTitles = {1: "Một phương án đúng", 2: "Nhiều đáp án đúng", 3: "Trả lời ngắn", 4: "Điền khuyết", 5: "Ghép đôi (Nối)", 6: "Giải ô chữ"};
        let qIndex = 1;
        let partCounter = 1;

        [1, 2, 3, 4, 5, 6].forEach(ptype => {
            if(this.data['part'+ptype].length === 0) return;
            
            let sectionTitle = `Dạng ${partCounter}: ${leTitles[ptype]}`;
            
            if (isWord) {
                html += `<div class="section-title">${sectionTitle}</div>`;
            } else {
                html += `<h2 style="page-break-after: avoid; font-size: 16pt; font-weight: bold; margin-top: 20px; margin-bottom: 10px; color: #1d4ed8; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">${sectionTitle}</h2>`;
            }

            this.data['part'+ptype].forEach(rawQ => {
                let lines = rawQ.split(/\r?\n/);
                let parsed = this.parseQuestionLines(lines, ptype);
                let qtext = formatText(parsed[0]);
                
                if (ptype === 4) {
                     let blankAnswers = parsed[1];
                     qtext = qtext.replace(/=\s*\(\s*(\d+)\s*\)\s*=/g, (match, num) => {
                         let ansArray = blankAnswers[num] || [];
                         let maxLen = ansArray.reduce((max, ans) => Math.max(max, ans.length), 5);
                         return '.'.repeat(maxLen * 2 + 5);
                     });
                }
                
                if (isWord) {
                    html += `<div class="q-container"><div class="q-text">Câu ${qIndex}: ${qtext}</div>`;
                } else {
                    html += `<div class="q-container" style="margin-bottom: 15px; page-break-inside: avoid;"><div style="font-weight: bold; margin-bottom: 5px;">Câu ${qIndex}: ${qtext}</div>`;
                }
                
                if (ptype === 1 || ptype === 2) {
                    let opts = parsed[1];
                    opts.forEach(opt => {
                        let clean = opt.trimLeft().startsWith("#") ? opt.trimLeft().substring(1).trim() : opt.trimLeft();
                        html += `<div>${formatText(clean)}</div>`;
                    });
                } else if (ptype === 3) {
                     html += `<div>Đáp án: ..........................................................................</div>`;
                } else if (ptype === 4) {
                     html += `<div><i>(Học sinh điền vào các vị trí trống tương ứng trong câu)</i></div>`;
                } else if (ptype === 5) {
                     let data = parsed[1];
                     html += `<table style="width:100%; border-collapse: collapse; margin-top: 10px;"><tr><td style="width:50%; vertical-align:top;"><b>Cột I</b><br>`;
                     data.leftCol.forEach(l => html += `${l.label ? l.label+'. ' : ''}${formatText(l.text)}<br>`);
                     html += `</td><td style="width:50%; vertical-align:top;"><b>Cột II</b><br>`;
                     data.rightCol.forEach(r => html += `${r.label ? r.label+'. ' : ''}${formatText(r.text)}<br>`);
                     html += `</td></tr></table>`;
                } else if (ptype === 6) {
                     let clues = parsed[1];
                     html += `<div><b>Các gợi ý hàng ngang:</b></div><ul>`;
                     clues.forEach((c, idx) => {
                         html += `<li>${idx + 1}. ${formatText(c.clue)}</li>`;
                     });
                     html += `</ul>`;
                }
                html += `</div>`;
                qIndex++;
            });
            partCounter++;
        });

        if (isWord) {
            html += `</body></html>`;
        } else {
            html += `</div>`;
        }
        return html;
    },

    exportHTML() {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP TRẮC NGHIỆM";
        const fullHTML = this.generateQuizHTML();
        const blob = new Blob([fullHTML], {type: "text/html;charset=utf-8"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = title.replace(/\s+/g,'_') + ".html";
        a.click();
    },

    exportWord() {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP TRẮC NGHIỆM";
        const wordHTML = this.buildDocumentHTML(true);
        const blob = new Blob(['\ufeff', wordHTML], {type: "application/msword;charset=utf-8"});
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = title.replace(/\s+/g,'_') + ".doc";
        a.click();
    },

    exportPDF() {
        if (typeof html2pdf === 'undefined') {
            alert("Thư viện xuất PDF đang được tải hoặc tải thất bại, vui lòng kiểm tra kết nối mạng và thử lại.");
            return;
        }

        const title = document.getElementById('quizTitle').value || "BÀI TẬP TRẮC NGHIỆM";
        const contentHTML = this.buildDocumentHTML(false);
        
        const container = document.createElement('div');
        container.innerHTML = contentHTML;
        
        // Gắn vào DOM ở vị trí ẩn để MathJax đo lường font chữ và render chính xác
        container.style.position = 'absolute';
        container.style.left = '-9999px';
        container.style.top = '0';
        container.style.width = '800px'; 
        document.body.appendChild(container);

        const opt = {
            margin:       [15, 15, 20, 15],
            filename:     title.replace(/\s+/g,'_') + ".pdf",
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, windowWidth: 800 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
        };

        // Chờ MathJax xử lý xong công thức trước khi gọi thư viện in PDF
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise([container]).then(() => {
                setTimeout(() => { // Đợi một chút để trình duyệt load xong font MathJax
                    html2pdf().set(opt).from(container).save().then(() => document.body.removeChild(container));
                }, 500);
            }).catch(() => {
                html2pdf().set(opt).from(container).save().then(() => document.body.removeChild(container));
            });
        } else {
            html2pdf().set(opt).from(container).save().then(() => document.body.removeChild(container));
        }
    },

    generateQuizHTML() {
        const title = document.getElementById('quizTitle').value || "BÀI TẬP TRẮC NGHIỆM";
        const creator = document.getElementById('creatorName').value;
        const themeCss = THEMES[document.getElementById('themeSelect').value] || THEMES["Mặc định (Xanh hiện đại)"];
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        
        const acElem = document.getElementById('antiCheat');
        const psElem = document.getElementById('publishScore');
        const isAntiCheat = acElem ? acElem.checked : false;
        const isPublishScore = psElem ? psElem.checked : false;
        
        let jsBuilder=[], jsValid=[], studentInputsHtml=[];
        let hasStudentInputs = false;
        
        this.data.gf_config.fields.forEach(f => {
            let sId = `field_${f.id}`;
            let safeTitle = f.title.replace(/"/g, '\\"');
            
            let isAuto = f.type === "Tự động" || (f.type !== "Tự nhập" && f.type !== "Học sinh tự nhập");
            
            if (!isAuto) {
                hasStudentInputs = true;
                let reqStr = f.required ? "required" : "";
                let reqStar = f.required ? " <span style='color:#ef4444;'>*</span>" : "";
                
                studentInputsHtml.push(`
                    <div>
                        <label style="font-weight: 600; display: block; margin-bottom: 5px;">${f.title}${reqStar}</label>
                        <input type="text" id="${sId}" placeholder="Nhập ${f.title}..." style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 8px; font-size: 1rem; outline: none;" ${reqStr}>
                    </div>
                `);
                jsBuilder.push(`formData.append("entry.${f.id}", document.getElementById("${sId}") ? (document.getElementById("${sId}").value.trim() || "Chưa điền") : "Chưa điền");`);
                if (f.required) jsValid.push(`if(document.getElementById("${sId}") && !document.getElementById("${sId}").value.trim()) missing_fields.push("${safeTitle}");`);
            } 
            else {
                let t = f.title.toLowerCase();
                if (t.includes('tối đa') || t.includes('max')) {
                    jsBuilder.push(`formData.append("entry.${f.id}", maxPossibleScore);`);
                } else if (t.includes('vi phạm') || t.includes('gian lận')) {
                    jsBuilder.push(`formData.append("entry.${f.id}", violationReport);`);
                } else if (t.includes('chi tiết') || t.includes('thống kê') || t.includes('bài làm') || t.includes('lỗi')) {
                    jsBuilder.push(`formData.append("entry.${f.id}", studentDetailsText);`);
                } else {
                    jsBuilder.push(`formData.append("entry.${f.id}", totalScore);`);
                }
            }
        });

        let sectionsHTML = [];
        let partCounter = 1;
        let leTitles = {1: "Một phương án đúng", 2: "Nhiều đáp án đúng", 3: "Trả lời ngắn", 4: "Điền khuyết", 5: "Ghép đôi (Nối)", 6: "Giải ô chữ"};
        
        [1,2,3,4,5,6].forEach(ptype => {
            if(this.data['part'+ptype].length === 0) return;
            let sectionTitle = `Dạng ${partCounter}: ${leTitles[ptype]}`;
            sectionsHTML.push(`<div class='section' id='part${partCounter}' data-parttype='${ptype}' data-title='${sectionTitle}'>`);
            
            if(ptype === 6) {
                sectionsHTML.push(`<div class='section-title'><span>${sectionTitle}</span> <button onclick='openNoteModal()' class='btn-note'>Lưu ý</button></div>`);
                sectionsHTML.push(`<div class='score-note'><i>Điểm tối đa: 2 điểm / hàng ngang.</i></div>`);
            } else {
                sectionsHTML.push(`<div class='section-title'>${sectionTitle}</div>`);
                sectionsHTML.push(`<div class='score-note'><i>Mỗi câu trả lời đúng được 1 điểm.</i></div>`);
            }
            
            this.data['part'+ptype].forEach((rawQ, idx) => {
                let lines = rawQ.split(/\r?\n/);
                let qid = `part${partCounter}_q${idx+1}`;
                
                if(ptype===1 || ptype===2) {
                    let [qtext, opts, sol] = this.parseQuestionLines(lines, ptype);
                    let encodedSol = encodeURIComponent(sol).replace(/'/g, "%27");
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
                    let ansAttr = encodeURIComponent(letCorrect.join(',')).replace(/'/g, "%27");
                    sectionsHTML.push(`<div class='explanation' id='${qid}_result' data-answer='${ansAttr}' data-solution='${encodedSol}'></div></div>`);
                } 
                else if(ptype===3) {
                    let [qtext, ans, sol] = this.parseQuestionLines(lines, ptype);
                    let encodedSol = encodeURIComponent(sol).replace(/'/g, "%27");
                    let ansAttr = encodeURIComponent(ans).replace(/'/g, "%27");
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${qtext}</div>`);
                    sectionsHTML.push(`<div class='blank-container'>Đáp án của bạn: <input type='text' id='${qid}_input' oninput="this.style.width=Math.max(60, (this.value.length+2)*10)+'px';"></div>`);
                    sectionsHTML.push(`<div class='explanation' id='${qid}_result' data-answer='${ansAttr}' data-solution='${encodedSol}'></div></div>`);
                }
                else if(ptype===4) {
                    let [qtext, blankAnswers, sol] = this.parseQuestionLines(lines, ptype);
                    let encodedSol = encodeURIComponent(sol).replace(/'/g, "%27");
                    let displayQtext = qtext.replace(/=\s*\(\s*(\d+)\s*\)\s*=/g, (match, num) => {
                        let ansAttr = encodeURIComponent((blankAnswers[num] || []).join('||')).replace(/'/g, "%27");
                        return `<span class='blank-container'><input type='text' id='${qid}_blank${num}' data-answer='${ansAttr}' oninput="this.style.width=Math.max(60, (this.value.length+2)*10)+'px';"></span>`;
                    });
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${displayQtext}</div><div class='explanation' id='${qid}_result' data-solution='${encodedSol}'></div></div>`);
                }
                else if(ptype===5) {
                    let [header, {leftCol, rightCol, mapping}, sol] = this.parseQuestionLines(lines, ptype);
                    let encodedSol = encodeURIComponent(sol).replace(/'/g, "%27");
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
                    sectionsHTML.push(`<div class='match-container overflow-x-auto' id='match_${qid}' data-expected='${expectedStr}'><svg class='match-lines' id='svg_${qid}' width='100%' height='100%'></svg><div class='match-columns'>`);
                    
                    sectionsHTML.push(`<div class='match-col match-left'>`);
                    randomLeft.forEach(item => sectionsHTML.push(`<div class='match-item match-item-left' data-id='${item.label}'>${item.text}</div>`));
                    sectionsHTML.push(`</div><div class='match-col match-right'>`);
                    randomRight.forEach(item => sectionsHTML.push(`<div class='match-item match-item-right' data-id='${item.label}'>${item.text}</div>`));
                    sectionsHTML.push(`</div></div>`);
                    sectionsHTML.push(`<button class='btn-clear-match' onclick='clearMatch("match_${qid}")'>⟲ Xóa tất cả đường kẻ</button><div class='match-tip'><i>(Mẹo: Rê chuột/Chạm và bấm vào đường kẻ hoặc hai ô đã nối để xóa)</i></div></div>`);
                    let ansAttr = encodeURIComponent(answerPairs.join('<br>')).replace(/'/g, "%27");
                    sectionsHTML.push(`<div class='explanation' id='${qid}_result' data-answer-pairs='${ansAttr}' data-solution='${encodedSol}'></div></div>`);
                }
                else if(ptype===6) {
                    let [qtext, clues, keyword, sol] = this.parseQuestionLines(lines, ptype);
                    let encodedSol = encodeURIComponent(sol).replace(/'/g, "%27");
                    sectionsHTML.push(`<div class='question' id='${qid}'><div class='q-text'><strong>Câu ${idx+1}:</strong><br>${qtext}</div><div style='font-size:0.85rem; color:var(--text-muted); margin-bottom:12px; text-align:center;'><i>(Bấm vào các số thứ tự màu xanh để xem gợi ý tương ứng)</i></div>`);
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
                    
                    sectionsHTML.push(`</div></div><div class='explanation' id='${qid}_result' data-solution='${encodedSol}'></div></div>`);
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <script>
      window.MathJax = { 
          loader: {load: ['[tex]/mhchem', '[tex]/extpfeil']},
          tex: { packages: {'[+]': ['mhchem', 'extpfeil']}, inlineMath: [['$', '$']] }, 
          chtml: { scale: 0.9, mtextInheritFont: true }, 
          svg: { fontCache: 'global', mtextInheritFont: true } 
      };
  </script>
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
    .container { max-width: 800px; margin: 20px auto; padding: 0 16px; }
    .header { text-align: center; margin-bottom: 30px; }
    .header h1 { margin: 0; font-size: 1.8rem; color: var(--text); font-weight: 700; letter-spacing: -0.025em; }
    .section-title { font-size: 1.25rem; font-weight: 600; color: var(--primary); margin: 2rem 0 0.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border); display: flex; align-items: center; }
    .btn-note { margin-left: 12px; padding: 4px 10px; background: var(--hover-bg); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 600; color: var(--primary); transition: all 0.2s; }
    .btn-note:hover { background: var(--primary); color: white; }
    .score-note { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 16px; }
    .question { background: var(--card); padding: 20px; border-radius: 12px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); margin-bottom: 24px; border: 1px solid var(--border); transition: box-shadow 0.2s; }
    .question:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .q-text { font-size: 1.05rem; margin-bottom: 16px; color: var(--text); }
    .option { display: flex; align-items: flex-start; padding: 12px 16px; margin: 8px 0; border: 1px solid var(--border); border-radius: 10px; cursor: pointer; transition: all 0.2s; background: var(--card); color: var(--text); }
    .option:hover { background: var(--hover-bg); }
    .option input { margin-top: 4px; margin-right: 12px; transform: scale(1.2); accent-color: var(--primary); cursor: pointer; }
    .blank-container input { -webkit-appearance: none; border-radius: 0; border: none; border-bottom: 2px solid var(--primary); background: transparent; color: var(--primary); font-weight: 600; text-align: center; font-size: 1.05rem; padding: 2px 4px; outline: none; transition: border-color 0.2s; width: 60px; max-width: 100%;}
    .match-container { position: relative; margin-top: 15px; }
    .match-columns { display: flex; justify-content: space-between; min-width: 100%; gap: 10px; }
    .match-col { display: flex; flex-direction: column; gap: 12px; width: 48%; z-index: 2; }
    .match-item { background: var(--card); color: var(--text); border: 2px solid var(--border); padding: 10px; border-radius: 8px; cursor: pointer; text-align: center; font-weight: 500; font-size: 0.95rem; transition: all 0.2s; user-select: none; }
    .match-item:hover { border-color: var(--primary); background: var(--hover-bg); }
    .match-item.selected { border-color: var(--primary); background: var(--hover-bg); box-shadow: 0 0 0 3px rgba(100, 100, 100, 0.1); }
    .match-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; overflow: visible; pointer-events: none; }
    .match-line-group { cursor: pointer; pointer-events: stroke; outline: none; }
    .match-line-group:hover .visible-line { stroke: #ef4444 !important; stroke-width: 5px; }
    .btn-clear-match { margin-top: 15px; background: var(--hover-bg); color: var(--text-muted); border: 1px solid var(--border); padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 0.9rem; transition: background 0.2s; display: block; margin-left: auto; margin-right: auto; z-index: 2; position: relative;}
    .match-tip { text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 8px; }
    .cw-container { overflow-x: auto; margin-top: 15px; padding-bottom: 10px; display: flex; justify-content: center; -webkit-overflow-scrolling: touch; }
    .cw-grid { display: inline-flex; flex-direction: column; gap: 4px; font-family: monospace; align-items: flex-start; margin: 0 auto; }
    .cw-row { display: flex; align-items: center; justify-content: flex-start; width: max-content; }
    .cw-num { width: 24px; height: 24px; text-align: center; line-height: 22px; margin-right: 8px; font-weight: bold; color: var(--primary); background: var(--bg); border-radius: 50%; cursor: pointer; border: 1px solid var(--primary); flex-shrink: 0; font-size: 0.85rem;}
    .cw-num:hover { background: var(--primary); color: white; transform: scale(1.1); }
    .cw-cell { width: 30px; height: 30px; text-align: center; text-transform: uppercase; font-size: 1rem; font-weight: bold; border: 2px solid var(--border); border-radius: 6px; margin-right: 2px; outline: none; background: var(--card); color: var(--text); transition: all 0.2s; padding: 0;}
    .cw-cell.cw-key { border-color: var(--primary); background-color: var(--hover-bg); border-width: 2px; }
    .cw-empty { width: 30px; height: 30px; margin-right: 2px; display: inline-block; }
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
        .navbar { flex-direction: column; gap: 8px; padding: 12px; }
        .match-columns { flex-direction: column; }
        .match-col { width: 100%; }
        .cw-cell { width: 28px; height: 28px; font-size: 0.95rem; }
        .cw-empty { width: 28px; }
        .question { padding: 16px; }
    }
  </style>
</head>
<body>
  <div id="antiCheatOverlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:#fef2f2; z-index:99999; justify-content:center; align-items:center; flex-direction:column; font-family:sans-serif; padding: 20px; box-sizing:border-box; text-align:center;">
      <h1 style="color:#dc2626; margin-bottom:10px; font-size:1.5rem; sm:font-size:2rem;">⚠️ NỘI QUY THI NGHIÊM NGẶT</h1>
      <div style="background:white; border:2px solid #fca5a5; border-radius:12px; padding:20px; max-width:600px; text-align:left; line-height:1.6; font-size:1rem; sm:font-size:1.1rem; box-shadow:0 4px 6px rgba(0,0,0,0.05); margin-bottom:20px; color:#0f172a;">
          Hệ thống đã bật chế độ <b>chống gian lận</b>. Bạn sẽ bị <b style="color:#dc2626;">tự động nộp bài và khóa thi vĩnh viễn</b> nếu vi phạm quá 3 lần một trong các lỗi sau:
          <ul style="color:#ef4444; font-weight:bold; margin-top:10px; margin-bottom:0; padding-left:20px;">
              <li>Chuyển sang tab hoặc cửa sổ ứng dụng khác.</li>
              <li>Thu nhỏ trình duyệt hoặc rời khỏi màn hình thi.</li>
              <li>Sử dụng các phím tắt bị cấm (F12, Copy, Paste, PrintScreen...).</li>
          </ul>
      </div>
      <button id="btnAcceptRules" disabled style="background:#94a3b8; color:white; border:none; padding:12px 24px; border-radius:8px; font-size:1.1rem; font-weight:bold; cursor:not-allowed; transition: background 0.2s; width: 100%; max-width: 300px;">
          Tôi đã hiểu và đồng ý (10s)
      </button>
  </div>
  <div id="quizApp" style="display:none;">
      <div id="loadingOverlay"><div class="spinner"></div><h3 style="color:var(--primary); margin-top:20px;">Đang xử lý dữ liệu...</h3></div>
      <div class='navbar'>
        <div class='score-box' id='scoreDisplay'>Điểm số: 0</div>
        <div class='timer-container'>
            <span class='timer'>⏱ <span id='timeDisplay'>--:--</span></span>
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
      <h3 id="clueModalTitle" style="margin-top:0; color:var(--primary); font-size:1.2rem;"></h3>
      <div id="clueModalText" style="font-size:1.05rem; color:var(--text); margin-bottom:20px; padding:12px; background:var(--hover-bg); border-radius:8px; border:1px solid var(--border); line-height: 1.5;"></div>
      <button onclick="closeClueModal()" style="width:100%; padding:12px; background:var(--primary); color:white; border:none; border-radius:8px; font-size:1rem; font-weight:bold; cursor:pointer;">Đã hiểu</button>
  </div>

  <div id="noteModalOverlay" class="clue-modal-overlay" onclick="closeNoteModal()"></div>
  <div id="noteModal" class="clue-modal">
      <h3 style="margin-top:0; color:var(--primary); font-size:1.2rem;">Lưu ý cách tính điểm</h3>
      <div style="font-size:1rem; color:var(--text); margin-bottom:20px; text-align:left; line-height:1.6; padding: 0 4px;">
          - Trả lời đúng mỗi hàng (KHÔNG xem gợi ý): <strong>2 điểm</strong><br>
          - Trả lời đúng mỗi hàng (CÓ xem gợi ý): <strong>1 điểm</strong><br>
          - Trả lời sai hoặc không trả lời: <strong>0 điểm</strong><br><br>
          <div style="color: #10b981; background: #ecfdf5; padding: 10px; border-radius: 8px; border: 1px solid #a7f3d0; font-size: 0.95rem;">
              ⭐ <strong>Đặc biệt (Từ khóa hàng dọc):</strong><br>
              + Trả lời đúng tất cả: Tổng điểm = (Số hàng chưa trả lời có từ khóa đúng và không xem gợi ý) × 2 + Điểm các hàng đã trả lời.<br>
              + Sai/không trả lời từ khóa: Tính điểm các hàng đã trả lời.
          </div>
      </div>
      <button onclick="closeNoteModal()" style="width:100%; padding:12px; background:var(--primary); color:white; border:none; border-radius:8px; font-size:1rem; font-weight:bold; cursor:pointer;">Đã hiểu</button>
  </div>

  <script>
      const START_TIME_STR = "${startTime}";
      const END_TIME_STR = "${endTime}";
      const EXAM_ID = "${examUUID}";
      const GF_URL = "${this.data.gf_config.url}";
      const IS_ANTI_CHEAT = ${isAntiCheat};
      const IS_PUBLISH_SCORE = ${isPublishScore};

      window.isSystemAlert = false;
      const originalAlert = window.alert;
      window.alert = function(msg) {
          window.isSystemAlert = true;
          originalAlert(msg);
          setTimeout(() => { window.isSystemAlert = false; }, 500);
      };
      const originalConfirm = window.confirm;
      window.confirm = function(msg) {
          window.isSystemAlert = true;
          let result = originalConfirm(msg);
          setTimeout(() => { window.isSystemAlert = false; }, 500);
          return result;
      };

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
      let absoluteEndTime = parseDateVN(END_TIME_STR);
      
      function lockExam(reason) {
          if (IS_ANTI_CHEAT) localStorage.setItem(EXAM_ID + "_LOCKED", reason);
          document.documentElement.innerHTML = \`<body style="background:#111; color:#ef4444; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; margin:0; font-family:sans-serif; text-align:center; user-select:none; padding:20px;">
              <h1 style="font-size:2rem; sm:font-size:3rem; margin-bottom:10px;">⛔ TRUY CẬP BỊ TỪ CHỐI</h1>
              <h3 style="color:#fff; font-weight:normal; max-width:100%; line-height:1.5;">\${reason}</h3>
              <p style="color:#888; margin-top:20px;">Mọi thắc mắc vui lòng liên hệ giáo viên của bạn.</p>
          </body>\`;
      }

      window.addEventListener('DOMContentLoaded', () => {
          let nowInit = new Date().getTime();
          if (IS_ANTI_CHEAT && localStorage.getItem(EXAM_ID + "_SUBMITTED")) lockExam("Bạn đã hoàn thành và nộp bài thi này. Không thể làm lại.");
          else if (IS_ANTI_CHEAT && localStorage.getItem(EXAM_ID + "_LOCKED")) lockExam("Bài thi đã bị khóa!<br>Lý do: " + localStorage.getItem(EXAM_ID + "_LOCKED"));
          else if (absoluteEndTime && nowInit >= absoluteEndTime) lockExam("Kỳ thi ĐÃ KẾT THÚC!<br>Thời gian đóng form: " + END_TIME_STR);
          else if (START_TIME && nowInit < START_TIME) {
              document.documentElement.innerHTML = \`<body style="background:#f8fafc; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; margin:0; font-family:sans-serif; text-align:center; color:#0f172a; user-select:none; padding:20px;">
                  <h1 style="color:#2563eb; margin-bottom:10px; font-size:1.5rem; sm:font-size:2rem;">KỲ THI CHƯA BẮT ĐẦU</h1>
                  <p style="font-size:1rem; sm:font-size:1.2rem; margin:5px 0;">Thời gian mở đề: <b>\${START_TIME_STR}</b></p>
                  \${END_TIME_STR ? \`<p style="font-size:1rem; sm:font-size:1.2rem; margin:5px 0;">Thời gian đóng đề: <b>\${END_TIME_STR}</b></p>\` : ''}
                  <div id="countdownWatch" style="font-size:2.5rem; sm:font-size:3.5rem; font-weight:bold; color:#ef4444; margin-top:20px; font-variant-numeric:tabular-nums; background:#fee2e2; padding:10px 30px; border-radius:12px; border:2px solid #fca5a5; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">--:--:--</div>
                  <p style="color:#64748b; margin-top:20px; font-style:italic; font-size:0.9rem;">Trang web sẽ tự động hiển thị bài thi khi thời gian đếm ngược kết thúc.</p>
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
              } , 1000);
          } else { 
              if (IS_ANTI_CHEAT && !sessionStorage.getItem(EXAM_ID + "_ACCEPTED")) {
                  document.getElementById('antiCheatOverlay').style.display = 'flex';
                  let warningWait = 10;
                  let warningInterval = setInterval(() => {
                      warningWait--;
                      let btn = document.getElementById('btnAcceptRules');
                      if (warningWait <= 0) {
                          clearInterval(warningInterval);
                          btn.innerText = "Bắt đầu làm bài";
                          btn.style.background = "#2563eb";
                          btn.style.cursor = "pointer";
                          btn.disabled = false;
                          btn.onclick = () => {
                              sessionStorage.setItem(EXAM_ID + "_ACCEPTED", "true");
                              document.getElementById('antiCheatOverlay').style.display = 'none';
                              document.getElementById('quizApp').style.display = 'block';
                              startTimer();
                          };
                      } else {
                          btn.innerText = \`Tôi đã hiểu và đồng ý (\${warningWait}s)\`;
                      }
                  }, 1000);
              } else {
                  document.getElementById('quizApp').style.display = 'block'; 
                  startTimer();
              }
          }
      });

      window.violationCount = 0; window.violationDetails = []; window.isForceSubmit = false; let isHandlingViolation = false;
      function handleViolation(reason) {
          if (!IS_ANTI_CHEAT || window.isSystemAlert) return;
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
          document.body.style.userSelect = 'none'; 
          document.body.style.webkitUserSelect = 'none';
          document.addEventListener('contextmenu', e => e.preventDefault());
          
          ['copy', 'cut', 'paste'].forEach(evt => document.addEventListener(evt, e => { 
              e.preventDefault(); navigator.clipboard.writeText(''); 
              if (IS_ANTI_CHEAT) handleViolation("Hành vi sao chép/dán dữ liệu");
              else alert("⚠️ Tính năng sao chép và dán đã bị vô hiệu hóa!"); 
          }));
          
          document.addEventListener('keydown', function(e) {
              if (e.key === 'F12' || e.key === 'PrintScreen' || 
                 (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) || 
                 (e.ctrlKey && ['U', 'P', 'S', 'C'].includes(e.key.toUpperCase()))) {
                  e.preventDefault(); 
                  if (IS_ANTI_CHEAT) handleViolation("Sử dụng phím tắt bị cấm");
              }
          });
          
          document.addEventListener('visibilitychange', () => { 
              if (document.hidden && IS_ANTI_CHEAT && !window.isSystemAlert) handleViolation("Chuyển Tab hoặc Thu nhỏ Trình duyệt"); 
          });
          
          window.addEventListener('blur', () => { 
              if (document.activeElement instanceof HTMLIFrameElement || window.isSystemAlert) return; 
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
                  let correctAnswers = decodeURIComponent(correctAttr).split(',');
                  shuffleArray(options); 
                  let newCorrectAnswers = []; let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  options.forEach((opt, index) => {
                      let newLetter = letters[index]; let input = opt.querySelector('input'); let oldVal = input.value;
                      input.value = newLetter; let strongTag = opt.querySelector('div strong'); if (strongTag) strongTag.innerHTML = \`\${newLetter}.\`;
                      if (correctAnswers.includes(oldVal)) newCorrectAnswers.push(newLetter);
                      q.insertBefore(opt, expl);
                  });
                  newCorrectAnswers.sort(); expl.setAttribute('data-answer', encodeURIComponent(newCorrectAnswers.join(',')).replace(/'/g, "%27"));
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
              setTimeout(() => drawMatchLines(container), 200);
          });
          window.addEventListener('resize', () => { document.querySelectorAll('.match-container').forEach(c => drawMatchLines(c)); });
      });

      function clearMatch(containerId) {
          let container = document.getElementById(containerId);
          if(container && !container.classList.contains('graded')) { container.matchLinks = []; container.querySelectorAll('.match-item.selected').forEach(el => el.classList.remove('selected')); drawMatchLines(container); }
      }
      function drawMatchLines(container) {
          let svg = container.querySelector('.match-lines'); 
          while(svg.firstChild) { svg.removeChild(svg.firstChild); }
          let cRect = container.getBoundingClientRect(); let primaryColor = getPrimaryColor(); let isGraded = container.classList.contains('graded');
          container.matchLinks.forEach((link) => {
              let leftEl = container.querySelector(\`.match-item-left[data-id="\${link.l}"]\`);
              let rightEl = container.querySelector(\`.match-item-right[data-id="\${link.r}"]\`);
              if (leftEl && rightEl) {
                  let lRect = leftEl.getBoundingClientRect(), rRect = rightEl.getBoundingClientRect();
                  let scrollLeft = container.scrollLeft || 0;
                  
                  let x1 = lRect.right - cRect.left + scrollLeft, y1 = lRect.top + lRect.height/2 - cRect.top;
                  let x2 = rRect.left - cRect.left + scrollLeft, y2 = rRect.top + rRect.height/2 - cRect.top;
                  
                  
                  if(window.innerWidth <= 640) {
                      x1 = lRect.left + lRect.width/2 - cRect.left + scrollLeft; y1 = lRect.bottom - cRect.top;
                      x2 = rRect.left + rRect.width/2 - cRect.left + scrollLeft; y2 = rRect.top - cRect.top;
                  }

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

      function playBeep() {
          try {
              let ctx = new (window.AudioContext || window.webkitAudioContext)();
              let osc = ctx.createOscillator(); let gain = ctx.createGain();
              osc.connect(gain); gain.connect(ctx.destination);
              osc.type = "square"; osc.frequency.value = 850; 
              gain.gain.setValueAtTime(1, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
              osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.3);
          } catch(e) {}
      }

      let timerInterval; let seconds = 0;
      function startTimer() {
        function tick() {
            let displayStr = "";
            if (absoluteEndTime) {
                let now = new Date().getTime(); let remain = Math.floor((absoluteEndTime - now) / 1000);
                if (remain <= 0) {
                    document.getElementById('timeDisplay').innerText = "00:00:00"; clearInterval(timerInterval);
                    if (document.getElementById('submitBtn') && document.getElementById('submitBtn').style.display !== 'none') {
                        alert("⏳ ĐÃ HẾT GIỜ LÀM BÀI! Hệ thống sẽ tự động nộp bài."); window.isForceSubmit = true;
                        if(typeof gradeQuiz === 'function') gradeQuiz();
                    }
                    return;
                } else {
                    let h = Math.floor(remain / 3600).toString().padStart(2, '0'); let m = Math.floor((remain % 3600) / 60).toString().padStart(2, '0'); let s = (remain % 60).toString().padStart(2, '0');
                    displayStr = (h !== "00" ? h + ":" : "") + m + ":" + s;
                    if (remain <= 300) { document.querySelector('.timer').style.backgroundColor = '#ef4444'; document.querySelector('.timer').style.color = '#ffffff'; }
                    if (remain === 60) { playBeep(); setTimeout(playBeep, 400); setTimeout(playBeep, 800); }
                }
            } else {
                seconds++; let h = Math.floor(seconds / 3600).toString().padStart(2, '0'); let m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0'); let s = (seconds % 60).toString().padStart(2, '0');
                displayStr = (h !== "00" ? h + ":" : "") + m + ":" + s;
            }
            document.getElementById('timeDisplay').innerText = displayStr;
        }
        
        tick();
        timerInterval = setInterval(tick, 1000);
      }

      async function sendToGoogleForm(totalScore, maxPossibleScore, studentDetailsText) {
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
             if (missing_fields.length > 0 && !window.isForceSubmit) { alert("⚠️ Vui lòng điền đầy đủ các thông bắt buộc: " + missing_fields.join(", ") + " trước khi nộp bài!"); return; }
         }
         if (typeof timerInterval !== 'undefined') clearInterval(timerInterval); 
         let overlay = document.getElementById('loadingOverlay'); overlay.style.display = 'flex';
         let totalScore = 0; let maxPossibleScore = 0; let partStats = {};
         let studentDetailsText = "--- CHI TIẾT BÀI LÀM ---\\n";

         document.querySelectorAll('.section').forEach(function(section) {
           let partType = section.getAttribute('data-parttype'); let partTitle = section.getAttribute('data-title'); partStats[partTitle] = { score: 0, max: 0 };
           section.querySelectorAll('.question').forEach(function(q) {
             let qid = q.id; let feedback = ""; let qScore = 0; let qMax = 1; 
             let userAnsText = ""; let correctAnsText = "";
             let qLabelMatch = q.querySelector('.q-text strong');
             let qLabel = qLabelMatch ? qLabelMatch.innerText.replace(':', '') : "Câu ?";

             if (partType === "1") {
               let selected = q.querySelector('input[name="' + qid + '"]:checked'); let correct = decodeURIComponent(q.querySelector('.explanation').getAttribute('data-answer'));
               userAnsText = selected ? selected.value : "Chưa trả lời"; correctAnsText = correct;
               if (!selected) feedback = '<span style="color:#ef4444;">✗ Bạn chưa trả lời. Đáp án đúng: ' + correct + '</span>';
               else if (selected.value === correct) { qScore = 1; feedback = '<span style="color:#10b981;">✓ Chính xác!</span>'; }
               else feedback = '<span style="color:#ef4444;">✗ Sai. Đáp án đúng: ' + correct + '</span>'; 
             } else if (partType === "2") {
               let selectedList = q.querySelectorAll('input[name="' + qid + '"]:checked');
               let correct = decodeURIComponent(q.querySelector('.explanation').getAttribute('data-answer')).split(',');
               correctAnsText = correct.join(', ');
               if (selectedList.length === 0) { userAnsText = "Chưa trả lời"; feedback = '<span style="color:#ef4444;">✗ Bạn chưa trả lời. Đáp án đúng: ' + correctAnsText + '</span>'; }
               else {
                 let userAnswers = []; selectedList.forEach(function(el) { userAnswers.push(el.value); });
                 userAnsText = userAnswers.join(', ');
                 userAnswers.sort(); correct.sort();
                 if (userAnswers.join() === correct.join()) { qScore = 1; feedback = '<span style="color:#10b981;">✓ Chính xác!</span>'; }
                 else feedback = '<span style="color:#ef4444;">✗ Sai. Đáp án đúng: ' + correctAnsText + '</span>'; 
               }
             } else if (partType === "3") {
               let inputElem = document.getElementById(qid + '_input'); let userInput = inputElem.value.trim().toLowerCase();
               let correctData = decodeURIComponent(q.querySelector('.explanation').getAttribute('data-answer')); let accepted = correctData.split('||').map(s => s.trim().toLowerCase());
               userAnsText = userInput || "Chưa trả lời"; correctAnsText = accepted.join(' hoặc ');
               if (!userInput) feedback = '<span style="color:#ef4444;">✗ Bạn chưa trả lời. Đáp án đúng: ' + correctAnsText + '</span>';
               else {
                 if (accepted.includes(userInput)) { 
                     qScore = 1; feedback = '<span style="color:#10b981;">✓ Chính xác!</span>'; 
                     if (IS_PUBLISH_SCORE) { inputElem.style.color = '#10b981'; inputElem.style.borderColor = '#10b981'; }
                 } else { 
                     feedback = '<span style="color:#ef4444;">✗ Sai. Đáp án đúng: ' + correctAnsText + '</span>'; 
                     if (IS_PUBLISH_SCORE) { inputElem.style.color = '#ef4444'; inputElem.style.borderColor = '#ef4444'; }
                 }
                 inputElem.disabled = true;
               }
             } else if (partType === "4") {
               let inputs = q.querySelectorAll('input'); let blankResults = [];
               inputs.forEach(function(inp, index) {
                 let accepted = decodeURIComponent(inp.getAttribute('data-answer')).split('||').map(s => s.trim().toLowerCase()); let userAnswer = inp.value.trim().toLowerCase();
                 if (userAnswer !== "") { if (accepted.includes(userAnswer)) blankResults.push({blank: index+1, correct: true, answer: userAnswer, accepted: accepted}); else blankResults.push({blank: index+1, correct: false, answer: userAnswer, accepted: accepted}); }
                 else blankResults.push({blank: index+1, answered: false, accepted: accepted}); 
               });
               inputs.forEach(function(inp, index) { 
                   let res = blankResults[index]; 
                   if (IS_PUBLISH_SCORE) {
                       inp.style.color = res.correct ? '#10b981' : '#ef4444'; 
                       inp.style.borderColor = res.correct ? '#10b981' : '#ef4444'; 
                   }
                   inp.disabled = true; 
               });
               
               userAnsText = blankResults.map(r => \`(Vị trí \${r.blank}) \${r.answered === false ? "Chưa điền" : r.answer}\`).join(' | ');
               correctAnsText = blankResults.map(r => \`(Vị trí \${r.blank}) \${r.accepted.join('/')}\`).join(' | ');
               
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
                   if (expectedPairs.includes(pairStr)) {
                       if (IS_PUBLISH_SCORE) line.setAttribute('stroke', '#10b981'); 
                   } else { 
                       if (IS_PUBLISH_SCORE) line.setAttribute('stroke', '#ef4444'); 
                       isPerfect = false; 
                   }
               });
               userAnsText = userLinksStr.length > 0 ? userLinksStr.join(', ') : "Chưa nối";
               correctAnsText = expectedPairs.join(', ');
               if (userLinksStr.length !== expectedPairs.length || JSON.stringify(userLinksStr) !== JSON.stringify(expectedPairs)) isPerfect = false;
               if (isPerfect && expectedPairs.length > 0) { feedback = '<span style="color:#10b981;">✓ Nối hoàn toàn chính xác!</span>'; qScore = 1; }
               else { let answerPairs = decodeURIComponent(q.querySelector('.explanation').getAttribute('data-answer-pairs')); feedback = '<span style="color:#ef4444;">✗ Sai hoặc nối thiếu. Đáp án đúng là:<br>' + answerPairs + '</span>'; }
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
                         if (IS_PUBLISH_SCORE) {
                             if (userChar === correctChar && userChar !== "") { 
                                 inp.style.color = '#10b981'; inp.style.borderColor = '#10b981'; 
                                 if (!inp.classList.contains('cw-key')) inp.style.backgroundColor = '#ecfdf5'; 
                             } else { 
                                 inp.style.color = '#ef4444'; inp.style.borderColor = '#ef4444'; 
                                 if (!inp.classList.contains('cw-key')) inp.style.backgroundColor = '#fef2f2'; 
                                 if (userChar === "") { inp.value = correctChar; inp.style.opacity = '0.5'; } else { inp.value = correctChar; } 
                             }
                         }
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
                 
                 userAnsText = "Đạt " + qScore + "/" + qMax + " điểm";
                 correctAnsText = "Xem chi tiết trên màn hình bài làm";
             }
             
             studentDetailsText += \`\\n[\${qLabel}] Điểm: \${qScore}/\${qMax}\\n- HS Chọn: \${userAnsText}\\n- Đáp án: \${correctAnsText}\\n\`;

             partStats[partTitle].score += qScore; partStats[partTitle].max += qMax; totalScore += qScore; maxPossibleScore += qMax;
             
             if (IS_PUBLISH_SCORE) {
                 let expl = q.querySelector('.explanation'); let encodedSolution = expl.getAttribute('data-solution'); let solution = encodedSolution ? decodeURIComponent(encodedSolution) : ""; let cleanedSolution = solution.replace(/<br\\s*\\/?>/gi, '').trim();
                 expl.innerHTML = \`<div style="margin-bottom: 8px;">\${feedback}</div>\`;
                 if (cleanedSolution !== "") expl.innerHTML += \`<hr style="border: 0; border-top: 1px solid var(--border); margin: 12px 0;"><div style="color: var(--text-muted);"><strong>Lời giải chi tiết:</strong><br>\${solution}</div>\`; 
                 expl.style.display = "block";
                 if (partType === "6") q.style.borderLeftColor = qScore === qMax ? '#10b981' : (qScore > 0 ? '#f59e0b' : '#ef4444'); 
                 else q.style.borderLeftColor = qScore > 0 ? '#10b981' : '#ef4444'; 
             }
           });
         });
         
         try { await sendToGoogleForm(totalScore, maxPossibleScore, studentDetailsText); } catch (e) { console.error(e); }
         if (IS_ANTI_CHEAT) localStorage.setItem(EXAM_ID + "_SUBMITTED", "true");
         overlay.style.display = 'none';
         
         let container = document.querySelector('.container'); let header = container.querySelector('.header'); let studentBox = document.getElementById('studentInfoBox');
         let existingSummary = document.getElementById('resultSummary');
         if(existingSummary) existingSummary.remove();
         
         let violationReportHtml = "";
         if (IS_ANTI_CHEAT && window.violationCount > 0) {
             violationReportHtml = \`<div style="color:#dc2626; background:#fef2f2; padding:12px; border-radius:8px; border:1px solid #fca5a5; font-weight:bold; margin-top:20px; font-size:1.05rem;">⚠️ Báo cáo vi phạm: \${window.violationCount} lần<br><span style="font-weight:normal; font-size:0.95rem;">Chi tiết: \${window.violationDetails.join(' | ')}</span></div>\`;
         } else if (IS_ANTI_CHEAT) {
             violationReportHtml = \`<div style="color:#10b981; background:#ecfdf5; padding:12px; border-radius:8px; border:1px solid #a7f3d0; font-weight:bold; margin-top:20px; font-size:1.05rem;">✅ Tuyệt vời! Bạn không vi phạm quy chế thi.</div>\`;
         }

         let summaryHtml = "";
         if (IS_PUBLISH_SCORE) {
             summaryHtml = \`<div id='resultSummary' style='background:var(--card); padding:24px; border-radius:12px; margin-bottom:30px; border:2px solid var(--primary); box-shadow:0 4px 6px rgba(0,0,0,0.05); animation: popIn 0.3s ease-out;'><h2 style='margin-top:0; color:var(--primary); text-align:center;'>📊 BẢNG TỔNG HỢP ĐIỂM SỐ</h2><div style='font-size:1.5rem; sm:font-size:1.8rem; text-align:center; font-weight:bold; margin-bottom:20px; color:var(--text);'>Tổng cộng: <span style='color:var(--primary);'>\${totalScore} / \${maxPossibleScore}</span></div><table style='width:100%; border-collapse:collapse; margin-top:10px;'>\`;
             for (let p in partStats) if (partStats[p].max > 0) summaryHtml += \`<tr><td style='padding:12px 8px; border-bottom:1px solid var(--border); font-size:0.95rem; sm:font-size:1.05rem;'>\${p}</td><td style='padding:12px 8px; border-bottom:1px solid var(--border); text-align:right; font-weight:bold; font-size:1rem; sm:font-size:1.1rem; color:var(--primary);'>\${partStats[p].score} / \${partStats[p].max}</td></tr>\`;
             summaryHtml += \`</table>\${violationReportHtml}</div>\`;
             if (studentBox) studentBox.insertAdjacentHTML('afterend', summaryHtml); else header.insertAdjacentHTML('afterend', summaryHtml);
             document.getElementById('scoreDisplay').innerHTML = 'Tổng: ' + totalScore + '/' + maxPossibleScore;
         } else {
             summaryHtml = \`<div id='resultSummary' style='background:#ecfdf5; color:#065f46; padding:30px 24px; border-radius:16px; margin-bottom:30px; text-align:center; border:2px solid #34d399; font-size:1.2rem; font-weight:bold; box-shadow:0 4px 6px rgba(0,0,0,0.05); animation: popIn 0.3s ease-out;'>🎉 ĐÃ NỘP BÀI THÀNH CÔNG!<div style='font-size:1rem; font-weight:normal; margin-top:10px; color:#047857;'>Điểm số và đáp án đã được ẩn theo cấu hình của giáo viên.</div>\${violationReportHtml}</div>\`;
             if (studentBox) studentBox.insertAdjacentHTML('afterend', summaryHtml); else header.insertAdjacentHTML('afterend', summaryHtml);
             document.getElementById('scoreDisplay').innerHTML = 'Đã nộp bài';
         }
         
         document.querySelectorAll('input:not(.cw-cell), select').forEach(function(inp) { inp.disabled = true; });
         let sb = document.getElementById('submitBtn'); if(sb) sb.style.display = 'none';
         MathJax.typesetPromise(); window.scrollTo({top: 0, behavior: 'smooth'});
      }
  </script>
</body>
</html>`;

        return fullHTML;
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
