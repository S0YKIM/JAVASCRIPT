function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

const it = abc();

for (let l of abc()) {
    console.log(l);
}