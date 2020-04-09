<template>
    <div class="blogs">
        <h2>{{blogTitle}}</h2>
        <input type="text" v-model="searchTerm">
        <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.body| snippet }}</p> 
            <!--Filter-->
        </div>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Blogs',
    data(){
        return{
            blogTitle:'Blogs',
            posts:[],
            searchTerm:''
        }
    },
    methods:{
        changeTitle(){
            this.blogTitle = 'Amazing Blog Site'
        }
    },
    computed:{
        filteredPosts(){
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    // beforeCreate(){
    //     alert('beforeCreate hook')
    // },
    created(){
        // alert('created hook')
        //alax запит задопомогою бібліотеки axios : npm install axios --save
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response =>{
            console.log(response)
            this.posts = response.data
        }).catch(error =>{
            console.log(error)
        })
    }
    // beforeUpdate(){
    //     alert('beforeUpdate hook')
    // }
}
</script>

<style>

</style>


