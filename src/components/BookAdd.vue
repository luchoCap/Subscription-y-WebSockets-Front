<template>
    <v-btn
          color="purple"
          dark
          @click="addBook"
        >
          Add Book
        </v-btn>
</template>

<script>
import BookProvider from '../providers/subscriptionLabProvider'
export default {
    name:'BottomAddBook',
    data(){
        return{
            book:{
                title:'Don Quijote',
                author:'Cervantes'
            }
        }
    },
    methods:{
        addBook(){
            BookProvider.addBook(this.book).then(e => {
                    console.log(e)

                })
                .catch(e => console.log('error',e))
        }
    }
}
</script>