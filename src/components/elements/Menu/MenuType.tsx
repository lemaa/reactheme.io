import { MenuItem } from "@CustomType/MenuItem";

export interface IProps {
    anchorEl: HTMLElement | null;
    menuId: string;
    name: string;
    isMenuOpen: boolean;
    onClose: () => void;
    onClick?: () => void;
    ListMenuItems: Array<MenuItem>;
}
