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
        this.Nombre = Nombre;
        this.ApellidoP = ApellidoP;
        this.ApellidoM = ApellidoM;
        this.Direccion = Direccion;
        this.Cp = Cp;
        this.Telefono = Telefono;
        this.FechaNac = FechaNac;
    } 

    

}

function fullName(){
       let fullname = "El nombre es "&this.Nombre&this.ApellidoM&this.ApellidoP;
       return fullname; 
    }



