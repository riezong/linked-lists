import { Node } from "./node.js";

export const LinkedList = function () {
  const list = []; // represent the full list

  function append(value) {
    const newNode = new Node(value); // add a new Node
    list.push(newNode);
    console.log(newNode);
  }
  function prepend(value) {}
  function size() {}
  function head() {}
  function at(index) {}
  function pop() {}
  function contains(value) {}
  function find(value) {}
  function toString() {
    const stringList = [];
    list.forEach((item) => {
      stringList.push(item.value); // extract the value of each Node
    });
    return stringList.map((x) => `( ${x} )`).join(" -> "); // return string with formatting
  }

  // Extra credit
  // function insertAt(value, index) {}
  // function removeAt(index) {}

  return {
    list,
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
