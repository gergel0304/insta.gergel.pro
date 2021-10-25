function printFeed(account_code) {
    const request = new XMLHttpRequest();
    const url = "https://insta.gergel.pro/app/show.php";
    const params = "account_code=" + account_code;
    
    request.open("POST", url, true);
    
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.addEventListener("readystatechange", () => {

        if(request.readyState === 4 && request.status === 200) {       
            document.getElementById("insta-gergel").innerHTML = request.responseText;
        }
    });

    request.send(params);
}

var account_code = document.getElementById("insta-gergel").getAttribute("data-account");
printFeed(account_code);
