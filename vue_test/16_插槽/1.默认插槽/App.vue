<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
        </Category>
        <Category title="游戏" >
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>
        <Category title="电影" >
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
    // https://s3.ax1x.com/2021/01/16/srJlq0.jpg
    // http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
    import Category from "@/components/Count";
    export default {
        name: "App",
        components: {Category},
        data(){
            return{
                foods:['火锅','孜然','小龙虾','生蚝'],
                games:['GTA6','大表哥','泰坦陨落2','原神'],
                films:['流浪地球','十二恒星','神偷奶爸','熊出没·过年']
            }
        }
    }
</script>

<style>
    *{
        margin: 10px auto;
    }
    .container{
        display: flex;
    }

</style>
