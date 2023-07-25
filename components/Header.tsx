import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
=======
import { InboxIcon } from "@heroicons/react/24/solid";
>>>>>>> c64cc8c073a1462ed451f0069dbd283c42692587

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        {/* <Image
          alt="header text"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        /> */}
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
<<<<<<< HEAD
          Digitalthreadsy.com
        </h1>
      </Link>
=======
          handleone.social
        </h1>
      </Link>
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InboxIcon />
        <p>Notify Me</p>
      </a>
>>>>>>> c64cc8c073a1462ed451f0069dbd283c42692587
      {/* <a
        href="https://vercel.com/templates/next.js/twitter-bio"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a> */}
    </header>
  );
}
