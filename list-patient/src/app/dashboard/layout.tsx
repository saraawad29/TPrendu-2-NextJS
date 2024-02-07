import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
    <div>
        <SideNav />
            <div className="bg-[#EBF6F5] flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    );
  }