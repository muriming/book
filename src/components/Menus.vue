<template>
    <div class="menus">
        <ul>
            <li>
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/newBooks">新书</router-link>
            </li>
            <li>
                <a href="javascript:;">特价书</a>
            </li>
            <li>
                <a href="javascript:;">教材</a>
            </li>
            <li>
                <a href="javascript:;">视听教程</a>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
  name:'Menus',
  data() {
    return {
    };
  },
  computed:{
},
  watch:{
},
  methods:{}
}
</script>
<style  scoped>
.menus{
    /* display: flex; */
    /* width: 900px; */
    margin: 0 auto;
  
}
.menus ul{
    padding: 0;
    margin: 0 auto;
    overflow: hidden;
    justify-content: center;
    margin-left: 15%;
}
.menus li {
    float: left;
    list-style: none;
    width: 280px;
    text-align: center;
    border-right: 2px solid rgba(220,220,220,0.4);
    background-color:	#CDCDB4;

}
.menus li>a{
    text-decoration: none;
    display: block;
    height: 80px;
    line-height: 80px;
   

    }
</style>