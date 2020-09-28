function randomNumber(){
  return Math.floor(Math.random() * 9999999); 
}

export const TREE_FILTER_ADDRESS = [
  {
    title: "Đông Á",
    key: "0",
    children: [
      {
        title: "HỒNG KÔNG & MA CAO",
        key: "0-" + randomNumber(),
      },
      {
        title: "ĐÀI LOAN",
        key: "0-" + randomNumber(),
      },
      {
        title: "HỒNG KÔNG & MA CAO",
        key: "0-" + randomNumber(),
      },
      {
        title: "NHẬT BẢN",
        key: "0-" + randomNumber(),
      },
    ],
  },
  {
    title: "Đông Nam Á",
    key: "1",
    children: [
      {
        title: "SINGAPORE",
        key: "1-" + randomNumber(),
      },
      {
        title: "THÁI LAN",
        key: "1-" + randomNumber(),
      },
      {
        title: "VIỆT NAM",
        key: "1-" + randomNumber(),
      },
      {
        title: "MALAYSIA",
        key: "1-" + randomNumber(),
      },
    ],
  },
  {
    title: "Nam Á / Trung Đông",
    key: "2",
    children: [
      {
        title: "NEPAL",
        key: "2-" + randomNumber(),
      },
      {
        title: "BHUTAN",
        key: "2-" + randomNumber(),
      },
      {
        title: "ẤN ĐỘ",
        key: "2-" + randomNumber(),
      },
      {
        title: "THỔ NHĨ KÌ",
        key: "2-" + randomNumber(),
      },
    ],
  },
  {
    title: "Đông Nam Á",
    key: "3",
    children: [
      {
        title: "SINGAPORE",
        key: "3-" + randomNumber(),
      },
      {
        title: "THÁI LAN",
        key: "3-" + randomNumber(),
      },
      {
        title: "VIỆT NAM",
        key: "3-" + randomNumber(),
      },
      {
        title: "MALAYSIA",
        key: "3-" + randomNumber(),
      },
    ],
  },
  {
    title: "Châu Đại Dương / Châu Phi",
    key: "4",
    children: [
      {
        title: "ÚC",
        key: "4-" + randomNumber(),
      },
      {
        title: "BHUTAN",
        key: "4-" + randomNumber(),
      },
      {
        title: "NEW ZEALAND",
        key: "4-" + randomNumber(),
      },
      {
        title: "MAURITIUS",
        key: "4-" + randomNumber(),
      },
    ],
  },
  {
    title: "Châu Âu",
    key: "5",
    children: [
      {
        title: "ANH",
        key: "5-" + randomNumber(),
      },
      {
        title: "PHÁP",
        key: "5-" + randomNumber(),
      },
      {
        title: "HÀ LAN",
        key: "5-" + randomNumber(),
      },
      {
        title: "ĐỨC",
        key: "5-" + randomNumber(),
      },
    ],
  },
];

export const TREE_FILTER_CATEGORY = [
  {
    title: "Ẩm thực & nhà hàng",
    key: "0",
    children: [
      {
        title: "Buffet",
        key: "0-" + randomNumber(),
      },
      {
        title: "Nhà hàng tại khách sạn",
        key: "0-" + randomNumber(),
      },
      {
        title: "Voucher ăn uống",
        key: "0-" + randomNumber(),
      },
      {
        title: "Học nấu ăn",
        key: "0-" + randomNumber(),
      },
      {
        title: "Suối Nước Nóng",
        key: "0-" + randomNumber(),
        disabled: true,
      }
    ],
  },
  {
    title: "Vé tham quan & Show",
    key: "1",
    children: [
      {
        title: "Thể thao",
        key: "1-" + randomNumber(),
      },
      {
        title: "Công viên chủ đề",
        key: "1-" + randomNumber(),
      },
      {
        title: "Triển lãm & Trưng Bày",
        key: "1-" + randomNumber(),
      },
      {
        title: "Triển lãm & Kiến Trúc",
        key: "1-" + randomNumber(),
      },
      {
        title: "Lễ hội & Concert",
        key: "1-" + randomNumber(),
      },
    ],
  },
  {
    title: "Tour & Tham quan ngắm cảnh",
    key: "2",
    children: [
      {
        title: "NEPAL",
        key: "2-" + randomNumber(),
      },
      {
        title: "BHUTAN",
        key: "2-" + randomNumber(),
      },
      {
        title: "ẤN ĐỘ",
        key: "2-" + randomNumber(),
      },
      {
        title: "THỔ NHĨ KÌ",
        key: "2-" + randomNumber(),
      },
    ],
  },
  {
    title: "Hoạt động & Trải nghiệm",
    key: "3",
    children: [
      {
        title: "Khách sạn & Nơi ở",
        key: "3-" + randomNumber(),
      },
      {
        title: "Dịch vụ Y Tế",
        key: "3-" + randomNumber(),
      },
      {
        title: "Thể thao mạo hiểm",
        key: "3-" + randomNumber(),
      },
      {
        title: "Tắm Suối Nước Nóng",
        key: "3-" + randomNumber(),
      },
    ],
  },
  {
    title: "Vận chuyển và Tiện ích Du lịch",
    key: "4",
    children: [
      {
        title: "Trung chuyển riêng ở Sân bay",
        key: "4-" + randomNumber(),
      },
      {
        title: "Phương tiện công công & Trung chuyển chung ở Sân bay",
        key: "4-" + randomNumber(),
      },
      {
        title: "Trung chuyển trong & giữa các thành phố",
        key: "4-" + randomNumber(),
      },
      {
        title: "Dịch vụ Du lịch",
        key: "4-" + randomNumber(),
      },
    ],
  },
  {
    title: "Voucher khách sạn",
    key: "5",
    children: [
      {
        title: "Khách sạn",
        key: "5-" + randomNumber(),
      },
      {
        title: "Gợi ý Staycation",
        key: "5-" + randomNumber(),
      },
    ],
  },
];

