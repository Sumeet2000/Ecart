// var a =  {
//     id:"1",
//     name:"Lenovo Ideapad S145 APU Dual Core A6 - (4 GB/1 TB HDD/Windows 10 Home) S145-15AST Laptop (15.6 inch, Platinum Grey, 1.85 kg)",
//     rating:"4.3",
//     mrp:"45000",
//     dis:"20%",
//     Availableoffer:[
//                        "5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C",
//                         "5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards T&C",
//                        "Extra 5% off* with Axis Bank Buzz Credit Card T&C",
//                        "Get upto ₹8400 off on exchange Buy with Exchange",
//                         "No cost EMI ₹1,583/month. Standard EMI also available View Plans"],
//     Highlights:[
//                 "Pre-installed Genuine Windows 10 OS",
//                 "Laptop without Optical Disk Drive",
//                 "15.6 inch HD LED Backlit Anti-glare TN Display (220 nits Brightness)"
//     ],
//     EasyPaymentOtions:[
//                            "No cost EMI starting from ₹1,583/month",
//                            "on Delivery",
//                            "Net banking & Credit/ Debit/ ATM card"
//     ],
//     images:"lenevo.jpg"
    
// }
// // var b=JSON.stringify(a);
// // console.log(JSON.parse(b))

// // var b=a;
// // b.rating="3";
// // console.log(a.rating, b.rating)

// // var b=a;

// // var c=Object.assign({},b);
// // b.rating ="3";
// // console.log(a.rating,c.rating)

// // var b=a;
// // var c=Object.assign({},b);
// // b.Highlights[0] ="3";
// // console.log(a.Highlights,c.Highlights)


// var b=a;
// var c=JSON.stringify(b);
// var d=JSON.parse(c);

// b.Highlights[0] ="3";
// console.log(b.Highlights,d.Highlights)
// var d =[];
// console.log(d.includes('sumeet'))

// let sun = function add(a, b, c){
//     let z = a + b + 10;
//     let x = c(z,(d, div)=>{return div(z + d)});
//     return x;
// }
// let o = sun(3,7,(e,di)=>{
//     return di(e*20, (y)=>{
//         return y/10;
//     });
// })
// console.log(o)

// function f(input:Boolean){
//     let a =100;
//     if(input){
//         b=a+1;
//         return b;
//     }
//     return b;
// }
// f();
// let fun = function addition(number1, number2){
//     let n = number1 + number2;
//     return n
// }


// function maths(additonNumber, callBack){
//     let sub = additonNumber - 4;
//     let answer = callBack(additonNumber, sub);
//     return answer;
// }
//  let result = maths(100, fun);


let createFun = function checkIt(a,b,c,d){
    let k = a + b + 10;
    let p=10;
    let y = c(k,(p,x)=>{return d(x+10,2+x)});
    return y;
}

let o = createFun(10,12,(r,s)=>{
    let r1=1, s1=2;
    return r+s(r1,10);
},(t,u)=>{return t+u});
console.log(o)



