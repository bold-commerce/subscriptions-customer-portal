const formatIntervalOption = (interval) => {
    const { id: value, name } = interval;
    return { name, value };
};

export default formatIntervalOption;
