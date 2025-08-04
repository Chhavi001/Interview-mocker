import {cn} from "@/lib/utils";
import{useAuth} from "@clerk/clerk-react";
import { Container } from "./container";
import { NavigationRoutes } from "./ui/navigation-routes";
import { ProfileContainer } from "./ui/profile-container";
import { NavLink } from "react-router-dom";
import ToggleContainer  from "./ui/toggle-container";
const Header = () => {
  const { userId } = useAuth();
  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
      <Container>
       <div className="flex items-center gap-4 w-full">
        {/* logo section*/}
        {/*navigation section*/}
        <nav className="hidden md:flex items-center gap-3"> 
        <NavigationRoutes />
        {userId && (
          <NavLink key={"/generate"} to={"/generate"} className={({isActive})=>cn(" text-base text-neutral-600",isActive && "text-neutral-900 font-semibold")}> 
            Take an Interview
          </NavLink>
        )}
        </nav>
        {/*profile section*/}
          <div className="ml-auto flex items-center gap-6">
            {/*profile swection*/}
            <ProfileContainer/>
            {/*mobile toggle  section*/}
            <ToggleContainer />
          </div>
       </div>
      

      </Container>
    
    </header>
  );
};

export default Header
