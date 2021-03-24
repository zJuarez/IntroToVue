const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'I love it',
      link: 'https://www.vuemastery.com/',
      inStock: false,
      image: './assets/images/socks_green.jpg',
      details: ['50% cotton', '30% WebGLUniformLocation', '20% polyester'],
      variants: [
        {id: 2234, color: 'green', image: './assets/images/socks_green.jpg',},
        {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',},
      ],
    }
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    updateImage(activeImage){
      this.image = activeImage
    }
  }
})