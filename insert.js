document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const newBooking = {
        id: Date.now().toString(), // 🆔 Tạo ID duy nhất
        name,
        phone,
        date,
        time,
        guests
    };

    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('✅ Đặt bàn thành công!');
    window.location.href = 'list.html';
});
