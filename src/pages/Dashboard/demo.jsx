import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const columns = [
	{ field: 'id', headerName: 'Lead ID', width: 350 },
	{ field: 'name', headerName: 'Name', width: 350 },
	{ field: 'company', headerName: 'Company', width: 350 },
	{ field: 'nos', headerName: 'Number of Seats', type: 'number', width: 250 },
	{
		field: 'RealtorAssigned',
		headerName: 'Realtor Assigned',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 350,
		// valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
	},
];

const rows = [
	{ id: 1, name: 'Snow', company: 'Jon',RealtorAssigned: 'Albus Dumbledore ', nos: 35 },
	{ id: 2, name: 'Lannister', company: 'Cersei',RealtorAssigned: 'Albus Dumbledore ', nos: 42 },
	{ id: 3, name: 'Lannister', company: 'Jaime',RealtorAssigned: 'Albus Dumbledore ', nos: 45 },
	{ id: 4, name: 'Stark', company: 'Arya',RealtorAssigned: 'Albus Dumbledore ', nos: 16 },
	{ id: 5, name: 'Targaryen', company: 'Daenerys',RealtorAssigned: 'Albus Dumbledore ', nos: null },
	{ id: 6, name: 'Melisandre', company: null,RealtorAssigned: 'Albus Dumbledore ', nos: 150 },
	{ id: 7, name: 'Clifford', company: 'Ferrara',RealtorAssigned: 'Albus Dumbledore ', nos: 44 },
	{ id: 8, name: 'Frances', company: 'Rossini',RealtorAssigned: 'Albus Dumbledore ', nos: 36 },
	{ id: 9,RealtorAssigned: 'Albus Dumbledore ', nos: '99', company: 'Harvey', lastName: 'raj' },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {

	const theme = useTheme();
	return (
		<Paper sx={{ height: 400, width: '90%', placeSelf: 'center' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{ pagination: { paginationModel } }}
				pageSizeOptions={[5, 10, 15]}
				checkboxSelection={false}
				isRowSelectable={() => false}
				disableSelectionOnClick

				sx={{
					border: 0,
					'& .MuiDataGrid-cell:focus': {
						outline: 'none', // Removes focus outline on cell
					},
					'& .MuiDataGrid-columnHeader:focus': {
						outline: 'none',
					},
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.background.default,
				}}
			/>
		</Paper>
	);
}
