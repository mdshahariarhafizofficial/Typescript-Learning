const returnValue = (data: string | number | undefined): string | number | undefined => {
    if (typeof data === "number") {
        return `Value is: ${data}`
    }
    else if(typeof data === "string"){
        return `${data} is a string value`
    }
    else{
        return undefined
    }
}

const result = returnValue(566) as number;
console.log(result);
const result2 = returnValue("rahim") as string;
console.log(result2);
const result3 = returnValue(undefined) as undefined;
console.log(result3);
