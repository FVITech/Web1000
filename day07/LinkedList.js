class LinkedList{
  constructor(){
     this.root = null;
     this.length = 0;
  }
  add(element){
     if (this.root == null){
      	this.root = new Node(element, null, null);
      	this.length++;
      	return;
     }
     var currentNode = this.root;
     while (currentNode.next != null){
	      currentNode = currentNode.next;
     }
     currentNode.next = new Node(element, currentNode, null);
     this.length++;
  }
  delete(index){
     var currentIndex = 0;
     var currentNode = this.root;
     while (currentNode.next != null && currentIndex < index){
      	currentNode = currentNode.next;
      	currentIndex++;
     }
     if (currentIndex < index) return -1;
     if (currentNode.prev)
        currentNode.prev.next = currentNode.next;
     if (currentNode.next)
        currentNode.next.prev = currentNode.prev;
     if (index === 0){
       this.root = currentNode.next;
     }
     currentNode.next = null;
     currentNode.prev = null;
     this.length--;
     return 1;
  }
  print(){
    if (this.root == null) return "empty";
    var currentNode = this.root;
    var nodes = "" + this.root.value + ", ";
    while (currentNode.next != null){
	currentNode = currentNode.next;
	if (currentNode.next) nodes += currentNode.value + ", ";
    }
    nodes += currentNode.value;
    return nodes;
  }
  get(index){
    if (this.length == 0) return null;
    if (index >= this.length) return null;
    var currentNode = this.root;
    var ctr = 0;
    while (currentNode.next != null && ctr < index){
      ctr++;
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
  contains(element){
    if (this.length == 0) return false;
    var currentNode = this.root;
    while (currentNode != null){
      if (currentNode.value === element) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  set(index, newValue){
    if (this.length == 0) return -1;
    if (index >= this.length ) return -1;
    var ctr = 0;
    var current = this.root;
    while (current != null && ctr < index){
      current = current.next;
      ctr++;
    }
    current.value = newValue;
    return current;
  }
}


class Node{
  constructor(value, prev, next){
     this.value = value;
     this.prev = prev;
     this.next = next;
  }
}

var l1 = new LinkedList();
l1.add(5);
l1.add(10);
l1.add(11);
l1.add(13);
l1.add(12);
l1.add(20);
console.log(l1.contains(20));
console.log(l1.contains(5))
console.log(l1.print());
console.log(l1.set(3, 9000));
console.log(l1.print());
