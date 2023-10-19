"use client"
import { Image } from "@nextui-org/image";
// import Image from "next/image";

export default function HomeHeader() {
  return (
    <section className="flex flex-col md:flex-row items-center h-auto border-2 border-rose-500">
      {/* Row Column 1 */}
      {/* <div className="basis-1/2 h-auto border-2 border-blue-500"> */}
      <div className="w-[100%] h-auto border-2 border-blue-500">
        <Image
          className="z-10"
          src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
          // width={500}
          // height={1000}
          radius="none"
          alt="Maxx Crosby's safety sack on Mac Mac Jones"
        />
        <h3>Let Davante Play!!</h3>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </div>
      {/* Row Column 2 */}
      <div className="invisible md:visible w-[30%] h-auto border-2 border-blue-500">
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <h1>section 2</h1>
      </div>
      {/* Row Column 3 */}
      <div className="invisible md:visible w-[30%] h-auto border-2 border-blue-500">
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <h1>section 3</h1>
      </div>
    </section>
  )
}