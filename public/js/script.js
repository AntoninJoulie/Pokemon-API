window.onload = function () {
    get();
}

var input = document.getElementById("input");
input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        get();
    }
});

function get() {
    var url = document.getElementById('url').innerHTML;
    url += input.value || "trainer/1";
    httpGetAsync(url, (body) => {
        let bodyJSON = JSON.parse(body);
        document.getElementById('body').innerHTML = JSON.stringify(bodyJSON, null, 4);
    });
}

function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                callback(xmlHttp.response);
            } else {
                callback('{ "error":"URL spécifiée est incorect, statut: 400" }');
            }
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}