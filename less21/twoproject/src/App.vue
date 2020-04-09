<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend" /> <!--обмін даними між компонентами-->
    <OnlineFriends :friends="friends" />
    <!--З кореня до дочірніх - props, навпаки -  імітація події -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends
  },
  data(){
    return{
      title:'My second vue app',
       friends:[
                {name:'Mario',online:true},
                {name:'Luigi',online:false},
                {name:'Toad',online:true},
                {name:'Bowser',online:false}
            ]
    }
  },
  methods:{
    deleteFriend(payload){
      console.log(payload) /*імітація видалення елемента з масиву */
      this.friends = this.friends.filter(friend => friend.name !== payload.name)
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
