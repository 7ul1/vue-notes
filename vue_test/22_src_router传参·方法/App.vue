<template>
    <div>
        <div class="row">
            <Banner/>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
<!--                    <button class="list-group-item active" @click="toAbout">About</button>-->
<!--                    <button class="list-group-item" @click="toHome">Home</button>-->

                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view></router-view>
                        <!--                        <Home/>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import { useStore } from "vuex";
    // import useRouter from 'vue-router'
    import Banner from "@/components/Banner";
    export default {
        name: "App",
        components: {Banner},
        // setup(){
        //     const router = useRouter()
        //     const toAbout = (()=>{
        //         router.push
        //     })
        // }

    }
</script>

<style>
    /**{*/
    /*    background: #5e5e5e;*/
    /*}*/
</style>
