const analyzeArray = require('../modules/analyzeArray');


test(("check avarage"), () => {
    expect(analyzeArray([2,4,7,8,3,5]).avarage).toBe(5);
})

test(("check min"), () => {
    expect(analyzeArray([2,4,7,8,3,5]).minimum).toBe(2);
})

test(("check max"), () => {
    expect(analyzeArray([2,4,7,8,3,5]).maximum).toBe(8);
})

test(("check len"), () => {
    expect(analyzeArray([2,4,7,8,3,5]).length).toBe(6);
})


