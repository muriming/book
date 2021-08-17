<template>
  <div id="app">
      <!-- <Header/>
      <Menus/>
      <div class="center">
        <HomeCategory class="category" />
        <HomeScrollPic class="scrollpic" />
        <HomeBooksHot />
      </div> -->
    <router-view/>
  </div>
</template>
<script>
// import Header from '@/components/Header'
// import Menus from '@/components/Menus'
// import HomeCategory from '@/components/HomeCategory'
// import HomeScrollPic from '@/components/HomeScrollPic'
// import HomeBooksHot from '@/components/HomeBooksHot'
export default {
  components: {
    // Header,
    // Menus,
    // HomeCategory,
    // HomeScrollPic,
    // HomeBooksHot
  },
};
</script>
<style >
  /* .center{
    display: flex;
    justify-content: center;
} */
body{
  background-color:#fff;
}
a{
  color: black;
}
a:hover{
  color: royalblue;
}

</style>
