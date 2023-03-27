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
                    addText('0.')
                } else {
                    addText(value)
                }
                break
            default:
                addText(value)
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

        if (isNaN(+(value)) && isNaN(+(this.displayText))) {
            if (isNaN(this.displayText.slice(-1))) {
                return
            }
        }
        this.displayText += value
        outputText(this.displayText)
    },
    outputText(text) {
        document.querySelector('#cal-screen').value = text
    }
}