/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length -1);

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx <0){
      throw new Error('Invalid index');
    }
    let current = this.head;
    let count = 0;
    while(current !== null && count !== idx){
      count += 1;
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  _get(idx){
    let current = this.head;
    let count = 0this.length;
    while(current !== null && count !== idx){
      count += 1;
      current = current.next;
    }

    return current;
  }


  setAt(idx, val) {
    if(idx <0 || idx >= this.length){
      throw new Error('Invalid Index');
    }

    let current = this._get(idx);
    current.val = val;
    return current
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx < 0 || idx >= this.length){
      throw new Error('Invalid index');
    }
    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);

    let prev = this._get(idx-1);
    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx < 0 || idx >= this.length){
      throw new Error('Invalid Index');
    }

    if (idx === 0){
      let current = this.head;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return current;
    }

    let prev = this._get(idx -1);
    if(idx === this.length - 1){
      let current = prev.next;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return current;
    }

    let current = prev.next;
    prev.next = prev.next.next;
    this.length -= 1;
    return current;

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while(current){
      total += current.val;
      current = current.next;
    }
    return total;
  }
}

module.exports = LinkedList;
