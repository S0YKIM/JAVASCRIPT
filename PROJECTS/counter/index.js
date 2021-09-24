const $ = (selector) => document.querySelector(selector);

let container = $('#container');
const plusBtn = $('#plus');
const minusBtn = $('#minus');
const number = $('span');
const reset = $('#reset');

class Counter {
    constructor () {
        this.count = 0;
    }
    increase() {
        this.count += 1;
        return this.count;
    }
    decrease() {
        if (this.count > 0)
            this.count -= 1;
        return this.count;
    }
    reset() {
        this.count = 0;
        return this.count;
    }
}

const counter = new Counter();

plusBtn.addEventListener('click', function(){
    number.textContent = counter.increase();
});

minusBtn.addEventListener('click', function(){
    number.textContent = counter.decrease();
});

reset.addEventListener('click', function(){
    number.textContent = counter.reset();
});