import { useEffect, useState } from "react";
import "./App.css";
import Card from "./componets/card";

function App() {
  const [data, setData] = useState([]);
  const [likedDatas, setLikedDatas] = useState([]);
  const [adder, setAdded] = useState([]);

  const saveLikedData = (countryInfo) => {
    setLikedDatas((prevLikedDatas) => [...prevLikedDatas, countryInfo]);
    console.log("Hey Save Liked Data running");
    console.log(countryInfo);
  };

  //update the added country
  const addedCountry = () => {
    console.log("Added Country function running");
  };
  // Fetching
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <h2>Liked Countries</h2>
        <div className="container grid grid-cols-3 gap-1">
          {likedDatas.map((item) => (
            <Card values={item} key={item.cca2}></Card>
          ))}
        </div>

        {/* All country List  */}
        <h1 className="text-black font-black text-2xl">All Countries </h1>
        <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((items) =>
            //using .some() functions for looping all likedDatas json info
            likedDatas.some(
              (liked) => liked.name.common === items.name.common
            ) ? null : (
              <Card
                key={items.cca2}
                values={items}
                likedFunc={saveLikedData}></Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;