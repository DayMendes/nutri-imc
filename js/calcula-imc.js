
document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length ; i++){
  var paciente = pacientes[i];
  var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente);
console.log(tdpeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);

console.log(imc);

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = validaPeso(peso);
var alturaValida = validaAltura(altura);

if(!pesoValido){
  console.log("Peso Inválido");
  pesoValido = false;
  tdImc.textContent = "Peso inválido";
  paciente.classList.add("paciente-invalido");
}

if(!alturaValida){
  console.log("Altura Inválido");
  alturaValida = false;
  tdImc.textContent = "Altura inválido";
  paciente.classList.add("paciente-invalido");

}

if (pesoValido && alturaValida){

  var imc = calculaImc(peso,altura);
  tdImc.textContent = imc;

}else{
  tdImc.textContent ="Altura e/ou peso inválidos!";
}

}

function validaPeso(peso){
  if(peso >= 0 && peso <= 1000 ){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.00 ){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso,altura){
  var imc = 0;

  imc = peso / (altura*altura);
  return imc.toFixed(2);

}