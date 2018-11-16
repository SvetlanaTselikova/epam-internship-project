<template>
  <div id="gallery">
    <layout>
      <div slot='content'>
        <div class='h1 h1-gallery'>Наши работы</div>
        <div class='content__gallery'>
          <img src='../images/work1.jpg' class='content__gallery__item'>
          <img src='../images/work2.jpg' class='content__gallery__item'>
          <img src='../images/work3.jpg' class='content__gallery__item'>
          <img src='../images/work4.jpg' class='content__gallery__item'>
          <img src='../images/work5.jpg' class='content__gallery__item'>
          <img src='../images/work6.jpg' class='content__gallery__item'>
          <img src='../images/work7.jpg' class='content__gallery__item'>
          <img src='../images/work8.jpg' class='content__gallery__item'>
          <img src='../images/work9.jpg' class='content__gallery__item'>
        </div>
    </div>
  </layout>
  </div>
</template>

<script>
import layout from '../components/Layout.vue'
export default {
  name: 'gallery',
  data () {
    return {
     
    }
  },
  components: {
    'layout':layout
  }
}
</script>

<style lang="scss" scoped>
.h1-gallery {
  color: rgb(63, 56, 56);
}

.content__gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.content__gallery__item {
  width: 25%;
  margin: 20px;
  margin-top: 0px;
  opacity: 0.95;
}

</style>
