import './modules'

var prompts = {
  "features": {
    "easy": [
      "a user profile view",
      "a modal confirmation dialog",
      "a login and create account view"
    ],
    "medium": [
      "a dashboard",
      "a discovery feed",
      "a full login process"
    ],
    "hard": [
      "a multi-user dashboard",
      "a scheduling feature",
      "an onboarding process",
      "the homepage of a marketing site"
    ]
  },
  "useCases": {
    "easy": [
      "a todo app",
      "a professional networking site",
      "a book discovery app",
      "a live show recommendations app",
      "a dating app"
    ],
    "medium": [
      "a smart home watering system",
      "a wine tracking app",
      "a pet care app",
      "a caltrain dating app"
    ],
    "hard": [
      "a flight management app",
      "a small business management platform",
      "a learning management system",
      "a content management system",
      "a dating app that matches based on compatible allergies"
    ]
  },
  "audiences": {
    "easy": [
      "kids",
      "families",
      "early adopters",
      "college students"
    ],
    "medium": [
      "working professionals",
      "professional bloggers",
      "landscape architects",
      "professional clowns",
      "concert goers",
      "social media managers"
    ],
    "hard": [
      "astronauts on the ISS",
      "accountants during tax season",
      "political campaign managers",
      "geologists in the field",
      "families on vacation",
      "fortune 100 CEOs"
    ]
  },
  "devices": {
    "easy": [
      "desktops",
      "tablets",
      "mobile phones"
    ],
    "medium": [
      "the latest iPhones",
      "the latest Android phones",
      "mobile, tablet, and desktop"
    ],
    "hard": [
      "smart watches",
      "smart TVs",
      "virtual reality headsets",
      "augmented reality glasses",
      "autonomous car dashboard interfaces"
    ]
  },
  "needs": {
    "easy": [
      "to save time",
      "to save money",
      "to be efficient"
    ],
    "medium": [
      "to be more green",
      "to get promoted",
      "to impress their friends"
    ],
    "hard": [
      "to appear busy at work while actually checking facebook",
      "to go on a vacation",
      "to find inner peace"
    ]
  }
}

$(document).ready( function() {

  $('.trigger-roll').click( function( data ) {
    var difficulty = $(this).data('difficulty');
    roll(difficulty);
  });

  // Local storage example with Jsonified variables
  // var car = {};
  // car.wheels = 4;
  // car.doors = 2;
  // car.sound = 'vroom';
  // car.name = 'Lightning McQueen';
  // console.log( car );
  // localStorage.setItem( 'car', JSON.stringify(car) );
  // console.log( JSON.parse( localStorage.getItem( 'car' ) ) );

});

/*
** This assumes any option that already exists in a select dropdown is fair game.
**
function roll() {
  var prompts = $('.prompt-selection').toArray();

  // Set a random non-first option in each dropdown
  $(prompts).each( function( index, prompt ) {
    var options      = $(prompt).find('option'),
        randomOption = Math.floor( Math.random() * (options.length-1) ) + 1;

    options.selected = false;
    options[randomOption].selected = true;
  });
}
*/

function roll( difficulty ) {
  var features = [],
      useCases = [],
      audiences = [],
      devices = [],
      needs = [];
  var randomFeature,
      randomUseCase,
      randomAudience,
      randomDevice,
      randomNeed;

  // Get all data from the json
  var featuresEasy = prompts.features.easy;
  var featuresMed = prompts.features.medium;
  var featuresHard = prompts.features.hard;
  var useCasesEasy = prompts.useCases.easy;
  var useCasesMed = prompts.useCases.medium;
  var useCasesHard = prompts.useCases.hard;
  var audiencesEasy = prompts.audiences.easy;
  var audiencesMed = prompts.audiences.medium;
  var audiencesHard = prompts.audiences.hard;
  var devicesEasy = prompts.devices.easy;
  var devicesMed = prompts.devices.medium;
  var devicesHard = prompts.devices.hard;
  var needsEasy = prompts.needs.easy;
  var needsMed = prompts.needs.medium;
  var needsHard = prompts.needs.hard;

  if( difficulty == "easy" ) {
    // make an array containing all easy features
    features.push.apply(features, featuresEasy);
    // make an array containing all easy useCases
    useCases.push.apply(useCases, useCasesEasy);
    // make an array containing all easy audiences
    audiences.push.apply(audiences, audiencesEasy);
    // make an array containing all easy devices
    devices.push.apply(devices, devicesEasy);
    // make an array containing all easy needs
    needs.push.apply(needs, needsEasy);
  } else if ( difficulty == "medium" ) {
    // make an array containing all easy and medium features
    features.push.apply(features, featuresEasy);
    features.push.apply(features, featuresMed);
    // make an array containing all easy and medium useCases
    useCases.push.apply(useCases, useCasesEasy);
    useCases.push.apply(useCases, useCasesMed);
    // make an array containing all easy and medium audiences
    audiences.push.apply(audiences, audiencesEasy);
    audiences.push.apply(audiences, audiencesMed);
    // make an array containing all easy and medium devices
    devices.push.apply(devices, devicesEasy);
    devices.push.apply(devices, devicesMed);
    // make an array containing all easy and medium needs
    needs.push.apply(needs, needsEasy);
    needs.push.apply(needs, needsMed);
  } else if ( difficulty == "hard" ) {
    // make an array containing all easy, medium, and hard features
    features.push.apply(features, featuresEasy);
    features.push.apply(features, featuresMed);
    features.push.apply(features, featuresHard);
    // make an array containing all easy, medium, and hard useCases
    useCases.push.apply(useCases, useCasesEasy);
    useCases.push.apply(useCases, useCasesMed);
    useCases.push.apply(useCases, useCasesHard);
    // make an array containing all easy, medium, and hard audiences
    audiences.push.apply(audiences, audiencesEasy);
    audiences.push.apply(audiences, audiencesMed);
    audiences.push.apply(audiences, audiencesHard);
    // make an array containing all easy, medium, and hard devices
    devices.push.apply(devices, devicesEasy);
    devices.push.apply(devices, devicesMed);
    devices.push.apply(devices, devicesHard);
    // make an array containing all easy, medium, and hard needs
    needs.push.apply(needs, needsEasy);
    needs.push.apply(needs, needsMed);
    needs.push.apply(needs, needsHard);
  }

  // Select a random item from the array
  randomFeature = features[Math.floor(Math.random() * features.length)];
  randomUseCase = useCases[Math.floor(Math.random() * useCases.length)];
  randomAudience = audiences[Math.floor(Math.random() * audiences.length)];
  randomDevice = devices[Math.floor(Math.random() * devices.length)];
  randomNeed = needs[Math.floor(Math.random() * needs.length)];

  // Inject the random item into the DOM
  $('#feature').text(randomFeature);
  $('#useCase').text(randomUseCase);
  $('#audience').text(randomAudience);
  $('#device').text(randomDevice);
  $('#need').text(randomNeed);

  // start a timer...
}
