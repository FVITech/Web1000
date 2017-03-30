What is GCD?

gcd(8, 12) = 4
gcd(11, 77) = 11
gcd(9, 8) = 1
gcd(54, 81)
54 = 2 * 3 *  3 * 3
81 = 3 * 3 * 3 * 3
gcd(3072, 800)
   gcd(2272, 800)
      gcd(1472, 800)
	 gcd(672, 800)
	     gcd(672, 128)
		gcd(544, 128).......

function loopGCD(num1, num2){
   if (num1 < num2){
     var temp = num1;
     num1 = num2;
     num2 = temp;
   }
   while (num1 > num2 && num1 % num2 != 0){
	num1 = num1 - num2;
	if (num1 < num2){
     	   var temp = num1;
     	   num1 = num2;
     	   num2 = temp;
   	}
   }
   return num2;
}

function recGCD(num1, num2){
   if (num1 < num2) return recGCD(num2, num1);
   if (num1 % num2 === 0) return num2;
   return recGCD(num1-num2, num2);
}


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
     var currentIndex = 1;
     var currentNode = this.root;
     while (currentNode.next != null && currentIndex < index){
	currentNode = currentNode.next;
	currentIndex++;
     }
     if (currentIndex < index) return -1;
     currentNode.prev.next = currentNode.next;
     currentNode.next.prev = currentNode.prev;
     currentNode.next = null;
     currentNode.prev = null;
     this.length--;
     return 1;
  }
  print(){
    if (this.root == null) return "empty";
    var currentNode = this.root;
    var nodes = "" + this.root.value + " ";
    while (currentNode.next != null){
	currentNode = currentNode.next;
	if (currentNode.next) nodes += currentNode.value + ", ";
    }
    nodes += currentNode.value;
    return nodes;
  }
  get(index){

  }
  contains(element){

  }
  set(index, newValue){

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
l1.print();
