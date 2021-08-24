<template>
    <v-main>
        <div class="product-list d-flex justify-space-between mb-6" flat>
            <ProductCard 
                v-for="(product, key) in products" 
                :key="key"
                :title="product.title" 
                :price="product.price"
                :imageUrl="product.imageUrl"
                :id="product.id"
            />
        </div>
    </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Home',
    components: {
        ProductCard: () => import('@/components/ProductCard')
    },
    computed: {
        ...mapGetters({
            products: 'products'
        })
    },
    methods: {
        ...mapActions({
            fetchProducts: 'fetchProducts'
        })
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>
