    // <!-- <div id="container"></div>
    // <div id="users-list"></div>

    <script src="./first.css"></script> 

    //  <script>
        let container = document.getElementById("container");
        let name = "Mustapha Opeyemi"
        let users = ["Mustapha, opeyemi, samuel"];
        localStorage.setItem("User", JSON.stringify(users));

        let retrievedName = localStorage.getElementById("mynmae");
        let retrievedUsers = JSON.parse(localStorage.getItem("Users"));
        container.innerHTML = '<h1>${retrievedName}</h1>';
        let userList = doucment.getElementById("users-list");
        retrievedUsers.map((user) => {
            return usersList.innerHTML += '<list>${user}</list>'
        })
    {/* </script>  */}


