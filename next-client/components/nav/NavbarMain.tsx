import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"

export default function NavbarMain() {
  return (
    <Navbar>
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
        <Button as={Link} href="#" color="primary" variant="flat">
          SignUp
        </Button>
      </NavbarContent>
    </Navbar>
  )
}