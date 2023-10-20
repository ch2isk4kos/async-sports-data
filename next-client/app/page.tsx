import NavbarMain from "@/components/nav/NavbarMain";
import HomeHeader from "@/components/home/HomeHeader";
// import { main }from "../tailwind/home";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <main className="flex min-h-screen flex-col p-24">
    // <main className={main}>
    <main className="max-w-screen h-screen border-2 border-blue-700">
      <NavbarMain />
      <HomeHeader />
    </main>
  )
}
