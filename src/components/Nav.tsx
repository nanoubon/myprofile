
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

function Nav() {
    return (
        <Navbar className={'flex w-full fixed pb-10 pt-10'} >
            <NavbarBrand href="https://flowbite-react.com">
                {/*<img src={""} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />*/}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default Nav;
