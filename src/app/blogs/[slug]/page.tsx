import { notFound } from "next/navigation";
import Image from "next/image";

const blogs = [
  {
    slug: "how-i-built-my-portfolio",
    title: "How I Built My Portfolio",
    summary:
      "A behind-the-scenes look at the tools and techniques I used to create this site.",
    image: "/images/portfolio.png",
    date: "June 2025",
    comingSoon: true,
  },
  {
    slug: "design-patterns-modern-web-dev-1",
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    slug: "design-patterns-modern-web-dev-2",
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    slug: "design-patterns-modern-web-dev-3",
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    slug: "design-patterns-modern-web-dev-4",
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
  },
  {
    slug: "design-patterns-modern-web-dev-5",
    title: "Design Patterns in Modern Web Dev",
    summary:
      "Exploring reusable UI and code patterns for scalable web applications.",
    image: "/images/portfolio.png",
    date: "Coming Soon",
    comingSoon: true,
  },
];

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={100}
        height={100}
        className="rounded mb-4"
      />
      <span className="text-xs text-gray-400">{blog.date}</span>
      <p className="mt-6 text-lg">{blog.summary}</p>

      {blog.comingSoon && (
        <div className="mt-4 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs inline-block">
          Coming Soon
        </div>
      )}
    </main>
  );
}
