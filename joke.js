
addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stops new line in textarea
        fetchjoke();         
    }
});


document.getElementById("refresh").addEventListener("click", fetchjoke);


function fetchjoke() {



    let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let output = "";
            

           
            output += "<h3>joke</h3>";
            output += `<h3>category: <span>${data.category}</span></h3>`;
            output += "<b>type: </b>" + data.type + "<br>";
         if (data.type === "single") {
                output += `<p>${data.joke}</p>`;
            } else {
                output += `<p><b>Setup:</b> ${data.setup}</p>`;
                output += `<p><b>Delivery:</b> ${data.delivery}</p>`;
            }
            document.getElementById("output").innerHTML = output;
            console.log("SUCCESS");

        })
        .catch(error => {
            console.log("ERROR", error);
        });



}

