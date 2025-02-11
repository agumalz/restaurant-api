const enterprise = require('../configuration/enterprise');

const getDataMenuMakanan = async () => {
    try {
        const [result, fields] = await enterprise.query(
            'SELECT * FROM menu_makanan'
        );
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const addDataMenuMakanan = async ({menu, harga}) => {
    try {
        const sql = 'INSERT INTO menu_makanan (menu, harga) VALUES (?, ?)';
        const [result, fields] = await enterprise.query(sql, [menu, harga]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const updateDataMenuMakanan = async (body,  params) => {
    try{
        const { id } = params;
        const { menu, harga } = body;
        const sql = 'UPDATE menu_makanan SET menu = ?, harga = ? WHERE id = ?';
        const [result, fields] = await enterprise.query(sql, [menu, harga, id]);
        return result;
    }catch(error){
        console.error(error);
        throw error;
    }
}

const deleteDataMenuMakanan = async (params) => {
    try{
        const {id} = params
        const sql = 'DELETE FROM menu_makanan WHERE id = ?'
        const [result, fields] = await enterprise.query(sql, [id])
        return result;
    }catch(error){
        console.error(error);
        throw error;
    }
}

module.exports = { 
    getDataMenuMakanan, 
    addDataMenuMakanan,
    updateDataMenuMakanan,
    deleteDataMenuMakanan
};