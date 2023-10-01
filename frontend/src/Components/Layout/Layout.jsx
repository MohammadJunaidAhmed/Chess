import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        {/* TODO: Add NavBar */}
        <section className='min-h-screen h-fit bg-blue-200'>
            <Outlet/>
        </section>
        {/* TODO: Add Footer */}
    </div>
  )
}

export default Layout