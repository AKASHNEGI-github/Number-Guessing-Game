
document.querySelector(".btn").addEventListener("click" , function()
{
var randomNumber = Math.floor(Math.random() * 10) + 1;
var input = document.querySelector(".input").value;
var result = document.querySelector(".result");
    if(input == randomNumber)
    {
        result.innerHTML = "WIN";
    }
    else
    {
        result.innerHTML = "LOSE";
    }
});