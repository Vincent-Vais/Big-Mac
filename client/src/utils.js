import axios from "axios";

const YEAR = "2016";

// API CALLS
const getCountry = async () => {
  try {
    const ipResponse = await axios.get(`http://ip-api.com/json/`);
    return ipResponse.data.country;
  } catch (err) {
    throw new Error(err);
  }
};
const fetchData = async () => {
  try {
    const dataResponse = await axios.get("/api/data");
    const countriesData = dataResponse.data;
    return getLatestYear(countriesData);
  } catch (err) {
    throw new Error(err);
  }
};

// Getting right data from country object
const getPartsOfData = (item) => {
  const data = {
    purchPower: parseFloat(item["Dollar PPP"]),
    dolPrice: parseFloat(item["Dollar price"]),
    locPrice: parseFloat(item["Local price"]),
    country: item["Country"],
  };
  localStorage.setItem(data.country, JSON.stringify(data));
  return data;
};

// Choosing country from stored array of names
const getRandomCountryFromArray = (arr) => {
  let i = Math.floor(Math.random() * arr.length);
  const country = localStorage.getItem("local");
  while (arr[i] === country) {
    i = Math.floor(Math.random() * arr.length);
  }
  return arr[i];
};
const getOtherCountryFromArray = (arr) => {
  let i = 0;
  const country = localStorage.getItem("local");
  const storedVisited = JSON.parse(localStorage.getItem("visited"));
  while (
    arr[i] === country ||
    (storedVisited && Object.keys(storedVisited).includes(arr[i]))
  )
    i++;
  storedVisited
    ? localStorage.setItem(
        "visited",
        JSON.stringify({
          ...storedVisited,
          [arr[i]]: true,
        })
      )
    : localStorage.setItem("visited", JSON.stringify({ [arr[i]]: true }));
  return arr[i];
};

// Cleaning the data
const getLatestYear = (arr) =>
  arr.reduce((accumulator, current) => {
    if (current.Date.includes(YEAR)) accumulator.push(current);
    return accumulator;
  }, []);

// Getting all country names from recieved array of data
const getNamesFromArr = (arr) =>
  arr.reduce((accumulator, current) => {
    accumulator.push(current.Country);
    return accumulator;
  }, []);

// directing programm flow
const getCountryName = (type, countryNames) => {
  switch (type) {
    case "local":
      return getCountry();
    case "random":
      return new Promise((resolve) =>
        resolve(getRandomCountryFromArray(countryNames))
      );
    case "other":
      return new Promise((resolve) =>
        resolve(getOtherCountryFromArray(countryNames))
      );
    default:
      return new Promise((resolve, reject) => reject("Unknown type"));
  }
};

// Finding data
const findByName = (name, arr) => {
  for (const item of arr) {
    if (item.Country === name) return item;
  }
  return false;
};

export const getData = async (type) => {
  try {
    let cachedCountries, mostRecentCountriesData;
    cachedCountries = localStorage.getItem("countries");
    if (cachedCountries) {
      cachedCountries = cachedCountries.split(",");
    }
    if (!cachedCountries) {
      mostRecentCountriesData = await fetchData();
      cachedCountries = getNamesFromArr(mostRecentCountriesData);
      localStorage.setItem("countries", cachedCountries);
    }
    const name = await getCountryName(type, cachedCountries);
    const storedCountry = localStorage.getItem(name);
    if (storedCountry) return JSON.parse(storedCountry);
    if (!mostRecentCountriesData) {
      mostRecentCountriesData = await fetchData();
    }
    const countryData = findByName(name, mostRecentCountriesData);
    if (!countryData) throw new Error("Can not find a country in the list");
    if (type === "local") localStorage.setItem("local", countryData.Country);
    return getPartsOfData(countryData, type);
  } catch (err) {
    throw new Error(err);
  }
};
