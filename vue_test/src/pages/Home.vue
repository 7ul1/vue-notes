<template>
<!--    <h2>我是Home的内容</h2>-->
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
<!--                <li>-->
<!--                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>-->
<!--                </li>-->
                <li>
                    <router-link class="list-group-item" active-class="active" to="/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/message">Message</router-link>
                </li>
            </ul>
<!--            <router-view v-slot="{ Component }">-->
<!--                <keep-alive>-->
<!--                    <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />-->
<!--                </keep-alive>-->
<!--            </router-view>-->

            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>