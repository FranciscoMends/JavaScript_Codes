var 
  x1,x2;
console.log('Vamos jogar?');
console.log('Digite: pedra / papel / tesoura');
x1= prompt('Primeiro jogador: ');

if (x1=='pedra'){
  x1 = 1;
}else if (x1=='papel'){
  x1 = 2;
}else if(x1=='tesoura'){
  x1 = 3;
}else{
  x1 = 4;
}

x2= prompt('Segundo jogador: ');

if (x2=='pedra'){
  x2 = 1;
}else if (x2=='papel'){
  x2 = 2;
}else if(x2=='tesoura'){
  x2 = 3;
}else{
  x2 = 5;
}

if (x1==1 && x2==2){
  console.log('Segundo jogador ganhou!');
}else if (x1==1 && x2==3){
  console.log('Primeiro jogador ganhou!');
}else if (x1==2 && x2==1){
  console.log('Primeiro jogador ganhou!');
}else if (x1==2 && x2==3){
  console.log('Segundo jogador ganhou!');
}else if (x1==3 && x2==1){
  console.log('Segundo jogador ganhou!');
}else if (x1==3 && x2==2){
  console.log('Primeiro jogador ganhou!');
}else if(x1 == x2){
  console.log('Empate!');
}else if(x1==4 && x2==5){
  console.log('Jogada Inválida!');
}
