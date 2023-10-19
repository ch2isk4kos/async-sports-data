import { useState } from "react"
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menutItems = [
    "About",
    "Contact",
    "Something Else"
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* LOGO */}
      <NavbarBrand>
        <h1>LOGO</h1>
      </NavbarBrand>
      {/* Links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            MLB
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            NFL
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            NBA
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Right Side Content */}
      <NavbarContent justify="end">
        {/* Signup Button */}
        <Button as={Link} href="#" color="primary" variant="flat">
          SignUp
        </Button>
        {/* Navbar Menu */}
        <NavbarMenu>
          { menutItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href="#"
                color={
                  index === 2 ? "primary" : index === menutItems.length - 1 ? "danger" : "foreground"
                  }
                size="lg">
                  {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  )
}