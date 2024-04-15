let score:number|string|boolean=33

score=44
score='45'

type User={
    name:string;
    id:number
}
type Admin={
    username:string;
    id:number
}

let monika:User|Admin={
    name:'mmmmmssss',
    id:5
}
monika={username:'ms',id:334}


getDbId('3')
getDbId(3)

function getDbId(id:number |string){
if(typeof id==='string'){
    id.toLowerCase()
}else if(typeof id==="number"){
    id.toPrecision()
}
}

const data:number[]=[1,2,3]
const data2:string[]=['m','s','ms']
const data3:(number|string)[]=['m','s','ms','sm',3,5]


let seatAllotment:'aisle'|'middle'|'window'

seatAllotment='aisle'
// seatAllotment='crew'