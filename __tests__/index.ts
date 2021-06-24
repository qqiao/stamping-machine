import { ColDef } from "@ag-grid-community/all-modules";
import { stamp, stampColumns } from "../src";

test('Stamping simple string-string objects', () => {
    expect(stampColumns({
        key1: 'value1',
        key2: 'value2'
    })).toEqual(<ColDef[]>[
        { field: 'key1' }, { field: 'key2' }
    ]);
});

test('stamping nested objects should result in column spanning', () => {
    expect(stampColumns({
        key1: 'value1',
        key2: {
            key21: 'value21',
            key22: 'value22'
        }
    })).toEqual(<ColDef[]>[
        { field: 'key1' }, {
            field: 'key2',
            children: [
                { field: 'key21' }, { field: 'key22' }
            ]
        }
    ]);
});

test('stamping nested object should apply recurisively', () => {
    expect(stampColumns({
        key1: 'value1',
        key2: {
            key21: 'value21',
            key22: 'value22'
        },
        key3: {
            key31: {
                key311: 'value311',
                key312: 'value312'
            },
            key32: {
                key321: 'value321',
                key322: 'value322'
            }
        }
    })).toEqual(<ColDef[]>[
        { field: 'key1' }, {
            field: 'key2',
            children: [
                { field: 'key21' }, { field: 'key22' }
            ]

        },
        {
            field: 'key3',
            children: [
                {
                    field: 'key31', children: [
                        { field: 'key311' }, { field: 'key312' }
                    ]
                },
                {
                    field: 'key32', children: [
                        { field: 'key321' }, { field: 'key322' }
                    ]
                }
            ]
        }
    ]);
});

test('If baseGridOptions is given, its values should be taken', () => {
    expect(stamp({ key1: 'value1' }, {
        defaultColDef: { sortable: false }
    })).toEqual({
        defaultColDef: { sortable: false, pivot: true },
        columnDefs: [{ field: 'key1' }]
    });
});
