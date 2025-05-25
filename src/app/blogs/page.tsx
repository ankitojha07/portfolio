import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <section>
        <h1 className="text-3xl font-bold text-center my-8">Blogs</h1>
        <p className="text-center text-gray-600 mb-4">Coming Soon...</p>
        <div className="flex justify-center items-center">
          <Image
            src="/images/photography/2.jpg"
            alt="Coming Soon"
            width={500}
            height={300}
          />
        </div>
      </section>
    </main>
  );
};

export default page;
