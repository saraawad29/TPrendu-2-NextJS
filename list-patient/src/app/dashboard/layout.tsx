import SideNav from "../ui/dashboard/sidenav";
import InviteLink from '../ui/dashboard/invitelink';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
    <div>
        <SideNav />
        <div className="bg-[#EBF6F5] flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        <Suspense fallback={<InviteLink />}>
          <InviteLink />
        </Suspense>
    </div>
    );
  }