import {QUOTES} from "./actions";

export const LoadingQuotes = (data) => {
    return {
        type: QUOTES,
        data: data,
    }
};

