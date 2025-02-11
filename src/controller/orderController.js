const orderModel = require('../model/orderModel');

const createOrder = async (req, res) => {
    try {
        const { menu, jumlah, catatan} = req.body;

        const menuMakanan = await orderModel.checkMenuMakanan(menu);
        if (!menuMakanan) {
            return res.status(404).json({
                status: 'error',
                message: 'Menu tidak ditemukan'
            });
        }

        const total_harga = menuMakanan.harga * jumlah;

        const result = await orderModel.addDataOrder({
            menu,
            jumlah,
            total_harga,
            catatan,    
        });

        res.json({
            status: 'success',
            message: 'Order berhasil dibuat',
            data: {
                menu,
                jumlah,
                total_harga,
                catatan,
                ...result
            }
        });
        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = { 
    createOrder,
};