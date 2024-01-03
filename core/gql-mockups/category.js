import {gql} from "@apollo/client";

const category_label_mockup = gql`
        {
            title
            seo {
                url
            }
        }
`


export {
  category_label_mockup
}