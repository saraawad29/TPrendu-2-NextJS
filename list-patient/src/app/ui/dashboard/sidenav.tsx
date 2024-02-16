import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { UserIcon } from '@heroicons/react/24/outline';
import { signOut } from '../../login/auth';

export default function SideNav() {
  return (
    <div className="flex bg-[#274446] pl-[500px] px-3 py-2 pb-1 w-screen">
      <div className="flex grow flex-row items-center mb-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
          >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            
            <div className=" md:block">joe patric</div>
            <UserIcon className="w-6 mr-9" />
          </button>
        </form>
      </div>
    </div>
  );
}
