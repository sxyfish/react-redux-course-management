export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null)
            return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch (error) {
        throw (error);
    }
};
export const loadTag = () => {
    try {
        const serializedTag = localStorage.getItem('firsttag');
        if (serializedTag === null) {
            return undefined;
        }
        return JSON.parse(serializedTag);
    } catch (error) {
        return undefined;
    }
};
export const setTag = () => {
    try {
        const serializedTag = localStorage.getItem('firsttag');
        if (serializedTag === null) {
            const serializedTag = JSON.stringify({ "firsttag": true });
            localStorage.setItem('firsttag', serializedTag);
        }
    } catch (error) {
        throw (error);
    }
};
