export interface IProps {
    pathName: string;
    filterButton: boolean;
    refreshButton: boolen;
    customButton?: React.ReactNode;
    OnFilterClick?: (event: any) => void;
    onrefreshClick?: (event: any) => void;
}
