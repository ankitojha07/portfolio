export default function Tags({ title }: { title: string }) {
  return (
    <p className="bg-zinc-900 py-2 text-white-800 rounded-full border-gray-600 border px-4 text-sm w-full">
      {title}
    </p>
  );
}
