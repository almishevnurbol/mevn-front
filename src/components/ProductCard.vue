<template>
    <div class="card">
        <v-card
            elevation="2"
            outlined
            color="lighten-2"
            class="d-flex flex-column mb-6"
        >

        <img :src="imageUrl" />
        <h3 class="py-1">{{ title }}</h3>
        <h4 class="pb-1">{{ price }}</h4>
        <v-btn
            @click="$emit('addToCart', id)"
            depressed
            elevation="0"
            text>
            Buy
        </v-btn>

        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        title: 
        {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0
        },
        id: {
            type: Number,
            default: 0
        },
        imageUrl: {
            type: String,
            default: ''
        }
    }
}
</script>