import Form from "@/components/Form";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Form />
      </NextUIProvider>
    </>
  );
}
