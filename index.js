const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const specialStrings = [
  'OO',
  'API',
  'NaN',
  'stopPropagation',
  'preventDefault',
  'JSONP'
];

const titleCased = () => {
  return tutorials.map(function(tutorial) {
    let tutArray = tutorial.split(" ");
    for (let i = 0; i < tutArray.length; i++) {
      if (!specialStrings.includes(tutArray[i])) {
        tutArray[i].toLowerCase();
        tutArray[i] = tutArray[i].charAt(0).toUpperCase() + tutArray[i].slice(1);
      } else if (tutArray[i] === 'stopPropagation' || tutArray[i] === 'preventDefault') {
        tutArray[i] = tutArray[i].charAt(0).toUpperCase() + tutArray[i].slice(1);
      }
    }
    return tutArray.join(' ')
  })
}
