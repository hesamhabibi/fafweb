import {gql} from "@apollo/client";

const image_media_mockup = gql`
  {
    alt
    url
  }
`;

const image_gallery_media_mockup = gql`
  {
    alt
    url
    main
  }
`;

const image_detail_media_mockup = gql`
  {
    alt
    url
    media {
      extension
      information {
        width
        height
        codec_name
        codec_long_name
      }
    }
  }
`;

const media_mockup = gql`
  {
    url
  }
`;

const media_detail_mockup = gql`
  {
    url
    media {
      extension
      information {
        width
        height
        duration
        codec_name
        codec_long_name
      }
    }
  }
`;

const video_media_mockup = media_mockup;
const audio_media_mockup = media_mockup;
const video_media_detail_mockup = media_detail_mockup;
const audio_media_detail_mockup = media_detail_mockup;

export {
  image_media_mockup,
  image_detail_media_mockup,
  image_gallery_media_mockup,
  video_media_mockup,
  audio_media_mockup,
  video_media_detail_mockup,
  audio_media_detail_mockup
}

