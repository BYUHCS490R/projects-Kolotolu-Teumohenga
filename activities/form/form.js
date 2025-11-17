document.getElementById('myForm').addEventListener('submit', function(event) {event.preventDefault();
        
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;

        if (!fname || !lname || !email) {alert("You need a name and email");
            return;
        }

        if (!password) {alert("You need a password");
            return;
        }
        
        if (!age || age <18) {alert("You need to at least be 18");
            return;
        }

        const formData = {
            name: fname + lname, 
            email: email,
            password: password,
            age: age
        };
        

        console.log(formData);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Form submitted successfully!");
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                //document.geetElementById('myForm').reset();
                document.getElementById('myForm').innerHTML = '';
                document.getElementById('message').innerText = response.message;
            } else if (xhr === 4) {
                alert("Error submitting form.");
            }
        };
        xhr.send(JSON.stringify(formData));
        });