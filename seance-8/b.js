let n = Number(prompt("Het N"))
for (let i = 0; i < n; i++) {
    let a = Number(prompt("Het A"))
    let b = Number(prompt("Het B"))
    let c = Number(prompt("Het C"))
    if(a+b>=10 || b+c>=10 || c+a>=10){
        console.log("YES")
    }else {
        console.log("NO")
    }
}
