export interface IProps {
    name: string;
    userRole: string;
    srcPicture: string;
    namePicture: string;
    altPic?: string;
    onClick: (event: any) => void;
}
