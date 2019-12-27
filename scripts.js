/*
Kendall Roberts
Video Game Database
*/

var myGames = [];
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


Vue.component('games-list', {
    props: ['thegames'],
    template: `
    <div class="container-fluid">
        <div class="row">
            <div v-for="item in thegames">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" v-bind:src="item.background_image" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">{{item.rating}}</p>
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
        games: myGames

    }
})