class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.length ? this.items.pop() : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    print() {
        console.log(this.items.toString());
    }
}

// const stack = new Stack();

// console.log('is empty', stack.isEmpty());
// console.log('peek ', stack.peek());
// stack.push(4);
// stack.push(5);
// stack.push(7);
// stack.push(8);
// stack.print();
// console.log('stack.pop()', stack.pop());