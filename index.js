let string;
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function wakeDog(name, breed) {
    string = `Wake ${name} the ${breed}`;
     return string
}

function leashDog(name, breed) {
    string = `Leash ${name} the ${breed}`;
    return string
}

function walkToPark(name, breed) {
    string = `Walk to the park with ${name} the ${breed}`;
    return string
}

function throwFrisbee(name, breed) {
    string = `Throw the frisbee for ${name} the ${breed}`;
    return string
}

function walkHome(name, breed) {
    string = `Walk home with ${name} the ${breed}`;
    return string
}

function unleashDog(name, breed) {
    string = `Unleash ${name} the ${breed}`;
    return string
}

function exerciseDog(name, breed) {
    let array = [];
    for (let i = 0; i < routine.length; i++) {
        array.push(routine[i](name, breed));
    }
    return array 
}

exerciseDog('Simba', 'Pitbull');




