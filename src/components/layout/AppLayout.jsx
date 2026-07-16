import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout({ children, title = "Dashboard" }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar title={title} />

      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar />

        <main className="flex-1 overflow-auto bg-slate-900/70 p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-7xl"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
