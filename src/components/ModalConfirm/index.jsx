import { Modal, Button } from 'antd';

export default function CountDown() {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'Thanh toán thành công',
    content: `Cảm ơn bạn đã sử dụng dịch vụ của STRAVEL`,
    footer: null,
    okText: "Xác nhận"
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      okText: `Xác nhận (${secondsToGo})`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}