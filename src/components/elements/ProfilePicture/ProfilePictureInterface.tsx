export  interface IProps {
    name: string;
    role: string;
    srcPicture: string;
    namePicture: string;
    altPic?: string;
    onClick: (event: any) => void;
 };
