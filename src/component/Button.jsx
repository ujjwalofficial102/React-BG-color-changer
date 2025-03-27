export function Button({ title, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer h-12 w-24 rounded-full text-sm font-semibold shadow-md"
      style={{ backgroundColor: title, color: text }}
    >
      {title.toUpperCase()}
    </button>
  );
}
