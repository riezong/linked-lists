// import { Node } from "./node.js";

export const LinkedList = function () {
  const Node = function (value = null) {
    // inner factory...
    // value and nextNode set to null by default
    this.value = value;
    this.nextNode = null;
  };

  this.head = null; // create head upon initialising factory

  function append(value) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    // 2. if list is empty (head is null)
    //    new Node becomes head of list
    if (this.head.value == null) {
      this.head = newNode;
    } else {
      // 3. traverse to last Node
      //    while loop
      //    current pointer starting from this.head
      let current = this.head;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  function prepend(value) {}
  function size() {}
  function head() {
    // returns the first node in the list
  }
  function at(index) {}
  function pop() {}
  function contains(value) {}
  function find(value) {}
  function toString() {
    const listString = [];
    let current = this.head;
    listString.push(current.value); // add first value to array
    while (current.nextNode != null) {
      listString.push(current.nextNode.value);
      current = current.nextNode;
    }
    listString.push(current.nextNode); // add last value (null) to array
    return listString.map((x) => `( ${x} )`).join(" -> ");
    // return this.head;
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
