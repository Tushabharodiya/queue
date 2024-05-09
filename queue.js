
class ququeMethod {
    constructor() {
        this.queue = []
        this.size = 5;
    }
    insert(element) {
        if (this.queue.length < this.size) {
            this.queue.push(element)
        } else {
            console.log("queue is overflow");
        }
    }
    remove() {
        if (this.queue.length != 0) {
            for (let i = 0; i < this.queue.length; i++) {
                if (this.queue[0] != this.queue[i]) {
                    console.log(this.queue[i]);
                }
            }
        }
    }
    travel() {
        this.queue.map((val, ind) => {
            console.log(val);
        })
    }
    firstElement() {
        if (this.queue.length != 0) {
            console.log("top Element", this.queue[0]);
        }
    }
    lastelement() {
        if (this.queue.length != 0) {
            console.log("Last element", this.queue[this.queue.length - 1]);
        }
    }
    lastsecoundElement() {
        if (this.queue.length != 0) {
            console.log("Last Secound Element", this.queue[this.queue.length - 2]);
        }
    }
    removeindexElement(index) {
        index = 3;
        for (let i = 0; i < this.queue.length-1; i++) {
            if (this.queue[i] == this.queue[index]) {
                this.queue[i] = this.queue[i + 1]
            }
            console.log(this.queue[i]);
        }
    }



}

let q1 = new ququeMethod()
q1.insert(12)
q1.insert(13)
q1.insert(14)
q1.insert(15)
q1.insert(16)
q1.insert(17)
q1.insert(18)

q1.travel()
// q1.remove()
// q1.firstElement()
// q1.lastelement()
// q1.lastsecoundElement()
console.log("scbj");
q1.removeindexElement()
