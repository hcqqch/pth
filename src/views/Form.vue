<template>
<div>
    <h1>vuex测试</h1>
    Clicked:{{getState}}times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <!-- {{getDonelength}} -->
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'increment',
            'decrement'
        ]),
    },
    // computed: {
    //     count(){
    //         // console.log(store)
    //         // return store.state.count;
    //         return this.$store.state.count
    //     }
    // },
    // computed: mapState({
    //     count:state=>state.count
    // })
    // computed: {
    //     ...mapState({
    //         count:state=>state.count
    //     })
    // },
    computed: {
        // getDonelength(){
        //     return this.$store.getters.getDonelength
        // }
        // ...mapGetters([
        //     'getDonelength'
        // ])
        ...mapGetters([
            'getState',
        ]),   
    },

    
}
</script>

<style scoped>
</style>