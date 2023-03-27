//TODO PseudoCode:
// accept user input - done
// should accept decimals - done
// store input from user - done
// recognise input and perform calculations - done
// result - done
// C should clear the screen - done
// store previous total as start of next operations - done
// prevent invalid inputs (operators next to each other , two decimals next to each other) - done

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
                this.calcAnswer(this.displayText)
                break
            case 'C':
                this.clearAll()
                break
            case '.':
                if (this.displayText === 0) {
                    this.addText('0.')
                } else {
                    this.addText(value)
                }
                break
            default:
                this.addText(value)
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
        this.outputText(this.displayText)
    },
    outputText(text) {
        document.querySelector('#cal-screen').value = text
    },
    calcAnswer(equation) {
        // console.log(eval(equation)) This is the simple way to do it
        let result = Function('return ' + equation)()
        this.outputText(result)
    },
    clearAll() {
        this.displayText = '0'
        this.prevTotal = null
        this.outputText(this.displayText)
    }
}