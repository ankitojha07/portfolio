import { notFound } from "next/navigation";
import Image from "next/image";

import { detailedBlog } from "../../../data/detailedBlog";

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogDetail({ params }: BlogDetailPageProps) {
  const blog = detailedBlog.find((b) => b.slug === params.slug);

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
