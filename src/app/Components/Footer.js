export default function Footer() {
  return (
    <div className="w-full bg-[#FBE8EF]">
      <footer class="flex flex-col md:flex-row items-center text-base mx-auto container justify-center md:justify-between px-4 md:px-6 py-6">
        <div class="md:inline block w-full text-center md:text-left">
          <span>&#169; 2024. All rights reserved. </span>
          <span id="credits">
            Website by <a href="/">Mahotshav</a>
          </span>
        </div>
        <div class="inline-flex ml-0 md:ml-auto space-x-3 md:pt-0 pt-4">
          <a href="#" rel="noopener noreferrer" class="items-center gap-2">
            <span class="hover:underline focus-visible:underline">Terms</span>
          </a>
          <a href="#" rel="noopener noreferrer" class="items-center gap-2">
            <span class="hover:underline focus-visible:underline">Privacy</span>
          </a>
          <a href="#" rel="noopener noreferrer" class="items-center gap-2">
            <span class="hover:underline focus-visible:underline">Contact</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
