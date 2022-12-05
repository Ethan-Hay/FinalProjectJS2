app.component('GameSignUpModal',{
    props:{
        id:{
            type: String,
        }
    },
    template:
    `
      <app-modal>
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
          <button type="submit" class="btn btn-primary" @click.prevent="addIt">Sign Up</button>
        </template>
      </app-modal>
    `
})