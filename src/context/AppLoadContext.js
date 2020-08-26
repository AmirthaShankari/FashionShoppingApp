// App Imports
import CreateContext from "./createContext";
import { AppConstants } from "../constants/AppConstants";
import { log } from "../utils/logger";

// Constants Declaration
const C = AppConstants.CONTEXTS.APP_LOAD;

const appLoadReducer = (state, action) => {
    switch (action.type) {
        case C.UPDATE:
            return { ...state, isAppLoadComplete: action.payload };
        default:
            return { ...state };
    }
};

// Function to update the app load flag
const updateAppLoadFlag = (dispatch) => (flag) => {
    log.info('updating app load flag....')
    dispatch({ type: C.UPDATE, payload: flag });
};

export const { Context, Provider } = CreateContext(
    appLoadReducer,
    { isAppLoadComplete: false },
    { updateAppLoadFlag }
);
