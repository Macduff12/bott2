// src/components/UserMenu.tsx
import { FC } from "react";
import Link from "next/link";

interface UserMenuProps {
  user: { name: string; email: string };
}

const UserMenu: FC<UserMenuProps> = ({ user }) => {
  return (
    <div className="relative">
      <button className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900">
        {user.name}
      </button>
      <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
        <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Profile
        </Link>
        <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
