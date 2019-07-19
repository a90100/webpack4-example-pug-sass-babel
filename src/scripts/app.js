let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(c);

let bark = (() => console.log('bark!'));
bark();