/*
Kendall Roberts
Video Game Database
*/
// Initializing my Variables

var myGames = [];
var theBlogs = [];
// The recommended way to call this API

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://rawg-video-games-database.p.rapidapi.com/games",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "d7727d5987msh950787fe21acfc7p1ed9d9jsn957ca8def9ae"
    }
}
// Filling my array of objects from my API

$(document).ready(() => {
    $.ajax(settings).done(function (response) {
        console.log(response.results)
        myGames.push(response.results[0], response.results[1], response.results[2],
            response.results[3], response.results[4], response.results[5], response.results[6],
            response.results[7], response.results[8], response.results[9], response.results[10],
            response.results[11], response.results[12], response.results[13], response.results[14],
            response.results[15], response.results[16], response.results[17], response.results[18],
            response.results[19], )
        console.log(myGames)
    });
})

//Filling my blogs array
$(document).ready(() => {
    theBlogs.push({
        title: "All me, what do you want to know?",
        content: "Hello, Im Kendall Roberts. I am an " 
       + "aspiring software engineer/web deveoper. "
       + "Currently enrolled at Ozarks Technical Community "
       + "College hunting down that associate degree in Computer "
       + "Information Science. Afterwards I hope to land a good job,"
       +" possibly with you. I fell in love with code and tech long ago "
       + "working on a project far far away. Which leads me to my next "
       + "confession. I just so happen to be a mega nerd, but who isnt in this field right? "
       + "I love Marvel, retro video games, new video games, new tech and those juicy "
       + "gaming PC builds. Anyways take a look around im constantly learning "
       + "I just wanted to show off some of my skills with this website. Thanks!",
       date: "1/1/2020",
       backdrop_img: "keyboard.jpg"
    })
    console.log(theBlogs);
})

// Vue components

Vue.component('footer-comp', {
    template:`
    <footer id="sticky-footer" class="py-4 text-white-50">
        <div class="container text-center">
            <small>Copyright &copy; Kendall Roberts</small>
        </div>
    </footer>
    `
})

Vue.component('nav-comp', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <a class="navbar-brand" href="index.html">KSide</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a>
            </div>
        </div>
    </nav>
    `
})


Vue.component('header-comp', {
    template: `
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Kendall Roberts Side Project</h1>
            <p class="lead"> This is an example of what I can do with API calls, bootstrap, and Vue.js!</p>
        </div>
    </div>
    `
})

Vue.component('blog-comp', {
    props: ['myblogs'],
    template: `
    <div class="container-fluid">
        <div class="row" v-for="blog in myblogs">
            <div class="entry" v-bind:style="{backgroundImage: 'url(\"+blog.backdrop_img+\")'}">
                <div class="col-lg-5">
                    <h1 class="font-weight-light">{{blog.title}}</h1>
                    <h4>{{blog.date}}</h4>
                    <p>{{blog.content}}</p>
                </div>
            </div>
        </div>
    </div>
    `
})

Vue.component('games-list', {
    props: ['thegames'],
    template: `
    <div class="container-fluid" id="allCards">
        <div class="row">
            <div v-for="item in thegames" class="col-lg" >
                    <div class="card" style="width: 18rem;" id="aCard">
                        <img class="card-img-top" v-bind:src="item.background_image" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">{{item.name}}</h4>
                            <p style="font-size: 14pt;" class="card-text">Released: {{item.released}} </p>
                            <p class="card-text">Rating: {{item.rating}}</p>

                        </div>
                    </div>   
            </div>
        </div>
    </div>
     `
})




var app = new Vue({
    el: '#app',
    data: {
        games: myGames,
        blogs: theBlogs

    }
})

