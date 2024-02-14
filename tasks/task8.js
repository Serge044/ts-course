var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.queue = [];
    }
    ArrayQueue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    ArrayQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        return this.queue.shift();
    };
    ArrayQueue.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    };
    ArrayQueue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    ArrayQueue.prototype.length = function () {
        return this.queue.length;
    };
    return ArrayQueue;
}());
var Stack = /** @class */ (function () {
    function Stack(limit) {
        if (limit === void 0) { limit = Number.MAX_VALUE; }
        this.stack = [];
        this.limit = limit;
    }
    Stack.prototype.push = function (value) {
        if (this.length() + 1 > this.limit) {
            throw new Error("Stack Overflow");
        }
        this.stack.push(value);
    };
    Stack.prototype.pop = function () {
        if (this.length() !== 0) {
            return this.stack.pop();
        }
        throw new Error("Stack Underflow");
    };
    Stack.prototype.length = function () {
        return this.stack.length;
    };
    Stack.prototype.isEmpty = function () {
        return this.length() === 0;
    };
    Stack.prototype.top = function () {
        if (this.length() !== 0) {
            return this.stack[this.length() - 1];
        }
        return null;
    };
    return Stack;
}());
var arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());
var arrTest2 = new ArrayQueue();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());
var stackTest1 = new Stack(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());
var stackTest2 = new Stack(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());
