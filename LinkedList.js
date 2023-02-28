class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        // if (!this.isEmpty()) {
        //     node.next = this.head;
        // }
        // this.head = node;

        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is currently empty');
            return;
        }

        let current = this.head;
        let list = "";
        while (current !== null) {
            // console.log('current', JSON.stringify(current));
            // console.log('value', current.value);
            list += current.value + ' => ';
            current = current.next
        }
        list += 'null'
        console.log('list', list);

    }

    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.size++
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
            this.size++
        }
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            console.log('invalid index');
            return;
        }
        if(index === 0){
            this.prepend(value);
        } else {
            const node = new Node(value);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        }
    }

    remove(index){
        if(index < 0 || index >= this.size){
            console.log('invalid index');
            return null;
        }
        if(index === 0 ){
            let removeNode = this.head;
            this.head = this.head.next;
            this.size--;
            removeNode.next = null;
            return removeNode.value;
        } else {
            let current = this.head;
            for (let i = 0; i < index-1; i++) {
                current = current.next;
            }

            let removeNode = current.next;
            current.next = current.next.next;
            removeNode.next = null;
            this.size--;
            return removeNode.value;
        }
    }

    removeValue(removeValue){
        if(this.size === 0){
            return null;
        }

        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            if(current.value === removeValue){
                return this.remove(i);
            }
            current = current.next
        }

        return null;
    }

    reverse(){
        let pre = null;
        let current = this.head;
        while(current){
            let next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        this.head = pre;
    }


}

const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(2);
// list.append(2);
// list.append(5);

// console.log('size', list.getSize());
// list.print()

// list.insert(6, 1)

// // console.log('size', list.getSize());
// list.print()

// console.log('list.remove(1);', list.remove(0));
// list.print();
// console.log('list.remove(1);', list.remove(0));
list.print();
// console.log('remove val', list.removeValue(2));;
// list.print()
// console.log('remove val', list.removeValue(2));;
// list.print()
// console.log('remove val', list.removeValue(2));;
// list.print()
// console.log('remove val', list.removeValue(2));;
// list.print()
// console.log('remove val', list.removeValue(5));;
// list.print()
// console.log('remove val', list.removeValue(2));;
// list.print()
// console.log('remove val', list.removeValue(1));;
// list.print()
// console.log('is empty', list.isEmpty());
// console.log('size', list.getSize());
list.reverse()
list.print()