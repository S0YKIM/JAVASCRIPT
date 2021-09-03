function* rainbow() { //
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const it = rainbow();

for (let color of rainbow()) {
    console.log(color);
}
