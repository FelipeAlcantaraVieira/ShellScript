let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
let mensagem;
  for (mensagem in info){
      mensagem = 'Bem vinda, ' + info.personagem;
  }
  console.log(mensagem);