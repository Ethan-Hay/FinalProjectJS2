app.component('StoreItem',{

    props:{
        product:{type: Object, required: true},
    },
    methods:{
        addToCart(){
            db.collection('cart').add(this.product)
        }
    },
    template:`<div class="individual-item">
    <div>
      <img :src="product.image" width="100" height="100">
    </div>
    <div>
      {{product.productName}}                      {{product.price}}
    </div>
    <button @click = 'addToCart'>Add to Cart</button>
    </div>`
})