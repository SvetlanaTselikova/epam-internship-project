<template>
  <div id="Register">
    <div v-if='!success'>
    <form-blank>
     
      <div slot='form__name'>Регистрация</div>
      <div slot='form__content'>
        <div class='input-block'>
        <label class='label-input'>
          Имя
        <input  v-model='name' >
        </label>
        <span class='input__error'  v-show='!$v.name.required&&tryReg'>Введите имя</span>
        </div>


        <div class='input-block'>
        <label class='label-input'>
         Телефон
        <input v-model='phone' @click='clearErr'>
        </label>
        <span class='input__error'  v-if='!$v.phone.required&&tryReg'>Введите телефон</span>
        <span class='input__error'  v-if='!$v.phone.numeric'>Только цифры</span>
        <span class='input__error'  v-if='err'>Пользователь уже существует</span>
        </div>

        <div class='input-block'>
        <label class='label-input'>
         Пароль
        <input  v-model='password' type='password'>
        </label>
        <span class='input__error'  v-if='!$v.password.required&&tryReg'>Введите пароль</span>
        <span class='input__error'  v-if='!$v.password.minLength'>Не менее 6-ти символов</span>
        </div>

        <div class='input-block'>
        <label class='label-input'>
         Повторите пароль
        <input  v-model='passConfirm' type='password'>
        </label>
        <span class='input__error'  v-if='!$v.passConfirm.required&&tryReg'>Повторите пароль</span>
        <span class='input__error'  v-if='!$v.passConfirm.sameAsPass&&tryReg&&$v.passConfirm.required'>Пароли не совпадают</span>
        </div>  
        <button class='button-reg' @click='register' >  Зарегистрироваться  
        </button> 
        <router-link to='/Auth'><div class='enter'>Войти</div> </router-link>            
      </div>
  
  
    </form-blank>
    </div>
    <div v-if='success'>
      <form-blank>
          <div slot='form__name'>Вы успешно зарегистрированы!</div>
          <div slot='form__content'>
          <router-link to='/Auth'><div class='enter'>Войти</div> </router-link>  
          </div>
      </form-blank>
    </div>
  </div>
</template>

<script>
import form__blank from '../components/Form.vue'
import { validationMixin } from 'vuelidate'
import { required,numeric,sameAs,minLength } from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data () {
    return {
      name: '',
      phone: '',
      password: '',
      passConfirm: '',  
      tryReg: false,
      success: false,
      err:false,
    }
  },

  mixins: [validationMixin],

  validations: {
    name:{
        required,
    },
    phone:{
        required,
        numeric
    },
    password:{
        required,
        minLength: minLength(6)
    },
    passConfirm:{
        required,
        sameAsPass:sameAs('password')
    }
  },  

  components: {
    'form-blank':form__blank
  },

  methods : {
    clearErr () {
      this.err=false
    },

    register () {
      this.err=false
      this.tryReg=true
      if(!this.$v.$invalid) {
        let user = {
          name: this.name,
          phone: this.phone,
          password: this.password
        }
        this.$store.dispatch('register',user).then(() => {
          this.success=true
        }).catch (()=>{
          this.err=true
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
