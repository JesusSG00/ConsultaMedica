class Medicina {
    IdMedicina;
    NombreMedicina;
    Marca;
    Proveedor;
    Caducidad;
/**
 * @param {Int} IdMedicina 
 * @param {String} NombreMedicina 
 * @param {String} Marca 
 * @param {String} Proveedor 
 * @param {Date} Caducidad 
 */
    constructor(IdMedicina,  NombreMedicina, Marca, Proveedor, Caducidad) {
        this._idMedicina = IdMedicina;
        this._nombreMedicina = NombreMedicina;
        this._marca = Marca;
        this._proveedor = Proveedor;
        this._caducidad = Caducidad;
    }
}