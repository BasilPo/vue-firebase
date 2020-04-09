<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar />
    <!-- щоб стиль нижчого nav  був іншим в файлі Navbar.vue задаєм область видимості для стилю -->
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
// так вставляю дочірній компонент
import Navbar from './Navbar'

export default {
  name: 'app',
  /*регістрація дочірнього компоненту*/
  components:{
    // Navbar : Navbar
    Navbar
  },
  data () {
    return {
      title: 'My first Vue app'
    }
  }
}
</script>

<style>
  h1{
    color:#444;
    font-weight: normal;
    text-align: center;
  }
</style>
