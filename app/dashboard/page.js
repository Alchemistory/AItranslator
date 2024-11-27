"use client";
import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const items=[
    {
      title: "양극의 소년",
      season: "Season 1",
    },
    {
      title: "양극의 소년",
      season: "Season 1",
    },


    {
      title: "양극의 소년",
      season: "Season 1",
    },
    {
      title: "양극의 소년",
      season: "Season 1",
    },
    {
      title: "양극의 소년",
      season: "Season 1",
    },
  ];

  return (
    <aside
      aria-label="Related articles"
      className="py-8 lg:py-6 bg-white dark:bg-gray-900 antialiased rounded-lg shadow-md w-full min-h-full"
    >
      <div className="px-4 mx-auto max-w-screen-xl h-full">
        <div className="max-w-md mx-auto my-8">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          <article className="max-w-xs border-2 border-gray-200 rounded-lg p-4 shadow-md flex justify-center items-center">
            <AiFillPlusCircle
              onClick={toggleModal}
              className="text-7xl text-primary cursor-pointer"
            />
          </article>
          {items.map((item, index) => (
          <article key={index} className="max-w-xs border-2 border-gray-200 rounded-lg p-4 shadow-md flex flex-col justify-center items-center">
          <div className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-lg inline-block mb-3">
           총 100매
            </div>

            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <h1 className="text-center font-bold">양극의 소년</h1>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400 text-center">
              Season 1
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  router.push(`/articles/${index}`);
                }}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                수정
              </button>
            </div>
          </article>
          ))}
          
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-gray-800 opacity-50 z-50"></div>
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    새로운 작품 만들기
                  </h3>
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts
                    new consumer privacy laws for its citizens, companies around
                    the world are updating their terms of service agreements to
                    comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                    common set of data rights in the European Union. It requires
                    organizations to notify users as soon as possible of high-risk
                    data breaches that could personally affect them.
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={toggleModal}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default Page;
