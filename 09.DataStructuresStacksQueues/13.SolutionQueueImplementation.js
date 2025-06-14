class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first.value
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++

        return this
    }

    dequeue() {
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.length--
        return this
    }
}

const queue = new Queue()
queue.enqueue("Joy")
queue.enqueue("Matt")
queue.enqueue("Pavel")
console.log(queue)
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.dequeue())