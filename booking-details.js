const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get('index')); // Parse index as integer

if (!isNaN(index)) { // Check if index is a valid number
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    if (index >= 0 && index < bookings.length) { // Check if index is within bounds
        const booking = bookings[index];

        document.getElementById('name-display').textContent = booking.name;
        document.getElementById('phone-display').textContent = booking.phone;
        document.getElementById('date-display').textContent = booking.date;
        document.getElementById('time-display').textContent = booking.time;
        document.getElementById('guests-display').textContent = booking.guests;

        document.getElementById('edit-button').addEventListener('click', function() {
            window.location.href = `insert.html?index=${index}`;
        });
    } else {
        window.location.href = 'index.html';
    }
} else {
    window.location.href = 'index.html';
}

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});