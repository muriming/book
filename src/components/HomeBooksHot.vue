<template>
    <div class="bookRecommend">
      
        <ul>
              <h3>热门推荐</h3>
            <li v-for="book in books" :key="book.id">
                <router-link :to="'/book'+book.id">
                    {{book.title}}
                     <br>
                       <span>
                        {{book.price | factPrice(book.discount) | currency}}
                 </span>
                </router-link>
               
               
            </li>
        </ul>
    </div>
</template>
<script>

export default {
  name:'HomeBooksHot',
  data() {
    return {
        books:[]
    };
  },
  created(){
      this.axios.get("/book/hot")
      .then(response=>{
          if(response.status == 200){
              this.books = response.data;
          }
      }
      )
      .catch(error=>alert(error))
  },
  computed:{
},
  watch:{
},
  methods:{}
}
</script>
<style  scoped>
    li{
        list-style: none;    
    }
    a{
        /* text-decoration: none; */
    }
</style>