const express = require('express');
const router = express.Router();
const { 
    getMenuMakanan, 
    addMenuMakanan, 
    updateMenuMakanan, 
    deleteMenuMakanan 
} = require('../controller/menuController');

router.get('/menu', getMenuMakanan);
router.post('/menu', addMenuMakanan);
router.patch('/menu/:id', updateMenuMakanan);
router.delete('/menu/:id', deleteMenuMakanan);

module.exports = router;