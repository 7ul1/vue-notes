<template>
    <div>
        <div class="todo-footer" v-show="totall">
            <label>
                <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
                <input type="checkbox" v-model="isAll" />
            </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{totall}}
        </span>
        <button class="btn btn-danger" @click="clearaLL">清除已完成任务</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        props:['todos','checkAllTodo','clearAllTodo'],
        computed:{
            totall(){
                return this.todos.length
            },
            doneTotal(){
                // let i =0
                // for(let todo of this.todos){
                //     if(todo.done == true){
                //         i++
                //     }
                // }
                // return i
                // this.todos.reduce((pre,current)=>{
                //     console.log('@',pre);
                //     return pre+1
                // },0)

                return this.todos.reduce((pre,todo)=> pre+(todo.done ? 1:0),0)
            },
            isAll:{
                // return this.doneTotal === this.totall && this.totall > 0 
                get(){
                    return this.doneTotal === this.totall && this.totall > 0 
                },
                set(value){
                    // console.log('@@@',value);
                    this.checkAllTodo(value)
                }
            }
        },
        methods:{
            // checkAll(e){
            //     // console.log(e.target.checked);
            //     this.checkAllTodo(e.target.checked)
            // }
            clearaLL(){
                if(confirm('你确定要删除吗？')){
                    this.clearAllTodo()
                }
            }
        }
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>