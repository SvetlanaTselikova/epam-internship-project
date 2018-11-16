<template>
  <div id="services">
    <layout>
      <div slot='content'>
        <div class='h1'>Мужские стрижки</div>
        <div class='content__services-prices'>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Мастер</div>
            <div class='content__services-prices__block__price'>1500 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Топ мастер</div>
            <div class='content__services-prices__block__price'>1700 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Арт-директор</div>
            <div class='content__services-prices__block__price'>1800 рублей</div>
          </div>  
        </div>

        <div class='h1'>Женские стрижки</div>
        <div class='content__services-prices'>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Мастер</div>
            <div class='content__services-prices__block__price'>2500 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Топ мастер</div>
            <div class='content__services-prices__block__price'>2700 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Арт-директор</div>
            <div class='content__services-prices__block__price'>2800 рублей</div>
          </div>  
        </div>

        <div class='h1'>Укладка</div>
        <div class='content__services-prices'>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Повседневная</div>
            <div class='content__services-prices__block__price'>1500 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Праздничная</div>
            <div class='content__services-prices__block__price'>1800 рублей</div>
          </div>  
        </div>

        <div class='h1'>Окрашивание</div>
        <div class='content__services-prices'>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Придание оттенка</div>
            <div class='content__services-prices__block__price'>3500 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Омбре/болояж/airtouch</div>
            <div class='content__services-prices__block__price'>7000 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Осветление корней+тонирование</div>
            <div class='content__services-prices__block__price'>6000 рублей</div>
          </div>  
        </div> 

        <div class='h1'>Маникюр</div>
        <div class='content__services-prices'>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Маникюр без покрытия </div>
            <div class='content__services-prices__block__price'>900 рублей</div>
          </div>
          <div class='content__services-prices__block'>
            <div class='content__services-prices__block__service'>Маникюр с покрытием шеллак </div>
            <div class='content__services-prices__block__price'>1600 рублей</div>
          </div> 
          <div class='content__services-prices__block'>
              <div class='content__services-prices__block__service'>Френч</div>
              <div class='content__services-prices__block__price'>1800 рублей</div>
            </div>        
        </div> 
      </div>
    </layout>
    </div>

</template>

<script>
import layout from '../components/Layout.vue'
export default {
  name: 'services',
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
.content__services-prices {
  margin-bottom: 80px;
}

.content__services-prices__block {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 80px;
  border-bottom: solid rgb(70, 68, 68) 1.5px;
  color: rgb(54, 53, 53);
  font: 700 1.3em Arial;
  width: 45%;
}

.content__services-prices__block__price {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}

.content__services-prices__block__service {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
</style>
