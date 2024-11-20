import RightSide from "@/components/RightSide";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 h-screen p-10 text-center">
      <div className="lg:col-span-4 rounded-xl col-span-12 bg-black border border-gray-900 p-8">
        <Sidebar />
      </div>
      <div className="lg:col-span-8 rounded-xl col-span-12 bg-black border border-gray-900 p-8">
        <RightSide />
      </div>
    </div>
  );
}
