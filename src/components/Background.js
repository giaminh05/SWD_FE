import React from 'react';

function Background() {
  const backgroundStyle = {
    backgroundImage: '("./my-app/public/Background.jpg")',
    backgroundSize: 'cover', // Để đảm bảo hình ảnh phủ hết phần background
    backgroundRepeat: 'no-repeat', // Không lặp lại hình ảnh
    width: '100%', // Đảm bảo component có kích thước đầy đủ
    height: '100%', // Đảm bảo component có kích thước đầy đủ
    // Nếu bạn muốn tùy chỉnh các thuộc tính background khác, bạn có thể thêm chúng vào đây.
  };

  return (
    <div style={{ backgroundImage: "url(my-app/public/Background.jpg)" }}>
        
    </div>
  );
}

export default Background;