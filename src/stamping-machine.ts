import { ColDef } from "@ag-grid-community/all-modules";
import { isNumber, isObjectLike, isString } from "lodash";

import { stamp as stampObjectLike } from './object-like';
import { stamp as stampString } from './string';

export const stamp = (input: Record<string, any>): ColDef[] | undefined => {
    return Object.entries(input).map(([key, value]) => {
        if (isString(value) || isNumber(value)) return stampString(key);
        if (isObjectLike(value)) return stampObjectLike(key, value);
        else return {};
    });
}
