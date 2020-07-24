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

// const titleCased = (tutorials) => {
//   return tutorials.map( line => {
//     let words = line.split(" ")
//     let titleWords = words.map( word => word.charAt(0).toUpperCase() + word.slice(1))
//     let result = titleWords.join(" ")
//     return result
//   })
// }

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}


// https://www.tutorialspoint.com/how-to-title-case-a-sentence-in-javascript

// titleCased(tutorials)

// We want all the titles to be "title case"
// For example, `what does the this keyword mean?` should become `What Does The This Keyword Mean?`.
