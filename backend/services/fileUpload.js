const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, res , cb) =>{

    if(!req.file){
        return cb("please select a file", false);
    }

    const ext = path.extname(file.originalname).toLowerCase();

    if(req.file.mimetype === 'application/x-pdf' || ext === '.pdf'){
        cb(null, true);
    }

    else{
        cb(" only pdf files are allowed ", false);
    }
};

const upload = multer({

    storage: storage,
    limit: {filesize: 10 * 1024 * 1024},
    // fileFilter: fileFilter,

});

module.exports = upload;