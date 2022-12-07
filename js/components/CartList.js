app.component('CartList',{
    data: function (){
        return{
            products:[],
            subtotal: 0,
            tax:0,
            totalPrice:0,
        }
    },
    methods:{
        salesTax(subtotal){
            this.tax = subtotal * 0.05;
        },
        loadCart(){
            db.collection('cart').onSnapshot(snapshot => {
                this.products = [];
                this.subtotal = 0;
                snapshot.forEach(doc => {
                    this.products.push(new Product(doc.id, doc.data()));
                    this.subtotal+= doc.data().price;
                })
                this.salesTax(this.subtotal);
                this.totalPrice = this.subtotal + this.tax;
            })

        },
        purchaseCartItems(){
            db.collection('cart').onSnapshot(snapshot => {
                snapshot.forEach(doc => {
                    db.collection('cart').doc(this.product.id).delete();
                })
            })
        }
    },
    mounted: function (){
        this.loadCart();
    },
    template:
    `
      <div class="item-list">
        <cart-item v-for="product in products" :product="product" :key = "product.id"></cart-item>
        <div>
          Subtotal: {{subtotal}}
        </div>
        <div>
          Tax: {{tax}}
        </div>
        <div>
          Total: {{totalPrice}}
        </div>
        
          <button type="submit" class="btn btn-primary" @click.prevent="purchaseCartItems">Purchase</button>
      </div>
    `
})