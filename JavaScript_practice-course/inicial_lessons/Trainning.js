//declarando variáveis
//typeof 'variável' (para saber qual o tipo)
// tipo number
var n1 = 5
var n2 = -13
var n3 = 9.32 
    //Infinity - Nan

// tipo string 
var s1 = 'Mendes' 
var s2 = "Mendes" 
var s3 = `Mendes` 

// tipo boolean
var b1 = true 
var b2 = false

// tipo null

// tipo underfined

// tipo object 
    //array

//function
//-----------------------------------------------------------------------
var value = window.prompt('Insira um valor: ')
// Salva em string
Number //ele detecta qual classe numérica
Number.parseInt(value) //inteiro
Number.parseFloat(value) //real
// Transforma para número

//window.alert('O valor é: ' + value + '!') //notificação
//or                             // + significa concatenar
window.alert(`O valor é: <strong>${value}</strong>!`) //notificação
                       //<strong> significa deixar em negrito
//-----------------------------------------------------------------------
var n1 = 6.543423454
n1.toFixed(1) // = 6.5
n1.toFixed(2) // = 6.54
n1.toFixed(2).replace('.',',') // = 6,54

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
//  R$ 6,65
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
//  UDS 6,65
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
//  € 6,65
//-----------------------------------------------------------------------
