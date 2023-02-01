const fs = require('fs');
const path= require('path');

const rutaExiste=(route)=> fs.existsSync(route);

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta existe
    if (fs.existsSync(path)) {
// Chequear o convertir a ruta absoluta
    } else {
      // Si no existe la ruta se rechaza
      reject('La ruta no existe');
    };

  });
};


module.exports = {
  mdLinks,
  rutaExiste,
};
