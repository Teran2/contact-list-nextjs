// Routes submisison form for adding a new contact.

"use client";
import { ContactAPI } from "@/app/data/contactsAPI";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function AddNewContact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [image_URL, setImage_URL] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const router = useRouter();

  const handleSubmitContact = () => {
    ContactAPI.addContact({
      name,
      email,
      image_URL,
      phoneNumber
    });
    router.push("/contacts/page")
  }

  return (
    <div>
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
          setImage_URL(event.target.value)
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
    </div>
  );
}