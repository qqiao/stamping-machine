import { ColDef } from "@ag-grid-community/all-modules";
import { stamp } from "../src/object-like";

test('object-like should generate children', () => {
    expect(stamp('parent', { 1: '1', 2: '2', 3: '3' })).toEqual(<ColDef>{
        field: 'parent',
        children: [
            { field: '1' },
            { field: '2' },
            { field: '3' },
        ]
    });
});