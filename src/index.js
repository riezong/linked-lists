import "./styles.css";
import { LinkedList } from "./linkedList.js";
// import { Node } from "./node.js";

const list = new LinkedList();
console.log(list.size());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("before dog");
list.append("after turtle");
console.log(list.toString());

console.log(list.head());
console.log(list.tail());

console.log(list.size());
console.log(list.at(7));

console.log(list.pop());
