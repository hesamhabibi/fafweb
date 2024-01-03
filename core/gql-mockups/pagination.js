import {image_media_mockup} from "./media";
import {gql} from "@apollo/client";

export default gql`
     {
        total
        limit
        page
        pages
        hasPrevPage
        hasNextPage
     }
`