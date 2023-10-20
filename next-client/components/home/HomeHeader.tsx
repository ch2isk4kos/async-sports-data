"use client"
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// import Image from "next/image";

export default function HomeHeader() {
  return (
    <section className="flex flex-col md:flex-row items-center h-auto border-2 border-rose-500">
      {/* Row Column 1 */}
      {/* <div className="basis-1/2 h-auto border-2 border-blue-500"> */}
      <div className="w-[100%] h-auto border-2 border-blue-500">
        <Image
          // className="z-10 md:object-fit"
          className="z-10 md:object-cover"
          src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
          // width={0}
          // height={0}
          radius="none"
          alt="Maxx Crosby's safety sack on Mac Mac Jones"
        />
        <h3>Let Davante Play!!</h3>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </div>
      {/* Row Column 2 */}
      <div className="invisible md:visible w-[30%] items-center border-2 border-blue-500">
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <h1>section 2</h1>
        <Card className="p-2 m-2">
          {/* <CardHeader className="flex-col items-start">
            <p>Headline</p>
            <small>description</small>
            <h4>Read More</h4>
          </CardHeader> */}
          <CardBody className="overflow-visible">
            <Image
              className="object-cover rounded-xl"
              src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
              alt="picture description"
            />
          </CardBody>
        </Card>
        <Card className="p-2 m-2">
          {/* <CardHeader className="flex-col items-start">
            <p>Headline</p>
            <small>description</small>
            <h4>Read More</h4>
          </CardHeader> */}
          <CardBody className="overflow-visible">
            <Image
              className="object-cover rounded-xl"
              src={`https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg`}
              alt="picture description"
            />
          </CardBody>
        </Card>
        <Card className="p-2 m-2">
          {/* <CardHeader className="flex-col items-start">
            <p>Headline</p>
            <small>description</small>
            <h4>Read More</h4>
          </CardHeader> */}
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
      <div className="invisible md:visible flex flex-col items-center w-[30%] h-auto gap-2 my-4 border-2 border-blue-500">
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <h1>section 3</h1>
      </div>
    </section>
  )
}