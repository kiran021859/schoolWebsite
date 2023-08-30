function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin"&& password=="admin")
    {
        alert("Login Successful, Welcome " + username);
        window.location.replace("home.html");
    }
    else
    {
        alert("Login Failed! Please Check Your Username and/or Password");
        return;
    }
}
