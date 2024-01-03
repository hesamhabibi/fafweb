import {gql} from "@apollo/client";

const brand_label_mockup = gql`
  {
    title
    seo {
      url
    }
  }
`;

export {
  brand_label_mockup
}