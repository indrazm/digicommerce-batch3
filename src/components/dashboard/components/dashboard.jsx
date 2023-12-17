import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export const Dashboard = () => {
  return (
    <main className="space-y-8">
      <section>
        <h2>Dashboard</h2>
        <p>Here you can see the overview of your store.</p>
      </section>
      <section className="grid grid-cols-3 gap-6">
        <Card shadow="sm">
          <CardBody className="p-8 space-y-4">
            <h6>Total Income</h6>
            <h1>USD 0</h1>
          </CardBody>
        </Card>
        <Card shadow="sm">
          <CardBody className="p-8 space-y-4">
            <h6>Total Products</h6>
            <h1>0</h1>
          </CardBody>
        </Card>
        <Card shadow="sm">
          <CardBody className="p-8 space-y-4">
            <h6>Total Orders</h6>
            <h1>0</h1>
          </CardBody>
        </Card>
      </section>
    </main>
  );
};
