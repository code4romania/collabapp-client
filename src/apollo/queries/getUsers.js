import gql from 'graphql-tag'

const GET_USERS = gql`
    query GetUsers() {
        getUsers() {
            id
            name
        }
    }
`

export default GET_USERS
