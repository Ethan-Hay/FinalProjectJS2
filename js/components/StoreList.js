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
    mounted() {
        this.loadRulebooks()
    },
    template:`<div>
    <nav class="navbar navbar-expand-sm">
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item"><a href="#" @click="loadRulebooks" class="nav-link">Rulebooks</a> </li>
          <li class="nav-item"><a href="#" @click="loadDice" class="nav-link">Dice</a> </li>
        </ul>
      </div>
    </nav>
    <div class="item-list">
      <store-item v-for="product in products" :product="product" :key = "product.id"></store-item>
    </div>
    
   
    </div>`

})