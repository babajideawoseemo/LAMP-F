// App.vue

<template>  
<div id='app'>
    <RegisterComponent />
    <transition name="fade">
      <router-view></router-view>
    </transition>
</div>
</template>

<style src="./components/Register.css" scoped>  
    
</style>

<script>
  import RegisterComponent from './components/RegisterComponent.vue'
    export default {
      name: 'app',
      components: {
        RegisterComponent
      }
    }
</script>