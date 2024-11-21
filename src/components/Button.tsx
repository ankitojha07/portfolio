export default function Button({ label }: { label: string }) {
  return (
    <button className="bg-gradient-to-r from-teal-300 to-teal-800 py-3 rounded-full text-white text-sm w-7/12">
      {label}
    </button>
  );
}
