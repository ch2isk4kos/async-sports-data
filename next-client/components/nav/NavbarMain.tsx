"use client"
import { useState } from "react"
import { 
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/react"

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "About",
    "Contact",
    "Something Else"
  ]

  const dropdownIcons = {
    about: "AIcon",
    chevron: "ChevIcon",
    contact: "CIcon",
    else: "EIcon"
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      {/* Left Side Content */}
      <NavbarContent>
        {/* Menu Toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close" : "Open"}
          className="sm:hidden"
        />
        {/* Menu */}
        <NavbarMenu>
          { menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href="#"
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                size="lg">
                  {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        {/* LOGO */}
        <NavbarBrand>
          <h1>LOGO</h1>
        </NavbarBrand>
      </NavbarContent>
      {/* Links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#" color="foreground">
            MLB
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            NFL
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            NBA
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Right Side Content */}
      <NavbarContent justify="end">
        {/* Signup */}
        {/* <Button as={Link} href="#" color="primary" variant="flat">
          SignUp
        </Button> */}
        {/* Dropdown Root */}
        <Dropdown>
          <NavbarItem>
            {/* Dropdown Toggle */}
            <DropdownTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                disableRipple
                endContent={dropdownIcons.chevron}
                radius="sm"
                variant="light"
              >
                v More
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          {/* Dropdown Menu */}
          <DropdownMenu
            className="w-[340px]"
            aria-label="More"
            itemClasses={{ base: 'gap-4' }}
          >
            {/* About */}
            <DropdownItem
              key="about"
              description="about description"
              startContent={dropdownIcons.about}
            >
              About
            </DropdownItem>
            {/* Contact */}
            <DropdownItem
              key="contact"
              description="contact description"
              startContent={dropdownIcons.contact}
            >
              Contact
            </DropdownItem>
            {/* Something Else */}
            <DropdownItem
              key="else"
              description="else description"
              startContent={dropdownIcons.else}
            >
              Something Else
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}