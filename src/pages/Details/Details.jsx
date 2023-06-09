import React, { useState, useEffect, useNavigate } from "react";
import { useParams } from "react-router-dom";
// import Spiner from "../Spiner/Spiner";
const Details = () => {
  const [details, setDetails] = useState({})
  const [mode, setMode] = useState();
  const [toggle, setToggle] = useState(`LightMode <i class="fa fa-sun"></i> `);
  let params = useParams()
  const navigate = useNavigate();
//   const [loading, setloading] = useState(false);

const fetchDetails = async () =>{
    const res = await fetch(`https://restcountries.com/v3.1/all${params.name}`)
    const data = await res.json()
    setDetails(data)
}
useEffect(() =>{
    fetchDetails()
}, [params.name])

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggle(`DarkMode <i class="fa fa-moon"></i>`);
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggle(`LightMode <i class="fa fa-sun"></i> `);
      setMode((current) => (current = !current));
    }
  };
//   const { state } = useLocation();
  // const gohomeBtn = () => .push("/");
  return (
    <div className="bg-gray-100 dark:gray-800 text-white">
      <div className="w-screen shadow-md py-6 md:px-10 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
        <div className="flex container mx-auto">
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
      <div className="container mx-auto mb-16">
        <button className="px-18 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
        onClick={() => navigate(-1)}>
          <p>
            Back
            <span>
              <i className="fa fa-arrow-left"></i>
            </span>
          </p>
        </button>
      </div>
      {(
        <>
          <div className="container mx-auto p-8 pl-0 pr-0">
            <img src={details.flags.svg} alt={details.common.name} />
            <div className="p-8 pl-0">
              <h2 className="font-bold text-2xl mb-8">{details.name.common}</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-20 gap-y-4">
              <p>
                NativeName:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.nativename}
                </span> 
              </p>
              <p>
                Population:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.population}
                </span>
              </p>
              <p>
                Region:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.region}
                </span>
              </p>
              <p>
                SubRegion:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.Subregion}
                </span>
              </p>
              <p>
                Capital:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.capital}
                </span>
              </p>
              <p>
                Top Level Domain:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.topleveldomain[0]}
                </span>
              </p>
              <p>
                Currency:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.currencies.map((cur) => cur.name)}
                </span>
              </p>
              <p>
                Language:
                <span className="dark:text-gray-400 text-gray-700 text-sm">
                  {details.languages.map((lang) => lang.name + ",")}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gray-100 dark:gray-800 text-white">
            <div className="w-screen shadow-md py-6 md:px-10 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
              <h1>Where in {state.name.common}</h1>
            </div>

            {/* <div className="container w-full block">
              <div>{state.maps.map((map) => map.OpenStreetMaps)}</div>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};
export default Details;
