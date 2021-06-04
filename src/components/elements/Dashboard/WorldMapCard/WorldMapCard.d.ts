export interface IProps {
    title: string;
    description: string;
    data: any;
}

export type MarkerType = {
    name: string;
    coordinates: [number, number];
};
