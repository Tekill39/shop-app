// const three = [
//     {
//         v:5,
//         c:[
//             {
//                 v:10,
//                 c:[
//                     {
//                         v:11,
//                     }
//                 ]
//             },
//             {
//                 v:6,
//                 c:[
//                     {
//                         v:3,
//                     }
//                 ] 
//             }
//         ]

//     }
// ];

// const recursive = (three) => {
//     let sum = 0
//     three.forEach(node => {
//         sum+= node.v
//         if(!node.c){
//             return node.v
//         }
//         sum+= recursive(node.c)
// });
//     return sum
// }
// console.log(recursive(three))
// const iteration = (three) => {
//     if(!three.length){
//         return 0
//     }

// }