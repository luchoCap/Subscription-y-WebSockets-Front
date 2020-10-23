import apolloClient from './../apollo-client'


class booksProvider{

    books() {
        return apolloClient.query({
            query: require('./gql/books.graphql')
        })
    }
    
    itemAdded(){

        return apolloClient.subscribe({
            query: require('./gql/itemAdded.graphql')
        })
    }

    addBook({title,author}){

        return apolloClient.mutate({
            mutation: require('./gql/addBook.graphql'),
            variables: {title,author}
        })
    }
   
}

export default new booksProvider