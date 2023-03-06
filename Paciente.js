class Paciente extends Persona{
    IdPaciente;
    FolioPaciente;
    Consulta = [];
   /**
    * @param {String} FolioPaciente 
    */
    constructor(IdPaciente,Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac,FolioPaciente){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac);
        this.IdPaciente = IdPaciente;
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

    datosPaciente = function(){
        return `ID:${this.IdPaciente} Nombre Completo:${this.Nombre} ${this.ApellidoP} ${this.ApellidoM} Folio:${this.FolioPaciente}`;
    }

    
} 
