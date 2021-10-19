const express = require('express');
const photoController = require('../controllers/photoController');

const router = express.Router();

router.route('/photos').get(photoController.getAllPhotos);
router.route('/photos').post(photoController.createPhoto);
router.route('/photos/:id').get(photoController.getPhoto);
router.route('/photos/:id').put(photoController.updatePhoto);
router.route('/photos/:id').delete(photoController.deletePhoto);
router.route('/photos/edit/:id').get(photoController.getEditPage);

module.exports = router;
