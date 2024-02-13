const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            games: [
                { name: "Total War Rome", releaseDate: 2011, img: "assets/1.jpg", isFav: true },
                { name: "Total War Empire", releaseDate: 2014, img: "assets/2.jpg", isFav: false },
                { name: "Total War Medieval II", releaseDate: 2016, img: "assets/3.jpg", isFav: true }
            ]
        }
    },
    methods: {
        hideBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(game) {
            game.isFav = !game.isFav;
        }
    },
    computed: {
        filteredGames() {
            return this.games.filter((game) => game.isFav);
        }
    }
});

app.mount('#app');