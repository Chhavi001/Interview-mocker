import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavigationRoutesProps {
        isMobile?: boolean;
}

const MainRoutes = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About"
  },
  {
    href: "/features",
    label: "Features"
  }
];

export const NavigationRoutes = ({isMobile=false}: NavigationRoutesProps) => {
  return (
    <nav>
      <ul className={cn("flex items-center gap-6",isMobile && "items-start flex-col gap-8")}>
        {MainRoutes.map(route=>(
          <NavLink key={route.href} to={route.href} className={({isActive})=>cn(" text-base text-neutral-600",isActive && "text-neutral-900 font-semibold")}> 
            {route.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationRoutes
