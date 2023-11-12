import {Task} from "./Task";

export type Checklist = {
    id: string;
    title: string;
    subtitle: string;
    taskList: Task[];
};
