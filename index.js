function wakeDog(dog, breed) {
    let str = `Wake ${dog} the ${breed}`;
    console.log(str)
    return str
}
function leashDog(dog, breed) {
    let str = `Leash ${dog} the ${breed}`;
    console.log(str)
    return str
}
function walkToPark(dog, breed) {
    let str = `Walk to the park with ${dog} the ${breed}`;
    console.log(str)
    return str
}
function throwFrisbee(dog, breed) {
    let str = `Throw the frisbee for ${dog} the ${breed}`;
    console.log(str)
    return str
}
function walkHome(dog, breed) {
    let str = `Walk home with ${dog} the ${breed}`;
    console.log(str)
    return str
}
function unleashDog(dog, breed) {
    let str = `Unleash ${dog} the ${breed}`;
    console.log(str)
    return str
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome,
    unleashDog]

function exerciseDog(dog, breed) {
    let val = []
    for (let i = 0; i < routine.length; i++) {
        val.push(routine[i](dog, breed))
    }
    return val
}

exerciseDog('rob', 'm')