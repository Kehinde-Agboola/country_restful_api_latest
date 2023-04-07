import React from "react";
import Countries from "../../component/Countries/Countries";
import { useState } from "react";
const Home = () =>{
    const [mode, setMode] = useState();
    const [toggle, setToggle] = useState(`LightMode <i class="fa fa-sun"></i> `);
    const toggleDarkMode = () => {
        // const check = localStorage.setItem('toggleMode')
        if (mode) {
          document.documentElement.classList.add("dark");
          setToggle(`DarkMode <i class="fa fa-moon"></i>`);
          setMode((current) => (current = !current));
        //   setMode(JSON.parse(check))
        //   localStorage.getItem("check", JSON.parse(dark))

        }
        if (!mode) {
          document.documentElement.classList.remove("dark");
          setToggle(`LightMode <i class="fa fa-sun"></i> `);
          setMode((current) => (current = !current));
        //   localStorage.getItem("check", JSON.parse(!dark))
        }
      };

    const filterByRegion = async (region) => {
        setloading(true);
        if (region === "") return;
        const res = await fetch(
          `https://restcountries.com/v3.1/region/{region}${region}`
        );
        const data = await res.json();
        setloading(false);
        setcountries(data);
      };
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
          <div className="w-screen shadow-md py-6 md:px-10 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
            <div className=" max-w-full w-full flex mx-auto">
              <h1 className="font-bold text-xl text-gray-700 dark:text-white">
                Where in the world
              </h1>
              <div className="ml-auto font-medium">
                <button
                  className="text-gray-400"
                  onClick={() => toggleDarkMode()}
                  dangerouslySetInnerHTML={{ __html: toggle }}
                ></button>
              </div>
            </div>
          </div>
          <div className="max-w-full w-full flex mx-auto md:flex md:flex-cols py-6 md:px-10 px-3">
            <div className="w-full">
              {/* <i className="fa fa-search rounded-md text-gray-400"></i> */}
              <input
                type="text"
                className="dark:bg-gray-700 dark:text-white outline-none p-3 shadow-md rounded-md w-full md:w-1/3 text-gray-700"
                onChange={(term) => searchCountry(term.target.value)}
                placeholder="search for a country..."
              />
            </div>
    
            <select
              className="shadow-md rounded-md font-medium dark:bg-gray-700 outline-none dark:text-white text-gray-700 px-3"
              onChange={(val) => filterByRegion(val.target.value)}
            >
              <option value="">Filter by Religion</option>
              <option value="">Africa</option>
              <option value="">Europe</option>
              <option value="">Asia</option>
              <option value="">Oceania</option>
              <option value="">America</option>
            </select>
          </div>
    
          <div className="">
            <Countries/>
          </div>
        </div>
      );
}

export default Home