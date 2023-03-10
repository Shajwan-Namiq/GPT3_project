import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
const Blog = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-20 lg:px-8">
          <header className={styles.text_blog}>
            <h2 className="max-w-[700px] py-10 text-xl font-bold text-gray-900 sm:text-[62px] lg:leading-tight">
              A lot is happening, We are blogging about it.
            </h2>
          </header>

          <ul className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-4">
            <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <div className="lg:h-[730px] relative block group">
                <Image
                  width={500}
                  height={500}
                  src="/blog1.png"
                  alt="blog-2"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-x-0 p-6 bottom-0 flex flex-col items-start justify-end  bg-[#042C54]  ">
                  <span className="mt-1.5 inline-block py-3 text-[11.65px] font-medium uppercase tracking-wide text-white">
                    Sep 26, 2021
                  </span>

                  <h3 className="text-[19.32px] lg:text-[25.11px] font-semibold text-white">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>

                  <a
                    href="#"
                    className="mt-1.5 inline-block lg:mt-52 text-[11.65px] font-medium  tracking-wide text-white hover:underline"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:h-[350px] relative block group">
                <Image
                  width={500}
                  height={500}
                  src="/blog5.png"
                  alt="blog-5"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-x-0 p-6 bottom-0 flex flex-col items-start justify-end  bg-[#042C54]  ">
                  <span className="mt-1.5 inline-block py-1  text-[11.65px] font-medium uppercase tracking-wide text-white">
                    Sep 26, 2021
                  </span>

                  <h3 className="text-[19.32px] font-semibold text-white">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>

                  <a
                    href="#"
                    className="mt-1.5 inline-block lg:pt-0 text-[11.65px] font-medium  tracking-wide text-white hover:underline"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:h-[350px] relative block group">
                <Image
                  width={500}
                  height={500}
                  src="/blog2.png"
                  alt="blog-2"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-x-0 p-6 bottom-0 flex flex-col items-start justify-end  bg-[#042C54]  ">
                  <span className="mt-1.5 inline-block py-1 text-[11.65px] font-medium uppercase tracking-wide text-white">
                    Sep 26, 2021
                  </span>

                  <h3 className="text-[19.32px] font-semibold text-white">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>

                  <a
                    href="#"
                    className="mt-1.5 inline-block lg:pt-0 text-[11.65px] font-medium  tracking-wide text-white hover:underline"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:h-[350px] relative block group">
                <Image
                  width={500}
                  height={500}
                  src="/blog3.png"
                  alt="blog-3"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-x-0 p-6 bottom-0 flex flex-col items-start justify-end  bg-[#042C54]  ">
                  <span className="mt-1.5 inline-block py-1 text-[11.65px] font-medium uppercase tracking-wide text-white">
                    Sep 26, 2021
                  </span>

                  <h3 className="text-[19.32px] font-semibold text-white">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>

                  <a
                    href="#"
                    className="mt-1.5 inline-block lg:pt-0 text-[11.65px] font-medium  tracking-wide text-white hover:underline"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="lg:h-[350px] relative block group">
                <Image
                  width={500}
                  height={500}
                  src="/blog4.png"
                  alt="blog-4"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-x-0 p-6 bottom-0 flex flex-col items-start justify-end  bg-[#042C54]  ">
                  <span className="mt-1.5 inline-block py-1 text-[11.65px] font-medium uppercase tracking-wide text-white">
                    Sep 26, 2021
                  </span>

                  <h3 className="text-[19.32px] font-semibold text-white">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h3>

                  <a
                    href="#"
                    className="mt-1.5 inline-block lg:pt-0 text-[11.65px] font-medium  tracking-wide text-white hover:underline"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blog;
