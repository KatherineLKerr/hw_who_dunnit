//EPISODE 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//expected output: `The murderer is Miss Scarlet`
//because verdict calls declareMurderer, which will output "The murderer is Miss Scarlet"
//none of the const variables are being re-declared, so there shouldn't be any errors.

//EPISODE 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//expected output: error
//because declareMurderer is trying to change the const variable murderer.

//EPISODE 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//expected output: First Verdict: The murderer is Mrs. Peacock.
//                 Second Verdict: The murderer is Professor Plum.
//because firstVerdict will return declareMurderer, which changes murderer to "Mrs. Peacock", but
//then first verdict will return Professor Plum since `let murderer = Mrs. Peacock` is scoped to
//the block of code it is in.

//EPISODE 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//expected output: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//                 Suspect three is Mrs. Peacock.
//because the three suspects can be seen from inside the function, and no const variables are being
//changed so there shouldn't be any errors

//EPISODE 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//expected output: The weapon is the Revolver.
//because no const variable is being changed, only a value inside the variable, which is allowed.

//EPISODE 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//expected output: The muderer is Mrs White
//because a let is being changed, not a const so there should be no errors, it
//should go with the last declared murderer who is Mrs. White

//EPISODE 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//expected output: The murderer is Mr. Green
//because when change murderer is called, it uses a global variable, so that is what is used in declareMurderer

//EPISODE 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//expected outcome: The weapon is Candle Stick
//because changeScenario is called which calls unexpectedOutcome, since the room is dining room
//that means the if is true so the murderer changes. Then plotTwist evaluates to true, so the weapon
//changes to Candle Stick.

//EPISODE 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//expected outcome: The murderer is Mrs. Peacock
//the if evaluates to true, but let only changes the murderer inside the block of code, so
//when declare murderer is called, it uses Professor Plum as the murderer
