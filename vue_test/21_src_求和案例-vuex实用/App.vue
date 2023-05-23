<template>
    <div>
        <Count/>
        <hr>
        <Person/>
    </div>
</template>

<script>
    import { useStore } from "vuex";
    import Count from "@/components/Count";
    import Person from "@/components/Person";

    export default {
        name: "App",
        components: {Person, Count},
        setup(){
            const store = useStore()
            // console.log(store)
        },


    }
</script>
