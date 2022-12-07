app.component('GameSignUpModal',{
    props:{
        id:{
            type: String,
        },
        listing:{
            type: Object
        }
    },
    methods:{
      signIt(){
        this.listing.openSpots --;
          bootstrap.Modal.getInstance(this.$el).hide();
      }
    },
    template:
    `
      <app-modal title = "Sign Up">
        <div>
          <label for="name">What is your name?</label>
          <input id="name" type="text">
        </div>
        <div>
          <label for="email">Enter your eMail</label>
          <input id="email" type="text">
        </div>
        <template #footer>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nevermind</button>
          <button type="submit" class="btn btn-primary" @click.prevent="signIt">Sign Up</button>
        </template>
      </app-modal>
    `
})