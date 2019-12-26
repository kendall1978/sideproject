/*
Kendall Roberts
Video Game Database
*/

var mygames = [];
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
$(document).ready(() =>{
    $.ajax(settings).done(function (response) {
        mygames.push(response.results)
        console.log(mygames)
    });
 })

 console.log(mygames);

//  Vue.component('games-list',{
//      props:['thegames'],
//      template:
//      `
//      <div class="container">
//      <div class="row">
//          <h2>Carousel Example</h2>
//          <div id="myCarousel" class="carousel slide" data-ride="carousel">

//              <!-- Wrapper for slides -->
//              <div class="carousel-inner" v-for="game in thegames>
//                     <div class=" item active">
//                  <img v-bind:src="game[0].background_image" alt="" style="width:100%;">
//              </div>
//          </div>

//          <!-- Left and right controls -->
//          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//              <span class="glyphicon glyphicon-chevron-left"></span>
//              <span class="sr-only">Previous</span>
//          </a>
//          <a class="right carousel-control" href="#myCarousel" data-slide="next">
//              <span class="glyphicon glyphicon-chevron-right"></span>
//              <span class="sr-only">Next</span>
//          </a>
//      </div>
//  </div>
//      `
//  })


var app = new Vue({
    el:'#app',
    data:{
        games: mygames

    }
})





