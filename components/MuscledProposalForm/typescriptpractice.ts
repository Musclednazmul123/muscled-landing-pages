
// type  returntype<T> = T | undefined
// let x: returntype<string> = "string";
// let func=<T,Q>(params?:T,params1:Q):T | undefined => {
//      if(params){
//         return params   
//     };
// }
// func("string",1);

// const result = [1, 2, 3].map((element) => {
//     if (Math.random() > 0.5) {
//       return element * 2;
//     }
//     return 1;
// }
// );

// // func({name:"heloworld",age:22,color:"black"},"world");

// //type inference
// let obj={
//     name:"hello",
//     age:12,
//     func:()=>{console.log("hellow")}
// }


// //Geeneric Function
// let func2=<T>(x:T,y:T)=>{
//     console.log(x);
// }

// //typing the object type  that is infrencing the properties with any type 
// type hello {
//     name,
//     age,
//     height,
// }

// interface obj{
//     name:string,
//     age?:number
// }

// let bilal:obj={
//     name:"bilal"
// }


// type DescribableFunction<T> = {
//     // description: string;
//     (someArg: T): boolean;
//   };

  
// let funcObj:DescribableFunction =(params:number)=>{
// return true;
// }
// funcObj(1)

// typescript infrence type to any when no value is provided
// let x:any;

export {}