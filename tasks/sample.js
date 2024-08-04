// let a="10";
// console.log(a);
// let b=20;
// console.log(b);
// let Object={  name:"rithin",
// b:"hii"}
// console.log(Object.name)
// arr=[1,"rithin",123,{key:"hello"}];
// console.log(arr);
// console.log(typeof(arr[3]));
// let date={
//     name:"rithin",
//     car:"audi",
//     num:1234,
// }
// console.log(date.name&&"data found");   
// console.log(date.name||"data found"); 
// console.log(date.name&&"data found"); 
// console.log(date.name?date.name:"false");   
// console.log(!!(date.name))
// if(!date.name)
//     {
//         console.log(date.name);
//     }
//     else (date.car)
//         {
//             console.log(date.car);
//         }
//        let num=3
//         switch(num){
//             case 1:
//                 console.log(date.name);
//                 break;
//                 case 2:
//                     console.log(date.car);
//                     break;
//                     default:
//                         console.log("no match");
//         }
// let toogle={
//     one:console.log(date.name),
//     two:console.log(date.car),


//     default:console.log("no match"),

// }
// toogle.two;
//arra
// let arr=[1,2,34,5,67]
// for(i=0;i<5;i++)(
//     console.log(arr[i])
// )

// for (let x of arr){
//     console.log(x)
// }
// for (let x in arr){
//     console.log(x)
// }
// for (let x in arr){
//     console.log(x,arr[x])
// }
// let i=1
// while(i<5){
//     console.log(i)
//     i++
// }
// let a="rithin";
// let b=34;
// console.log(a+b);
// let names= "tejeswararaoesw"
// console.log(names.indexOf("esw"))
// console.log(names.lastIndexOf("esw"));
// console.log(names.length);
// console.log(names.replaceAll("esw","osw"));
// for(let i=0;i<names.length;i++)
//     {
//         console.log(names[i]);
//     }
// let names=["rithn","kartheek","siddhu"];
// let thin=[...names]
// console.log(thin)
// names.push("hello");
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// names.unshift("car");
// console.log(names); 
// console.log(names.join('-'));
// console.log(names.concat('raju'));
// console.log(names.indexOf('car'));
// let names = ["sidh","thin","thick"]
// let map = names?.map((val) => val+"club")
// console.log(map);
// let str="rithin";
// let revstr;
// rstr=str.split('').reverse().join('');
// console.log(rstr);
// const teams={
//     name:'siddhu',
//     branch:'aiml',
//     college:'srkr',
//     team:'ast'
// }

// for (let x in teams){
//     console.log(x + ":"+ teams[x])
// }
// for(let [key,val] of Object.entries(teams)){
//     console.log(key + ":" + val)
//     console.log(key + ":" + teams[key])

// }
// Object.values(teams).forEach(val=>{
//     console.log(val)
// }); 
// Object.keys(teams).forEach(val=>{
//     console.log(val)
// }); 
function sum(){


     return 20+30
}
console.log(sum())
const add=function()
{
      return 20+30;
}
console.log(add());


const adds=()=>{return 21+31}
console.log(adds())