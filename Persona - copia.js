class Persona {
    Nombre;
    ApellidoP;
    ApellidoM;
    Direccion;
    Cp;
    Telefono;
    FechaNac;
    /**
     * @param {String} Nombre 
     * @param {String} ApellidoP 
     * @param {String} ApellidoM 
     * @param {String} Direccion 
     * @param {Int} Cp 
     * @param {Int} Telefono 
     * @param {Date} FechaNac 
     */
    constructor(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac) {
        this._nombre = Nombre;
        this._apellidop = ApellidoP;
        this._apellidom = ApellidoM;
        this._direccion = Direccion;
        this.cp = Cp;
        this._telefono = Telefono;
        this._fechaNac = FechaNac;
    } 
} 