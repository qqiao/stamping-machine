import { ColDef } from "@ag-grid-community/all-modules";
import { stampColumns as masterStamp } from ".";

export const stamp = (field: string, obj: Record<string, any>): ColDef => {
    return <ColDef>{
        field,
        children: masterStamp(obj)
    };
}
