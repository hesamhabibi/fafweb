import {gql} from "@apollo/client";

export default gql`
     {
            labels {
                id
                key
                title
                value
            }
            variant {
                id
                name
                type
            }
     }
`