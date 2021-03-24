const app = Vue.createApp({
  data() {
    return {
      cart: 0,
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
    }
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    updateVariant(activeVariantIndex){
      this.selectedVariant = activeVariantIndex
      console.log(activeVariantIndex)
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
    }
  }
})