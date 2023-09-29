let etudiant = ["ahmed","kenza","yasmine","nour","jawher","wael"]
let presence = [true,true,true,true,false,false]

for(let i=0;i<etudiant.length;i++){
    console.log(etudiant[i])
    console.log(presence[i])

}




let temperature = 18

if (temperature<0 ){
    console.log("taks bered")
}  
else if(temperature>=0 && temperature<=10)
{console.log("takes skhoun ")}
else if(temperature>10 && temperature <=30) 
{console.log("bech nmoutou")}
else if ( temperature>30 && temperature<=45)
{console.log("motna")}
else {console.log("jabena")}