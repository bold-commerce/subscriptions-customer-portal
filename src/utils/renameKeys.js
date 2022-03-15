const renameKeys = (object, oldKeys, newKeys) => {
    const objectCopy = { ...object };

    oldKeys.forEach((oldKey, index) => {
        const newKey = newKeys[index];
        const value = objectCopy[oldKey];
        objectCopy[newKey] = value;
        delete objectCopy[oldKey];
    });

    return objectCopy;
};

export default renameKeys;
