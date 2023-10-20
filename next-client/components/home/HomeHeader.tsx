"use client"
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
// import Image from "next/image";

export default function HomeHeader() {

  const articles = [
    { img: "", alt: "", desc: "", url: ""},
  ]
  return (
    <section className="flex flex-col md:flex-row h-30px border-2 border-rose-500">
      {/* Row Column 1 */}
      {/* <div className="basis-1/2 h-auto border-2 border-blue-500"> */}
      <div className="w-[50%] h-auto border-2 border-blue-500">
        {/* <Image
          // className="z-10 md:object-fit"
          className="z-10 md:object-cover"
          src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
          // width={0}
          // height={0}
          radius="none"
          alt="Maxx Crosby's safety sack on Mac Mac Jones"
        />
        <h3>Let Davante Play!!</h3>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p> */}
        <Card
          className="border-none"
          isFooterBlurred
          radius="lg"
        >
          <Image
            className="z-10 object-fit"
            // width={500}
            // height={500}
            src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
            alt="Davante Adams making a play on the ball"
          />
          <CardFooter className="justify-between">
            <p className="text-tiny text-white/80 border-white/80">
              blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            </p>
          </CardFooter>
        </Card>
      </div>
      {/* Row Column 2 */}
      <div className="invisible md:visible w-[25%] items-center border-2 border-blue-500">
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <h1>section 2</h1>
        <Card className="">
          <CardBody className="overflow-visible">
            <Image
              className="object-cover rounded-xl"
              src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
              alt="picture description"
            />
          </CardBody>
        </Card>
        <Card className="p-2 m-2">
          <CardBody className="overflow-visible">
            <Image
              className="object-cover rounded-xl"
              src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
              alt="picture description"
            />
          </CardBody>
        </Card>
        <Card className="p-2 m-2">
          <CardBody className="overflow-visible">
            <Image
              className="object-cover rounded-xl"
              src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
              alt="picture description"
            />
          </CardBody>
        </Card>
      </div>
      {/* Row Column 3 */}
      <div className="invisible md:visible flex flex-col items-center w-[25%] border-2 border-blue-500">
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <h1>section 3</h1>
      </div>
    </section>
  )
}