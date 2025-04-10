const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
const bookingListContainer = document.getElementById('booking-list-container');
const viewBookingsButton = document.getElementById('view-bookings-button');
function displayBookings() {
    const bookingListContainer = document.getElementById('booking-list-container');
    bookingListContainer.innerHTML = '';

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Tên</th>
                <th>Điện thoại</th>
                <th>Ngày</th>
                <th>Giờ</th>
                <th>Khách</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');

    bookings.forEach((booking, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.phone}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>${booking.guests}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Sửa</button>
                <button class="delete-btn" data-index="${index}">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    bookingListContainer.appendChild(table);

    if (viewBookingsButton) {
        viewBookingsButton.addEventListener('click', displayBookings);
    }
    // Thêm trình xử lý sự kiện cho các nút "Sửa" và "Xóa"
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', editBooking);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteBooking);
    });
}

function editBooking(event) {
    const index = event.target.dataset.index;
    window.location.href = `insert.html?index=${index}`;
}

function deleteBooking(event) {
    const index = event.target.dataset.index;
    bookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    displayBookings();
}

displayBookings();