<template>
<div>
    <v-btn
          color="purple"
          dark
          @click="addBook"
        >
          Book Suscribe
        </v-btn>
        <label class="mr-2 ml-3">Cant de Subscripciones: {{cantSubs}}</label>
</div>
    
</template>

<script>
import BookProvider from '../providers/subscriptionLabProvider'
export default {
    name:'BottomAddBookSuscribe',
    data(){
        return{
            book:{
                title:'Don Quijote',
                author:'Cervantes'
            },
            cantSubs:0
        }
    },
    
    methods:{
        addBook(){
            console.log('Me he subscripto')
            BookProvider.itemAdded().subscribe(book => {
                    this.cantSubs++
                    console.log('Subscribe Book',book)
                    
                })
        }
    }
}
</script>