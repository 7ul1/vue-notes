<template>
    <div>
        <Count/>
    </div>
</template>

<script>
    import { useStore } from "vuex";
    import Count from "@/components/Count";

    export default {
        name: "App",
        components: {Count},
        setup(){
            const store = useStore()
            // console.log(store)
        },


    }
</script>
