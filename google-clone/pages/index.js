import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridAddIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridAddIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="http://placekitten.com/300/300" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          height={140}
          width={300}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
        max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4"
        >
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feelings Lucky</button>
        </div>
      </form>
    </div>
  );
}
