const { getDataMenuMakanan, addDataMenuMakanan, updateDataMenuMakanan, deleteDataMenuMakanan } = require('../model/menuMakanModel');

const getMenuMakanan = async (req, res) => {
    try {
        const data = await getDataMenuMakanan();
        console.log(data);
        res.status(200).json({
            message: 'Ini adalah daftar menu makanan',
            data: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan pada server',
            error: error
        });
    }
}

const addMenuMakanan = async (req, res) => {
    try{
        const data = await addDataMenuMakanan(req.body);
        res.status(200).json({
            message: 'Menu berhasil ditambahkan',
            data: [req.body]
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan pada server',
            error: error
        });
    }
    
}
const updateMenuMakanan = async (req, res) => {
    try{
        const data = updateDataMenuMakanan(req.body, req.params.id);
        res.status(200).json({
        message: 'Menu berhasil diubah',
        data: [req.body]
    });
    }catch (error){
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan pada server',
            error: error
        });
    }
        
}

const deleteMenuMakanan = (req, res) => {
    try{
        const data = deleteDataMenuMakanan(req.params);
        res.status(200).json({
            message: 'Menu berhasil dihapus',
            data: [req.params]
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Terjadi kesalahan pada server',
            error: error
        });
    }
}


module.exports = { 
    getMenuMakanan, 
    addMenuMakanan,
    updateMenuMakanan,
    deleteMenuMakanan
};
