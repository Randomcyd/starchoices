<template>
    <div class="content" :class="{toggle:this.index==1}">
        <top-bar></top-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
export default {
    components:{
        TopBar
    },
    data(){
        return{
            index:0
        }
    },
    mounted(){
        this.$pubsub.$on('toggleStates',(index)=>{
            this.index = index;
        })
    }
}
</script>

<style scoped>
    .toggle{
        width: 88%;
    }
</style>