const User = require('../models/User');

const getBalance = async (req, res) => {
    try {
        const { timestamp } = req.body;

        if (!timestamp) {
            return res.status(400).send({
                success: false,
                msg: "Timestamp is required.",
            });
        }

        const parsedTimestamp = new Date(timestamp);
        if (isNaN(parsedTimestamp.getTime())) {
            return res.status(400).send({
                success: false,
                msg: "Invalid timestamp format.",
            });
        }

        const trades = await User.find({
            UTC_Time: { $lt: parsedTimestamp }
        });

        const balance = {};
        trades.forEach(trade => {
            const { Operation, Market, Amount } = trade;
            const [baseCoin, quoteCoin] = Market.split('/');

            if (!balance[baseCoin]) {
                balance[baseCoin] = 0;
            }

            if (Operation === 'Buy') {
                balance[baseCoin] += Amount;
            } else if (Operation === 'Sell') {
                balance[baseCoin] -= Amount;
            }
        });

        res.status(200).send(balance);
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).send({
            success: false,
            msg: "Internal Server Error",
            error: error.message,
        });
    }
};

module.exports = { getBalance };
