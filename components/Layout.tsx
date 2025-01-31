"use client";

import React, { useMemo } from "react";
import { AppDataProvider } from "../context/AppDataContext";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  // Memoizing the content inside the layout to prevent unnecessary re-renders.
  const memoizedChildren = useMemo(() => children, [children]);

  return (
    <div className="flex min-h-screen flex-col bg-black-400 text-silver-500 antialiased">
      <AppDataProvider>
        <Header />
        <main className="flex flex-1">
          <section className="container mx-auto flex flex-col items-center md:flex-row md:items-start lg:max-w-6xl">
            <Sidebar />
            {memoizedChildren}
          </section>
        </main>
      </AppDataProvider>
    </div>
  );
};
