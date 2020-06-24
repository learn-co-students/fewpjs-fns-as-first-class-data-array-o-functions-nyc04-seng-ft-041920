function wakeDog (dogName, dogBreed){
    const fnString = `Wake ${dogName} the ${dogBreed}`
    console.log(fnString)
    return fnString
}
function leashDog (dogName, dogBreed){
    const fnString = `Leash ${dogName} the ${dogBreed}`
    console.log(fnString)
    return fnString
}
function walkToPark (dogName, dogBreed){
    const fnString = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(fnString)
    return fnString
}
function throwFrisbee (dogName, dogBreed){
    const fnString = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(fnString)
    return fnString
}
function walkHome (dogName, dogBreed){
    const fnString = `Walk home with ${dogName} the ${dogBreed}`
    console.log(fnString)
    return fnString
}
function unleashDog (dogName, dogBreed){
    const fnString = `Unleash ${dogName} the ${dogBreed}`
    console.log(fnString)
    return fnString
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

const exerciseArr = [];

function exerciseDog(dogName, dogBreed){
    for (let i = 0; i < routine.length; i++){

        exerciseArr.push(routine[i](dogName, dogBreed));
    }
    return exerciseArr;
}