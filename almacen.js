class almacen{ 
    Localizacion; 
    IdMedicina;
    Cantidad;
    NombreMedicina;
    Marca;
    Proveedor;
    Caducidad;
    Consulta
    /**
     * 
     * @param {string} Localizacion 
     * @param {Medicina} IdMedicina 
     * @param {int} Cantidad 
     * @param {string} NombreMedicina 
     * @param {string} Marca 
     * @param {string} Proveedor 
     * @param {date} Caducidad 
     * @param {Consulta} Consulta 
     */
   constructor(Localizacion, IdMedicina, Cantidad, NombreMedicina, Marca, Proveedor, Caducidad, Consulta){
    this.Localizacion= Localizacion;
    this.IdMedicina= IdMedicina;
    this. Cantidad= Cantidad;
    this. NombreMedicina= NombreMedicina;
    this. Marca= Marca;
    this.Proveedor= Proveedor;
    this.Caducidad= Caducidad;
    this.Consulta= Consulta;
   }

} 

