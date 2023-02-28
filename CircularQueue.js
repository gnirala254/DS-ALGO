class CirculaQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.items[this.front];
    }

    print() {
        if (!this.isEmpty()) {
            let i;
            let str = '';
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " ";
            }

            str += this.items[i];
            console.log('circular queue ', str);
        } else {
            console.log('Queue is Empty');
        }
    }

    enqueu(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        } else {
            console.log('Queue is Full');
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return item;
    }
}

const cQueue = new CirculaQueue(5);
cQueue.enqueu(1);
cQueue.enqueu(2);
cQueue.enqueu(3);
cQueue.enqueu(4);
cQueue.enqueu(5);
console.log('cQueue.dequeue()', cQueue.dequeue());;
cQueue.enqueu(6);

cQueue.print();