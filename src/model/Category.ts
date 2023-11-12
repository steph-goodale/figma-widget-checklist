import { Task } from "./Task";

export type Category = {
    id: string;
    title: string;
    taskList: Task[];
};
