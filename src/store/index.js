import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ]
  },
  getters: {                                                  // les getters permettent de fournir les données du store
    saleProducts: state => {                                  // Modifie l'affichage sans modifier le store
      let saleProducts = state.products.map( product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  // Les mutations sont des fonctions qui modifient les variables du store
  mutations: {
    reducePrice: (state, amount) => {
        state.products.forEach(product => {
          product.price -= amount;
        })
    }
  },
  // Les actions permettent de débugger plus facilement en affichant dans la console Vue de Chrome les fonctions async lorsqu'elles exécutée.
  // permet de voir l'effet des mulations en même temps que l'évènement apparait dans la console Vue
  actions: {
    reducePrice: (context, amount) => {
      setTimeout(() => {                                      // setTimeout() simule le délais causé lors de l'accès à une ressource distante
        context.commit('reducePrice', amount)
      }, 3000)
    }
  },
  modules: {}
});
