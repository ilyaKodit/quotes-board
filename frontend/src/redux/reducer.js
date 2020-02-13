import {QUOTES} from "./actions";

const initialState = {
    quotesSelect: 'RUB',
    todayQuotes: null,
    yesterdayQuotes: null,
    dayBeforeYesterdayQuotes: null
};

export default function (oldState = initialState, action) {
    switch (action.type) {
        case QUOTES:
            return {
                quotesSelect: action.data.quotesSelect,
                todayQuotes: action.data.todayQuotes,
                yesterdayQuotes: action.data.yesterdayQuotes,
                dayBeforeYesterdayQuotes: action.data.dayBeforeYesterdayQuotes
            };

        default:
            return oldState;
    }
};
