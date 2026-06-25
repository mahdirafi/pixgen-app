import Banner from "@/components/HomePage/Banner";
import TopGenerations from "@/components/TopGeneretions";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
     <>
      <Banner/>
      <TopGenerations/>
      
      <div className="text-center mt-22">
  <Link href={"/all-photos"}>
    <Button className="w-full sm:w-[50%] md:w-[30%] lg:w-[20%]" variant="danger">
      View All Photos
    </Button>
  </Link>
</div>
     </>
  );
}
