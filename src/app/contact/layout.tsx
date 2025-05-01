import Footer from '@/components/shared/footer/page'
import Header from '@/components/shared/header/page'
import { LayoutProps } from '@/interfaces/interface'

export default function ContactLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header/>
      <main className='p-40'>{children}</main>      <Footer/>
    </div>
  )
}