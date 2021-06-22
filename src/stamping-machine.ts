import { ColDef } from "@ag-grid-community/all-modules";
import { isArrayLike, isString } from "lodash";

import { stamp as stampString } from './string';

const stamp = (input: Record<string, any>, path?: string): ColDef[] | undefined => {
    return Object.entries(input).map(([key, value]) => {
        if (isString(value)) return stampString(key);
        if (isArrayLike(value)) return stampArrayLike(key);
        else return {};
    });
}

const stampArrayLike = (field: string): ColDef => {
    return <ColDef>{ field };
}

export { stamp }
