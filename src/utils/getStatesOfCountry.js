import { State } from "country-state-city";
import renameKeys from "./renameKeys";

const getStatesOfCountry = (countryCode) =>
    State.getStatesOfCountry(countryCode).map((state) =>
        renameKeys(state, ["isoCode"], ["code"]));

export default getStatesOfCountry;
