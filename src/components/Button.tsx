export default function Button({ label }: { label: string }) {
  return (
    <button className="bg-gradient-to-r from-indigo-500 to-teal-600 py-3 rounded-full text-white text-sm w-7/12">
      {label}
    </button>
  );
}
