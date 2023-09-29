let n = Number(prompt("Het N"))
for (let i = 0; i < n; i++) {
    let a = Number(prompt("Het A"))
    let b = Number(prompt("Het B"))
    let c = Number(prompt("Het C"))
    if(a+b==c){
        console.log("+")
    }
    else if(a-b==c){
        console.log("-")
    }else{
        console.log("lahaka lahaka")
    }
}