app.component('GameListingCreationModal',{
    data(){
        return{
            newListing: {
                listing: new GameListing()
            }
        }
    },
    methods:{
      addListing(){
        db.collection('listings').add(this.newListing.listing)
            .then(bootstrap.Modal.getInstance(this.$el).hide())
      }
    },
    template:
    `
      <app-modal title = "Create Game Listing">
      <div>
        <label for="dm">What is your name?</label>
        <input id="dm" type="text" v-model="newListing.listing.dm">
      </div>
      <div>
        <label for="game">What system/module are you running?</label>
        <input id="game" type="text" v-model="newListing.listing.game">
      </div>
      <div>
        <label for="daysPlaying">What day do you plan on playing?</label>
        <input id="daysPlaying" type="text" v-model="newListing.listing.daysPlaying">
      </div>
      <div>
        <label for="startTime">Start Time</label>
        <input id="startTime" type="text" v-model="newListing.listing.startTime">
      </div>
      <div>
        <label for="endTime">End Time</label>
        <input id="endTime" type="text" v-model="newListing.listing.endTime">
      </div>
      <div>
        <label for="openSpots">How many players?</label>
        <input id="openSpots" type="number" v-model="newListing.listing.openSpots">
      </div>
      <template #footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nevermind</button>
        <button type="submit" class="btn btn-primary" @click.prevent="addListing">Create Listing</button>
      </template>
      </app-modal>
    `
})