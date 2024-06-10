import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const setRole = (role) => {
    localStorage.setItem("role", role);
    navigate("/login");
  };

  const navigate = useNavigate();
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-white px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-16">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-purple-950 sm:text-6xl">
              Institute Of Engineering And Management Kolkata
            </h1>
            <p className="mt-6 text-lg leading-8 text-fuchsia-950">
              UEM Kolkata has won “AAA” category (first 10 institutes nationally
              among all institutes of India including all IITs and NITs) in
              NPTEL program (IIT Kharagpur and IIT Chennai) UEM Kolkata student
              has stood 1st amongst all students of India in NPTEL program UEM
              Kolkata and UEM Jaipur organized UEMCON-2016 in Columbia
              University, New York, USA in association with IEEE New York, IEEE
              USA and IEEE Region 1 Highest salary offer at UEM Kolkata is Rs 72
              lakhs per annum. The University is a partner institution in the
              prestigious European Union sponsored project ‘FRACTION’ & ‘UNNAT
              BHARAT ABHIYAAN’ of Govt. of India. UEMK has been recognised in
              the band “Performer” under the category “University & Deemed to be
              University (Private/Self Financed) (Technical)” in ATAL RANKING OF
              INSTITUTIONS ON INNOVATION ACHIEVEMENTS (ARIIA) 2021, a flagship
              program of the Ministry of Education, Government of India.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => setRole("admin")}
              >
                Admin
              </button>

              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => setRole("teacher")}
              >
                Teacher
              </button>

              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => setRole("student")}
              >
                Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
