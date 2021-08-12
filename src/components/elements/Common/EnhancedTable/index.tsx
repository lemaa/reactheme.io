import React from "react";
import clsx from "clsx";
import { IProps, HeadCell, Order, EnhancedTableProps, EnhancedTableToolbarProps } from "@Element/Common/EnhancedTable/EnhancedTable";
import { useToolbarStyles, useStyles } from "@Element/Common/EnhancedTable/EnhancedTableStyle";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Toolbar,
    Typography,
    Paper,
    Checkbox,
    IconButton,
    Tooltip,
} from "@material-ui/core";
import { Delete, FilterList } from "@material-ui/icons";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator<Key extends keyof any>(order: Order, orderBy: Key): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells, checkboxRows } = props;
    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {checkboxRows && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{ "aria-label": "select all" }}
                        />
                    </TableCell>
                )}
                {headCells.map(headCell => (
                    <TableCell key={headCell.id} align="left" padding={headCell.disablePadding ? "none" : "default"} sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : "asc"} onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                            {orderBy === headCell.id ? <span className={classes.visuallyHidden}>{order === "desc" ? "sorted descending" : "sorted ascending"}</span> : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const classes = useToolbarStyles();
    const { numSelected, tableTitle, checkboxRows } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 && checkboxRows === true ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected}
                    selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    {tableTitle}
                </Typography>
            )}
            {numSelected > 0 && checkboxRows === true ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <Delete />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterList />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

const EnhancedTable: React.FC<IProps> = ({ data, tableTitle, checkboxRows }) => {
    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<string>(Object.keys(data[0])[0]);
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const firstKey = Object.keys(data[0])[0];
    const headCells: HeadCell[] = Object.keys(data[0]).map((key: string) => {
        return {
            id: key,
            label: key.replace("_", " "),
            disablePadding: false,
            numeric: typeof data[0][key] === "number",
        };
    });

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        if (Object.keys(data[0]).includes(property) !== true) return;
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = data.map((n: any) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} tableTitle={tableTitle} checkboxRows={checkboxRows} />
                <TableContainer>
                    <Table className={classes.table} aria-labelledby="tableTitle" size="medium" aria-label="enhanced table">
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={data.length}
                            headCells={headCells}
                            checkboxRows={checkboxRows}
                        />
                        <TableBody>
                            {stableSort(data, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row[firstKey].toString());
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={checkboxRows ? event => handleClick(event, row[firstKey].toString()) : undefined}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row[firstKey].toString()}
                                            selected={checkboxRows ? isItemSelected : false}
                                        >
                                            {checkboxRows && (
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} />
                                                </TableCell>
                                            )}
                                            {Object.keys(row).map((key: string, i: number) => {
                                                if (i === 0)
                                                    return (
                                                        <TableCell key={i.toString()} component="th" id={labelId} scope="row" padding={checkboxRows ? "none" : "default"}>
                                                            {row[key]}
                                                        </TableCell>
                                                    );
                                                return (
                                                    <TableCell key={i.toString()} align="left">
                                                        {row[key]}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};
export { EnhancedTable };
