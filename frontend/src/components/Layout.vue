<template>
    <div id='layout'>
        <div class='inf'>
            <div class='inf__container'>
                <div class='inf__location'>Заставская 79</div>
                <div class='inf__phone'>8-965-050-08-73</div>
                <div class='inf__time'>Ежедневно с 8:00 до 21:00</div>
            </div>

            <div class='inf__socialNetworks'>
                <a href='#'> <div class='inf__inst'></div> </a>     
                <a href='#'><div class='inf__twitter'></div> </a>
                <a href='#'><div class='inf__vk'></div> </a>
            </div>  
        </div> 
        <div class='header' >
            <router-link to='/'><div class='header__logo'></div></router-link>
            <div class='header__menu'>
                <router-link to='/'><div class='header__menu__item'>Главная</div></router-link>
                <router-link to='/Record'><div class='header__menu__item'>Запись</div></router-link>
                <router-link to='/Services'> <div class='header__menu__item'>Услуги и цены</div></router-link>
                <router-link to='/Account'><div class='header__menu__item'>Личный кабинет</div></router-link>
                <router-link to='/Gallery'><div class='header__menu__item'>Галерея</div></router-link>
            </div>
        </div>
        <div class='content' >
            <slot name='content'></slot>
        </div>
        <div class='footer'>
            <div class='footer__copyright'>© Все права защищены. </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Layout',
}
</script>

 <style lang="scss" scoped>
#layout { 
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
    flex: 1 0 auto;
}

</style>
