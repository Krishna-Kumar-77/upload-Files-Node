const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const dbConnect = require("./db")
const path = require("path");
const multer = require("multer");
//const File = require("./uploadFileModel")
const app = express();


const port = process.env.PORT|| 5000
// Configurations for "body-parser"

dbConnect();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server side!"
  })
})
app.use("/uploadFile", require("./routes/fileRoute"))
//app.use('/uploads', express.static("uploads"));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(`${__dirname}/public`));
// // Set view engine as EJS
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.use("/", (req, res) => {
//   res.status(200).render("index");
// }); 
// //Configuration for Multer
// const //upload = multer({ dest: "public/files" });
//Configuration for Multer
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };
//Calling the "multer" Function
// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });
// app.post("/api/uploadFile", upload.single("myFile"), async(req, res) => {
//   // Stuff to be added later
//   //console.log(req.file);
//   // console.log(req.file)
// try {
//   const newFile = await File.create({
//     name: req.file.filename,
//   });
//   res.status(200).json({
//     status: "success",
//     message: "File created successfully!!",
//   });
// } catch (error) {
//   res.json({
//     error,
//   });
// }
// });
// Stuff to be added later

//API Endpoint for uploading file
// app.post("/api/uploadFile", (req, res) => {
//   // Stuff to be added later
// });


app.listen(port, (req, res) => console.log(`Server Started On port: ${port}`))