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
        this.IdMedico = IdMedico;
        this.Cedula = Cedula;
    }

datosMedico = function(){
    return `ID:${this.IdMedico} Nombre Completo:${this.Nombre} ${this.ApellidoP} ${this.ApellidoM} Telefono:${this.Telefono}  Cedula:${this.Cedula}`;
}

}



