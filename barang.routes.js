const express = require('express');
const router = express.Router();

const barangController =
    require('../controllers/barang.controller');

router.get('/barang', barangController.getAllBarang);

router.get('/barang/tambah', barangController.getTambahBarang);

router.post(
    '/barang/tambah',
    barangController.postTambahBarang
);

router.get(
    '/barang/edit/:id',
    barangController.getEditBarang
);

router.post(
    '/barang/edit/:id',
    barangController.postEditBarang
);

router.post(
    '/barang/hapus/:id',
    barangController.postHapusBarang
);

module.exports = router;
