var pacientes = [];
var medicos =[];
function guardarPaciente(){
    this.IdPaciente = generador();
    this.Nombre = document.getElementById("Nombre").value;
    this.ApellidoP= document.getElementById("ApellidoP").value;
    this.ApellidoM = document.getElementById("ApellidoM").value;
    this.Direccion= document.getElementById("Direccion").value;
    this.Cp= document.getElementById("Cp").value;
    this.Telefono= document.getElementById("Telefono").value;
    this.FechaNac= document.getElementById("FechaNac").value;
    this.FolioPaciente= document.getElementById("FolioPaciente").value;
    let pa1 = new Paciente(IdPaciente,Nombre,ApellidoP,ApellidoM,Direccion,Cp,Telefono,FechaNac,FolioPaciente);
     pacientes.push(pa1);
     agregarLocalStorage('Paciente',pacientes);

    alert("Guardado");
}
function datosPacientes(){
    let text = '';
    pacientes.forEach(paci=>{
         text += `
         <tr>
         <td scope="row">${paci.IdPaciente}</td>
         <td>${paci.fullName()}</td>
         <td>${paci.FolioPaciente}</td>
         </tr>`;   
    });
    let cuerpoTablaPaciente = document.getElementById('cuerpo-tabla-pacientes');
    cuerpoTablaPaciente.innerHTML = text;
    alert("Mostrando...");
}

function guardarMedico(){
    this.Nombre = document.getElementById("NombreMed").value;
    this.ApellidoP= document.getElementById("ApellidoPMed").value;
    this.ApellidoM = document.getElementById("ApellidoMMed").value;
    this.Direccion= document.getElementById("DireccionMed").value;
    this.Cp= document.getElementById("CpMed").value;
    this.Telefono= document.getElementById("TelefonoMed").value;
    this.FechaNac= document.getElementById("FechaNacMed").value;
    this.IdMedico = generador();
    this.Cedula= document.getElementById("CedulaMed").value;
 let med= new Medico(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac, IdMedico,Cedula);
medicos.push(med);
agregarLocalStorage("Medicos",JSON.stringify(medicos));
alert("Guardado");
}

function mostrarMedico(){
    var medicosGuardados = sacarLocalStorage("Medicos");
    if(medicosGuardados){
medicos = JSON.parse(medicosGuardados);
 let text = '';
        for(let i=0;i<medicos.length;i++){
            text += `<tr>
            <td scope="row">${medicos[i].IdMedico}</td>
            <td>${medicos[i].Nombre +" "+ medicos[i].ApellidoP + " " +medicos[i].ApellidoM}</td>
            <td>${medicos[i].Telefono}</td>
            <td>${medicos[i].Cedula}</td>
            </tr>`;  
        }  
        document.getElementById('cuerpo-tabla-medicos').innerHTML = text;
    }else{
        document.getElementById('cuerpo-tabla-medicos').innerHTML = 'No hay datos guardados';
    }
    alert("Mostrando...");
    
} 









