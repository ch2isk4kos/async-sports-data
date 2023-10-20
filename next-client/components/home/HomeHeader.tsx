"use client"
import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
// import Image from "next/image";

export default function HomeHeader() {
  const blogs = [
    { alt: "Davante Adams making a play on the ball", headline: "Adams Goes Off", img: "https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg"},
    { alt: "Davante Adams making a play on the ball", headline: "Adams Goes Off", img: "https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg"},
    { alt: "Davante Adams making a play on the ball", headline: "Adams Goes Off", img: "https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg"},
    { alt: "Davante Adams making a play on the ball", headline: "Adams Goes Off", img: "https://s.hdnux.com/photos/01/34/56/75/24309591/3/1200x0.jpg"},
  ]

  return (
    // <section className="flex flex-col w-auto h-auto gap-2 m-4 p-4 md:flex-row border-2 border-rose-500">
    <section className="flex flex-col w-auto h-auto gap-2 m-4 p-4 md:flex-row border-2 border-rose-500">
      {/* Row Column 1 */}
      {/* <div className="basis-1/2 h-auto border-2 border-blue-500"> */}
      <div className="w-[100%] md:w-[40%] border-2 border-blue-500">
        <Card
          className="border-none"
          isFooterBlurred
          radius="lg"
        >
          <Image
            className="z-10 object-fit"
            // className="z-10 md:object-cover"
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
      <div className="w-[100%] md:w-[30%] p-2 border-2 border-blue-500">
      {/* <div className="invisible md:visible w-[30%] h- p-2 border-2 border-blue-500"> */}
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <div className="grid grid-cols-2 gap-4 border-2 border-yellow-500">
          {
            blogs && blogs.map((blog) => (
              <Card
                className="border-none"
                radius="lg"
                isFooterBlurred
              >
                <Image
                  // className="object-cover"
                  className="object-fit"
                  src={blog.img}
                  alt={blog.alt}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">{blog.headline}</p>
                  <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </div>
      {/* Row Column 3 */}
      <div className="w-[100%] md:w-[30%] p-2 border-2 border-blue-500">
      {/* <div className="invisible md:visible flex flex-col items-center w-[30%] border-2 border-blue-500"> */}
      {/* <div className="invisible md:visible basis-1/4 h-auto border-2 border-blue-500"> */}
      {/* <div className="hidden md:block w-[33%] h-auto border-2 border-blue-500"> */}
        <h1>section 3</h1>
      </div>
    </section>
  )
}