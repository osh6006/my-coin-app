"use client";

import Container from "./Container";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";
import UserMenu from "./navbar/UserMenu";
import { SafeUser } from "../Types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 md:py-0 border-b-[1px]">
        <Container>
          <div className="flex flex-grow items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
