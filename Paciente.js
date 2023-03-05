class Paciente extends Persona{
    FolioPaciente;
    Consulta = [];
   /**
    * @param {String} FolioPaciente 
    */
    constructor(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac,FolioPaciente){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac);
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
