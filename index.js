function wakeDog(dogName, dogBreed){
    let text = `Wake ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function leashDog(dogName, dogBreed){
    let text = `Leash ${dogName} the ${dogBreed}`
    console.log(text)
    return text 
}

function walkToPark(dogName, dogBreed){
    let text = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function throwFrisbee(dogName, dogBreed){
    let text = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function walkHome(dogName, dogBreed){
    let text = `Walk home with ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

function unleashDog(dogName, dogBreed){
    let text = `Unleash ${dogName} the ${dogBreed}`
    console.log(text)
    return text
}

let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed){
    // If anyone is reading this, this test fucking sucks, you should be more
    // Descriptive in how the test itself is made. Shucking people into a situation
    // without answers is fine, shucking them without any idea as to what the goal
    // is, is fucking dumb and lazy. 

    return routine.map(function (x){
        return x(dogName, dogBreed)
    });
}

