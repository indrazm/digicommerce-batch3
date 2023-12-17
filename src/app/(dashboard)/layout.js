import { DashboardTemplate } from "@/components/dashboard/components/dashboardTemplate";
import React from "react";

export default function Layout({ children }) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}
