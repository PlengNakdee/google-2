import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  return (
    <header>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form
        className="flex border border-gray-200 rounded-full
      shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5"
      >
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow w-full focus:outline-none"
        />
        <XIcon className="h-7 text-gray-500 cursor-pointer" />
      </form>
    </header>
  );
}

export default Header;
