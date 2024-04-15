// let grettings:string='hello world';
// let userId:number=3345

// let isLoggedIn:boolean=false



// grettings.toLowerCase()
// console.log(grettings)


function addTow(num:number){
    return num+2
}

function getUpper(val:string){
    return val.toUpperCase()
}
function signup(name:string,email:string,isPaid:boolean){
    return name
}

let login=(email:string,name:string,isPaid:boolean=false)=>{
    return email

}

// function getValue(myval:number){
//     if(myval>5){
//         return true
//     }else{
//         return '200 ok'
//     }

// }
const getHello=(s:string):string=>{
    return ''
}
const heroes=['thor','spiderman','batman']

heroes.map(data=>{
    return `hero is ${data}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}


addTow(5)
getUpper('monika')
signup('monika','monasingh7478@gmail.com',false)
login('monika@gmail.com','monika')

export{}