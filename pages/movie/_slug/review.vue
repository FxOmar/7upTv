<template>
<div class="page-detail relative">
	<div class="page-cover" :style="`background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2/${ movie.backdrop_path }'); z-index: -1;`">
	</div>
	<div class="container mx-auto z-10">
		<div class="pad"></div>
		<div class="main-content main-detail type-tvseries">
			<div class="md-top">
				<div id="bread" class="bg-grey-light p-3 rounded font-sans w-full text-white">
					<ol class="breadcrumb">
            <li><nuxt-link to="/">Home </nuxt-link></li>
						<span>/</span>
						<li class="active">{{ movie.title }}</li>
					</ol>
				</div>
				<div id="mv-info">
					<div class="mvi-content">
						<div class="mvic-desc w-1/2">
							<div class="mvic-stats">
								<div class="block-trailer">
									<a data-target="#pop-trailer" data-toggle="modal">
										<i class="fas fa-video"></i> Watch trailer
									</a>
								</div>
							</div>

							<div class="detail-mod">
								<div class="dm-thumb"><img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${ movie.poster_path }`"
										title="" alt=""></div>
								<h3>{{ movie.title }}</h3>
								<div class="mobile-btn">
									<a class="mod-btn" data-target="#pop-trailer" data-toggle="modal">Trailer</a>
                  <a class="mod-btn mod-btn-watch" :href="`/movie/${movie.id}`"
										title="Watch movie"><i class="fa fa-play mr5"></i> Watch movie</a>
								</div>
							</div>

							<div class="desc">{{ movie.overview }}</div>
							<div class="mvic-info">
								<div class="mvici-left">
									<p><strong>Genre: </strong> <a href="#" title="Romance">Romance</a><a
											href="#" title="Xmas">, Xmas</a></p>
									<p><strong>Actor: </strong><a href="#">Ashley
											Williams</a><a href="#">, Jill Wagner</a><a
											href="#">, Maggie Lawson</a><a
											href="#">, Paul Greene</a></p>
									<p><strong>Director: </strong> <a href="#" title="Sean McNamara">Sean McNamara</a>
									</p>
									<p>
									</p>
									<p><strong>Country: </strong><a href="#" title="United States">United States</a>
									</p>
								</div>
								<div class="mvici-right">
									<p><strong>Duration:</strong> {{ movie.runtime }} Min</p>
									<p><strong>Quality:</strong> <span class="quality">HD 720</span></p>
									<p><strong>Release:</strong> {{ movie.release_date }}</p>
									<p><strong>IMDb:</strong> 6.5</p>
								</div>
							</div>
						</div>
						<div class="btn-watch-area w-1/2">
							<div class="bwa-content">
								<div class="loader"></div>
								<a :href="`/movie/${movie.id}`" class="bwac-btn"
									title="Click to play">
									<i class="fa fa-play"></i>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
			<!--related-->
			<div class="movies-list-wrap mlw-related">
				<div class="ml-title ml-title-page">
					<span>You May Also Like</span>
				</div>
				<div class="movies-list movies-list-full">
					<div class="ml-item">
            <movieCard img="/img/71rNJQ2g-EL._SY606_.jpg"/>
					</div>
				</div>
			</div>
			<!--/related-->
		</div>
	</div>
</div>
</template>

<script>
import movieCard from '~/components/common/movieCard'

export default {
  components: {
    movieCard,
  },
  data(){
    return{
      movie: []
    }
  },
  mounted(){
    this.fetchData()
  },
  methods:{
    async fetchData() {
			const response = await this.$axios.$get('/movies/' + this.$route.params.slug);
			this.movie = response.movie;
			console.log(this.movie)
		},
  }
}
</script>

<style scoped>
.main-detail .md-top {
    min-height: 400px;
    position: relative;
    z-index: 2;
    margin-bottom: 20px;
}
.page-cover{
  @apply bg-cover bg-no-repeat bg-center absolute inset-0 w-full h-full overflow-x-hidden block 
}
.page-cover::before{
    content: "";
    width: 100%;
    height: 217px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    background: url(/img/page-cover-shadow.png) bottom repeat-x;
}
.page-cover::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(35,33,34,0.7);
}

.breadcrumb{
  @apply flex
}
.mvi-content{
  @apply flex
}
.btn-watch-area .bwa-content {
    text-align: center;
    bottom: 0;
    top: 0;
    right: 0;
    left: 600px;
    position: absolute;
}
.btn-watch-area {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-left: 640px;
    text-align: center;
    top: 0;
    left: 0;
    bottom: 0;
}
.loader {
    width: 180px;
    height: 180px;
    line-height: 180px;
    box-sizing: border-box;
    text-align: center;
    z-index: 0;
    position: absolute;
    top: 50%;
    margin-top: -150px;
    left: 50%;
    margin-left: -90px;
}
.loader:before {
    z-index: 2;
    -webkit-animation: gogoloader 2s infinite;
    -moz-animation: gogoloader 2s infinite;
    -o-animation: gogoloader 2s infinite;
    animation: gogoloader 2s infinite;
}
.loader:after {
    z-index: 1;
    -webkit-animation: gogoloader 2s infinite 1s;
    -moz-animation: gogoloader 2s infinite 1s;
    -o-animation: gogoloader 2s infinite 1s;
    animation: gogoloader 2s infinite 1s;
}
.loader:before, .loader:after {
    opacity: 0;
    box-sizing: border-box;
    content: "\0020";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: 5px solid #fff;
    box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
}
.btn-watch-area .bwa-content {
    text-align: center;
    bottom: 0;
    top: 0;
    right: 0;
    left: 600px;
    position: absolute;
}
.btn-watch-area .bwa-content .bwac-btn {
    width: 120px;
    height: 120px;
    color: #fff;
    border-radius: 50%;
    background: #c91c55 url(/img/logo-shadow.png) 30% 0% no-repeat;
    position: absolute;
    top: 50%;
    margin-top: -120px;
    left: 50%;
    margin-left: -60px;
    border: 5px solid #fff;
    display: inline-block;
    box-shadow: 0 0 40px 5px rgba(199,28,84,1);
}

.btn-watch-area .bwa-content .bwac-btn i {
    font-size: 60px;
    position: absolute;
    top: 24px;
    left: 35px;
}
.btn-watch-area .bwa-content .bwac-btn:before {
    content: "";
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.3) inset;
}
.btn-watch-area .bwa-content .bwac-btn:after {
    content: "Click to play";
    position: absolute;
    bottom: -40px;
    width: 120px;
    text-align: center;
    left: 50%;
    margin-left: -60px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}

#mv-info .mvi-content .mvic-desc {
    width: 620px;
    min-height: 210px;
    padding-top: 20px;
    position: relative;
    z-index: 9;
}
#mv-info .mvi-content .mvic-stats {
    font-size: 16px;
    margin-bottom: 10px;
}
#mv-info .mvi-content .mvic-stats .block-trailer {
    padding: 5px 12px;
    border: 1px solid #666;
    border-radius: 30px;
    background: rgba(0,0,0,0.2);
    font-size: 14px;
    margin-right: 0;
}
#mv-info .mvi-content .block-trailer a {
    cursor: pointer;
    color: #fff;
}
#mv-info .mvi-content .mvic-stats .block-view, #mv-info .mvi-content .mvic-stats .block-fav, #mv-info .mvi-content .mvic-stats .block-trailer {
    display: inline-block;
    margin-right: 20px;
}
.detail-mod .dm-thumb {
    display: none;
}
.detail-mod .mobile-btn {
    display: none;
}
#mv-info .mvi-content h3 {
    font-size: 50px;
    color: #fff;
    line-height: 50px;
    margin: 0;
    margin-bottom: 20px;
    display: block;
}
#mv-info .mvi-content .mvic-desc .desc {
    width: 100%;
    margin-bottom: 20px;
    font-style: italic;
    color: #aaa;
    font-weight: 300;
    margin-top: 10px;
}
#mv-info .mvi-content .mvic-info {
    width: 100%;
    display: block;
}
#mv-info .mvi-content .mvic-info .mvici-left {
    float: left;
    width: 48%;
    margin-right: 2%;
}
#mv-info .mvi-content .mvic-info p {
    margin-bottom: 3px;
}
#mv-info .mvi-content .mvic-info .mvici-right {
    float: left;
    width: 50%;
}

.movies-list-wrap {
    display: block;
    overflow: hidden;
    margin: 0 0 40px;
}
.movies-list-wrap .ml-title {
    display: block;
    margin-bottom: 5px;
    overflow: hidden;
}

.movies-list-wrap .ml-title span {
    font-size: 18px;
    font-weight: 400;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    color: #fff;
    margin-right: 20px;
    position: relative;
}
.movies-list-wrap .ml-title span:before {
    content: "";
    width: 50px;
    height: 2px;
    background: #c91c55;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
}

.movies-list {
    display: block;
    margin: 0 -1%;
}
.movies-list .ml-item {
    width: 10.5%;
    margin: 1%;
    float: left;
    position: relative;
    padding-bottom: 15.33%;
    overflow: hidden;
}
</style>