   <template>
      <div class="cg">
         <h3>{{title}}分类</h3>
         <slot></slot>

      </div>
   </template>

   <script>
   export default {
      name:'Category',
      props:['title']
   }
   </script>

   <style>
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