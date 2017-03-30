//QUEUES

//The drive through data structure

class Queue{
  constructor(){
    this.data = [];
  }
  enqueue(value){
    this.data.push(value);
  }
  dequeue(){
    if (this.data.length === 0) return null;
    var temp = this.data[0];
    this.data = this.data.slice(1);
    return temp;
  }
  peek(){
    if (this.data.length === 0) return null;
    return this.data[0];
  }
}
