import { isNumber, isObjectLike, isString } from "lodash";
import { stamp as stampObjectLike } from './object-like';
import { stamp as stampString } from './string';
/**
 * Stamp is the main function that takes an example data item as input, and
 * makes an best effort attempt at generating a AG Grid configuration that
 * can be used to visualized the data item.
 *
 * @param input exmaple data object as an input template for the function to
 *     analyze
 * @returns an AG Grid options object as the baseline for data visualization.
 */
export const stamp = (input) => {
    return {
        defaultColDef: {
            pivot: true
        }
    };
};
export const stampColumns = (input) => {
    return Object.entries(input).map(([key, value]) => {
        if (isString(value) || isNumber(value))
            return stampString(key);
        if (isObjectLike(value))
            return stampObjectLike(key, value);
        else
            return {};
    });
};
//# sourceMappingURL=index.js.map