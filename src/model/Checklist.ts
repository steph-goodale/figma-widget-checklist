import { Category } from "./Category";

export type Checklist = {
    id: string;
    title: string;
    subtitle: string;
    categories: Category[];
};
