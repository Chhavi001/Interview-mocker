import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/*handler to store the user data*/}
      <Header/>
      <main>
        <Outlet/>
      </main>
      {/* <Footer/> */}

    </div>
  )
}

export { PublicLayout }
export default PublicLayout
