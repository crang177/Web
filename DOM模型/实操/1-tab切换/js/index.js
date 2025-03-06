var list=document.querySelector(".nax").querySelectorAll("li");
var divs=document.querySelector(".box").querySelectorAll("div");


// for (var i=0 ;i<list.length;i++){

//     // IIFE的核心作用是 作用域隔离，而不是并发执行。它通过创建一个新的函数作用域，确保变量不会泄漏到外部作用域，或者在闭包中捕获正确的值。


//     (function(i){
//         list[i].onmouseenter=function(){
//             for (var j=0 ;j<list.length;j++){
//                 list[j].removeAttribute("class");
//                 divs[j].removeAttribute("class");
//             }
//             this.setAttribute("class","select");
//             divs[i].setAttribute("class","div_select");
//         }
//     })(i)
// }

    // 等价于let
    // 块级作用域：变量只在当前块内有效。
        // 避免变量提升：声明前访问会报错。
        // 解决循环中的变量共享问题：每次循环创建一个新的作用域。
        // 不允许重复声明：避免命名冲突
        // 暂时性死区：确保变量在声明前不可访问。
        // 全局作用域中的隔离：不会成为全局对象的属性。
        // let 是现代 JavaScript 中推荐使用的变量声明方式，取代了 var 的许多不直观行为。

    for (let i=0 ;i<list.length;i++){
        list[i].onmouseenter=function(){
            for (var j=0 ;j<list.length;j++){
                list[j].removeAttribute("class");
                divs[j].removeAttribute("class");
            }
            this.setAttribute("class","select");
            divs[i].setAttribute("class","div_select");
        }
    }

    

