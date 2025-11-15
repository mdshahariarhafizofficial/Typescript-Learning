let arr1 : string[] = ['name', 'roll'];
arr1.push(10)

let arr2 : [number, string] = [ 55, "roll" ];
arr2.push(true);

let arr3 : (string | boolean)[] = ["String", true];
arr3.push(66);

let person: {
    name: string;
    age: number;
    isMarried: boolean;
} = {
    name: 'mofij',
    age: 56,
    isMarried: true,
}
let person1: {
    name: string;
    age: number;
    isMarried?: boolean;
} = {
    name: 'moqless',
    age: 56,
}
let person2: {
    name: string;
    brand: "RM",
    age: number;
    isMarried?: boolean;
} = {
    name: 'rahim',
    age: 56,
    brand: 'RM'
}