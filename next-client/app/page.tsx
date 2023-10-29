import HomeHeader from "@/components/home/HomeHeader";
import HomeTicker from "@/components/home/HomeTicker";
// import { main }from "../tailwind/home";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <main className={main}>
    // <main className="max-w-screen max-h-screen border-2 border-blue-700">
    // <main className="absolute w-auto h-auto p-0 md:px-20 lg:px-40 xl:px-60 border-2 border-blue-700">
    <main className="absolute w-auto h-auto p-0 border-2 border-blue-700">
      <HomeTicker />
      <HomeHeader />
    </main>
  )
}
