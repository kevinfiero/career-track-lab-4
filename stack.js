class Stack {
    #stack;

    constructor() {
        this.#stack = [];
    }
    // put item on top of stack
    push(item){
        this.#stack.push(item);
    }
    // take item off the top of stack and return that item
    pop() {
        this.#stack.pop();
    }
    // look at item on top of stack
    peek(){
        let lastArrayItem = this.#stack.length - 1
        return this.#stack[lastArrayItem]
    }

    length(){
        return this.#stack.length;
    }

    log(){
        console.log(this.#stack);
    }

}

module.exports = Stack;