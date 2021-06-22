import { ColDef, GridOptions } from "@ag-grid-community/all-modules";
/**
 * Stamp is the main function that takes an example data item as input, and
 * makes an best effort attempt at generating a AG Grid configuration that
 * can be used to visualized the data item.
 *
 * @param input exmaple data object as an input template for the function to
 *     analyze
 * @returns an AG Grid options object as the baseline for data visualization.
 */
export declare const stamp: (input: Record<string, any>) => GridOptions | undefined;
export declare const stampColumns: (input: Record<string, any>) => ColDef[] | undefined;
