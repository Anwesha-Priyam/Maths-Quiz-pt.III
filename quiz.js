function sendQuestion()
{
    n1=document.getElementById("Numb1").value;
    n2=document.getElementById("Numb2").value;
    answer=parseInt(n1) * parseInt(n2);
    Qnumber="<h4>" + n1 + "*" + n2 + "</h4>";
    input="<br>Answer: <input type='text' id='checkBox'>";
    check="<br><br><button class='btn-info' onclick='checkAnswer()'>Check answer</button>";
    combine=Qnumber + input + check;
    document.getElementById("User_Output").innerHTML=combine;
}