import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 py-4">
        <div className="flex">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <div>Logo</div>
              <span>Golden Moon</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
