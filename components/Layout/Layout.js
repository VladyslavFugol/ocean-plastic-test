import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function Layout({ children, theme }) {
  return (
    <div>
      <Header theme={theme}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
