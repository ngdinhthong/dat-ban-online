document.addEventListener('DOMContentLoaded', function () {
    const bookingList = document.getElementById('booking-list');
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    function displayBookings() {
        bookingList.innerHTML = '';
        bookings.forEach(function (booking, index) {
            const row = bookingList.insertRow();
            row.innerHTML = `
                <td>${booking.name}</td>
                <td>${booking.phone}</td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td>${booking.guests}</td>
                <td>
  <button class="edit-btn" data-id="${booking.id}">Sửa</button>
  <button class="delete-btn" data-index="${index}">Xóa</button>
</td>

            `;
        });
    }

    displayBookings();

    bookingList.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('delete-btn')) {
            const index = target.getAttribute('data-index');
            if (confirm('Bạn có chắc chắn muốn xóa đặt bàn này?')) {
                bookings.splice(index, 1);
                localStorage.setItem('bookings', JSON.stringify(bookings));
                displayBookings();
            }
        }

        if (target.classList.contains('edit-btn')) {
            const id = target.getAttribute('data-id');
            if (id) {
              window.location.href = `edit.html?id=${id}`;
            }
          }
          
    });
});
