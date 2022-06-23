const formatCityOption = (city) => {
    const { name } = city;
    return { name, value: name };
};

export default formatCityOption;
