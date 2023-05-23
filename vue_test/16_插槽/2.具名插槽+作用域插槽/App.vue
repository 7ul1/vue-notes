<template>
    <div class="container">
<!--        <Category title="美食">-->
<!--            <img v-slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">-->
<!--            <a v-slot="footer" href="#">没食欲an</a>-->
<!--        </Category>-->
        <Category title="游戏">
            <template #="guigu">
                <ul>
                    <li v-for="(g,index) in guigu.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template #={games,msg}>
                <ol>
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ol>
                <a  href="#">{{msg}}</a>
            </template>
        </Category>
        <Category title="游戏">
            <template #={games,msg}>
                <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
            </template>
        </Category>
<!--        <Category title="电影" >-->
<!--            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>-->
<!--        </Category>-->
    </div>
</template>

<script>
    // https://s3.ax1x.com/2021/01/16/srJlq0.jpg
    // http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
    import Category from "@/components/Count";
    export default {
        name: "App",
        components: {Category},

    }
</script>

<style>
    *{
        margin: 10px auto;
    }
    .container{
        display: flex;
    }

    h4{
        text-align: center;
    }
</style>
