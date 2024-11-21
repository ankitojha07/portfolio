export default function Tags({ title }: { title: string }) {
  return (
    <p className="bg-zinc-900 py-2 text-white-800 rounded-full border px-4 text-md w-full border-teal-800">
      {title}
    </p>
  );
}
