function* interrogate() {
    const name = yield "what is your name?";
    const color = yield "what is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();

it.next();
it.next('ethan');
it.next('orange');

for (let i of interrogate()) {
    console.log(i);
}