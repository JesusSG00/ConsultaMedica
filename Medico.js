class Medico extends Persona{
    IdMedico;
    Cedula;
    /**
     * @param {Int} IdMedico 
     * @param {Int} Cedula 
     */
    constructor(IdMedico,Cedula){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaN);
        this._idMedico = IdMedico;
        this._cedula = Cedula;
    }

}