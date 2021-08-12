export interface IProps {
    data: array<Object>;
    tableTitle: string;
    checkboxRows: boolean;
}

export interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
}

export type Order = "asc" | "desc";

export interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: HeadCell[];
    checkboxRows: boolean;
}

export interface EnhancedTableToolbarProps {
    numSelected: number;
    tableTitle: string;
    checkboxRows: boolean;
}
