import { ColDef } from "@ag-grid-community/all-modules";
import { stamp as masterStamp } from "./stamping-machine";


export const stamp = (field: string, obj: Record<string, any>): ColDef => {
    return <ColDef>{
        field,
        children: masterStamp(obj)
    };
}