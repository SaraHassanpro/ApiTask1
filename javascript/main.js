function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.querySelector("#demo").innerHTML = this.responseText;
            var item = JSON.parse(this.responseText);
            console.log(item);
            var myResult = "";
            for (let index = 0; index < item.length; index++) {
                //  document.querySelector(".test img").src=item[index].url;
                // document.querySelector(".test h3").innerHTML=item[index].id;
                // document.querySelector(".test h5").innerHTML=item[index].title;


                var cartona = `<div class="col-md-4 test">
                <img src="${item[index].url}" alt="" class="img-fluid">
                <h3>${item[index].id}</h3>
                <h5>${item[index].title}</h5>
            </div>`

                myResult = myResult + cartona;
            }
            document.querySelector(".test").innerHTML = myResult;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();

}
getApi();