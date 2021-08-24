<template>
    <div class="cart">
        Cart
        <ul>
            <li v-for="(item, key) in cartItems" :key="key">
                {{ item.name }}
                {{ item.price }}
            </li>
        </ul>
        <div class="panel">
            {{ cart.quantity }}
            {{ cart.total }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    computed: {
        ...mapGetters([
            'cart',
            'cartItems'
        ])
    }
}
</script>