class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.bottom = newNode
            this.top = newNode
        } else {
            const holdingPoniter = this.top
            this.top = newNode
            this.top.next = holdingPoniter
        }
        this.length++
        return this
    }

    pop() {
        if (!this.top) {
            return null
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }
        // const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        return this
    }
}

const stack = new Stack()
//console.log(stack)
stack.push("Google")
stack.push("Twitter")
//console.log(stack)
stack.push("Facebook")
console.dir(stack.push("Gmail"), { depth: null, color: true })
console.dir(stack.pop(), { depth: null, color: true })
console.dir(stack.pop(), { depth: null, color: true })
console.dir(stack.pop(), { depth: null, color: true })
console.dir(stack.pop(), { depth: null, color: true })