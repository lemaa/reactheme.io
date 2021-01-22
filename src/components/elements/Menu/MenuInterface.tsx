import { MenuItem } from "types/MenuItem";

export  interface IProps {
    anchorEl: HTMLElement;
    menuId: string;
    name: string;
    isMenuOpen: boolean;
    onClose: () => void;
    onClick?: () => void;
    ListMenuItems: Array<MenuItem>;
 };
