import { Blog } from "../types/blog";

export const blogData: Blog[] = [
  {
    title: "Lợi ích của chanh dây mà bạn chưa biết",
    excerpt: "Khám phá những lợi ích tuyệt vời của chanh dây đối với sức khỏe, bao gồm tăng cường hệ miễn dịch, hỗ trợ tiêu hóa và làm đẹp da.",
    category: "Sức khỏe & Dinh dưỡng",
    author: "Administrator",
    date: "2024-02-15",
    image: "/images/loi-ich-chanh-day.jpg",
    slug: "loi-ich-cua-chanh-day",
    type: "featured",
    desc: (
      <div className="space-y-8">
        <p className="lead text-xl text-gray-700">
          Chanh dây không chỉ là một loại trái cây thơm ngon mà còn là kho báu dinh dưỡng với nhiều lợi ích sức khỏe đáng ngạc nhiên. Hãy cùng khám phá những công dụng tuyệt vời của loại quả này trong bài viết dưới đây.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Giới Thiệu Về Chanh Dây</h2>
          <p className="text-gray-700">
            Chanh dây (Passiflora edulis) là một loại trái cây nhiệt đới, có nguồn gốc từ Nam Mỹ. Với hương vị chua ngọt đặc trưng và màu sắc bắt mắt, chanh dây không chỉ là một nguyên liệu phổ biến trong ẩm thực mà còn được biết đến với nhiều công dụng y học truyền thống.
          </p>
        </section>

        <section className="bg-purple-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            1. Giàu Chất Chống Oxy Hóa
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Chanh dây là một kho báu chứa đựng các chất chống oxy hóa mạnh mẽ, bao gồm:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Vitamin C: Một trong những nguồn vitamin C tự nhiên tốt nhất</li>
              <li>Beta-carotene: Tiền chất của vitamin A</li>
              <li>Polyphenol: Các hợp chất thực vật có lợi cho sức khỏe</li>
              <li>Flavonoid: Giúp bảo vệ tế bào khỏi tổn thương oxy hóa</li>
            </ul>
            <p className="text-gray-700">
              Các chất chống oxy hóa này hoạt động hiệp đồng để bảo vệ cơ thể khỏi stress oxy hóa, ngăn ngừa lão hóa sớm và giảm nguy cơ mắc các bệnh mãn tính.
            </p>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            2. Hỗ Trợ Tiêu Hóa
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Với hàm lượng chất xơ dồi dào, chanh dây đóng vai trò quan trọng trong việc duy trì sức khỏe đường ruột:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Chất xơ hòa tan giúp nuôi dưỡng vi khuẩn có lợi trong ruột</li>
              <li>Cải thiện nhu động ruột và ngăn ngừa táo bón</li>
              <li>Hỗ trợ quá trình tiêu hóa và hấp thu dinh dưỡng</li>
              <li>Giúp duy trì hệ vi sinh đường ruột khỏe mạnh</li>
            </ul>
            <p className="text-gray-700">
              Một khẩu phần chanh dây hàng ngày có thể giúp bạn duy trì hệ tiêu hóa khỏe mạnh và phòng ngừa các vấn đề về đường ruột.
            </p>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">
            3. Tăng Cường Hệ Miễn Dịch
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Hàm lượng vitamin C cao trong chanh dây đóng vai trò then chốt trong việc tăng cường hệ miễn dịch:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Kích thích sản xuất bạch cầu</li>
              <li>Tăng cường khả năng chống lại vi khuẩn và virus</li>
              <li>Rút ngắn thời gian phục hồi khi bị ốm</li>
              <li>Bảo vệ cơ thể khỏi các tác nhân gây bệnh</li>
            </ul>
            <p className="text-gray-700">
              Uống một ly nước chanh dây mỗi sáng có thể giúp tăng cường sức đề kháng và bảo vệ cơ thể khỏi các bệnh thông thường.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Cải Thiện Sức Khỏe Tim Mạch
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Chanh dây chứa nhiều thành phần có lợi cho tim mạch:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Kali</h3>
                <p className="text-gray-700">
                  Giúp điều hòa huyết áp và nhịp tim, đồng thời giảm nguy cơ đột quỵ
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Chất Xơ</h3>
                <p className="text-gray-700">
                  Giảm cholesterol xấu trong máu và ngăn ngừa xơ vữa động mạch
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Việc tiêu thụ chanh dây đều đặn có thể góp phần vào việc duy trì sức khỏe tim mạch và ngăn ngừa các bệnh tim mạch phổ biến.
            </p>
          </div>
        </section>

        <section className="bg-pink-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-pink-900 mb-4">
            5. Hỗ Trợ Giảm Cân
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Chanh dây là lựa chọn tuyệt vời cho những người đang theo đuổi mục tiêu giảm cân:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ít calo nhưng giàu chất dinh dưỡng</li>
              <li>Chất xơ cao giúp tạo cảm giác no lâu</li>
              <li>Giảm cảm giác thèm ăn</li>
              <li>Hỗ trợ trao đổi chất</li>
              <li>Giúp kiểm soát lượng đường trong máu</li>
            </ul>
            <p className="text-gray-700">
              Thêm chanh dây vào chế độ ăn kiêng có thể giúp bạn đạt được mục tiêu giảm cân một cách lành mạnh và bền vững.
            </p>
          </div>
        </section>

        <section className="bg-indigo-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            6. Cải Thiện Giấc Ngủ
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Chanh dây có tác dụng an thần tự nhiên nhờ các hợp chất sau:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Alkaloid harman: Có tác dụng an thần nhẹ</li>
              <li>Magnesi: Giúp thư giãn cơ bắp</li>
              <li>Passiflora: Cải thiện chất lượng giấc ngủ</li>
            </ul>
            <p className="text-gray-700">
              Một ly trà chanh dây ấm trước khi đi ngủ có thể giúp bạn thư giãn và có giấc ngủ ngon hơn.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cách Sử Dụng Chanh Dây</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Có nhiều cách để tận hưởng lợi ích của chanh dây:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Nước Ép Tươi</h3>
                <p className="text-gray-700">
                  Pha với nước và đường theo khẩu vị, uống ngay để giữ nguyên vitamin C
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Sinh Tố</h3>
                <p className="text-gray-700">
                  Kết hợp với sữa chua, mật ong và các loại trái cây khác
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Làm Bánh</h3>
                <p className="text-gray-700">
                  Thêm vào các món bánh, pudding hoặc kem để tạo hương vị độc đáo
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Lưu Ý Khi Sử Dụng</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Mặc dù chanh dây rất tốt cho sức khỏe, bạn cần lưu ý một số điểm sau:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Người bị dị ứng với các loại quả họ chanh nên thử một lượng nhỏ trước</li>
              <li>Không nên uống quá nhiều trong một lần do tính axit cao</li>
              <li>Người bị đau dạ dày nên tham khảo ý kiến bác sĩ trước khi sử dụng</li>
              <li>Nên pha loãng với nước khi uống để tránh ảnh hưởng đến men răng</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kết Luận</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Chanh dây không chỉ là một loại quả thơm ngon mà còn là một kho báu dinh dưỡng với nhiều lợi ích sức khỏe đáng kinh ngạc. Từ việc tăng cường hệ miễn dịch, cải thiện tiêu hóa đến hỗ trợ giảm cân và làm đẹp da, chanh dây xứng đáng là một phần không thể thiếu trong chế độ ăn uống hàng ngày của bạn.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                Hãy bắt đầu thêm chanh dây vào thực đơn của bạn ngay hôm nay để tận hưởng những lợi ích tuyệt vời này!
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    title: "Cách trồng cây chanh dây đúng cách",
    excerpt: "Hướng dẫn chi tiết cách trồng và chăm sóc cây chanh dây để đạt năng suất cao, từ chọn giống, đất trồng đến kỹ thuật tưới nước và bón phân.",
    category: "Nông nghiệp",
    author: "Administrator",
    date: "2024-02-10",
    image: "/images/cach-trong-chanh-day.jpg",
    slug: "cach-trong-chanh-day-dung-cach",
    desc: (
      <div className="space-y-8">
        <p className="lead text-xl text-gray-700">
          Chanh dây là loại cây ăn quả được ưa chuộng không chỉ bởi hương vị thơm ngon mà còn bởi giá trị dinh dưỡng cao. Bài viết này sẽ hướng dẫn chi tiết cách trồng và chăm sóc cây chanh dây để đạt hiệu quả tốt nhất.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Điều Kiện Trồng Chanh Dây</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Khí Hậu</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Nhiệt độ thích hợp: 20-30°C</li>
                  <li>Độ ẩm: 75-85%</li>
                  <li>Ánh sáng: Cần nhiều ánh sáng trực tiếp</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Đất Trồng</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Đất tơi xốp, giàu dinh dưỡng</li>
                  <li>pH đất: 5.5-6.5</li>
                  <li>Thoát nước tốt</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">
            Chuẩn Bị Trước Khi Trồng
          </h2>
          <div className="space-y-4">
            <h3 className="font-semibold text-yellow-800 mb-2">1. Chuẩn Bị Đất</h3>
            <div className="bg-white p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Đào hố với kích thước 40x40x40cm</li>
                <li>Trộn đất với phân chuồng hoai mục theo tỷ lệ 1:1</li>
                <li>Thêm vôi bột để điều chỉnh độ pH nếu cần</li>
                <li>Để đất ủ trong 15-20 ngày trước khi trồng</li>
              </ul>
            </div>

            <h3 className="font-semibold text-yellow-800 mb-2">2. Chuẩn Bị Cây Giống</h3>
            <div className="bg-white p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Chọn cây giống khỏe mạnh, không sâu bệnh</li>
                <li>Chiều cao cây khoảng 15-20cm</li>
                <li>Có 4-6 lá thật</li>
                <li>Cây có màu xanh đậm, thân chắc khỏe</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Các Bước Trồng Chanh Dây
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Bước 1: Thời Điểm Trồng</h3>
              <p className="text-gray-700">
                Nên trồng vào đầu mùa mưa hoặc cuối mùa mưa để cây có đủ độ ẩm phát triển. Tránh trồng vào mùa nắng nóng.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Bước 2: Khoảng Cách Trồng</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Khoảng cách giữa các cây: 3-4m</li>
                <li>Khoảng cách giữa các hàng: 2-3m</li>
                <li>Mật độ trồng: 800-1000 cây/ha</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Bước 3: Cách Trồng</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Đào một hố nhỏ giữa hố đất đã chuẩn bị</li>
                <li>Nhẹ nhàng đặt cây giống vào hố, giữ cây thẳng đứng</li>
                <li>Lấp đất xung quanh gốc, nén nhẹ để cố định cây</li>
                <li>Tưới nước đẫm để đất tiếp xúc tốt với rễ cây</li>
                <li>Cắm cọc và buộc dây để giữ cây</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Chăm Sóc Sau Trồng
          </h2>
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-800 mb-2">1. Tưới Nước</h3>
            <div className="bg-white p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Tưới nước đều đặn 2 lần/ngày trong tuần đầu</li>
                <li>Sau đó tưới 2-3 ngày/lần tùy thời tiết</li>
                <li>Tránh để đất quá ẩm hoặc quá khô</li>
              </ul>
            </div>

            <h3 className="font-semibold text-blue-800 mb-2">2. Bón Phân</h3>
            <div className="bg-white p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Bón lót: 15-20kg phân chuồng hoai/hố</li>
                <li>Bón thúc sau trồng 1 tháng: NPK 16-16-8</li>
                <li>Định kỳ bón phân 2-3 tháng/lần</li>
              </ul>
            </div>

            <h3 className="font-semibold text-blue-800 mb-2">3. Làm Giàn</h3>
            <div className="bg-white p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Làm giàn cao 1.8-2m</li>
                <li>Sử dụng dây kẽm số 12 hoặc 14 làm dây chính</li>
                <li>Căng dây phụ cách nhau 30-40cm</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-red-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Phòng Trừ Sâu Bệnh
          </h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Bệnh Thường Gặp</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Bệnh thối rễ</li>
                  <li>Bệnh đốm lá</li>
                  <li>Bệnh virus khảm</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Cách Phòng Trị</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Vệ sinh vườn sạch sẽ</li>
                  <li>Tỉa bỏ lá bệnh</li>
                  <li>Phun thuốc phòng định kỳ</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Thu Hoạch</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Chanh dây bắt đầu cho thu hoạch sau 6-8 tháng trồng, với các đặc điểm sau:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Quả chuyển màu tím đậm hoặc vàng tùy giống</li>
              <li>Vỏ quả có độ bóng</li>
              <li>Thu hoạch vào buổi sáng sớm</li>
              <li>Năng suất trung bình 20-30 tấn/ha/năm</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lời Khuyên</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Thường xuyên kiểm tra cây để phát hiện sâu bệnh sớm</li>
                <li>Tỉa cành, tạo tán đúng kỹ thuật để cây phát triển tốt</li>
                <li>Không nên để cây ra quá nhiều trái trong lần đầu</li>
                <li>Kết hợp trồng xen canh để tận dụng đất</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-green-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Kết Luận</h2>
          <p className="text-gray-700">
            Trồng chanh dây không quá khó nhưng đòi hỏi sự kiên nhẫn và chăm sóc đúng kỹ thuật. Với những hướng dẫn chi tiết trên, hy vọng bạn sẽ thành công trong việc trồng và chăm sóc cây chanh dây, mang lại những trái chanh dây thơm ngon và bổ dưỡng.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Kĩ thuật phục hồi cây chanh dây sau thu hoạch",
    excerpt: "Tìm hiểu các biện pháp phục hồi cây chanh dây sau khi thu hoạch để đảm bảo cây phát triển khỏe mạnh, tăng năng suất cho mùa vụ tiếp theo.",
    category: "Nông nghiệp",
    author: "Administrator",
    date: "2024-02-05",
    image: "/images/thu-hoach-chanh-day.jpg",
    slug: "ki-thuat-phuc-hoi-chanh-day-sau-thu-hoach",
    desc: <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Kỹ Thuật Phục Hồi Cây Chanh Dây Sau Thu Hoạch: Hướng Dẫn Chi Tiết
        </h1>

        <p className="lead text-xl text-gray-700">
          Phục hồi cây chanh dây sau thu hoạch là một quá trình quan trọng để đảm bảo năng suất cho vụ mùa tiếp theo. Bài viết này sẽ cung cấp hướng dẫn chi tiết về các bước cần thiết để giúp vườn chanh dây của bạn nhanh chóng phục hồi và phát triển mạnh mẽ.
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Đánh Giá Tình Trạng Cây Sau Thu Hoạch
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Bước đầu tiên và quan trọng nhất là đánh giá toàn diện tình trạng của cây sau khi thu hoạch. Quá trình này giúp xác định chính xác những can thiệp cần thiết để phục hồi cây hiệu quả.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Các yếu tố cần kiểm tra:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Hệ thống dây leo và cột trụ: Kiểm tra độ chắc chắn, thay thế các phần bị hư hỏng
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Tình trạng lá: Màu sắc, độ tươi, dấu hiệu bệnh
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Thân cây: Kiểm tra vết nứt, bệnh, độ khỏe mạnh
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Hệ thống rễ: Đánh giá sự phát triển và tình trạng sức khỏe
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. Tỉa Cành và Làm Sạch Vườn
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Việc tỉa cành và làm sạch vườn là bước quan trọng để kích thích sự phát triển mới của cây. Quá trình này cần được thực hiện cẩn thận và đúng kỹ thuật.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Quy trình tỉa cành:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Bước 1:</span>
                  <p>Cắt bỏ các cành già, cành bệnh và cành đã cho trái. Sử dụng dụng cụ sắc và sạch để tránh tổn thương cây.</p>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Bước 2:</span>
                  <p>Tỉa ngọn để kích thích ra cành mới, chỉ giữ lại 3-4 nhánh chính khỏe mạnh nhất.</p>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold min-w-[100px]">Bước 3:</span>
                  <p>Dọn sạch tất cả tàn dư thực vật, quả rụng để ngăn ngừa nguồn bệnh.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Cải Tạo Đất và Bón Phân
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Đất và dinh dưỡng là yếu tố quyết định đến sự phục hồi của cây. Việc cải tạo đất và bón phân cần được thực hiện theo đúng quy trình và liều lượng.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Quy trình cải tạo đất:</h3>
                <ul className="space-y-2">
                  <li>• Xới đất nhẹ quanh gốc (bán kính 0.8-1m, sâu 10-15cm)</li>
                  <li>• Bón vôi cải tạo độ pH: 0.5-1kg/gốc</li>
                  <li>• Bổ sung chất hữu cơ để cải thiện cấu trúc đất</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Liều lượng phân bón:</h3>
                <ul className="space-y-2">
                  <li>• Phân hữu cơ hoai mục: 10-15kg/gốc</li>
                  <li>• NPK (16-16-8): 0.5-0.7kg/gốc</li>
                  <li>• Tưới đẫm sau khi bón phân</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Chăm Sóc và Phục Hồi
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Giai đoạn chăm sóc và phục hồi đòi hỏi sự kiên nhẫn và theo dõi thường xuyên. Việc duy trì độ ẩm và dinh dưỡng đầy đủ là rất quan trọng.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Lịch chăm sóc chi tiết:</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-semibold">Tưới nước:</h4>
                  <p>• 2-3 ngày/lần, mỗi lần 4-5 lít/gốc</p>
                  <p>• Duy trì độ ẩm đất 70-80%</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold">Bón phân bổ sung:</h4>
                  <p>• Phun phân bón lá định kỳ 7-10 ngày/lần</p>
                  <p>• Bổ sung vi lượng khi cần thiết</p>
                </div>
                <div>
                  <h4 className="font-semibold">Chăm sóc đặc biệt:</h4>
                  <p>• Theo dõi và xử lý sâu bệnh kịp thời</p>
                  <p>• Điều chỉnh giàn và dây leo thường xuyên</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Phòng Trừ Sâu Bệnh
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Phòng trừ sâu bệnh là công việc quan trọng để bảo vệ cây trong giai đoạn phục hồi, khi cây thường yếu và dễ bị tấn công bởi các loại dịch hại.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Các biện pháp phòng trừ:</h3>
              <div className="space-y-3">
                <p>• Phun thuốc phòng nấm bệnh ngay sau khi tỉa cành</p>
                <p>• Ưu tiên sử dụng các loại thuốc sinh học an toàn</p>
                <p>• Phun thuốc vào sáng sớm hoặc chiều mát</p>
                <p>• Tuân thủ thời gian cách ly của thuốc</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Theo Dõi và Điều Chỉnh
          </h2>

          <div className="prose prose-lg text-gray-700">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Các chỉ số cần theo dõi:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Hàng ngày:</h4>
                  <ul className="space-y-2">
                    <li>• Kiểm tra độ ẩm đất</li>
                    <li>• Quan sát dấu hiệu sâu bệnh</li>
                    <li>• Theo dõi tình trạng lá non</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Hàng tuần:</h4>
                  <ul className="space-y-2">
                    <li>• Đánh giá tốc độ phát triển</li>
                    <li>• Kiểm tra hệ thống tưới</li>
                    <li>• Ghi chép nhật ký chăm sóc</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Kết Luận
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Việc phục hồi cây chanh dây sau thu hoạch là một quá trình đòi hỏi sự kiên nhẫn và chăm sóc tỉ mỉ. Tuân thủ đúng quy trình và thường xuyên theo dõi tình trạng cây sẽ giúp vườn chanh dây nhanh chóng phục hồi và chuẩn bị cho vụ mùa tiếp theo.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Lời khuyên bổ sung:</h3>
              <ul className="space-y-2">
                <li>• Lưu giữ nhật ký chăm sóc để rút kinh nghiệm cho các vụ sau</li>
                <li>• Thường xuyên cập nhật kiến thức về kỹ thuật trồng và chăm sóc</li>
                <li>• Tham khảo ý kiến chuyên gia khi gặp vấn đề phức tạp</li>
                <li>• Chia sẻ kinh nghiệm với những người trồng khác trong cộng đồng</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </article>
  },
  {
    title: "Các sai lầm nghiêm trọng của nhà vườn khi chăm sóc cây sầu riêng",
    excerpt: "Những sai lầm phổ biến trong quá trình chăm sóc cây sầu riêng mà nhiều nhà vườn mắc phải, ảnh hưởng đến năng suất và chất lượng trái.",
    category: "Nông nghiệp",
    author: "Administrator",
    date: "2024-02-05",
    image: "/images/cham-soc-sau-rieng.jpg",
    slug: "sai-lam-cham-soc-sau-rieng",
    desc: <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Những Sai Lầm Nghiêm Trọng Khi Chăm Sóc Sầu Riêng
        </h1>

        <p className="lead text-xl text-gray-700">
          Sầu riêng là một trong những loại cây ăn trái có giá trị kinh tế cao, nhưng việc chăm sóc đòi hỏi kỹ thuật và kinh nghiệm. Dưới đây là những sai lầm phổ biến mà nhiều nhà vườn thường mắc phải, có thể ảnh hưởng nghiêm trọng đến năng suất và chất lượng trái.
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Sai Lầm Trong Quản Lý Nước Tưới
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Quản lý nước không đúng cách là một trong những sai lầm nghiêm trọng nhất, có thể dẫn đến nhiều hậu quả không mong muốn cho cây sầu riêng.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Các sai lầm phổ biến:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Tưới nước quá nhiều:</span> Gây úng, thối rễ, thiếu oxy và tạo điều kiện cho nấm bệnh phát triển
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Tưới không đều đặn:</span> Gây stress cho cây, ảnh hưởng đến quá trình ra hoa đậu trái
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Không điều chỉnh lượng nước theo mùa:</span> Dẫn đến cây thiếu/thừa nước trong các thời điểm khác nhau
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. Sai Lầm Trong Bón Phân
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Việc bón phân không đúng cách không chỉ lãng phí chi phí mà còn có thể gây hại cho cây.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Những sai lầm cần tránh:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <div>
                    <p className="font-semibold">Bón phân không đúng thời điểm:</p>
                    <p>- Bón phân vào lúc trời nắng gắt</p>
                    <p>- Bón phân khi đất quá khô hoặc quá ướt</p>
                    <p>- Không theo giai đoạn sinh trưởng của cây</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <div>
                    <p className="font-semibold">Bón sai liều lượng:</p>
                    <p>- Bón quá nhiều phân đạm trong giai đoạn ra trái</p>
                    <p>- Không cân đối NPK theo từng giai đoạn</p>
                    <p>- Bón tập trung một lần với lượng lớn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Sai Lầm Trong Tỉa Cành, Tạo Tán
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Tỉa cành không đúng kỹ thuật có thể ảnh hưởng nghiêm trọng đến sự phát triển và năng suất của cây.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Các lỗi phổ biến:</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-semibold">Tỉa quá nhiều cành trong một lần:</p>
                  <p className="ml-4">Gây shock cho cây, làm giảm khả năng quang hợp</p>
                </li>
                <li>
                  <p className="font-semibold">Tỉa không đúng kỹ thuật:</p>
                  <p className="ml-4">Để lại gốc cành, tạo điều kiện cho nấm bệnh xâm nhập</p>
                </li>
                <li>
                  <p className="font-semibold">Tỉa không đúng thời điểm:</p>
                  <p className="ml-4">Tỉa vào mùa mưa hoặc khi cây đang ra hoa kết trái</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Sai Lầm Trong Phòng Trị Bệnh
          </h2>

          <div className="prose prose-lg text-gray-700">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Những sai lầm về phòng trị bệnh:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Phun thuốc không đúng cách:</p>
                  <ul className="ml-4 space-y-2">
                    <li>• Phun thuốc khi trời nắng gắt</li>
                    <li>• Pha thuốc không đúng nồng độ</li>
                    <li>• Phun không đều và không đúng kỹ thuật</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Lạm dụng thuốc hóa học:</p>
                  <ul className="ml-4 space-y-2">
                    <li>• Sử dụng thuốc quá nhiều lần</li>
                    <li>• Không luân phiên các loại thuốc</li>
                    <li>• Phun thuốc khi không cần thiết</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Sai Lầm Trong Thu Hoạch
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Thu hoạch không đúng cách có thể ảnh hưởng nghiêm trọng đến chất lượng trái và giá bán.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-3">Các sai lầm trong thu hoạch:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold">Thu hoạch sai thời điểm:</h4>
                  <ul className="space-y-2">
                    <li>• Thu hoạch quá sớm</li>
                    <li>• Thu hoạch quá muộn</li>
                    <li>• Không theo dõi độ chín</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Kỹ thuật thu hoạch sai:</h4>
                  <ul className="space-y-2">
                    <li>• Làm trái bị dập</li>
                    <li>• Cắt cuống không đúng cách</li>
                    <li>• Xếp trái không đúng kỹ thuật</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Lời Khuyên Cho Nhà Vườn
          </h2>

          <div className="prose prose-lg text-gray-700">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Để tránh các sai lầm trên:</h3>
              <ul className="space-y-3">
                <li>• Thường xuyên cập nhật kiến thức kỹ thuật mới</li>
                <li>• Tham gia các khóa tập huấn chuyên môn</li>
                <li>• Trao đổi kinh nghiệm với các nhà vườn thành công</li>
                <li>• Ghi chép nhật ký canh tác để rút kinh nghiệm</li>
                <li>• Tham khảo ý kiến chuyên gia khi gặp vấn đề</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Kết Luận
          </h2>

          <div className="prose prose-lg text-gray-700">
            <p>
              Việc tránh được những sai lầm trên không chỉ giúp cây sầu riêng phát triển tốt mà còn đảm bảo năng suất và chất lượng trái. Nhà vườn cần thường xuyên học hỏi, cập nhật kiến thức và rút kinh nghiệm để ngày càng nâng cao hiệu quả canh tác.
            </p>
          </div>
        </section>
      </div>
    </article>
  },
  {
    title: "Chọn giống chanh dây sao cho chuẩn? Hướng dẫn chọn giống chanh dây đúng cách",
    excerpt: "Hướng dẫn chi tiết cách chọn giống chanh dây phù hợp với điều kiện thổ nhưỡng và khí hậu, giúp cây phát triển khỏe mạnh và đạt năng suất cao.",
    category: "Nông nghiệp",
    author: "Administrator",
    date: "2024-02-05",
    image: "/images/giong-cay-chanh-day.jpg",
    slug: "chon-giong-chanh-day-dung-cach",
    desc: (
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hướng Dẫn Chi Tiết Cách Chọn Giống Chanh Dây Chuẩn
          </h1>

          <p className="lead text-xl text-gray-700">
            Việc chọn giống chanh dây phù hợp là yếu tố quan trọng quyết định đến thành công của vườn chanh dây. Bài viết này sẽ cung cấp những thông tin chi tiết giúp bạn lựa chọn giống chanh dây phù hợp nhất cho điều kiện canh tác của mình.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Các Loại Giống Chanh Dây Phổ Biến
            </h2>

            <div className="prose prose-lg text-gray-700">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Những giống chính:</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Giống Tím (Purple Passiflora):</p>
                    <ul className="ml-4 space-y-2">
                      <li>• Vỏ màu tím đậm khi chín</li>
                      <li>• Trọng lượng trung bình: 50-70g/trái</li>
                      <li>• Độ Brix: 15-17</li>
                      <li>• Thích hợp cho thị trường tươi</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Giống Vàng (Yellow Passiflora):</p>
                    <ul className="ml-4 space-y-2">
                      <li>• Vỏ màu vàng khi chín</li>
                      <li>• Trọng lượng trung bình: 80-100g/trái</li>
                      <li>• Độ Brix: 13-15</li>
                      <li>• Phù hợp cho chế biến</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Giống Lai:</p>
                    <ul className="ml-4 space-y-2">
                      <li>• Kết hợp ưu điểm của cả hai giống</li>
                      <li>• Năng suất cao hơn</li>
                      <li>• Khả năng chống bệnh tốt</li>
                      <li>• Thích nghi rộng</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Tiêu Chí Chọn Giống
            </h2>

            <div className="prose prose-lg text-gray-700">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Các yếu tố cần xem xét:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold">Điều kiện tự nhiên:</h4>
                    <ul className="space-y-2">
                      <li>• Điều kiện khí hậu vùng trồng</li>
                      <li>• Đặc điểm đất đai</li>
                      <li>• Lượng mưa và độ ẩm</li>
                      <li>• Độ cao so với mực nước biển</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mục đích sử dụng:</h4>
                    <ul className="space-y-2">
                      <li>• Tiêu thụ tươi hay chế biến</li>
                      <li>• Thị trường mục tiêu</li>
                      <li>• Yêu cầu về chất lượng</li>
                      <li>• Thời gian bảo quản</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Cách Nhận Biết Giống Chanh Dây Tốt
            </h2>

            <div className="prose prose-lg text-gray-700">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Đặc điểm nhận dạng:</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Đặc điểm cây giống:</p>
                    <ul className="space-y-2">
                      <li>• Thân cây thẳng, không cong vẹo</li>
                      <li>• Lá xanh đậm, không bị sâu bệnh</li>
                      <li>• Rễ phát triển tốt, không bị dập nát</li>
                      <li>• Chiều cao cây đồng đều</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Nguồn gốc giống:</p>
                    <ul className="space-y-2">
                      <li>• Có nguồn gốc rõ ràng</li>
                      <li>• Được cung cấp bởi đơn vị uy tín</li>
                      <li>• Có giấy chứng nhận chất lượng</li>
                      <li>• Có hướng dẫn kỹ thuật kèm theo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Quy Trình Kiểm Tra Giống
            </h2>

            <div className="prose prose-lg text-gray-700">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Các bước kiểm tra:</h3>
                <ol className="space-y-4">
                  <li>
                    <p className="font-semibold">1. Kiểm tra bên ngoài:</p>
                    <ul className="ml-4">
                      <li>• Quan sát màu sắc lá</li>
                      <li>• Kiểm tra độ đồng đều</li>
                      <li>• Xem xét tình trạng sâu bệnh</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">2. Kiểm tra rễ:</p>
                    <ul className="ml-4">
                      <li>• Rễ trắng, không bị thối</li>
                      <li>• Bộ rễ phát triển đều</li>
                      <li>• Không có dấu hiệu bệnh</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">3. Kiểm tra giấy tờ:</p>
                    <ul className="ml-4">
                      <li>• Giấy chứng nhận nguồn gốc</li>
                      <li>• Hướng dẫn kỹ thuật</li>
                      <li>• Thông tin nhà cung cấp</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Lưu Ý Khi Mua Giống
            </h2>

            <div className="prose prose-lg text-gray-700">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Những điểm cần chú ý:</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Thời điểm mua giống:</p>
                    <ul className="space-y-2">
                      <li>• Tránh mua vào mùa mưa nhiều</li>
                      <li>• Nên mua vào đầu vụ</li>
                      <li>• Chọn thời điểm thích hợp để trồng</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Số lượng dự phòng:</p>
                    <ul className="space-y-2">
                      <li>• Mua thêm 5-10% để dự phòng</li>
                      <li>• Tính toán mật độ trồng phù hợp</li>
                      <li>• Cân đối với diện tích đất</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Bảo Quản Giống Sau Khi Mua
            </h2>

            <div className="prose prose-lg text-gray-700">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Hướng dẫn bảo quản:</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Điều kiện bảo quản:</p>
                    <ul className="space-y-2">
                      <li>• Nơi thoáng mát, tránh ánh nắng trực tiếp</li>
                      <li>• Độ ẩm phù hợp, không quá khô hoặc ẩm</li>
                      <li>• Tránh các tác động cơ học</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Thời gian bảo quản:</p>
                    <ul className="space-y-2">
                      <li>• Không nên bảo quản quá 3-5 ngày</li>
                      <li>• Tốt nhất nên trồng ngay sau khi mua</li>
                      <li>• Tưới nước đầy đủ trong thời gian bảo quản</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Kết Luận và Khuyến Nghị
            </h2>

            <div className="prose prose-lg text-gray-700">
              <p>
                Việc chọn giống chanh dây phù hợp là bước đầu tiên và quan trọng nhất quyết định sự thành công của vườn chanh dây. Cần cân nhắc kỹ các yếu tố về điều kiện canh tác, mục đích sử dụng và khả năng đầu tư để lựa chọn giống phù hợp nhất.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-3">Lời khuyên cuối cùng:</h3>
                <ul className="space-y-2">
                  <li>• Luôn chọn mua giống từ những nhà cung cấp uy tín</li>
                  <li>• Tham khảo ý kiến chuyên gia và người có kinh nghiệm</li>
                  <li>• Cập nhật thông tin về các giống mới</li>
                  <li>• Đảm bảo có đủ điều kiện chăm sóc trước khi quyết định mua giống</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    )

  }
]