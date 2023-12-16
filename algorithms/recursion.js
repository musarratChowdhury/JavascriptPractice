const factorial = (n) => {
  if (n == 1) return 1;
  else return n * factorial(n - 1);
};

// console.log(factorial(9));

const destructureObj = (test) => {
  Object.keys(test).forEach((prop) => {
    if (typeof test[prop] != "object") {
      console.log(prop + ":" + test[prop]);
    } else {
      destructureObj(test[prop]);
    }
  });
};

let testObj = {
  prop1: 1,
  prop2: 2,
  prop3: "string1",
  prop4: {
    prop1: "string2",
    prop2: 2,
    prop3: [2, 3, 4, "5"],
    prop4: {
      prop1: "hello",
    },
  },
  prop5: {
    prop1: ["muhit", "01940012788"],
    prop2: {
      prop1: {
        prop2: {
          propx: [
            { prop1: "hello", prop2: "how", prop4: "are", prop: "u" },
            { prop1: "hello", prop2: "how", prop4: "are", prop: "u" },
            { prop1: "hello", prop2: "how", prop4: "are", prop: "u" },
          ],
        },
      },
    },
  },
  prop6: [2, 3, 4, 5, 6],
  prop7: [
    {
      prop1: 2,
      prop3: 4,
    },
    {
      prop1: "2",
      prop3: "4",
    },
    {
      prop1: [3, 3, 4, 5],
      prop3: ["ee", "dd", "ff"],
    },
  ],
};
destructureObj(testObj);
