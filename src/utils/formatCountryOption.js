const formatCountryOption = (country) => {
    const { name, code: value } = country;
    return { name, value };
};

export default formatCountryOption;
