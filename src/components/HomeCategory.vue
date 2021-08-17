<template>
    <div class="category">
        <h3>图书分类</h3>
        <div v-for="category in categories" :key="category.id">
            {{category.name}}<br>
            <router-link v-for="child in category.children" :key="child.id" :to="'/category/'+child.id">{{child.name}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name:'HomeCategory',
  
  data() {
    return {
        categories:[]
    };
  },
  created(){
      this.axios.get("/category")
        .then(response =>{
            if(response.status == 200){
                this.categories = response.data;
                console.log(response.data)
            }
        })
        .catch(
            error=>alert(error)
        )
        
  },
  computed:{
},
  watch:{
},
  methods:{
  
  }
}
</script>
<style scoped>
    .category{
        width: 300px;
        height: 300px;
        border: 1px solid rgb(205 201 201);
    }
    a{
        /* text-decoration: none; */
    }
</style>