const { Router } = require('express');
const { renderWinePage } = require('../controllers/productController');

const router = Router();

router.get('/', renderWinePage); // GET /product

module.exports = router;
