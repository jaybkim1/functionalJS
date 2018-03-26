var animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog'},
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'}
]

// Original For loop Map
// var names = []
// for(var i = 0; i < animals.length; i++){
//     names.push(animals[i].name)
// }

// Functional
// var names = animals.map(function (animal) {
//     return animal.name
// })

// Arrow Function : Shorter
var names = animals.map((animal) => animal.name)



console.log(names)