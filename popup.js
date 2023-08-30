function Register()
{
    var Sname = document.getElementById("Sname").value;
    var Ssurname = document.getElementById("SSurname").value;
    if (Sname==document.getElementById("Sname").value&& Ssurname==document.getElementById("SSurname").value)
    {
        alert ("Thank You! " + Sname + " for applying with us.\n We will get back to you as soon as possible");
    }
    else
    {
        alert ("Please ensure that all the fields have been filled in correctly");
    }
}

