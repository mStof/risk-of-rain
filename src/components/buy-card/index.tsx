"use client";
import React from "react";
import BuyCard from "./BuyCard";
import { useBuyModal } from "@/context/useBuyModal";

const Index = () => {
const {isOpen} = useBuyModal();  
  return (
    <>
      {isOpen && <BuyCard />}
    </>
  );
};

export default Index;
