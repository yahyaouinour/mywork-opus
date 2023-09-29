let n = Number(prompt("Het N"))
for (let i = 0; i < n; i++) {
    let a = Number(prompt("Het A"))
    let b = Number(prompt("Het B"))
    let c = Number(prompt("Het C"))
    if((a<c && a>b )||( a>c && a<b)){
        console.log(a)
    }
    else if((b<c && b>a) || (b<a && b>c)){
        console.log(b)
    }
    else{console.log(c)}
}
