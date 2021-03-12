export default function DividerV() {
  return (
    <div className="py-8 md:py-20 w-72">
      <div className="relative max-w-sm px-12 transform md:-rotate-75">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-50"></div>
        </div>
        <div className="relative flex justify-center transform md:rotate-75">
          <span className="p-4 text-5xl bg-gray-900 text-gray-50">𝔊</span>
        </div>
      </div>
    </div>
  );
}
