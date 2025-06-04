import Image from "next/image";
import React from "react";

const blogs = [
  {
    title: "How I Built My Portfolio",
    summary:
      "A behind-the-scenes look at the tools and techniques I used to create this site.",
    image: "/images/photography/1.jpg",
    date: "June 2025",
    comingSoon: true,
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/photography/2.jpg",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/photography/2.jpg",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/photography/2.jpg",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/photography/2.jpg",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/photography/2.jpg",
    date: "Coming Soon",
    comingSoon: true,
  },
];

const page = () => {
  return (
    <main>
      <section>
        <h1 className="text-3xl font-bold text-start">Blogs</h1>
        <p className="text-start text-gray-600 mb-8 mt-4">
          Insights, tutorials, and stories from my web development journey.
        </p>
        <div className="flex flex-wrap justify-start gap-4">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md max-w-xs w-full p-4 flex flex-col items-center"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                  className="rounded"
                  sizes="(max-width: 600px) 100vw, 400px"
                />
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-center mb-2">{blog.summary}</p>
              <span className="text-xs text-gray-400">{blog.date}</span>
              {blog.comingSoon && (
                <span className="mt-2 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
