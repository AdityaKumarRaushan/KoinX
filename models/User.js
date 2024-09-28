const mongoose = require('mongoose');

const userTransactionSchema = new mongoose.Schema({
    User_ID: {
        type: String,
        required: true,
    },
    UTC_Time: {
        type: Date,
        required: true,
    },
    Operation: {
        type: String,
        enum: ['Buy', 'Sell'],
        required: true,
    },
    Market: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required: true,
    },
    Price: {
        type: Number, 
        required: true,
    }
}, { timestamps: true });


module.exports  = mongoose.model("UserTransaction", userTransactionSchema);
