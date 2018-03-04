import gql from 'graphql-tag';

const CREATE_USER_MUTATION = gql`
    mutation CreateUserMutation(
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $password: String!,
    ) {
        createUser (
            user: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
            }
        ) {
            id
            firstName
            lastName
            email
        }
    }
`;

export default CREATE_USER_MUTATION;
