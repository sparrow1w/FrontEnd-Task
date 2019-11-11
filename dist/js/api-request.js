/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
var app = document.getElementById('root');

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.onload = function () {

    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach((function (segment) {
            data.length = 4;
            var p = document.createElement('p');
            p.textContent = segment.title;
            app.appendChild(p);
            p.setAttribute('class', 'list-column__item');
        }))
    } else {
        var errorMessage = document.createElement('marquee');
        errorMessage.textContent = "Sorry, it's not working!";
        app.appendChild(errorMessage);
    }
}

request.send()