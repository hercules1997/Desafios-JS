
//**TRUE */
const carlos = {
    name: "Carlos",
    age: "33",
    height: 1.62,
    kg: 42,
    address: "Visconde de nova granada",
};

const gabriel = {
    name: "Carlos",
    age: "33",
    height: 1.62,
    kg: 42,
    address: "Visconde de nova granada",
};

console.log(carlos.name == gabriel.name)

//*FALSE*/
const carlos1 = {
    name: "Carlos",
    age: "33",
    height: 1.62,
    kg: 42,
    address: "Visconde de nova granada",
};

const gabriel1 = {
    name: "gabriel",
    age: "33",
    height: 1.62,
    kg: 42,
    address: "Visconde de nova granada",
};

console.log(carlos1.name == gabriel1.name)