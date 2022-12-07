app.component('CartModal', {
    props:{
        id:{
            type: String,
        }
    },
    methods:{
        purchaseCartItems(){

        }
    },
    template:
    `
      <app-modal title = "Cart">
        <div>
          <cart-list></cart-list>
        </div>
        <template #footer>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nevermind</button>
          <button type="submit" class="btn btn-primary" @click.prevent="purchaseCartItems">Purchase</button>
        </template>
      </app-modal>
    `
})