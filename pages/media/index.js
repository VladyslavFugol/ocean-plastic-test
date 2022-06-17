import { groq } from 'next-sanity'
import { getClient } from '../../utils/sanity'
import { MediaPage } from '../../scenes/MediaPage'

const mediaRequest = groq`*[_type == 'media']`

function Media(props) {
  const { mediaData } = props

  return (
    <div>
      <MediaPage mediaData={mediaData} />
    </div>
  )
}

export async function getStaticProps() {
  const mediaData = await getClient().fetch(mediaRequest)

  return {
    props: {
      mediaData,
    },
  }
}

export default Media
