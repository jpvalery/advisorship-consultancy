export default function DividerV() {
  return (
    <div className="py-8 md:py-20 w-72">
      <div className="transform md:-rotate-75 relative px-12 max-w-sm">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-50"></div>
        </div>
        <div className="transform md:rotate-75 relative flex justify-center">
          <span className="bg-gray-900 p-4 text-gray-50 text-5xl">𝔊</span>
        </div>
      </div>
    </div>
  );
}
