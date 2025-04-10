document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');
  
    // Hiển thị đánh giá đã lưu
    const savedFeedback = JSON.parse(localStorage.getItem('feedbacks')) || [];
    savedFeedback.forEach(feedback => addFeedbackToDOM(feedback));
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const rating = document.getElementById('rating').value;
      const comment = document.getElementById('comment').value;
  
      const feedback = { name, rating, comment };
  
      // Lưu vào localStorage
      savedFeedback.unshift(feedback); // thêm mới lên đầu
      localStorage.setItem('feedbacks', JSON.stringify(savedFeedback));
  
      // Hiển thị
      addFeedbackToDOM(feedback);
  
      alert('🎉 Gửi đánh giá thành công!');
  
      form.reset();
    });
  
    function addFeedbackToDOM({ name, rating, comment }) {
      const feedbackItem = document.createElement('div');
      feedbackItem.classList.add('feedback-item');
      feedbackItem.innerHTML = `
        <h4>${name} - ${'⭐️'.repeat(rating)}</h4>
        <p>${comment}</p>
      `;
      feedbackList.prepend(feedbackItem);
    }
  });
  