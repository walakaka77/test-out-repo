const { Router } = require('express');
const { upload } = require('../middleware/upload');
const { renderForm, handleUpload } = require('../controllers/uploadController');

const router = Router();

router.get('/', renderForm);                        // GET /upload
router.post('/', upload.single('myFile'), handleUpload); // POST /upload

module.exports = router;
