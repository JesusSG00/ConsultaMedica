class Medico extends Persona{
    IdMedico;
    Cedula;
    Consulta = [];
    /**
     * @param {Int} IdMedico 
     * @param {Int} Cedula 
     */
  
    constructor(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaN, IdMedico,Cedula){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaN);
        this.Nombre = Nombre;
        this.ApellidoP = ApellidoP;
        this.ApellidoM = ApellidoM;
        this.Direccion = Direccion;
        this.Cp = Cp;
        this.Telefono = Telefono;
        this.FechaNac = FechaNac;
        this._cedula = Cedula;
    }

}

function agregarConsulta(){

}


