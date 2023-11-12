export type Task = {
    id: string;
    title: string;
    status: TaskStatus;
    criteria?: string;
};

export type TaskStatus = {
    label: string;
    icon: string;
};
