/* two types of memory-
     stack(primitive): like Number, String : we geta copy
     heap(non-premitive): we get refrence
 */

     let myName="kalimbaGrooves"
     let anotherName=myName

     anotherName="shubhi-D"
     console.log(myName)
     console.log(anotherName)
     //console.log(anotherName)

     let userOne={
        email:"shubhyuvrajsharma001@gmail.com",
        upiNum:"shubhi"
     }

     let userTwo=userOne

     userTwo.email="uv"
     userOne.email="shubha"

     console.log(userOne.email)//shubha
     console.log(userTwo.email)//shubha

     //this means latest change is printed....
