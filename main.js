var pacientes = [];
var medicos = [];
datosPacientes();
function guardarPaciente() {
    this.Nombre = document.getElementById("Nombre").value;
    this.ApellidoP = document.getElementById("ApellidoP").value;
    this.ApellidoM = document.getElementById("ApellidoM").value;
    this.Direccion = document.getElementById("Direccion").value;
    this.Cp = document.getElementById("Cp").value;
    this.Telefono = document.getElementById("Telefono").value;
    this.FechaNac = document.getElementById("FechaNac").value;
    this.FolioPaciente = document.getElementById("FolioPaciente").value;
    let pa1 = new Paciente( Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono, FechaNac, FolioPaciente);
    pacientes.push(pa1);
    agregarLocalStorage('Paciente', pacientes);
    alert("Guardado");
    datosPacientes()
}
function datosPacientes() {
    var mostrarPaciente = getUsersFromLocalStorage();
    if (mostrarPaciente) {
        pacientes = mostrarPaciente;
        let text = '';
        for (let i = 0; i < pacientes.length; i++) {
            text += `
         <tr>
         <td scope="row">${pacientes[i].IdPaciente}</td>
         <td>${pacientes[i].Nombre + " " + pacientes[i].ApellidoP + " " + pacientes[i].ApellidoM}</td>
         <td>${pacientes[i].FolioPaciente}</td>
         </tr>`;
        }
        document.getElementById('cuerpo-tabla-pacientes').innerHTML = text;
    } else {
        document.getElementById('cuerpo-tabla-pacientes').innerHTML = 'No hay datos guardados';
    }


}

function guardarMedico() {
    this.Nombre = document.getElementById("NombreMed").value;
    this.ApellidoP = document.getElementById("ApellidoPMed").value;
    this.ApellidoM = document.getElementById("ApellidoMMed").value;
    this.Direccion = document.getElementById("DireccionMed").value;
    this.Cp = document.getElementById("CpMed").value;
    this.Telefono = document.getElementById("TelefonoMed").value;
    this.FechaNac = document.getElementById("FechaNacMed").value;
    this.IdMedico = generador();
    this.Cedula = document.getElementById("CedulaMed").value;
    let med = new Medico(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono, FechaNac, IdMedico, Cedula);
    medicos.push(med);
    agregarLocalStorage("Medicos", medicos);
    alert("Guardado");
    mostrarMedico();
}

function mostrarMedico() {
    var medicosGuardados = sacarLocalStorage("Medicos");
    if (medicosGuardados) {
        medicos = JSON.parse(medicosGuardados);
        let text = '';
        for (let i = 0; i < medicos.length; i++) {
            text += `<tr>
            <td scope="row">${medicos[i].IdMedico}</td>
            <td>${medicos[i].Nombre + " " + medicos[i].ApellidoP + " " + medicos[i].ApellidoM}</td>
            <td>${medicos[i].Telefono}</td>
            <td>${medicos[i].Cedula}</td>
            </tr>`;
        }
        document.getElementById('cuerpo-tabla-medicos').innerHTML = text;
    } else {
        document.getElementById('cuerpo-tabla-medicos').innerHTML = 'No hay datos guardados';
    }
}

var consulta = [];
function asignarPaciente() {
    this.NombrePaciente = document.getElementById("NombrePaciente").value;
    return this.NombrePaciente;
}

function asignarMedico() {
    this.MedicoT = document.getElementById("MedicoTurno").value;
    return this.MedicoT;
}

function agregarConsulta() {
    let Folio = document.getElementById("FolioPacienteC").value;
    let MedicinaR = document.getElementById("MedicinaR").value;
    let Diagnostico = document.getElementById("Diagnostico").value;
    let Sintomas = document.getElementById("Sintomas").value;

    // ENCONTRAR AL PACIENTE
    let result = pacientes.findIndex(({ FolioPaciente }) => FolioPaciente === Folio);
    if(result > -1){
        
        let con = new Consulta(asignarPaciente(), Folio, asignarMedico(), MedicinaR, Sintomas, Diagnostico);
        consulta.push(con);
        agregarLocalStorage("Consulta",consulta);

        let paciente = pacientes.find(({ FolioPaciente }) => FolioPaciente === Folio);

        pacientes[result].agregarConsulta(consulta);
        paciente.agregarConsulta(consulta);
        
        alert("Consulta Agregada");
    }else{
        alert('No se encontrol al paciente');
    }
}

function mostrarConsultas() {
    var consultasGuardadas = sacarLocalStorage("Consulta");
    if (consultasGuardadas) {
        consulta = JSON.parse(consultasGuardadas);
        let resultado = '';
        for (let i = 0; i < consulta.length; i++) {
            resultado += `<tr>
      <td scope="row">${consulta[i].NombrePaciente}</td>
      <td>${consulta[i].FolioPaciente}</td>
      <td>${consulta[i].MedicoT}</td>
      <td>${consulta[i].MedicinaR}</td>
      <td>${consulta[i].Sintomas}</td>
      <td>${consulta[i].Diagnostico}</td>
      </tr>`
        }
        document.getElementById('cuerpo-tabla-consultas').innerHTML = resultado;
    } else {
        document.getElementById('cuerpo-tabla-consultas').innerHTML = 'No hay consultas guardadas.';
    }
    alert("Mostrando");
}