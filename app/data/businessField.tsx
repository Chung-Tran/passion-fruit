import { ReactNode } from "react";

interface BusinessField {
  id: number;
  title: string;
  description: string;
  image: string;
  content: ReactNode;
}
export const businessFieldsData: BusinessField[] = [
  {
    id: 1,
    title: "Cung cấp trái chanh dây trái",
    description: "Cung cấp chanh dây tươi, tuyển chọn từ những vườn đạt chuẩn, đảm bảo chất lượng và độ chín tối ưu. Sản phẩm phù hợp để tiêu thụ trong nước và xuất khẩu.",
    image: "../../../public/images/chanh-day-trai.jpg",
    content: <div className="font-sans text-gray-800 bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Giới Thiệu Lĩnh Vực Kinh Doanh Chanh Dây Trái</h1>

      <p className="mb-6">
        Chanh dây – loại trái cây nhiệt đới thơm ngon, giàu dinh dưỡng – đang trở thành một trong những mặt hàng nông sản được ưa chuộng trên thị trường trong nước và quốc tế. Với sứ mệnh mang đến những sản phẩm chất lượng cao, <span className="text-orange-500 font-semibold">Công Ty Chanh Dây Tươi</span> tự hào là đơn vị cung cấp chanh dây trái tươi ngon, đạt chuẩn chất lượng, phục vụ nhu cầu tiêu dùng và xuất khẩu.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giới Thiệu Về Công Ty</h2>
      <p className="mb-6">
        <span className="text-orange-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> là đơn vị chuyên cung cấp chanh dây trái tươi, được tuyển chọn từ những vườn cây đạt chuẩn, đảm bảo chất lượng và độ chín tối ưu. Với nhiều năm kinh nghiệm trong lĩnh vực nông sản, chúng tôi cam kết mang đến cho khách hàng những sản phẩm tốt nhất, đáp ứng mọi yêu cầu khắt khe về chất lượng và an toàn thực phẩm.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Lĩnh Vực Kinh Doanh Chính</h2>
      <p className="mb-4">Công ty chúng tôi tập trung vào các hoạt động chính sau:</p>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1. Cung Cấp Chanh Dây Trái Tươi</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Nguồn Gốc Rõ Ràng:</strong> Chanh dây được thu hoạch từ những vườn cây đạt chuẩn, có quy trình canh tác bài bản, đảm bảo an toàn vệ sinh thực phẩm.</li>
        <li className="mb-2"><strong>Chất Lượng Vượt Trội:</strong> Mỗi trái chanh dây đều được kiểm tra kỹ lưỡng về độ chín, hương vị và hình thức trước khi đưa ra thị trường.</li>
        <li className="mb-2"><strong>Đa Dạng Sản Phẩm:</strong> Chúng tôi cung cấp chanh dây tươi với nhiều loại khác nhau, phù hợp với nhu cầu của cả thị trường trong nước và xuất khẩu.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2. Phục Vụ Thị Trường Trong Nước Và Xuất Khẩu</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Thị Trường Trong Nước:</strong> Chanh dây của chúng tôi được phân phối rộng rãi tại các siêu thị, cửa hàng thực phẩm sạch và các đối tác kinh doanh trên toàn quốc.</li>
        <li className="mb-2"><strong>Xuất Khẩu Quốc Tế:</strong> Với chất lượng đạt chuẩn quốc tế, chanh dây của chúng tôi đã và đang được xuất khẩu sang nhiều thị trường khó tính như Châu Âu, Mỹ, Nhật Bản và Hàn Quốc.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3. Hợp Tác Với Nhà Vườn</h3>
      <p className="mb-6">
        Chúng tôi hợp tác chặt chẽ với các nhà vườn uy tín, hỗ trợ kỹ thuật canh tác và đảm bảo đầu ra ổn định cho sản phẩm. Qua đó, chúng tôi không chỉ mang lại lợi ích kinh tế cho doanh nghiệp mà còn góp phần phát triển nông nghiệp bền vững.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Quy Trình Sản Xuất Và Kiểm Soát Chất Lượng</h2>
      <p className="mb-4">Để đảm bảo chất lượng sản phẩm luôn ở mức cao nhất, chúng tôi tuân thủ nghiêm ngặt quy trình sản xuất và kiểm soát chất lượng:</p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chọn Giống Chất Lượng:</strong> Sử dụng giống chanh dây cao cấp, cho năng suất và chất lượng trái tốt.</li>
        <li className="mb-2"><strong>Canh Tác An Toàn:</strong> Áp dụng quy trình canh tác hữu cơ, hạn chế sử dụng hóa chất, đảm bảo an toàn cho người tiêu dùng và môi trường.</li>
        <li className="mb-2"><strong>Thu Hoạch Đúng Độ Chín:</strong> Chanh dây được thu hoạch khi đạt độ chín tối ưu, đảm bảo hương vị thơm ngon và giàu dinh dưỡng.</li>
        <li className="mb-2"><strong>Đóng Gói Và Bảo Quản:</strong> Sản phẩm được đóng gói cẩn thận, vận chuyển trong điều kiện nhiệt độ phù hợp để giữ nguyên chất lượng.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cam Kết Của Chúng Tôi</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chất Lượng Hàng Đầu:</strong> Chúng tôi cam kết cung cấp chanh dây tươi ngon, đạt chuẩn chất lượng cao.</li>
        <li className="mb-2"><strong>Giá Cả Cạnh Tranh:</strong> Với quy trình sản xuất tối ưu, chúng tôi mang đến sản phẩm chất lượng với giá thành hợp lý.</li>
        <li className="mb-2"><strong>Dịch Vụ Chuyên Nghiệp:</strong> Đội ngũ nhân viên giàu kinh nghiệm, sẵn sàng hỗ trợ khách hàng mọi lúc.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tầm Nhìn Và Sứ Mệnh</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Tầm Nhìn:</strong> Trở thành đơn vị hàng đầu trong lĩnh vực cung cấp chanh dây trái tươi tại Việt Nam và trên thị trường quốc tế.</li>
        <li className="mb-2"><strong>Sứ Mệnh:</strong> Mang đến những sản phẩm chất lượng cao, góp phần nâng cao giá trị nông sản Việt và cải thiện đời sống người nông dân.</li>
      </ul>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liên Hệ Hợp Tác</h2>
        <p className="mb-4">Nếu bạn đang tìm kiếm một đối tác uy tín trong lĩnh vực cung cấp chanh dây trái tươi, hãy liên hệ ngay với chúng tôi để được tư vấn và hỗ trợ tốt nhất.</p>
        <ul className="list-disc pl-6">
          <a href={`tel:0347238240`} className="mb-2"><strong>Hotline:</strong> 034 526 3131</a>
          {/* <li className="mb-2"><strong>Email:</strong> info@chanhdaytươi.com</li> */}
          <li className="mb-2"><strong>Website:</strong> <a href="http://www.chanhdayquocchung.com" target="_blank" className="text-blue-500 hover:underline">www.chanhdayquocchung.com</a></li>
        </ul>
      </div>

      <p className="mt-6 text-center text-gray-700">
        <span className="text-orange-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> – Đồng hành cùng chất lượng và sự hài lòng của khách hàng!
      </p>
    </div>
  },
  {
    id: 2,
    title: "Cung cấp dịch chanh dây",
    description: "Dịch chanh dây sạch nguyên chất 100%, đã làm sạch, giữ nguyên hương vị tự nhiên. Phù hợp pha chế đồ uống, làm bánh và chế biến thực phẩm. Sản phẩm đủ tiêu chuẩn để xuất khẩu trong và ngoài nước",
    image: "/images/dich-chanh-day.jpg",
    content: <div className="font-sans text-gray-800 bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Giới Thiệu Lĩnh Vực Kinh Doanh Dịch Chanh Dây
      </h1>

      <p className="mb-6">
        <span className="text-orange-500 font-semibold">Dịch chanh dây</span> là nguyên liệu quan trọng trong ngành thực phẩm và đồ uống, được
        sử dụng phổ biến trong pha chế, làm bánh và chế biến thực phẩm. Với tiêu chí chất lượng cao, chúng tôi cung cấp dịch chanh dây nguyên chất
        100%, giữ trọn vẹn hương vị tự nhiên và dinh dưỡng.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giới Thiệu Về Công Ty</h2>
      <p className="mb-6">
        <span className="text-orange-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> là đơn vị chuyên cung cấp dịch chanh dây chất lượng
        cao, đáp ứng nhu cầu của các doanh nghiệp sản xuất thực phẩm, nhà hàng, quán cà phê, và chuỗi siêu thị. Chúng tôi cam kết mang đến sản phẩm
        sạch, an toàn và tiện lợi nhất cho khách hàng.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Đặc Điểm Nổi Bật Của Dịch Chanh Dây</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Nguyên Chất 100%:</strong> Không pha loãng, không chất bảo quản, giữ trọn vẹn hương vị chanh dây tươi.</li>
        <li className="mb-2"><strong>Tiện Lợi:</strong> Đã được lọc sạch hạt, sẵn sàng sử dụng cho nhiều mục đích chế biến.</li>
        <li className="mb-2"><strong>Chứng Nhận An Toàn:</strong> Được sản xuất theo quy trình đạt chuẩn an toàn thực phẩm.</li>
        <li className="mb-2"><strong>Bảo Quản Dễ Dàng:</strong> Được đóng gói trong túi hoặc chai tiện lợi, đảm bảo giữ nguyên chất lượng.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Ứng Dụng Của Dịch Chanh Dây</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Pha Chế Đồ Uống:</strong> Sử dụng trong các loại nước ép, sinh tố, cocktail, soda, trà chanh dây.</li>
        <li className="mb-2"><strong>Làm Bánh:</strong> Dùng để tạo hương vị cho bánh mousse, bánh tart, bánh bông lan.</li>
        <li className="mb-2"><strong>Chế Biến Thực Phẩm:</strong> Làm sốt chanh dây cho các món hải sản, thịt gà, salad.</li>
        <li className="mb-2"><strong>Sản Xuất Công Nghiệp:</strong> Nguyên liệu cho các công ty sản xuất nước giải khát, thực phẩm đóng hộp.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Quy Trình Sản Xuất Và Kiểm Định Chất Lượng</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chọn Lọc Nguyên Liệu:</strong> Chanh dây tươi được tuyển chọn kỹ lưỡng từ các nông trại đạt chuẩn.</li>
        <li className="mb-2"><strong>Quy Trình Ép Và Lọc:</strong> Sử dụng công nghệ hiện đại để ép lấy nước cốt và lọc sạch hạt.</li>
        <li className="mb-2"><strong>Đóng Gói Tiêu Chuẩn:</strong> Sản phẩm được đóng gói đảm bảo vệ sinh, giữ trọn hương vị tự nhiên.</li>
        <li className="mb-2"><strong>Kiểm Định Chất Lượng:</strong> Được kiểm nghiệm bởi các cơ quan an toàn thực phẩm trước khi phân phối ra thị trường.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cam Kết Của Chúng Tôi</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chất Lượng Cao:</strong> Sản phẩm đạt chuẩn an toàn, đảm bảo hương vị tự nhiên.</li>
        <li className="mb-2"><strong>Giá Thành Hợp Lý:</strong> Mức giá cạnh tranh, phù hợp với nhiều đối tượng khách hàng.</li>
        <li className="mb-2"><strong>Dịch Vụ Uy Tín:</strong> Hỗ trợ khách hàng tận tình, giao hàng nhanh chóng.</li>
      </ul>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liên Hệ Hợp Tác</h2>
        <p className="mb-4">
          Nếu bạn đang tìm kiếm nguồn cung cấp dịch chanh dây chất lượng cao, hãy liên hệ ngay với chúng tôi để được tư vấn và hợp tác.
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Hotline:</strong> 034 526 3131</li>
          <li className="mb-2"><strong>Website:</strong> <a href="http://www.chanhdayquocchung.com" target="_blank" className="text-blue-500 hover:underline">www.chanhdayquocchung.com</a></li>
        </ul>
      </div>

      <p className="mt-6 text-center text-gray-700">
        <span className="text-orange-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> – Đồng hành cùng chất lượng và sự hài lòng của khách hàng!
      </p>
    </div>
  },
  {
    id: 3,
    title: "Cung cấp giống cây chanh dây",
    description: "Cung cấp giống cây chanh dây khỏe mạnh, sinh trưởng nhanh, kháng bệnh tốt. Giống được tuyển chọn kỹ lưỡng từ những cây mẹ chất lượng cao, đảm bảo năng suất vượt trội. Phù hợp với nhiều vùng khí hậu khác nhau, giúp nhà nông an tâm canh tác và thu hoạch hiệu quả.",
    image: "/images/giong-cay-chanh-day.jpg",
    content: <div className="font-sans text-gray-800 bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Giới Thiệu Lĩnh Vực Kinh Doanh Giống Cây Chanh Dây</h1>

      <p className="mb-6">
        Chanh dây không chỉ là loại trái cây có giá trị kinh tế cao mà còn là cây trồng mang lại lợi nhuận bền vững cho nông dân. Để đảm bảo năng suất và chất lượng trái, việc chọn giống cây chanh dây chất lượng là bước quan trọng hàng đầu. <span className="text-green-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> tự hào là đơn vị cung cấp giống cây chanh dây uy tín, đáp ứng mọi nhu cầu của nhà vườn và doanh nghiệp nông nghiệp.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giới Thiệu Về Công Ty</h2>
      <p className="mb-6">
        <span className="text-green-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> chuyên cung cấp các loại giống cây chanh dây có năng suất cao, phù hợp với điều kiện khí hậu và thổ nhưỡng của nhiều vùng trồng khác nhau. Với nhiều năm kinh nghiệm trong lĩnh vực giống cây nông nghiệp, chúng tôi cam kết mang đến giống cây đạt chất lượng tốt nhất cho bà con nông dân và các doanh nghiệp nông sản.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Lĩnh Vực Kinh Doanh Chính</h2>
      <p className="mb-4">Chúng tôi tập trung vào các hoạt động sau:</p>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1. Cung Cấp Giống Cây Chanh Dây Chất Lượng Cao</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Giống Đạt Tiêu Chuẩn:</strong> Giống chanh dây được tuyển chọn kỹ lưỡng từ các vườn ươm đạt chuẩn, đảm bảo chất lượng và sức đề kháng cao.</li>
        <li className="mb-2"><strong>Khả Năng Sinh Trưởng Tốt:</strong> Giống có tỷ lệ nảy mầm cao, phát triển nhanh và cho năng suất ổn định.</li>
        <li className="mb-2"><strong>Thích Nghi Tốt:</strong> Phù hợp với nhiều điều kiện canh tác khác nhau, từ khí hậu miền núi đến đồng bằng.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2. Hướng Dẫn Kỹ Thuật Trồng Và Chăm Sóc</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Hướng Dẫn Trồng Cây:</strong> Hỗ trợ bà con cách gieo trồng, tạo điều kiện phát triển tốt nhất cho cây.</li>
        <li className="mb-2"><strong>Chăm Sóc Và Phòng Bệnh:</strong> Cung cấp tài liệu và tư vấn kỹ thuật về chế độ tưới nước, bón phân và bảo vệ thực vật.</li>
        <li className="mb-2"><strong>Hỗ Trợ Sau Mua:</strong> Chúng tôi luôn đồng hành cùng bà con trong suốt quá trình chăm sóc cây.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Quy Trình Sản Xuất Giống</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chọn Lọc Giống:</strong> Các cây mẹ được lựa chọn kỹ càng để tạo ra giống cây khỏe mạnh, không sâu bệnh.</li>
        <li className="mb-2"><strong>Ươm Và Chăm Sóc:</strong> Cây giống được ươm trong điều kiện kiểm soát, đảm bảo cây con có sức sống tốt.</li>
        <li className="mb-2"><strong>Kiểm Định Chất Lượng:</strong> Trước khi xuất bán, mỗi cây giống đều được kiểm tra kỹ để đảm bảo không có mầm bệnh.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cam Kết Của Chúng Tôi</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chất Lượng Đảm Bảo:</strong> Cây giống khỏe mạnh, sẵn sàng phát triển tốt.</li>
        <li className="mb-2"><strong>Giá Cả Hợp Lý:</strong> Cung cấp giống chất lượng cao với mức giá cạnh tranh.</li>
        <li className="mb-2"><strong>Hỗ Trợ Kỹ Thuật:</strong> Đồng hành cùng bà con từ khi trồng đến khi thu hoạch.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liên Hệ Hợp Tác</h2>
      <p className="mb-4">Nếu bạn đang tìm kiếm giống cây chanh dây chất lượng, hãy liên hệ ngay với chúng tôi để được tư vấn tốt nhất.</p>
      <ul className="list-disc pl-6">
        <li className="mb-2"><strong>Hotline:</strong> 034 526 3131</li>
        <li className="mb-2"><strong>Website:</strong> <a href="http://www.chanhdayquocchung.com" target="_blank" className="text-blue-500 hover:underline">www.chanhdayquocchung.com</a></li>
      </ul>

      <p className="mt-6 text-center text-gray-700">
        <span className="text-green-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> – Đối tác đáng tin cậy của bà con nông dân!
      </p>
    </div>
  },
  {
    id: 4,
    title: "Cung cấp sầu riêng cấp đông",
    description: "Sầu riêng thông qua quá trình được chọn lọc kĩ càng, thông qua quá trình chế biến được cấp đông nhanh, giữ nguyên hương vị và chất dinh dưỡng. Tiện lợi, dễ bảo quản và sử dụng quanh năm mà không ảnh hưởng đến chất lượng.",
    image: "/images/sau-rieng-cap-dong.jpg",
    content: <div className="font-sans text-gray-800 bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Giới Thiệu Lĩnh Vực Kinh Doanh Sầu Riêng Cấp Đông</h1>

      <p className="mb-6">
        Sầu riêng là một loại trái cây có giá trị kinh tế cao, được yêu thích tại nhiều quốc gia. Tuy nhiên, do đặc tính mùa vụ và thời gian bảo quản ngắn, việc cấp đông sầu riêng trở thành giải pháp tối ưu để bảo toàn hương vị và chất lượng sản phẩm. <span className="text-green-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> tự hào là đơn vị cung cấp sầu riêng cấp đông uy tín, đảm bảo chất lượng cao và đáp ứng nhu cầu thị trường trong nước lẫn xuất khẩu.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giới Thiệu Về Công Ty</h2>
      <p className="mb-6">
        <span className="text-green-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> chuyên cung cấp sầu riêng cấp đông chất lượng cao, được sản xuất theo quy trình nghiêm ngặt, giữ nguyên hương vị tự nhiên của sầu riêng tươi. Với nhiều năm kinh nghiệm trong lĩnh vực nông sản chế biến, chúng tôi cam kết mang đến sản phẩm đảm bảo an toàn thực phẩm và đạt tiêu chuẩn xuất khẩu.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Lĩnh Vực Kinh Doanh Chính</h2>
      <p className="mb-4">Chúng tôi tập trung vào các hoạt động sau:</p>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1. Cung Cấp Sầu Riêng Cấp Đông Chất Lượng Cao</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Hương Vị Nguyên Bản:</strong> Sầu riêng được cấp đông nhanh để giữ nguyên vị thơm béo đặc trưng.</li>
        <li className="mb-2"><strong>Tiện Lợi & Dễ Bảo Quản:</strong> Dễ dàng vận chuyển, bảo quản lâu dài mà không ảnh hưởng đến chất lượng.</li>
        <li className="mb-2"><strong>Đạt Tiêu Chuẩn Xuất Khẩu:</strong> Sản phẩm được xử lý theo công nghệ hiện đại, đảm bảo an toàn thực phẩm.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2. Hỗ Trợ Đối Tác Phân Phối & Xuất Khẩu</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Hỗ Trợ Kinh Doanh:</strong> Cung cấp số lượng lớn cho đối tác bán lẻ, siêu thị, nhà hàng.</li>
        <li className="mb-2"><strong>Chứng Nhận Đầy Đủ:</strong> Đạt tiêu chuẩn an toàn thực phẩm và chứng nhận xuất khẩu.</li>
        <li className="mb-2"><strong>Tư Vấn Mở Rộng Thị Trường:</strong> Hỗ trợ chiến lược kinh doanh và xuất khẩu sản phẩm.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Quy Trình Sản Xuất Sầu Riêng Cấp Đông</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chọn Lọc Nguyên Liệu:</strong> Sầu riêng chín cây, được thu hoạch từ những vùng trồng đạt chuẩn.</li>
        <li className="mb-2"><strong>Công Nghệ Cấp Đông Nhanh:</strong> Áp dụng công nghệ cấp đông -40°C để giữ nguyên độ tươi ngon.</li>
        <li className="mb-2"><strong>Đóng Gói & Kiểm Định:</strong> Sản phẩm được đóng gói an toàn, kiểm định kỹ trước khi xuất xưởng.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cam Kết Của Chúng Tôi</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2"><strong>Chất Lượng Đảm Bảo:</strong> Giữ trọn vẹn hương vị, độ béo và giá trị dinh dưỡng.</li>
        <li className="mb-2"><strong>Giá Cả Hợp Lý:</strong> Cạnh tranh và phù hợp với nhiều phân khúc thị trường.</li>
        <li className="mb-2"><strong>Hỗ Trợ Đối Tác:</strong> Hợp tác lâu dài với các doanh nghiệp trong và ngoài nước.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liên Hệ Hợp Tác</h2>
      <p className="mb-4">Nếu bạn đang tìm kiếm nguồn sầu riêng cấp đông chất lượng cao, hãy liên hệ ngay với chúng tôi để được tư vấn tốt nhất.</p>
      <ul className="list-disc pl-6">
        <li className="mb-2"><strong>Hotline:</strong> 034 526 3131</li>
        <li className="mb-2"><strong>Website:</strong> <a href="http://www.chanhdayquocchung.com" target="_blank" className="text-blue-500 hover:underline">www.chanhdayquocchung.com</a></li>
      </ul>

      <p className="mt-6 text-center text-gray-700">
        <span className="text-green-500 font-semibold">Công Ty Chanh Dây Quốc Chung</span> – Đối tác đáng tin cậy của bạn!
      </p>
    </div>
  }
];
// export const businessFieldsData: BusinessField[] = [
//   {
//     id: 1,
//     title: "Cung Cấp Chanh Dây Trái",
//     desc: "Cung cấp chanh dây tươi ngon, đạt chuẩn chất lượng.",
//     content: (
//       <div>
//         <h2 className="text-xl font-bold">Giới Thiệu</h2>
//         <p>Chanh dây là một trong những mặt hàng nông sản được ưa chuộng.</p>
//         <ul>
//           <li>Đảm bảo chất lượng cao.</li>
//           <li>Hỗ trợ xuất khẩu quốc tế.</li>
//         </ul>
//       </div>
//     ),
//   },
// ];