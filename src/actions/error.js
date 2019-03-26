import * as c from "../constants";

export const error = data => ({ type: c.ERROR, data });

export const dismissError = () => ({ type: c.DISMISS_ERROR });