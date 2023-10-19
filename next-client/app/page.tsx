import { Button } from "@nextui-org/button";
import { main }from "../tailwind/home";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <main className="flex min-h-screen flex-col p-24">
    <main className={main}>
      <h1>Home</h1>
      <Button>Enter</Button>
    </main>
  )
}
