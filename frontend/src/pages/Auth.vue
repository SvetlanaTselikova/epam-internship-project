<template>
  <div id="Auth">
    <form-blank>
      <div slot='form__name'>Авторизация</div>
      <div slot='form__content'>
        <div class='input-block'>
          <label class='label-input'>
            Телефон
            <input v-model='phone' @click='clearErr'>
            </label>
            <span class='input__error'  v-if='!$v.phone.required&&tryAuth'>Введите телефон</span>
            <span class='input__error'  v-if='!$v.phone.numeric'>Только цифры</span>
            <span class='input__error'  v-if='errPhone'>Пользователь не найден</span>
        </div>

        <div class='input-block'>
          <label class='label-input'>
            Пароль
            <input  v-model='password' @click='clearErr' type='password'>
            </label>
            <span class='input__error'  v-if='!$v.password.required&&tryAuth'>Введите пароль</span>
            <span class='input__error'  v-if='errPass&&!errPhone'>Неверный пароль</span>
        </div>
 
        <button class='button-reg' @click='auth' >  Войти </button> 
        <router-link to='/Register'><div class='reg'>Регистрация</div> </router-link>            
      </div>
    </form-blank>
  </div>
</template>

<script>
import form__blank from '../components/Form.vue'
import {auth} from '..//store/actions/auth'
import { validationMixin } from 'vuelidate'
import { required,numeric,sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'auth',
  data () {
    return {
      phone: '',
      password: '' ,
      tryAuth: false,
      errPhone: false,
      errPass: false
    }
  },

  components: {
    'form-blank':form__blank
  },

  mixins: [validationMixin],

  validations: {
    phone:{
        required,
        numeric
    },
    password:{
        required,
    }
  },  

  methods : {
    clearErr () {
      this.errPhone=false
      this.errPass=false
    },
    auth () {
      this.errPhone=false
      this.errPass=false
      this.tryAuth=true
      if(!this.$v.$invalid) {
        let user = {
          phone: this.phone,
          password: this.password
        }
        this.$store.dispatch(auth, user).then(() => {
          this.$router.push('/Account')
          }).catch (err=>{
            this.errPhone=err.errPhone
            this.errPass=err.errPass
        })
      }
    }
  }
}
</script>

<style lang="scss">
.reg {
  font: 500 17px Arial;
  color: rgb(122, 118, 118);
  text-decoration: underline;
  margin-bottom: 20px;
}
</style>