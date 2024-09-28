const express = require("express");
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');

const path = require('path');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/importUser', upload.single('file'), userController.importUser);

module.exports = router;
