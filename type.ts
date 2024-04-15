
type User={
    readonly _id:string
    name:string,
    email:string,
    isActive:boolean
    credcardDetails?:number
}

let myUser:User={
    _id:'1245',
    name:'monika',
    email:"monasingh7479@gmail.com",
    isActive:true,
    credcardDetails:5

}

type cardNumber={
    cardNumber:string
}
type cardDate={
    cardDate:string
}

type cardDetatils=cardNumber & cardDate & {
    cvv:number
}

myUser.email='monikakumari0109@gmail.com'
//  function createUser(user:User){

//  }

//  createUser({name:'monika',email:'monasingh@gmail.com',isActive:true})

export{}