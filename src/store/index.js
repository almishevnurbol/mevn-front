import Vue from 'vue'
import Vuex from 'vuex'
import product from './product.module'
import category from './category.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        product,
        category
    }
})