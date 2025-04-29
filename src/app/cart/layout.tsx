import Footer from '@/components/shared/footer/page'
import Header from '@/components/shared/header/page'
import { LayoutProps } from '@/interfaces/interface'

export default function CartLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header/>
      <main className='p-8 m-10'>{children}</main>
      <Footer/>
    </div>
  )
}