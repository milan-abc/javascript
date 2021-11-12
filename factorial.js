var num=5
var fact=1
if(num<0){
    console.log("error")
}
else if(num==0){
    console.log("factorial of zero is one")
}
else{
for(let i=1;i<=num;i++){
    fact=fact*i
}
console.log(fact)
}
