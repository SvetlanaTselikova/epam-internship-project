<template>
  <div id="account">
    <layout>
      <div slot='content'>
        <div class='acc__content '>
          <div class='nav-menu '>

            <div class='nav-menu__item' v-bind:class="{ 'nav-menu__item-selected': state.requests }" @click='chooseRequests'>
              Мои записи
            </div>
            <div class='nav-menu__item' v-bind:class="{ 'nav-menu__item-selected': state.help }" @click='chooseHelp'>
              Помощь 
            </div>   
            <div class='nav-menu__item' v-bind:class="{ 'nav-menu__item-selected': state.exit }" @click='exit'>
              Выход 
            </div>                                
          </div>

          <div v-if="state.requests">
            <div class='acc__content__desc '>
              <div class='h2'>Здравствуйте, {{profile.name}}!</div>
              <div class='acc__content__desc__about'>
                <div v-if="!hasRecords">На данный момент у вас нет записей</div>
                <div v-if="hasRecords">
                  Ваши записи:
                  <table >
                    <tr>
                      <th>Услуга</th>
                      <th>Дата</th>
                      <th>Время</th>
                      </tr>
                    <tr v-for="record in records" v-bind:key="record.id">
                      <td>{{record.service}}</td>
                      <td>{{record.date}}</td>
                      <td>{{record.time}}</td>
                      </tr>
                  </table>
                </div>
            <router-link to='/Record'><button class='button-small'>Записаться</button></router-link>
              </div>
            </div>
          </div>   

          <div v-if="state.help">
            <div class='acc__content__desc '>
              <div class='h2'>Помощь</div>
              <div class='acc__content__desc__about'>
              В случае возникновения неполадок, а так же при появлении вопросов о пользовании сайтом просьба обращаться
              по адресу beautyHouse@gmail.com или по телефону 8-965-050-08-73
              </div>
            </div>
          </div>
        </div>
      </div>
    </layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import layout from '../components/Layout.vue'
export default {
  name: 'account',
  data () {
    return {
    state:{
     exit: false,
     requests: true,
     help: false
    }
    }
  },
  computed: {
  ...mapState({profile: state => state.user.profile}),
  ...mapState({records: state => state.record.records}),
  hasRecords: function () {
    if(this.records.length===0) 
    return false
    else return true
    }
  },

  components: {
    'layout':layout
  },
  methods : {
    chooseHelp () {
      for (let item in this.state) 
      this.state[item]=false
      this.state.help=true
    },
    chooseRequests () {
      for (let item in this.state) 
      this.state[item]=false
      this.state.requests=true
    },
    exit () {
        this.$store.dispatch('authLogout').then(() => {
          this.$router.push('/')
       })
    }             
  }
}
</script>

<style lang="scss">
#account {
  height: 100%;
}

.acc__content {
  margin: 60px;
  display: flex;
}

.nav-menu__item {
  width: 220px;
  height: 50px;
  color: rgb(65, 55, 55);
  font: 600 18px Arial;
  border: solid rgb(194, 179, 179) 1px;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}

.nav-menu__item-selected {
  border-left: solid rgb(167, 133, 236) 5px;
}

.nav-menu__item:hover {
  background: rgb(250, 239, 239);
}

.acc__content__desc {
  margin-left: 100px;
}

.acc__content__desc__about {
  color: rgb(41, 36, 36);
  font:  italic 300 22px Arial;
  line-height: 1.7;
}

table {
margin-top: 10px;
border-collapse: collapse;
text-align: center;
}

th {
background: rgb(204, 175, 231);
color: white;
padding: 10px 20px;
}

th, td {
border-style: solid;
border-width: 0 1px 1px 0;
border-color: white;
}

td {
background: rgb(234, 216, 243);
padding: 15px 20px;
}

th:first-child, td:first-child {
text-align: left;
}

</style>
