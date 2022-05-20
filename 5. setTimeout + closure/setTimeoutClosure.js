/*will print 5 times 6 because var is global scoped*/
// for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

for (var i = 0; i <= 5; i++) {
    const timeOut = (x) => {
        setTimeout(function () {
            console.log(x);
        }, x * 1000);
    }
    timeOut(i);
}