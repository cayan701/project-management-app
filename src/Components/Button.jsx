export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      {children}
    </button>
  );
}