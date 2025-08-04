import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useAuth } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import NavigationRoutes from '@/components/ui/navigation-routes'

const ToggleContainer = () => {
    const { userId } = useAuth();
  return (
    <Sheet>
    <SheetTrigger className="block md:hidden">   
        <Menu/>
    </SheetTrigger>
      <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
            <nav className="gap-6 flex flex-col items-start">
             <NavigationRoutes isMobile />
        {userId && (
          <NavLink key={"/generate"} to={"/generate"} className={({isActive})=>cn(" text-base text-neutral-600 mt-6",isActive && "text-neutral-900 font-semibold")}> 
            Take an Interview
          </NavLink>
        )}
        </nav>
       </SheetHeader>
       </SheetContent>
     </Sheet>
  )
}

export default ToggleContainer


