export const LinkedList = function () {
  // represent the full list
  const list = [];

  function append(value) {
    list.push(value);
  }
  function prepend(value) {}
  function size() {}
  function head() {}
  function at(index) {}
  function pop() {}
  function contains(value) {}
  function find(value) {}
  function toString() {
    return list.map((x) => `( ${x} )`).join(" -> ");
  }

  // Extra credit
  function insertAt(value, index) {}
  function removeAt(index) {}

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
