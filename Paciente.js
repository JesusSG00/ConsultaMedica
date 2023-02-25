class Paciente extends Persona{
    FolioPaciente;
    Consulta = [];
   /**
    * @param {String} FolioPaciente 
    */
    constructor(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac,FolioPaciente){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac);
        this.Nombre = Nombre;
        this.ApellidoP = ApellidoP;
        this.ApellidoM = ApellidoM;
        this.Direccion = Direccion;
        this.Cp = Cp;
        this.Telefono = Telefono;
        this.FechaNac = FechaNac;
        this.FolioPaciente = FolioPaciente;
    }

    agregarConsulta(consulta){
        let consultas = this.Consulta;
        consultas.push(consulta);
    }

    expediente(){
        let n_consultas = this.consulta.lenght;
        return this.fullName()+", ID: "+ this.Id+" consultas:"+n_consultas
    }
}