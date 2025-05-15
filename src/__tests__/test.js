import { getHealth } from "../js/app";

// test("get Heath_1", ()=> {
//     const res = getHealth("Mar", 60);
//     expect(res).toBe("Mar is healthy");
// });

// test("get Heath_2", ()=> {
//     const res = getHealth("John", 30);
//     expect(res).toBe("John is wounded");
// });

// test("get Heath_3", ()=> {
//     const res = getHealth("Mary", 9);
//     expect(res).toBe("Mary is critical");
// });

const dataList = [
    ['Mary', 9, "Mary is critical"],
    ['John', 30,"John is wounded" ],
    ['Mar', 60, "Mar is healthy"]
];
const handler = test.each(dataList)

handler('testing getHealth with name %s and health %i', (named, health, expected)=>{
    const result = getHealth(named, health);
    expect(result).toBe(expected);
})