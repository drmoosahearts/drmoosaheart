
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-2xl font-bold text-medical-blue">
          Dr. M.K. Moosa Kunhi
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/services" className={navigationMenuTriggerStyle()}>
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/congenital-heart-disease" className={navigationMenuTriggerStyle()}>
                CHD
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/medical-tourism" className={navigationMenuTriggerStyle()}>
                Medical Tourism
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/achievements" className={navigationMenuTriggerStyle()}>
                Achievements
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Navbar;
