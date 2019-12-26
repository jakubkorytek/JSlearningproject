let inputFile = document.getElementById('inputFile');
let images = document.querySelectorAll('img');

inputFile.addEventListener("change", function () {
    const file = this.files[0];
    console.log(file)

    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", async function () {
            images[0].setAttribute("src", this.result);
            images[1].setAttribute("src", this.result);
            images[2].setAttribute("src", this.result);
            images[3].setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);

    } else {
        images[0].setAttribute("src", "");
        images[1].setAttribute("src", "");
        images[2].setAttribute("src", "");
        images[3].setAttribute("src", "");
    }

});

let body = document.querySelector('.fill-me');

inputFile.addEventListener('click', function() {
    var Request = new XMLHttpRequest();
    Request.open('GET', 'data.json');
    Request.onload = function() {
        var Data = JSON.parse(Request.responseText);
        console.log(Data);
        console.log(Data.response);
        body.innerHTML = "<h2>"+Data.response.firstName+"</h2><br>"+"<h3>"+Data.response.lastName+"</h3><br>"+"<p>"+Data.response.message+"<p><br>";
    };
    Request.send();
});