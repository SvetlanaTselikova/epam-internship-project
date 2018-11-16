<template>
  <div id='home'>
    <layout>
      <div slot='content'>

        <div class='content__inf'>
          <div class='content__inf__block'>
            <div class='content__inf__logo'>BeatyHouse</div>
            <div class='content__inf__check'>Профессиональные стилисты</div>
            <div class='content__inf__check'>Качественные материалы</div>
            <div class='content__inf__check'>Приятные цены</div>
            <router-link to='/Record'><div class='content__inf__btn'>Записаться к мастеру</div></router-link>
          </div>
          
          <img class='content__inf__photo' src='../images/photo.png'>
        </div>

        <div class='h1 content__h1'>Наши услуги</div>
        <div class='content__services'>
          <div class='content__services__item'><img src='../images/man_haircut.jpg' class='content__services__item__img'>
          Мужская стрижка</div>
          <div class='content__services__item'><img src='../images/woman_haircut.jpg' class='content__services__item__img'>Женская стрижка</div>
          <div class='content__services__item'><img src='../images/hair_coloring.jpg' class='content__services__item__img'>Окрашивание</div>
          <div class='content__services__item'><img src='../images/styling.jpg' class='content__services__item__img'>Укладка</div>
          <div class='content__services__item'><img src='../images/manicure.jpg' class='content__services__item__img'>Маникюр</div>
        </div>
        
        <div class='h1'>О салоне</div>
        <div class='content__about'>
          У нас в салоне работают стилисты-профессионалы своего дела, имеющие качественное образование и многолетний опыт работы в сфере, что позволяет без опасений доверить нам заботу о ваших волосах.
          Высокий уровень квалификации специалистов означает, что любые работы от самых простых стрижек и укладок до сложного окрашивания, осветления, свадебных причесок, будут выполнены качественно
            и дадут вам много положительных эмоций. 
          BeutyHouse- ваш поиск парикмахера окончится на нас! 
        </div>

      </div>
    </layout>
  </div>
</template>

<script>
import layout from '../components/Layout.vue'
export default {
  name: 'app',
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
.content__inf {
  height: 440px;
  position: relative;
  background: rgb(245, 241, 241);
  opacity: 0.95;
}

.content__inf__photo {
  position: absolute;
  height: 400px;
  bottom: 0px;
  right: 30px;
}

.content__inf__block {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12%;
}

.content__inf__check {
  height: 40px;
  color: rgb(23, 16, 29);
  font: italic 300 1.2em Verdana;
  padding-left: 47px;
  line-height: 40px;
  background-image: url(../images/check.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 40px 40px;
  margin-bottom: 8px;
  
}
.content__inf__logo {
  color: rgb(39, 15, 53);
  font: italic 300 38px Verdana;
  margin-bottom: 20px;
}
.content__inf__btn {
  margin-top: 20px;
  background: linear-gradient(to right, rgb(167, 133, 236) 8%,rgb(240, 126, 236) 50%, rgb(238, 171, 238) 90%);
  opacity: 0.8;
  color: white;
  display: inline-block;
  font: italic 500 26px Verdana;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-align: center;
  border-radius: 40px 40px 40px 40px;
}

.content__services {
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.content__services__item {
  width: 25%;
  margin-right: 2%;
  margin-left: 2%;
  margin-bottom: 40px;
  text-align: center;
  color: rgb(56, 50, 50);
  font:  700 20px Arial;
}

.content__services__item__img {
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20%;
}
.content__about {
  text-align: center;
  color: rgb(41, 36, 36);
  font:  italic 300 24px Arial;
  margin-left: 200px;
  margin-right: 200px;
  line-height: 1.7;
}
</style>
