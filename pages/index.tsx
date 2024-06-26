import type { NextPage } from "next";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import Accounts from "../components/Accounts";
import HeadTitle from "../components/Head";
import TextAreaHandles from "../components/customInputs/TextAreaHandles";
import InputEmail from "../components/customInputs/InputEmail";
interface Platform {
  name: string;
  platforms: {
    instagram: any;
    threads: any;
  };
}

const Home: NextPage = () => {
  // If requesting for handles
  const [loading, setLoading] = useState(false);

  // Input Fields for handles
  const [handles, setHandles] = useState("");
  const [email, setEmail] = useState("");

  // Results
  const [result, setResult] = useState<Platform[]>([]);
  const [resultsFound, setResultsFound] = useState(false);
  const resultRef = useRef<null | HTMLDivElement>(null);

  const scrollToResult = () => {
    if (resultRef.current !== null) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateHandles = async (e: any) => {
    e.preventDefault();
    setResult([]);
    setResultsFound(false);
    setLoading(true);

    const response = await fetch("/api/checkhandle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requester: email,
        names: handles,
      }),
    });
    const data = await response.json();
    console.log("data: ", data.data);

    setLoading(false);
    const newData = data?.data ?? [];
    //convert results for instagram and threads into array of objects
    const dataArray = Object.keys(newData.instagram).map((key) => ({
      name: key,
      platforms: {
        instagram: newData.instagram[key],
        threads: newData.threads[key],
      },
    }));
    // console.log("dataArray: ", dataArray);
    setResult(dataArray);
    setResultsFound(true);
    scrollToResult();
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <HeadTitle />

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Discover if your dream social media handle is up for grabs, all with a
          single click! 🚀✨
        </h1>
        <p className="text-slate-500 mt-5">11,128 handles checked so far.</p>

        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Input your dream handle{" "}
              <span className="text-slate-500">
                (insert @ before each handle)
              </span>
              .
            </p>
          </div>
          <TextAreaHandles handles={handles} setHandles={setHandles} />
          {/* <textarea
            value={handles}
            onChange={(e) => setHandles(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={`@handle \n@etc \n@funny`}
          /> */}
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">Input your email</p>
          </div>
          <div className="block">
            <InputEmail email={email} setEmail={setEmail} />
            {/* <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
              placeholder={`johnny@handleone.social`}
            /> */}
          </div>

          {!loading ? (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              // onClick={(e) => generateBio(e)}
              onClick={(e) => validateHandles(e)}
            >
              Get It Now!&rarr;
            </button>
          ) : (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
          {/* {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )} */}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {resultsFound && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={resultRef}
                >
                  {`Your handles were found!`}
                </h2>
              </div>
              <Accounts accounts={result} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
