"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { blogs } from "@/data/blog"; // Adjust path if needed

const SECRET = "#x2d30"; // Change this to your secret

export default function WriteBlog() {
  const params = useSearchParams();
  const [authorized, setAuthorized] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [secret, setSecret] = useState(params.get("secret") || "");

  // Simple check on mount
  useState(() => {
    if (secret === SECRET) setAuthorized(true);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secret === SECRET) {
      setAuthorized(true);
    } else {
      alert("Invalid secret!");
    }
  };

  if (!authorized) {
    return (
      <form onSubmit={handleSubmit} className="max-w-sm mt-10">
        <label className="block mb-2">Enter Secret Key:</label>
        <input
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          className="border px-2 py-1 mb-4 w-full bg-black"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Enter
        </button>
      </form>
    );
  }

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Create new blog object
    const newBlog = {
      title,
      summary: content,
      image: image || "/images/portfolio.png",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      comingSoon: false,
      slug,
    };

    // Add to blogs array (in-memory, not persistent)
    blogs.unshift(newBlog);

    alert("Blog submitted!\n" + JSON.stringify(newBlog, null, 2));

    // Optionally, clear form
    setTitle("");
    setContent("");
    setAuthor("");
    setImage("");
  };

  return (
    <main className="w-full mt-10">
      <h1 className="text-2xl font-bold mb-4">Write a New Blog</h1>
      <form onSubmit={handleBlogSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-2 py-1 w-full bg-zinc-800 text-white rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border px-2 py-1 w-full bg-zinc-800 text-white rounded min-h-[120px]"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border px-2 py-1 w-full bg-zinc-800 text-white rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border px-2 py-1 w-full bg-zinc-800 text-white rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-300 to-teal-800 text-white px-4 py-2 rounded"
        >
          Submit Blog
        </button>
      </form>
    </main>
  );
}
