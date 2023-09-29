let n = Number(prompt("Het N"))
let s = 0
for (let i = 0; i < n; i++) {
    let a = Number(prompt("Het Ray Kais"))
    let b = Number(prompt("Het Ray Ahmed"))
    let c = Number(prompt("Het Ray Mohammed"))
    if ((a+b+c)>=2){
        s++
    }
}
console.log(s)