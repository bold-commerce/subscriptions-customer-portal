import { Country } from "country-state-city";
import renameKeys from "./renameKeys";

const getCountries = () =>
    Country.getAllCountries().map((country) =>
        renameKeys(country, ["isoCode"], ["code"]));

export default getCountries;
