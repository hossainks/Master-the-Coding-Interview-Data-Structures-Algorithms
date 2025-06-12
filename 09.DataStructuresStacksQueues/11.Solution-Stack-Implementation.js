
class Stack {
    constructor() {
        this.array = []
    }
    peek() {
      return this.array[this.array.length -1]
    }
    push(value) {
        this.array.push(value)
    }

    pop() {
        if(this.array.length === 0) return "No Data Found"
        this.array.pop()
    }
}

const stack = new Stack()
console.log(stack)
stack.push("Google")
stack.push("Twitter")
stack.push("Facebook")
stack.push("Gmail")
console.log(stack)
console.log(stack.peek())
stack.pop()
console.log(stack.pop())
stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop())