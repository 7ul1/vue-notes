export let result = {
    name:'123',
    age:18
}
export function getUser(){
    console.log('66球');
}

// ------------------------

let result = {
    name:'123',
    age:18
}
function getUser(){
    console.log('66球');
}

export {result,getUser};

// ------------------------

export function getUser(){
    console.log('66球');
}

// 必须采用 default 命名对象的方式
export default{
    getUser:()=>{
        console.log('66球');
    }
}

