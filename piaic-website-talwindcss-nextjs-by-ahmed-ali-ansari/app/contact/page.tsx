import React from "react";

export default function page() {
  return (
    <>
      <div className="rounded-b-[30%] text-center bg-[url('https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=740&t=st=1682014986~exp=1682015586~hmac=70a36bd1c14aeb288fb33cc852f468e37d29dc03a0545f603a5cbe7cfcd98d2d')] bg-fixed bg-cover bg-no-repeat  md:px-40  px-15 py-40 ">
        <h1 className="text-6xl text-white font-bold italic  float-left">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-center items-center w-screen mt-10 ">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl dark:border-white dark:shadow-white">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide  bg-blue-700 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-700 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop Your Query
              </h1>
              <p className="text-gray-400">
                PIAIC is a leading Institute working to reshape pakistan's IT
                Industry Contributing in Nation's Economy with Brilliant Minds
                Behind the Initiative Including Zia Khan , Daniyal Nagori , Hira
                Khan , Zeeshan Hanif And More Brilliant Teachers
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Head Office</h2>
                  <p className="text-gray-400">
                    245/M/2 Block، 6, P.E.C.H.S. Block 6 PECHS, Karachi, Karachi
                    City, Sindh 75400
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">
                    Tel: +92-308-2220203 (WhatsApp as well)
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/piaic/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-facebook-f text-blue-700" />
                </a>
                <a
                  href="https://www.linkedin.com/company/piaicofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-linkedin-in text-blue-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
