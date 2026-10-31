const db = require('../config/database');

const BarangModel = {
    getAll: async () => {
        const sql = 'SELECT * FROM barang ORDER BY id DESC';
        const [rows] = await db.query(sql);
        return rows;
    },

    getById: async (id) => {
        const sql = 'SELECT * FROM barang WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    },

    create: async (data) => {
        const sql = `
            INSERT INTO barang
            (nama_barang, kategori, deskripsi, harga, stok, status, tanggal_masuk)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            data.nama_barang,
            data.kategori,
            data.deskripsi,
            data.harga,
            data.stok,
            data.status,
            data.tanggal_masuk
        ];

        const [result] = await db.query(sql, values);
        return result;
    },

    update: async (id, data) => {
        const sql = `
            UPDATE barang
            SET nama_barang = ?,
                kategori = ?,
                deskripsi = ?,
                harga = ?,
                stok = ?,
                status = ?,
                tanggal_masuk = ?
            WHERE id = ?
        `;

        const values = [
            data.nama_barang,
            data.kategori,
            data.deskripsi,
            data.harga,
            data.stok,
            data.status,
            data.tanggal_masuk,
            id
        ];

        const [result] = await db.query(sql, values);
        return result;
    },

    delete: async (id) => {
        const sql = 'DELETE FROM barang WHERE id = ?';
        const [result] = await db.query(sql, [id]);
        return result;
    }
};

module.exports = BarangModel;
