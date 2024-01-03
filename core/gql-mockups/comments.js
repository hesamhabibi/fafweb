import {gql} from "@apollo/client";

const comment_mockup  = gql`
      {
                title
                text
                updatedAt
                user_product_rate
                user {
                    full_name
                }
      }
`;


const comment_pagination_mockup = gql`
      {
            paginate 
            data ${comment_mockup}
        }
`;

export {
  comment_mockup,
  comment_pagination_mockup
}

