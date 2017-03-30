class Tree{
  constructor(value){
    if (!value) value = null;
    this.value = value;
    this.left = null;
    this.right = null;
  }
  inOrderTraversal(){
    if (this.left) this.left.inOrderTraversal();
    console.log(this.value);
    if(this.right) this.right.inOrderTraversal();
  }
  add(value){
    if (this.value == null){
      this.value = value;
      return;
    }
    if (value <= this.value){
      if (this.left)
        this.left.add(value);
      else
        this.left = new Tree(value);
    }
    else if (value > this.value){
      if (this.right) this.right.add(value);
      else this.right = new Tree(value);
    }
  }
}

var t = new Tree(10);
t.add(15); t.add(5); t.add(13); t.add(18); t.add(9); t.add(3);
