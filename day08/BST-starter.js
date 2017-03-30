class Tree{
  constructor(){
    this.root = null;
  }
  add(value){
    //if root is null, create node and add as root, then return
    //currentNode = root, done = false
    //while (!done)
      //if value < currentNode.value then
        //if currentNode.left != null currentNode = currentNode.left
        //else add at currentNode.left, done= true
      //else if value > currentNode.value
        //if currentNode.right != null then currentNode = currentNode.right
        //else add at currentNode.right, done = true
      //else
        //you decide
  }
}

class Node{
  constructor(value, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
