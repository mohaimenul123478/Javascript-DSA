class stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(element){
       this.items[this.count] = element;
          this.count++
    }

    pop(){
        if(this.count === 0) return undefined;
        let deleteitems = this.items[this.count - 1];
        this.items.length = this.count - 1;
        this.count--;
        return deleteitems;
    }

    isEmpty(){
        if (this.items.length === 0) {
            console.log("Stack is empty");
            return true;
        } else {
            console.log("Stack not empty");
            return false;
        }
    }

    peek(){
        if(this.count === 0){
            console.log("Stack is empty. Top item is undefined.");
            return undefined;
        }
        let peekitems = this.items[this.count - 1];
        console.log(`peek number is ${peekitems}`);
        return peekItem;
    }

    size(){
        if(this.count === 0){
            console.log("stack is empty size is 0");
        }else {
            console.log(`Stack size is ${this.count}`);
        }
        return this.count;
       
    }

    print(){

       let str = '';
        for(let i = 0; i < this.count; i++){
            let x = this.items[i];
            str = str + x + " ";
        }

        console.log(str);
        return str;
    }

    clear(){
        this.count = 0;
        this.items = [];
        console.log("Stack cleared.");
    }

}

const stack1 = new stack();