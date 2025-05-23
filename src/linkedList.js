// import { Node } from "./node.js";

export const LinkedList = function () {
  const Node = function (value = null) {
    // inner factory...
    // value and nextNode set to null by default
    this.value = value;
    this.nextNode = null;
  };

  this.head = new Node(null); // create head upon initialising factory
  console.log(this.head);

  function append(value) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    // 2. if list is empty (head is null)
    //    new Node becomes head of list
    if (this.head.value == null) {
      console.log("empty list");
      this.head = newNode;
    } else {
      console.log("not empty list");
    }

    // 3. traverse to last Node
    //    while loop
    //    current pointer starting from this.head

    // else

    console.log(newNode);
    // Theoretically, when I add a new Node, I should loop through the existing list and link the nextNode?
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
  function toString() {}

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
