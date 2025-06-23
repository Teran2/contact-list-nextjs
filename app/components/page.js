"use client";
import AddNewContact from "./addNewContact";
import Router from "next/router";

export default function Page() {
  return (
    <div>
      <h1>Add a New Contact</h1>
      <Router>

      <AddNewContact />
      </Router>
    </div>
  );
}