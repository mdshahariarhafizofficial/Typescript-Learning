type User = {
    name: {
        firstName: string;
        lastName: string
    }
    age: number,
    isMarried: boolean,
}


const user1 : User = {
    name: {
        firstName: 'Noman',
        lastName:  "Khan"
    },
    age: 50,
    isMarried: true,
}

const user2 : User = {
    name: {
        firstName: 'Moqless',
        lastName: 'Mia'
    },
    age: 23,
    isMarried: false,
}

type AddFun = (n1: number, n2: number) => number;

const addFun : AddFun = (n1, n2) => n1+n2;