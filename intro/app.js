Vue.component("product", {
  template: `
  <div class="product">
            <div class="product-image">
                <img :src="image">
            </div>
            <div class="product-info">
                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock</p>
                <ul>
                    <li v-for='detail in details'>{{ detail }}</li>
                   
                </ul>
                <h1>{{ product }}</h1>

                <div v-for='(lang, index) in langs' :key='lang.id'>
                    <p @mouseover="updateProduct(index)">
                        {{ lang.lang }}
                    </p>
                </div>
                <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton:!inStock }">Add To Cart</button>
                 <p>price: {{ price }} </p>
                <div class="cart">
                    <p> cart: {{ cart }}</p>
                </div>
            </div>
        </div>
  `,
  data() {
    return {
      product: "books",
      selectimg: 2,
      cart: 0,
      details: [
        "basic syntax",
        "objects, varibles",
        "conditions, loops",
        "functions",
      ],
      img:
        "http://crowdforthink.com/assets/uploads/blogs/1c3666ec2ee7845aa24d42b1616a1247.jpg",
      langs: [
        {
          id: 1,
          lang: "python",
          quantity: 10,
          cost: 362,
          img:
            "https://www.oreilly.com/library/view/begin-to-code/9781509304547/graphics/9781509304530.jpg",
        },
        {
          id: 2,
          lang: "java",
          quantity: 0,
          cost: 642,
          img:
            "https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-881x441.jpg",
        },
        {
          id: 3,
          lang: "javascript",
          cost: 308,
          quantity: 10,
          img:
            "http://crowdforthink.com/assets/uploads/blogs/1c3666ec2ee7845aa24d42b1616a1247.jpg",
        },
      ],
    };
  },
  methods: {
    addToCart: function () {
      return this.cart++;
    },
    updateProduct: function (index) {
      this.selectimg = index;
      console.log(index);
    },
  },
  computed: {
    image() {
      return this.langs[this.selectimg].img;
    },
    inStock() {
      return this.langs[this.selectimg].quantity;
    },
    price() {
      return this.langs[this.selectimg].cost;
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {},
});
