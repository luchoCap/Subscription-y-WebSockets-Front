<template>
  <div class="hello">
    <v-data-table
    :headers="headers"
    :items="books"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
import LabProvider from '../providers/subscriptionLabProvider'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
   
  },
  data(){
    return{
       books:[],
       headers:[
         {
           text:'Title',value:'title'
         },
         {
           text:'Author',value:'author'
         }
       ]
    }
  },
  mounted(){
    this.getBooks()
  },
  methods:{
    getBooks(){
      LabProvider.books().then( books => {
        this.books = books.data.books
        console.log('books',books)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
