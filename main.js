// Nullish coalescing operator

const div = document.getElementById('app')
div.innerText = 'OLAAA'

const idade = 0;

// document.body.innerText = 'Sua idade é: ' + (idade ?? 'nao informado')

const user = {
  name: 'rodolfo',
  idade: 30,
  adress: {
    street: 'Rua teste',
    number: 176
  }
}

console.log( Object.entries(user))

div.innerText = Object.entries(user)
