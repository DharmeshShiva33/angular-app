import { MenuItem } from "primeng/api";

export class HeaderMenu {
    label: string;
    icon: string;
    items?: MenuItem[];

    constructor() {
        this.label = '';
        this.icon = '';
        this.items = [];
    }
}