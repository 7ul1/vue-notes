   <template>
      <div class="cg">
         <h3>{{title}}分类</h3>
<!--         <ul>-->
<!--            <li v-for="(g,index) in games" :key="index">{{g}}</li>-->
<!--         </ul>-->
         <slot :games="games" msg="你好"></slot>
<!--         <slot name="footer"></slot>-->

      </div>
   </template>

   <script>
   export default {
      name:'Category',
      props:['title'],
      data(){
         return{
            // foods:['火锅','孜然','小龙虾','生蚝'],
            games:['GTA6','大表哥','泰坦陨落2','原神'],
            // films:['流浪地球','十二恒星','神偷奶爸','熊出没·过年']
         }
      }
   }
   </script>

   <style >
      .cg{
         background: skyblue;
         width: 150px;
         height: 200px;
         margin: 10px 20px;
         /*text-align: center;*/
      }

      .cg h3{
         text-align: center;
         background: orange;
      }

      img{
         width: 100%;
      }

      video{
         width: 100%;
      }
   </style>