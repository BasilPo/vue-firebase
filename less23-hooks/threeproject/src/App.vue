<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar />
    <Blogs />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Blogs from './components/Blogs.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Blogs
  },
  data(){
    return{
      title:'About hooks and others'
    }
  }
}
</script>

<style>
#app{
  text-align: center;
}
</style>
