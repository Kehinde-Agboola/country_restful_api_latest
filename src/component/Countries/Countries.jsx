import React from "react";
import { useState, useEffect } from "react";
  
const Countries = () =>{

    const [country, setcountries] = useState([]);
    const getCountry = async () => {
        const check = localStorage.getItem('Countries');

        if(check){
            setcountries(JSON.parse(check))
        } else {
      try {
          // setloading(true);
          const res = await fetch("https://restcountries.com/v3.1/all");
          const data = await res.json();
          // setloading(false);
          localStorage.setItem("Countries", JSON.stringify(data))
          setcountries(data);
      } catch (error) {
        console.log(error)
      }
        }
      };
      useEffect(() => {
        getCountry();
      }, []);

     

    return(
        <div className="max-w-full py-6 md:px-10 px-3 grid sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4 gap-16 mx-auto items-center justify-center">
            {
          country?.map((items, index) => (
            <div key={index} className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
        <img
        src={items.flags.svg}
        alt="{items.common.name}"
        className="w-full h-40 object-cover rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <h1 className="font-bold mb-4 text-gray-700 dark:text-white">
          {items.name.common}
        </h1>
        <p className="text-xs text-gray-700 dark:text-white">
          Population:
          <span className="text-gray-700 dark:text-white"> {items.population}</span>
        </p>
        <p className="text-xs text-gray-700 dark:text-white">
          region:
          <span className="text-gray-700 dark:text-white"> {items.region}</span>
        </p>
        <p className="text-xs text-gray-700 dark:text-white">
          Capital:
          <span className="text-gray-700 dark:text-white"> {items.capital}</span>
        </p>
      </div>
            </div>
          ))}
        </div>
    )
}

export default Countries