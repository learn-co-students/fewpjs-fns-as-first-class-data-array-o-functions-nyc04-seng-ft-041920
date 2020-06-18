let str;
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function wakeDog(a, b) {
  str = `Wake ${a} the ${b}`;
  return str
}

function leashDog(a, b) {
  str = `Leash ${a} the ${b}`;
  return str;
}

function walkToPark(a, b) {
  str = `Walk to the park with ${a} the ${b}`;
  return str;
}

function throwFrisbee(a, b) {
  str = `Throw the frisbee for ${a} the ${b}`;
  return str;
}

function walkHome(a, b) {
  str = `Walk home with ${a} the ${b}`;
  return str;
}

function unleashDog(a, b) {
  str = `Unleash ${a} the ${b}`;
  return str;
}

function exerciseDog(a, b) {
  let arr = [];
  for (let i = 0; i < routine.length; i++) {
    arr.push(routine[i](a, b));
  }
  return arr
}

exerciseDog('Nelly', 'Chihuahua');
