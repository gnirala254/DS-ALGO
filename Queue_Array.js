class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(ele){
        this.items.push(ele);
    }

    dequeue(){
       return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        } else {
            return null;
        }
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log("Queue Array Implementation", this.items.toString())
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log('is empty', queue.isEmpty());
queue.print();
console.log('queue.peek()', queue.peek());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.print();