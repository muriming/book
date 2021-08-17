<template>
    <div class="header">
        <img src="../assets/images/images.png" alt="logo" class="logo">
        <headerSearch  />
        <headerCart/>
        <span v-if="!user">你好,请<router-link to="/login">登录</router-link>免费<router-link to="/register">注册</router-link></span>
        <span v-else>欢迎您，{{user.username}},<a href="javascript:;" @click="logout">退出登录</a></span>
    </div>
</template>
<script>
import HeaderSearch from './HeaderSearch'
import HeaderCart from './HeaderCart'
import { mapState, mapMutations } from 'vuex';
export default {
  name:'',
  components:{
      HeaderSearch,
      HeaderCart
  },
  data() {
    return {
    };
  },
  computed:{
    // user模块带有的命名空间
    ...mapState('user',[
        //将this.user映射为this.$store.state.user.user
        'user'
    ])
},
  watch:{
},
  methods:{
      logout(){
          this.deleteUser();
      },
      //user模块带有命名空间
      ...mapMutations('user',[
          //将this.deleteUser映射为this.$state.commit('user/deleteUser')
          'deleteUser'
      ])
  }
}
</script>
<style  scoped>
.header{
    display: flex;
    /* float: left; */
    /* width: 900px; */
    justify-content: center;
    /* text-align: center; */
    margin: 0 auto;
    /* background-color: pink; */
}
 .logo{
    display: block;
    width: 200px;
     height: 30px; 
    margin-right: 50px;
}

</style>