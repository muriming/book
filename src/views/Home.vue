<template>
  <div id="home">
      <Header/>
      <Menus/>
      <div class="center">
        <HomeCategory class="category" />
        <HomeScrollPic class="scrollpic" />
        <HomeBooksHot />
      </div>
      <BooksNew />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Menus from '@/components/Menus'
import HomeCategory from '@/components/HomeCategory'
import HomeScrollPic from '@/components/HomeScrollPic'
import HomeBooksHot from '@/components/HomeBooksHot'
import BooksNew from '@/components/BooksNew'
export default {
  components: {
    Header,
    Menus,
    HomeCategory,
    HomeScrollPic,
    HomeBooksHot,
    BooksNew
  },
};
</script>
<style >
  .center{
    display: flex;
    /* margin-left: ; */
    text-align: center;
}

</style>
