import Footer from '@/components/shared/footer/page'
import Header from '@/components/shared/header/page'
import { LayoutProps } from '@/interfaces/interface'

export default function CheckoutLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header/>
      <main className='py-20'>{children}</main>      <Footer/>
    </div>
  )
}
