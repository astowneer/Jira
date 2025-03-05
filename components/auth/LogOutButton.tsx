"use client"

import { Button } from "@/components/ui/button"
import { logOut } from "@/lib/actions"

const LogOutButton = () => {
  return (
    <Button variant="destructive" onClick={async () => await logOut()}>
      Log Out
    </Button>
  );
};

export default LogOutButton;