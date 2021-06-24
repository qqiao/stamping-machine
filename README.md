# Stamping Machine

Stamping Machine is a library that takes any given object and stamps it into
a ```GridOption``` object for AG Grid.

### Usage
The usage of the library is very staight-forward
```javascript
import { Grid } from 'ag-grid-enterprise';
import { stamp } from '@qqiao/stamping-machine';

// Fetch data objects from any remote data service
const myDataObjects = await (await fetch('http://data.api.com')).json();

// Use stamping machine to generate the grid options
const gridOptions = stamp(myDataObjects.[0]?);

// Hookup AG Grid
new Grid(document.querySelector('#myGrid'), gridOptions);
gridOptions.setRowData(myDataObjects);
```
