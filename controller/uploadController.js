const File = require("../uploadFileModel")

const uploadFile = async(req, res) => {
    let file = new File({
        name: req.body.name
    })
    if (req.file) {
        file.avatar = req.file.path
    }
    file.save()
        .then(response => {
            res.json({
            message: "Photo saved successfully"
        })
        })
        .catch(err => {
            res.json({
            message: "An error occurred while saving"
        })
    })

} 

module.exports = uploadFile;