class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  createNode(value) {
    return { value, next: null };
  }

  append(value) {
    const newNode = this.createNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = this.createNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    const nodesValue = [];
    while (currentNode !== null) {
      nodesValue.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodesValue;
  }

  insert(index, value) {
    if (index >= this.length) {
      return append(value);
    }
    const newNode = this.createNode(value);
    const leader = this.traverseToIndex(index);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    this.printList();
  }

  remove(index) {
    // [25, 10, 63, 5, 16];
    const leader = this.traverseToIndex(index);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index - 1) {
      // Stop at predecessor
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode; // Returns the leader
  }
  /*   insert(index, value) {
    let currentNode = this.head;
    let counter = 0;
    const data = [];
    // [ 25, 10, 5, 16 ]
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value !== undefined) {
        if (counter === index - 1) {
          const newNode = this.createNode(value);
          const holdingNode = currentNode.next;
          newNode.next = holdingNode;
          currentNode.next = newNode;
          this.length++;
          break;
        }

        data.push(currentNode.value);
        currentNode = currentNode.next;
        counter++;
      }
    }
    return { data, counter };
  } */
}
let myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(25);
console.dir(myLinkedList, { depth: null, color: true });
console.log('====================');
console.log(myLinkedList.insert(2, 63));
console.dir(myLinkedList.printList());
console.log('====================');
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(2));
