<template>
    <div class="headerCart">
        <a href="javascript:;" @click.prevent="handleCart">
            <span style="margin-left:30px;margin-right:26px;">购物车{{cartItemCount}}</span>
        </a>

    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name:'HeaderCart',
  data() {
    return {
    };
  },
  computed:{
      //cart模块带有命名空间
      ...mapGetters('cart',{
        //   vuex的store中定义的一个getter,得到购物车中商品的数量
        // 将this.cartItemCount映射为this.$store.getters['cart/itemsCount']
        cartItemCount:'itemsCount'
      }),
},
  watch:{
},
  methods:{
      handleCart(){
          this.$router.push("/cart");
      }
  }
}
</script>
<style lang='' scoped>

</style>