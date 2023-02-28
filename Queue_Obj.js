class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.items[this.rear] = item;
        this.rear++;
    }

    dequeue() {
        if (this.rear - this.front === 0) {
            return null;
        }

        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.rear - this.front === 0 ? null : this.items[this.front]
    }

    size() {
        return this.rear - this.front;
    }

    print(){
        console.log('Queue Obj', this.items);
    }
}

const queue = new Queue();
console.log('queue.dequeue()', queue.dequeue());
console.log('queue.dequeue()', queue.dequeue());
queue.print();
queue.enqueue(1);
queue.print();
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.enqueue(4);
queue.dequeue();
queue.print();
queue.enqueue(5);
queue.print();
