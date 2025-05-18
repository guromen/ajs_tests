import { getHealth } from "../js/app";
import { sortByHealth } from "../js/app";

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

test('sort', ()=> {
    const characters = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const result = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]
    const res = sortByHealth(characters)
    expect(res).toEqual(result)
})

