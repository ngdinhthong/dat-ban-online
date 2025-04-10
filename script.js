document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('booking-form');
  const successMessage = document.getElementById('success-message');
  const aiButton = document.getElementById('ai-button');
  const aiQuestion = document.getElementById('ai-question');
  const aiResponse = document.getElementById('ai-response');

  // Xử lý đặt bàn
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (!name || !phone || !date || !time || !guests) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const newBooking = { name, phone, date, time, guests };

    fetch("http://localhost:3000/ask-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Phản hồi AI:", data.reply);
    })
    .catch(error => {
      console.error("Lỗi gọi AI:", error);
    });
    
  });

  // Xử lý AI
  aiButton.addEventListener('click', async function () {
    const question = aiQuestion.value.trim();
    if (!question) {
      aiResponse.textContent = "⚠️ Vui lòng nhập câu hỏi.";
      return;
    }

    aiResponse.textContent = "🤖 Đang suy nghĩ...";

    try {
      const res = await fetch("http://localhost:3000/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: question })
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Lỗi phản hồi từ server: ${errText}`);
      }

      const data = await res.json();
      aiResponse.textContent = "💬 " + data.reply;
    } catch (error) {
      console.error("Lỗi gọi AI:", error);
      aiResponse.textContent = "⚠️ Có lỗi xảy ra khi gọi AI.";
    }
  });
});
function toggleAIBox() {
  const box = document.getElementById('aiBox');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}
const aiAnswers = {
  "Tôi có thể đặt bàn 7h tối nay không?": "Dạ, quý khách có thể đặt bàn vào 7h tối nếu còn chỗ trống. Vui lòng điền form đặt bàn giúp em nhé!",
  "Nhà hàng có phục vụ món chay không?": "Dạ có ạ! Nhà hàng chúng em có phục vụ các món chay thanh đạm và ngon miệng.",
  "Tôi có thể đặt cho 10 người không?": "Dạ được ạ! Quý khách vui lòng đặt trước để nhà hàng sắp xếp bàn lớn phù hợp."
};

function handleAIQuestion(question) {
  const answer = aiAnswers[question] || "Xin lỗi, hiện tại tôi chưa có câu trả lời cho câu hỏi này.";
  document.getElementById('ai-response').textContent = answer;
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("booking-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn load lại trang

    // Lấy dữ liệu từ form
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Kiểm tra đơn giản
    if (name && phone && date && time && guests > 0) {
      // Hiển thị thông báo thành công
      successMessage.style.display = "block";

      // Reset form (nếu muốn)
      form.reset();
    } else {
      alert("Vui lòng điền đầy đủ thông tin hợp lệ!");
    }
  });
});


