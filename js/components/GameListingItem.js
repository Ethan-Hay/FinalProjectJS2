app.component('GameListingItem',{
    props:{
        listing:{
            type: Object,
            required: true
        }
    },
    methods:{
        signUp(){
            new bootstrap.Modal(this.$refs.signup.$el).show();
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
        <game-sign-up-modal id = 'signup' ref = 'signup'></game-sign-up-modal>
        </div>
    `
})