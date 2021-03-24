const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'I love it',
      image: './assets/images/socks_blue.jpg',
      link: 'https://www.vuemastery.com/',
      inventory : 80,
      details: ['50% cotton', '30% WebGLUniformLocation', '20% polyester'],
      variants: [
        {id: 2234, color: 'green'},
        {id: 2235, color: 'blue'},
      ],
    }
  }
})