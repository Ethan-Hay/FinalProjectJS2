app.component('CartItem',{
    props:{
        product:{
            type:Object,
            required:true
        }
    },
    methods:{
        removeItem(){
            db.collection('cart').doc(this.product.id).delete();
        }
    },
    template:
    `
      <div class="individual-item">
      <div>
        <img :src="product.image" width="100" height="100">
      </div>
      <div>
        {{product.productName}}                      {{product.price}}
      </div>
      <button @click = 'removeItem'>Remove from Cart</button>
      </div>
    `
})