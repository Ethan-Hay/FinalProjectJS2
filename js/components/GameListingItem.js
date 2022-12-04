app.component('GameListingItem',{
    props:{
        listing:{
            type: Object,
            required: true
        }
    },
    methods:{
        signUp(){

        }
    },
    template:
    `
        <div>
          <h6>
            {{listing.game}}
          </h6>
          <div>
            DM/GM: {{listing.dm}}
          </div>
          <div>
            Days Playing: {{listing.daysPlaying}}
          </div>
          <div>
            Time Playing: {{listing.startTime}} - {{listing.endTime}}
          </div>
          <div>
            Open Spots: {{listing.openSpots}}
          </div>
          <br/>
          <br/>
          <div v-if="listing.openSpots > 0">
            <button id="sign-up" @click = 'signUp'>Sign Up</button>
          </div>
          <div v-else>
            Game is full
          </div>
        </div>
    `
})