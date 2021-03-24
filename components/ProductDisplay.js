app.component('product-display', {
      props: {
            premium : {
                  type: Boolean,
                  required : true,
            }
      },
      template: 
      /*html*/
      `<div class="product-display">
      <div class="product-container">
            <div class="product-image">
                  <!-- image goes here -->
                  <a :href="link" target="_blank">
                        <img :class="[inStock? '': 'out-of-stock-img']" :src="image">
                  </a>
            </div>
            <div class="product-info">
                  <h1>{{ title }}</h1>
                  <p v-if="inStock"> In Stock </p>
                  <p v-else> Out of Stock </p>

                  <p> Shipping: {{ shipping }} </p>

                  <ul>
                        <li v-for="detail in details">{{ detail }} </li>
                  </ul>

                  <div v-for="(variant, key) in variants" :key="key" @mouseover="updateVariant(key)"
                        class="color-circle" :style="{ backgroundColor: variant.color }"> </div>
                  <button class="button" :class="{disabledButton: !inStock }" @click="addToCart"
                        :disabled="!inStock">Add to Cart</button>
            </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
</div>`,
data() {
      return {
        product: 'Socks',
        description: 'I love it',
        link: 'https://www.vuemastery.com/',
        selectedVariant: 0,
        brand: 'Vue Mastery',
        details: ['50% cotton', '30% WebGLUniformLocation', '20% polyester'],
        variants: [
          {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
          {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
        ],
        reviews: []
      }
    },
    methods: {
      addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(activeVariantIndex){
        this.selectedVariant = activeVariantIndex
        console.log(activeVariantIndex)
      },
      addReview(review){
            this.reviews.push(review)
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      inStock() {
        return this.variants[this.selectedVariant].quantity
      },
      shipping() {
            return this.premium? 'FREE' : '2.99'
      }
    }

})