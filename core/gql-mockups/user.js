import {image_media_mockup} from "./media";
import {gql} from "@apollo/client";

export default gql`
  {
    name
    last_name
    full_name
    username
    email
    mobile
    gender
    media ${image_media_mockup}
  }
`