// pages/register.js

import React from "react";
import ButtonPrimary from "../components/misc/ButtonPrimary";

const Register = () => {
  // Your registration page content and logic here

  return (
    <>
      <h1 className="text-center text-orange-500 text-2xl font-extrabold mb-16 p-4">
        Please download the formats listed below, fill and upload the same in
        form
      </h1>
      <div className="grid justify-items-center gap-4 items-center">
        <div>
          <a
            href="https://github.com/BhuvanSA/ideathon-landingpage/blob/373499f3f2909ca632b5147a729c2269cbd40bed/public/assets/Round1SubmissionFormatIdeathon.docx?raw=True"
            className="block max-w-sm p-6 bg-white border border-orange-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:shadow-orange-500 hover:shadow-lg hover:border-0 transition duration-150 ease-out hover:ease-in"
            rel="noopener noreferrer"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Preliminary round abstract format
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Abstract Format for GAT AIdeathon
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/BhuvanSA/ideathon-landingpage/blob/373499f3f2909ca632b5147a729c2269cbd40bed/public/assets/Hits%20to%20Ideathon%20Format.docx?raw=True"
            className="block max-w-sm p-6 bg-white border border-orange-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:bg-gray-700 hover:shadow-orange-500 hover:shadow-lg hover:border-0 transition duration-150 ease-out hover:ease-in"
            rel="noopener noreferrer"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Report Formatting Guidelines
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Format your documents in the following manner
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
        <ButtonPrimary href={"https://forms.gle/smYEHjf92AcSkyZQ8"}>
          <div className="inline-flex items-center box-content w-72 justify-center lg:w-64">
            <span className="mr-1">Go to form </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </ButtonPrimary>
      </div>
    </>
  );
};

export default Register;
