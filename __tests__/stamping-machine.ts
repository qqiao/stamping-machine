import { ColDef } from "@ag-grid-community/all-modules";
import { stamp } from "../src/stamping-machine";

test('Stamping simple string-string objects', () => {
    expect(stamp({
        key1: 'value1',
        key2: 'value2'
    })).toEqual(<ColDef[]>[
        { field: 'key1' }, { field: 'key2' }
    ]);
});
