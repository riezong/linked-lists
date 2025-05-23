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
      // console.log("empty list");
      this.head = newNode;
      // console.log(this.head);
    } else {
      // 3. traverse to last Node
      //    while loop
      //    current pointer starting from this.head
      let current = this.head;
      while (current.nextNode != null) {
        current = current.nextNode;
        // console.log(current);
      }
      // console.log("not empty list");
      // console.log(this.head.nextNode);
      current.nextNode = newNode;
      // console.log(this.head);
      // console.log(current);
    }
  }

  function prepend(value) {}
  function size() {}
  function head(value) {
    // returns the first node in the list
  }
  function at(index) {}
  function pop() {}
  function contains(value) {}
  function find(value) {}
  function toString() {
    return this.head;
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
