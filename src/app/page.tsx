import Cart from '@/components/shared/cart/cart'
import Footer from '@/components/shared/footer/page'
import Header from '@/components/shared/header/page'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="flex-grow p-8">
        <Cart/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis illo voluptatum numquam totam recusandae, enim expedita. Officia aut fuga repudiandae nesciunt blanditiis vel, officiis minus numquam atque quibusdam quidem necessitatibus maxime, minima omnis aspernatur sequi voluptatum unde dolor? Soluta nobis fuga, laborum mollitia exercitationem odio quis pariatur consequuntur reprehenderit animi. Voluptas pariatur eligendi error deleniti quam excepturi natus aliquid commodi voluptatem, ipsa maiores nobis. Necessitatibus nisi doloremque iure similique sunt quidem tempore possimus, qui facilis debitis repellat ipsa, vero eos. Corporis voluptatibus reiciendis suscipit praesentium! Numquam libero accusantium iusto a, accusamus aut blanditiis tempore culpa ipsa placeat totam tenetur expedita obcaecati. Explicabo sequi nihil perspiciatis facilis fuga harum quaerat praesentium eius perferendis facere delectus commodi nisi velit molestias nulla officia doloremque consequuntur ipsum, placeat fugiat consectetur unde dolores obcaecati? Unde laborum nemo blanditiis, natus officia saepe at corporis voluptates iste beatae perferendis fuga explicabo incidunt pariatur dolor! Exercitationem, quae nulla aperiam praesentium earum eum illum fugiat? Aliquid veritatis, possimus totam qui excepturi perferendis ea alias, ipsum, voluptatibus molestias quasi doloremque temporibus delectus. Accusamus, libero dolore dolor deleniti asperiores mollitia culpa iusto sapiente dicta eum deserunt eligendi incidunt, commodi laudantium. Reiciendis quaerat odit debitis animi enim repellat excepturi quibusdam accusamus?</p>

      </main>
      <Footer />
    </div >
  )
}