document.getElementById("BotaoEnviar").addEventListener("click",ValidaFormulario)

function ValidaFormulario(){
  if(document.getElementById("Nome").value != "" && document.getElementById("Email").value != "" && document.getElementById("Telefone").value != "" ){
      alert("Prontinho! Você receberá nossas novidades! :D")
  }else{
      alert("Ops, você precisa preencher os campos!")
  }
}