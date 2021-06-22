import { ColDef } from "@ag-grid-community/all-modules";

export const stamp = (field: string): ColDef => {
    return <ColDef>{ field };
}