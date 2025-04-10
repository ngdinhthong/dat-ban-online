document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
        alert('ID không hợp lệ.');
        window.location.href = 'list.html';
        return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const index = bookings.findIndex(booking => booking.id === id);

    if (index === -1) {
        alert('Không tìm thấy đặt bàn.');
        window.location.href = 'list.html';
        return;
    }

    const booking = bookings[index];

    document.getElementById('name').value = booking.name || '';
    document.getElementById('phone').value = booking.phone || '';
    document.getElementById('date').value = booking.date || '';
    document.getElementById('time').value = booking.time || '';
    document.getElementById('guests').value = booking.guests || '';

    document.getElementById('edit-form').addEventListener('submit', (event) => {
        event.preventDefault();

        bookings[index] = {
            ...booking, // giữ nguyên ID
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value
        };

        localStorage.setItem('bookings', JSON.stringify(bookings));
        alert('✅ Cập nhật thành công!');
        window.location.href = 'list.html';
    });

    const cancelButton = document.getElementById('cancel-button');
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            window.location.href = 'list.html';
        });
    }
});
