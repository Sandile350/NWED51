const express = require('express');
const app = express();
app.use(express.json());

//sample data
let bookings = [];

//API endpoints
app.post('/api/bookings', (req, res) => {
    const booking = req.body;
    bookings.push(booking);
    res.json({ success: true, booking });
});

app.get('/api/bookings', (req, res) => {
    res.json(bookings);
});

app.listen(3000, () => {
    console.log('Cleaning service running API on port 3000');
});