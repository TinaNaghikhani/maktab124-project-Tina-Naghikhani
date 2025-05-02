import Footer from '@/components/shared/footer/page'
import Header from '@/components/shared/header/page'
import { LayoutProps } from '@/interfaces/interface'

export default function PaymentLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}