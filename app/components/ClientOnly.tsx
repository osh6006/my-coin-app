"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="relative w-screen h-screen">
        <Loading />
      </div>
    );
  }

  return <>{children}</>;
};

export default ClientOnly;
