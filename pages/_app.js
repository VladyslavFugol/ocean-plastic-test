import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import '@/styles/index.scss'

function MyApp({ Component, pageProps }) {
  const pages = ['/media']

  const router = useRouter()
  return (
    <Layout theme={pages.includes(router.route) ? 'white' : 'cappuccino'}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
