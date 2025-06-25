"use client";
import { ContactAPI } from "@/app/data/contactsAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function AddNewContact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const router = useRouter();

  const generateUniqueId = () => {
    return Math.round(Math.random() * 100000000);
  }

  const handleSubmitContact = () => {
    const uniqueId = generateUniqueId();

    ContactAPI.addContact({
      name,
      email,
      image,
      phoneNumber,
      uniqueId
    });
    router.push("/contacts")
  }

  return (
    <Container>
      <form>
        <label>Enter Name</label>
        <input
        type="text"
        className="form-control"
        onChange={(event) =>
          setName(event.target.value)
        }
        />

        <br />

        <label>Enter Email</label>
        <input
        type="text"
        className="form-control"
        onChange={(event) =>
          setEmail(event.target.value)
        }
        />

        <br />

        <label>Enter Image URL</label>
        <input
        type="text"
        className="form-control"
        onChange={(event) =>
          setImage(event.target.value)
        }
        />

        <br />

        <label>Enter Phone Number</label>
        <input
        type="text"
        className="form-control"
        onChange={(event) =>
          setPhoneNumber(parseInt(event.target.value, 10))
        }
        />

        <br />

        <Button onClick={handleSubmitContact}>
          ADD NEW CONTACT
        </Button>
      </form>
    </Container>
  );
}