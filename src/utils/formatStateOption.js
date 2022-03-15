const formatStateOption = (state) => {
    const { name, code: value } = state;
    return { name, value };
};

export default formatStateOption;
