import Form from "@/components/Form";
// import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";

export default function Home(
  {
    children, 
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <>
     <NextUIProvider>
     <Form  />
     </NextUIProvider>
    </>
  );
}
