import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';

function App() {
	const [data, setData] = React.useState([]);
	const [nameRow, setNameRow] = React.useState([]);

	React.useEffect(() => {
		axios.get('https://62f3c92cb81dba4a013be4cf.mockapi.io/test').then((res) => {
			setData(res.data);
			setNameRow(Object.keys(res.data[0]));
		});
	}, []);

	return (
		<div className="App">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{nameRow.map((name) => (
								<TableCell onClick={() => console.log(name)} align="right">{name}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<TableRow
								key={row.starttime}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.type}
								</TableCell>
								<TableCell align="right">{row.imageid}</TableCell>
								<TableCell align="right">{row.length}</TableCell>
								<TableCell align="right">{row.endtime.toLocaleString()}</TableCell>
								<TableCell align="right">{row.starttime}</TableCell>
                <TableCell align="right">{row.totaldefects}</TableCell>
								<TableCell align="right">{row.coilid}</TableCell>
								<TableCell align="right">{row.batch}</TableCell>
								<TableCell align="right">{row.width}</TableCell>
                <TableCell align="right">{row.ts}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default App;
