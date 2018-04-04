const capitalize = word => {
  const chars = word.split('')
  return chars
    .map((char, i) => {
      if (i === 0) {
        return char.toUpperCase() // upcase
      } else {
        return char.toLowerCase() // downcase
      }
    })
    .join('')
}

const titlecase = str => {
  // take first letter of each word and uppercase
  const words = str.split(' ')

  return words
    .map((word, i) => {
      // if 1st or last, cap
      if (i === 0 || i === words.length - 1) {
        // cap
        return capitalize(word)
      } else {
        // determine if it needs cap
        return ''
      }
      // some words need to be all lowercase
      // make sure all other letters in words are lowercase
    })
    .join(' ')
}

module.exports = titlecase
