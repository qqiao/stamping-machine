import { ColDef } from "@ag-grid-community/all-modules";
import { stamp } from "../src/string";

test('stamping simple string', () => {
    expect(stamp('123')).toEqual(<ColDef>{
        field: '123'
    });
});
