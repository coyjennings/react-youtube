const express = require('express');
const router = express.Router();
const multer = require('multer');
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             Video
//=================================

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== '.mp4') {
            return cb(res.status(400).end('only mp4 file is allowed'), false);
        }
        cb(null, true);
    }
})

let upload = multer({ storage: storage }).single("file");

router.post("/uploadfiles", (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err });
        } else {
            return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename });
        }
    })
});


module.exports = router;
