console.log('Hello World!\n==========\n')

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n')

function printOdds(count) {
  if (count == 0 || isNaN(count)) {
    console.log(`Please enter a positive integer to count to.`)
  }

  if (count < 0) {
    count *= -1
  }

  for (let i = 1; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i)
    }
  }
}

// Exercise 2 Section
console.log('EXERCISE 2:\n==========\n')

function checkAge(name = 'Joe', age = 31) {
  let aboveSixteen = `You can drive, ${name}!`
  let belowSixteen = `Sorry, ${name}, but you need to wait until you're 16.`

  if (age >= 16) {
    console.log(aboveSixteen)
  } else {
    console.log(belowSixteen)
  }
}
