// PseudoCode
// accept user input
// should accept decimals
// store input from user
// recognise input and perform calculations
// result
// C should clear the screen
// store previous total as start of next operations
// prevent invalid inputs (operators next to each other , two decimals next to each other)

const keys = document.querySelector('.calculator-btns')
// Create a var that holds a parent of keys
keys.addEventListener('click', event => {
    const target = event.target
    const value = target.value
    !target.matches('button') ? 0 : console.log(value)
})