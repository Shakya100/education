import("https://smtpjs.com/v3/smtp.js");

function sendmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "nikita@neo-tv.co",
        Password: "A8D78D06D57A467ED43B484E1BA15021A1E9",
        To: 'ps7079762@gmail.com',
        From: "nikita@neo-tv.co",
        Subject: "contact enquiry form",
        Body: "Name:" + document.getElementById("name").value +
            " <br>Email:" + document.getElementById("email").value +
            "<br> Phone :" + document.getElementById("phone").value +
            "<br> Address:" + document.getElementById("address").value +
            "<br> thank You"
    }).then(
        message => alert("message sent successfully")
    );
}

