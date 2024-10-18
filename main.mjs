import LinkedList from "./LinkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.append("snake");
list.prepend("turtle");

console.log(list.toString());
console.log(list.removeAt(1));
console.log(list.toString());
// expected output
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
