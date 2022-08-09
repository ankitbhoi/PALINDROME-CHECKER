function palindromeOrNot(){
    var num=document.querySelector(".inputbox").value;

    var revNum=num.split("").reverse().join("");

    if(num.length<2){
        document.querySelector(".list")="TYPE MORE VALUES"
    }
    else if(num==revNum){
        document.querySelector(".list").innerHTML=`${num} is a palindrome `
    }
    else{
        document.querySelector(".list").innerHTML= `${num} is not a palindrome`
    }
}