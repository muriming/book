<template>
    <div class="headerSearch">
        <input type="search" v-model.trim="keyword">
        <button @click="search">搜索</button>
    </div>
</template>
<script>
export default {
  name:'HeaderSearch',
  data() {
    return {
        keyword:''
    };
  },
  computed:{
},
  watch:{
},
  methods:{
      search(){
        //   当查询的关键字与当前路由对象中的查询参数wd值不同时，才调用$router.push方法
        if(this.keyword != this.$route.query.id)
            this.$router.push({
                path:'/search',
                query:{
                    wd:this.keyword
                }
            })
      }
  }
}
</script>
<style scoped>
  input{
    width: 300px;
  }
  button{
    background-color: khaki;
  }
</style>