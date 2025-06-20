'use client';
import React from "react";
import { useParams } from "next/navigation";

export default function ContactInfo() {
  const {id} = useParams();
  console.log({id});


  return (
    <div>{id}</div>
  );
}