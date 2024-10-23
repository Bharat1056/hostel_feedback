import Form from "@/components/Form";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

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
        <Form />
        {children}
      </NextUIProvider>
    </>
  );
}
