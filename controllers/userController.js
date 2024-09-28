const User = require('../models/User');
const csv = require('csvtojson');

const importUser = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({
                status: 400,
                success: false,
                msg: "No file uploaded.",
            });
        }

        const userData = await csv().fromFile(req.file.path);

        const userRecords = [];
        for (const record of userData) {
            const existingRecord = await User.findOne({
                User_ID: record.User_ID,
                UTC_Time: new Date(record.UTC_Time),
                Market: record.Market,
                Amount: record['Buy/Sell Amount'],
                Price: record.Price,
            });

            if (!existingRecord) {
                userRecords.push({
                    User_ID: record.User_ID,
                    UTC_Time: new Date(record.UTC_Time),
                    Operation: record.Operation,
                    Market: record.Market,
                    Amount: Number(record['Buy/Sell Amount']),
                    Price: Number(record.Price),
                });
            }
        }

        if (userRecords.length > 0) {
            await User.insertMany(userRecords);
        }

        return res.status(200).send({
            status: 200,
            success: true,
            msg: "Uploaded successfully.",
            insertedCount: userRecords.length,
        });
    } catch (error) {
        console.error("Error importing users:", error);
        return res.status(500).send({
            status: 500,
            success: false,
            msg: "Internal Server Error",
            error: error.message,
        });
    }
};

module.exports = { importUser };
