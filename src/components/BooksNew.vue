<template>
    <div class="booksNew">
        <div>
        <h3>新书上市</h3>
        </div>
        <div class="books">
            <div class="book" v-for="book in books" :key="book.id">
            <figure>
                <router-link :to="'/book/'+book.id">
                    <img :src="book.imgUrl" >
                    <figcaption>
                        {{book.title}}
                    </figcaption>
                </router-link>
            </figure>
            <p>
                {{book.price | factPrice(book.discount) | currency}}
                <span class="oldPrice">{{book.price | currency}}</span>
            </p>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
  name:'',
  props:[''],
  data() {
    return {
        books:[]
    };
  },
  created(){
    this.axios.get("/book/new")
    .then(response=>{
        if(response.status == 200){
            this.books = response.data
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
    .books{
        display: flex;
        justify-content: center;

    }
    .book{
        border-right: 1px solid  rgba(220,220,220,0.6)

    }
    h3{
        text-align: center;
    }

   figcaption{
        text-align: center;
    }
    p{
        text-align: center;
    }
    .oldPrice{
        text-decoration: line-through;
        color: #666666;
    }
</style>