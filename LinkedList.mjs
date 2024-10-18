import Node from "./Node.mjs";

export default class LinkedList {
  constructor() {
    this.headNode = new Node("Head");
  }

  append(value) {
    let isEnd = false;
    let node = this.headNode;
    const newNode = new Node(value);
    while (!isEnd) {
      if (node.nextNode === null) {
        node.nextNode = newNode;
        isEnd = true;
      }
      node = node.nextNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.headNode.nextNode === null) {
      this.headNode.nextNode = newNode;
    }
    let temp = this.headNode.nextNode;
    newNode.nextNode = temp;
    this.headNode.nextNode = newNode;
  }

  size() {
    let isEnd = false;
    let length = 0;
    let node = this.headNode.nextNode;
    while (!isEnd) {
      length += 1;
      if (node.nextNode === null) {
        isEnd = true;
      }
      node = node.nextNode;
    }
    return length;
  }

  head() {
    return this.headNode.nextNode;
  }

  tail() {
    let isEnd = false;
    let node = this.headNode;
    while (!isEnd) {
      if (node.nextNode === null) {
        isEnd = true;
        break;
      }
      node = node.nextNode;
    }
    return node;
  }

  at(index) {
    let isEnd = false;
    let length = 0;
    if (this.headNode.nextNode === 0) {
      return undefined;
    }
    let node = this.headNode.nextNode;
    while (!isEnd) {
      if (length === index) {
        isEnd = true;
        break;
      }
      if (!node.nextNode) {
        return undefined;
      }
      length += 1;
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    let isEnd = false;
    let node = this.headNode;
    let prevNode = null;
    while (!isEnd) {
      if (node.nextNode === null) {
        isEnd = true;
        prevNode.nextNode = null;
        break;
      }
      prevNode = node;
      node = node.nextNode;
    }
    return node;
  }

  contains(value) {
    let doesContain = false;
    let node = this.headNode;
    while (!doesContain) {
      if (node.value === value) {
        doesContain = true;
        return doesContain;
      }
      if (node.nextNode === null) {
        return false;
      }
      node = node.nextNode;
    }
  }

  find(value) {
    let isFound = false;
    let index = 0;
    let node = this.headNode.nextNode;
    while (!isFound) {
      if (node.value === value) {
        isFound = true;
        return index;
      }
      if (node.nextNode === null) {
        return undefined;
      }
      index += 1;
      node = node.nextNode;
    }
  }

  toString() {
    let node = this.headNode.nextNode;
    if (!node) {
      return null;
    }
    let string = "(" + node.value + ")";
    while (node.nextNode) {
      node = node.nextNode;
      string += " -> (" + node.value + ")";
    }
    string += " -> " + null;
    return string;
  }

  insertAt(value, index) {
    if (index < 0) {
      return undefined;
    }

    let length = 0;
    let node = this.headNode;
    let newNode = new Node(value);
    let isEnd = false;
    while (!isEnd) {
      if (length === index) {
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
        return;
      }

      length += 1;
      node = node.nextNode;
      if (!node.nextNode) {
        isEnd = true;
        if (index === length) {
          newNode.nextNode = null;
          node.nextNode = newNode;
          return;
        }
      }
    }
  }

  removeAt(index) {
    if (index < 0) {
      return undefined;
    }
    let length = 0;
    let prevNode = this.headNode;
    let node = this.headNode.nextNode;
    let isEnd = false;
    while (!isEnd) {
      if (length === index) {
        let temp = node.nextNode;
        prevNode.nextNode = temp;
        node.nextNode = null;
        return;
      }

      length += 1;
      prevNode = node;
      node = node.nextNode;
      if (!node.nextNode) {
        isEnd = true;
        if (index === length) {
          let temp = node.nextNode;
          prevNode.nextNode = temp;
          node.nextNode = null;
          return;
        }
      }
    }
  }
}
