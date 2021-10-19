const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/services').get(pageController.getServicesPage);
router.route('/team').get(pageController.getTeamPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/add').get(pageController.getAddPage);
module.exports = router;
