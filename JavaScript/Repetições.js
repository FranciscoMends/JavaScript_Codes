// >>> WHILE
//while (expressões){    <<< ENQUANTO
//  <instruções>
//}*
//--------------------------------------
var i=0;
var n= Number(prompt('Digite um número: '));
while (i<n){
  ++i;
  console.log(i);
}
//--------------------------------------
// >>> DO/WHILE
//do{
//  <instuções>
//}while(<expressão>);
//--------------------------------------
var y=0;
var x= Number(prompt('Digite um número: '));
do{
  ++y;
  console.log(y);
}while(y<x);
//--------------------------------------
// >>> FOR
//for(inicialização; teste; incremento){     <<< ATÉ
//  <instruções>
//}
//--------------------------------------
var b=1;
for(var a= Number(prompt('Digite um número: ')); a>=b; ++b){
  console.log(b);
}
//--------------------------------------
// >>> FOR/IN
//for(variável in objeto){
//  <instruções>
//}
//--------------------------------------
var nomes= ['Mendes', 'Matheus', 'Moisés', 'Miguel'];
for(var i in nomes){
  console.log('Olá! '+nomes[i])
}
//--------------------------------------
