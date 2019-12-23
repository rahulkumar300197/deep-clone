const deepClone = require("clone-deep-js");

const obj1 = {
    a: [
        {
            o1: [1, 2, 3]
        },
        {
            o2: "test",
            o3: 123
        }
    ],
    b: {
        s1: "test1"
    },
    c: "random"
};

const obj2 = deepClone(obj1);
obj1.a[0].o1 = [4, 5, 6];


console.log("obj1", JSON.stringify(obj1));
console.log("obj2", JSON.stringify(obj2));