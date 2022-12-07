app.component('GameListingCollection',{
    data:function (){
        return {listings:[]};
    },
    methods:{
        loadListings(){
            db.collection('listings').onSnapshot(snapshot =>{
                this.listings = [];
                snapshot.forEach(doc =>{
                    this.listings.push(new GameListing(doc.id,doc.data()));
                })
            })
        }
    },
    mounted: function (){
      this.loadListings();
    },
    template:`
      <div class="item-list">
        <game-listing-item v-for="listing in listings" :listing = listing :key = 'listing.id'></game-listing-item>
      </div>
    `
})