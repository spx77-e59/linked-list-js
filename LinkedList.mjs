import Node from "./Node.mjs";

export default class LinkedList {
  constructor() {
    this.headNode = new Node();
  }

  append(value) {
    let node = this.headNode;
    const newNode = new Node(value);

    while (node.nextNode) {
      node = node.nextNode;
    }

    node.nextNode = newNode;

    return newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.headNode.nextNode;
    this.headNode.nextNode = newNode;

    return newNode;
  }

  size() {
    let size = 0;
    let node = this.headNode.nextNode;

    while (node) {
      size += 1;
      node = node.nextNode;
    }

    return size;
  }

  head() {
    return this.headNode.nextNode;
  }

  tail() {
    let node = this.headNode;

    while (node.nextNode) {
      node = node.nextNode;
    }

    return node;
  }

  at(index) {
    let size = 0;
    let node = this.headNode.nextNode;

    while (node) {
      if (size === index) {
        return node;
      }

      size += 1;
      node = node.nextNode;
    }

    return undefined;
  }

  pop() {
    if (this.headNode.nextNode === null) {
      return undefined;
    }

    let node = this.headNode;
    let prevNode = null;

    while (node.nextNode) {
      prevNode = node;
      node = node.nextNode;
    }

    if (prevNode) {
      prevNode.nextNode = null;
    }

    return node;
  }

  contains(value) {
    let node = this.headNode;

    while (node) {
      if (node.value === value) {
        return true;
      }

      node = node.nextNode;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let node = this.headNode.nextNode;

    while (node) {
      if (node.value === value) {
        return index;
      }

      index += 1;
      node = node.nextNode;
    }

    return undefined;
  }

  toString() {
    let node = this.headNode.nextNode;
    const parts = [];

    if (!node) {
      return "()";
    }

    while (node) {
      parts.push(`(${node.value})`);
      node = node.nextNode;
    }

    return parts.join(" ->");
  }

  insertAt(value, index) {
    if (index < 0) {
      return undefined;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.headNode.nextNode;
      this.headNode.nextNode = newNode;
      return true;
    }

    let length = 0;
    let node = this.headNode;

    while (node) {
      if (length === index) {
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
        return;
      }

      length += 1;
      node = node.nextNode;
    }

    return undefined;
  }

  removeAt(index) {
    if (index < 0) {
      return undefined;
    }

    let length = 0;
    let prevNode = this.headNode;
    let node = this.headNode.nextNode;

    while (node) {
      if (length === index) {
        prevNode.nextNode = node.nextNode;
        node.nextNode = null;
        return node;
      }

      length += 1;
      prevNode = node;
      node = node.nextNode;
    }

    return undefined;
  }
}
