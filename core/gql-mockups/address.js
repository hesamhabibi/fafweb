import {gql} from "@apollo/client";

export default gql`
  {
    id
    title
    address
    city_id
    is_default
    location
    mobile
    postal_code
    state_id
    city {
      name
    }
    state {
      name
    }
  }
`