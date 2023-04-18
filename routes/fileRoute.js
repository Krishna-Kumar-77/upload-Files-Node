const express = require("express");
const router = express.Router();

const uploadFile = require("../controller/uploadController");
const  upload = require("../middelWare/uploadMiddelWare")


router.post("/", upload.single("avatar"), uploadFile)
module.exports = router