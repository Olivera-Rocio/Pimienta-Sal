const fs = require('fs');
const path = require('path');
const menu = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','menu.json'),'utf-8'));
const platoTipico = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','platoTipico.json'),'utf-8'));


module.exports = {
    index : (req, res) => res.render("index",{
        menu
    }),
    
    detail : (req, res) =>{
        return res.render ('detalleMenu', {
            plato : menu.find(plato => plato.id === +req.params.id),
            platoTipico
        })
    }
}