class Paciente extends Persona{
    IdPaciente;
    FolioPaciente;
    Consulta = [];
   /**
    * @param {String} FolioPaciente 
    */
    constructor(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac,FolioPaciente){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac);
        this.IdPaciente = this.generador();
        this.FolioPaciente = FolioPaciente;
    }

    agregarConsulta =  function(consulta){
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

    generador(){
        let  ids=[];
        let id;
        id = Math.floor(Math.random() * 500) + 1;
        for(var i=0;i<ids.length;i++){
             if(id==ids[i]){
              id = Math.floor(Math.random() * 500) + 1;  
            }else{
                return id;
            }   
        }
        
        return id;
    }

    
} 
