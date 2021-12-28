function loginButton(){
    var userName = document.getElementById("username").innerHTML;
    var password = document.getElementById("password").nodeValue;
    console.log(userName);

    var credentials = JSON.stringify({
        "UserIdOrEmail": userName,
        "Password": password
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });

    xhr.open("POST", "https://api.datamotion.com/SMC/MessagingAPI/v2/Account/Logon");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(credentials);
}