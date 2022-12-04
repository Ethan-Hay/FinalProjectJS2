app.component('StoreList', {
    props:{

    },
    data: function () {
        return {
            products: [],
        };
    },
    methods: {
        loadRulebooks(){
            db.collection('storeProducts').where('category','==','rulebook').onSnapshot(snapshot => {
                this.products = [];
                snapshot.forEach(doc => {
                    this.products.push(new Product(doc.id, doc.data()));
                })
            })
        },
        loadDice(){
          db.collection('storeProducts').where('category','==','dice').onSnapshot(snapshot => {
              this.products = [];
              snapshot.forEach(doc => {
                  this.products.push(new Product(doc.id, doc.data()));
              })
          })
        }
    },
    template:`<div>
    <store-item v-for="product in products" :product="product" :key = "product.id"></store-item>
    </div>`

})