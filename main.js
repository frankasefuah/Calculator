//TODO PseudoCode:
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
    // const {target} = event 
    const value = target.value
    // const {value} = target 
    !target.matches('button') ? 0 : calculator.parseInput(value)
})

const calculator = {
    displayText: '0',
    prevTotal: null,
    parseInput(value) {
        // have any of the special buttons been clicked
        switch (value) {
            case '=':
                // calculate the answer
                break
            case 'C':
                // clear screen and stored values
                break
            case '.':
                if (this.displayText === 0) {
                    // pass 0. into the add text method
                } else {
                    // add the decimal
                }
                break
            default:
                // add value to text string
                break
        }

    },
    addText(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        } else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }

        if (/*user has entered an invalid sequence dont proceed*/) {

        }
        this.displayText += value
        // output display to screen
    },
}