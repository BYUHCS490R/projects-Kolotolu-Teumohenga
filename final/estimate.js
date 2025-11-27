document.getElementById('signup').addEventListener('submit', function(event) {event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const numlen = phone.length

    if (!fname || !lname || !email) {alert ("You need a name and email");
        return;
    }

    if (numlen < 10) {alert("Phone Number invalid. Please put a phone number at least 10 characters long.");
        return;
    }

    const formData = 
    {
        name: fname + lname,
        email: email, 
    };

    console.log (formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "estimate.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('signup').innerHTML = '';
            document.getElementById('estimate').innerText = response.estimate;
        } else if (xhr === 4) {
            alert("Error submitting form.");
        }
    };
xhr.send(JSON.stringify(formData));
});