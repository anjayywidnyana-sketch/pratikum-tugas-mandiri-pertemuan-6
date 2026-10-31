const BarangModel = require('../models/barang.model');

exports.getAllBarang = async (req, res) => {
    try {
        const barang = await BarangModel.getAll();

        res.render('pages/barang-list', {
            barang
        });
    } catch (error) {
        console.error('[ERROR getAllBarang]:', error);
        res.status(500).send('Gagal mengambil data barang.');
    }
};

exports.getTambahBarang = (req, res) => {
    res.render('pages/barang-tambah');
};

exports.postTambahBarang = async (req, res) => {
    try {
        await BarangModel.create(req.body);

        console.log('[DATABASE] Barang berhasil ditambahkan.');

        res.redirect('/barang');
    } catch (error) {
        console.error('[ERROR postTambahBarang]:', error);
        res.status(500).send('Gagal menambahkan barang.');
    }
};

exports.getEditBarang = async (req, res) => {
    try {
        const barang = await BarangModel.getById(req.params.id);

        if (!barang) {
            return res.status(404).send('Data barang tidak ditemukan.');
        }

        res.render('pages/barang-edit', {
            barang
        });
    } catch (error) {
        console.error('[ERROR getEditBarang]:', error);
        res.status(500).send('Gagal mengambil data barang.');
    }
};

exports.postEditBarang = async (req, res) => {
    try {
        await BarangModel.update(req.params.id, req.body);

        console.log(
            `[DATABASE] Barang ID ${req.params.id} berhasil diperbarui.`
        );

        res.redirect('/barang');
    } catch (error) {
        console.error('[ERROR postEditBarang]:', error);
        res.status(500).send('Gagal memperbarui barang.');
    }
};

exports.postHapusBarang = async (req, res) => {
    try {
        const result = await BarangModel.delete(req.params.id);

        if (result.affectedRows === 0) {
            console.warn(
                `[DATABASE] Tidak ada barang dengan ID ${req.params.id}.`
            );
        } else {
            console.log(
                `[DATABASE] Barang ID ${req.params.id} berhasil dihapus.`
            );
        }

        res.redirect('/barang');
    } catch (error) {
        console.error('[ERROR postHapusBarang]:', error);
        res.status(500).send('Gagal menghapus barang.');
    }
};