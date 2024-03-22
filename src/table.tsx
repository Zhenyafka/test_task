import * as React from 'react';
import {Paper, Table, TableBody, TableRow, TableCell, TableContainer, TableHead, TablePagination} from "@mui/material";


interface Column {
    id: 'name' | 'price' | 'brand';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'price', label: 'Price', minWidth: 100, format: (value: number) => value.toFixed(2), },
    {id: 'brand', label: 'Brand Name', minWidth: 170, }
];

interface Data {
    name: string;
    price: number;
    brand: string;
}

function createData(
    name: string,
    price: number,
    brand: string,
): Data {
    return { name, price, brand};
}

const rows = [
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('fgh', 100, 'fghfgh'),
    createData('bvn', 200, 'vbvbn'),
    createData('zxsdc', 300, 'zxcgggvbn'),
    createData('hjk', 100, 'qwerty'),
    createData('alhjsd', 200, 'asfghdfgh'),
    createData('eryy', 300, 'zxcvbn'),
    createData('erty', 100, 'qwerty'),
    createData('io[', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('[]p[]]', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('cxvvxcbv', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
    createData('qwe', 100, 'qwerty'),
    createData('asd', 200, 'asdfgh'),
    createData('zxc', 300, 'zxcvbn'),
];

export const ProductTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 840 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows
                                .slice(page, rowsPerPage)
                                .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                        {
                                            columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell  key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
