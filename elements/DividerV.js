export default function DividerV() {
  return (
    <div className="w-72 py-8 md:py-20">
      <div className="relative max-w-sm transform px-12 md:-rotate-75">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-50"></div>
        </div>
        <div className="relative flex transform justify-center md:rotate-75">
          <span className="bg-gray-900 p-4 text-5xl text-gray-50">𝔊</span>
        </div>
      </div>
    </div>
  );
}
