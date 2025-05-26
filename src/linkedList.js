// import { Node } from "./node.js";

export const LinkedList = function () {
  const Node = function (value = null) {
    // inner factory...
    // value and nextNode set to null by default
    this.value = value;
    this.nextNode = null;
  };

  let firstNode = null; // create head upon initialising factory
  console.log(typeof firstNode);

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
    console.log(typeof firstNode);
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
  function at(index) {}
  function pop() {}
  function contains(value) {}
  function find(value) {}
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
  // function insertAt(value, index) {}
  // function removeAt(index) {}

  return {
    append,
    prepend,
    size,
    head,
    at,
    pop,
    contains,
    find,
    toString,
  };
};
