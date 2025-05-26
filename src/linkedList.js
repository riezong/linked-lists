// import { Node } from "./node.js";

export const LinkedList = function () {
  const Node = function (value = null) {
    // inner factory...
    // value and nextNode set to null by default
    this.value = value;
    this.nextNode = null;
  };

  let firstNode = null; // create head upon initialising factory

  function append(value) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    // 2. if list is empty (head is null)
    //    new Node becomes head of list
    if (firstNode === null) {
      firstNode = newNode;
    } else {
      // 3. traverse to last Node
      //    while loop
      //    current pointer starting from firstNode
      let current = firstNode;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  function prepend(value) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    // 2. shift old head to nextNode
    newNode.nextNode = firstNode;

    // 3. replace head with new Node
    firstNode = newNode;
  }

  function size() {
    if (firstNode === null) return 0;

    let counter = 1;
    // traverse list
    let current = firstNode;
    while (current.nextNode != null) {
      counter += 1;
      current = current.nextNode;
    }

    return counter;
  }

  function head() {
    // returns the first node in the list
    return firstNode;
  }

  function tail() {
    // returns the last node in the list
    let current = firstNode;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    let lastNode = current;
    return lastNode;
  }

  function at(index) {
    if (firstNode === null) return console.log("empty list");

    // traverse list
    let current = firstNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    if (current === null) return "list isn't long enough";

    return current;
  }

  function pop() {
    // 1. get the second last Node
    let size = this.size();
    // console.log(size);
    let target = size - 2;
    // console.log(target);
    // console.log(this.at(target));

    // 2. change that Node.nextNode to null
    this.at(target).nextNode = null;
    // console.log(this.at(target));

    // 3. return new last Node
    return this.tail();
  }

  function contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.

    // traverse list
    let current = firstNode;
    while (current.nextNode != null) {
      console.log(current.value);
      if (current.value == value) return true;
      current = current.nextNode;
    }

    return false;
  }

  function find(value) {
    let counter = 0;
    // traverse list
    let current = firstNode;
    while (current.nextNode != null) {
      counter += 1;
      console.log(current.value);
      if (current.value == value) return counter - 1;
      current = current.nextNode;
    }

    return console.log("doesn't exist in list");
  }

  function toString() {
    const listString = [];
    let current = firstNode;
    listString.push(current.value); // add first value to array

    // traverse list
    while (current.nextNode != null) {
      listString.push(current.nextNode.value);
      current = current.nextNode;
    }

    listString.push(current.nextNode); // add last value (null) to array
    return listString.map((x) => `( ${x} )`).join(" -> ");
    // return firstNode;
  }

  // Extra credit
  function insertAt(value, index) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    let prev = index - 1;
    let next = at(index);
    at(prev).nextNode = newNode;
    newNode.nextNode = next;

    return newNode;
  }

  function removeAt(index) {
    let prev = index - 1;
    let next = index + 1;
    return (at(prev).nextNode = at(next));
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};
