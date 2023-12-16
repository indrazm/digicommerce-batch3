"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";

export const Register = () => {
  async function handleRegister(event) {
    event.preventDefault(); // Ga akan nge refresh
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="w-[460px] space-y-8">
      <div>
        <h3>Register</h3>
        <p>Please create an account</p>
      </div>
      <form onSubmit={handleRegister}>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Input name="firstName" placeholder="First Name" />
            <Input name="lastName" placeholder="Last Name" />
          </div>
          <Input name="username" placeholder="Username" />
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <Button color="primary" type="submit" className="w-full">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
