<template>
  <div id="Record">
    <div v-if='!success'>
    <form-blank>
      <div slot='form__name'>Запись</div>
      <div slot='form__content'>
        <div class='input-block'>
        <label class='label-input'>
          Имя
        <input  disabled v-bind:value='profile.name'>
        </label>
        </div>


        <div class='input-block'>
        <label class='label-input'>
         Телефон
        <input disabled v-bind:value='profile.phone' >
        </label>
        </div>

        <div class='input-block'>
        <label class='label-input'>
         Дата
        <input  type='date' v-model="date" v-bind:min="curDate" >
        </label>
        <span class='input__error'  v-if='!$v.date.required&&tryRecord'>Выберите дату</span>
        </div>

        <div class='input-block'>
        <label class='label-input'>
         Время
        <input type='time'  v-model='time' min="08:00" max="21:00">
        </label>
        <span class='input__error'  v-if='!$v.time.required&&tryRecord'>Выберите время</span>
        </div>  
        <div class='input-block'>
        <label class='label-input'>
         Услуга
        <select v-model="service">
            <option >Мужская стрижка</option>
            <option  >Женская стрижка</option>
            <option >Укладка</option>
             <option >Маникюр</option>
        </select>
        </label>
        <span class='input__error'  v-if='!$v.service.required&&tryRecord'>Выберите услугу</span>
        </div>
        <button class='button-reg' @click='record' >  Записаться
        </button> 
                
      </div>
    </form-blank>
    </div>
    <div v-if='success'>
      <form-blank>
        <div slot='form__name'>Вы успешно записаны!</div>
        <div slot='form__content'>
        <router-link to='/Account'><div class='enter'>Личный кабинет</div> </router-link>  
        </div>
      </form-blank>      
    </div>
  </div>
</template>

<script>
import form__blank from '../components/Form.vue'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
export default {
  name: 'record',
  data () {
    return {  
      date:'',
      time:'',
      service:'',
      tryRecord:false,
      success: false
    }
  },

  mixins: [validationMixin],

  validations: {
    date:{
        required,
    },
    time:{
        required
    },
    service:{
        required
    }
  }, 

  components: {
    'form-blank':form__blank
  },

  computed: {
  ...mapState({profile: state => state.user.profile}),
  curDate: function () {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    return today
    }
  },

  methods : { 
    record () {
      this.tryRecord=true
      if(!this.$v.$invalid) {
        let record = {
          name: this.profile.name,
          phone: this.profile.phone,
          date: this.date,
          time: this.time,
          service: this.service
        }
        this.$store.dispatch('record',record).then(() => {
        this.success=true
        })
      }
    }
  }
}
</script>

<style lang="scss">
.enter {
  font: 500 17px Arial;
  color: rgb(122, 118, 118);
  text-decoration: underline;
  margin-bottom: 20px;
}
</style>
