class Paciente extends Persona{
    Id;
    FolioPaciente;
   /**
    * @param {Int} Id 
    * @param {String} FolioPaciente 
    */
    constructor(Id,FolioPaciente){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac);
        this._id = Id;
        this._folioPaciente = FolioPaciente;
    }
}