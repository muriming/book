<template>
    <div class="scrollPic">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="@/assets/images/image1.png"></swiper-slide>
            <swiper-slide><img src="@/assets/images/images2.png"></swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 轮播图向左滚动按钮 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <!-- 轮播图向右滚动按钮 -->
            <div class="swiper-button-next" slot="button-next"></div>
            <!-- 轮播滚动条 -->
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>
     
    </div>
</template>
<script>
import{Swiper,SwiperSlide} from 'vue-awesome-swiper';
import "@/swiper/css/swiper-bundle.css";
export default {
  name:'HomeScrollPic', 
  data() {
    return {
        // 在swiper中的swiperOption中对轮播图进行参数的修改
        swiperOption:{
            loop:true,//开启循环播放模式
            pagination:{//分页器设置，包括样式、是否可以单击、气泡是否动态变化等
                el:".swiper-pagination",
                type:"bullets",
                clickable:true,
                dynamicBullets:true
            },
            speed:1000,
            // autoplay:true,
            autoplay:{
                delay:2000,
                // stopOnLastSlide: false,
                disableOnInteraction:false
            },
            effect:"slide",//图片的切换效果：滑动
            navigation:{
                nextEl:".swiper-button-next",//设置轮播图的向左向右按钮
                preEl:".swiper-button-prev"
            }
        }
    };
  },
  components:{
      Swiper,
      SwiperSlide
  },
  computed:{
             
},
  watch:{
},

  methods:{}
}
</script>
<style  scoped>
    .scrollPic{
        display: flex;
        width: 350px;
        height: 200px;
        /* background-color:pink; */
    }

</style>