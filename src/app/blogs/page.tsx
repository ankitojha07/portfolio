import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs = [
  {
    title: "How I Built My Portfolio",
    summary:
      "A behind-the-scenes look at the tools and techniques I used to create this site.",
    image: "/images/portfolio.png",
    date: "June 2025",
    comingSoon: true,
    slug: "how-i-built-my-portfolio",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-2",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-3",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-4",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
  {
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
    slug: "design-patterns-in-modern-web-dev-5",
  },
];

const page = () => {
  return (
    <main>
      <section>
        <h1 className="text-3xl font-bold text-start">Blogs</h1>
        <p className="text-start text-gray-400 mb-8 mt-4">
          Insights, tutorials, and stories from my web development journey.
        </p>
        <div className="flex flex-wrap justify-start gap-4">
          {blogs.map((blog, idx) => (
            <Link
              href={`/blogs/${blog.slug}`}
              key={idx}
              className="w-full max-w-xs"
            >
              <div className="bg-zinc-900 rounded-lg shadow-md w-full p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition max-h-96">
                <div className="w-full h-48 relative mb-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    style={{
                      objectFit: "contain",
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
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
