const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: `Server is up and running at port ${process.env.PORT}`,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
