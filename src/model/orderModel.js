const enterprise = require('../configuration/enterprise');

const getDataOrder = async () => {
    try {
        const [result] = await enterprise.query(`
            SELECT o.*, m.menu, m.harga 
            FROM order_menu o
            JOIN menu_makanan m ON o.menu_makanan_id = m.id
        `);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const addDataOrder = async ({ menu, jumlah, total_harga, catatan}) => {
    try {
        const [ menuData ] =  await enterprise.query('SELECT * FROM menu_makanan WHERE menu = ?', 
        [menu]
        );

        if (!menuData || menuData.length === 0) {
            throw new Error('Menu tidak ditemukan');
        }

        const menu_makanan_id = menuData[0].id;

        const sql = 'INSERT INTO order_menu (menu_makanan_id, jumlah, total_harga, catatan) VALUES (?, ?, ?, ?)';
        const [result] = await enterprise.query(sql, [menu_makanan_id, jumlah, total_harga, catatan]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const updateDataOrder = async (body, params) => {
    try {
        const { id } = params;
        const { menu_makanan_id, jumlah, total_harga, catatan } = body;
        const sql = 'UPDATE order_menu SET menu_makanan_id = ?, jumlah = ?, total_harga = ?, catatan = ? WHERE id = ?';
        const [result] = await enterprise.query(sql, [menu_makanan_id, jumlah, total_harga, catatan, id]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const deleteDataOrder = async (params) => {
    try {
        const { id } = params;
        const sql = 'DELETE FROM order_menu WHERE id = ?';
        const [result] = await enterprise.query(sql, [id]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const checkMenuMakanan = async (menu) => {
    try {
        const [result] = await enterprise.query(
            'SELECT * FROM menu_makanan WHERE menu = ?',
            [menu]
        );
        return result[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    getDataOrder,
    addDataOrder,
    updateDataOrder,
    deleteDataOrder,
    checkMenuMakanan
};