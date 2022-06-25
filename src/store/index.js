import { createStore } from 'vuex'

export default createStore({

state: {
    cardProducts: []
},
mutations: {
    setProduct(state,val){
        state.cardProducts.push(val)
    }
},
getters: {
    getProducts: state => {
        return state.cardProducts
    }
}
})