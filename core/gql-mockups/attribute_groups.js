import {gql} from "@apollo/client";

export default gql`
      {
            attribute_group {
                title
                active
            }
            attributes {
                attribute {
                    title
                    active
                }
                attribute_value {
                    value
                }
            }
      }
`