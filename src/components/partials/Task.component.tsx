import { Task } from "../../model/Task";

const { widget } = figma;
const { AutoLayout, SVG } = widget;

export const TaskComponent = (task: Task, cycleStatus: (task: Task) => void) => {
    return (
        <AutoLayout
            key={task.id}
            name="Task"
            direction="horizontal"
            spacing={16}
            verticalAlignItems="start"
            padding={{
                top: 8,
                right: 16,
                bottom: 8,
                left: 16,
            }}
            width="fill-parent"
            overflow="visible"
            hoverStyle={{ fill: "#D7EAFC" }}
            onClick={() => cycleStatus(task)}
        >
            <AutoLayout
                name="TaskStatus"
                overflow="visible"
                horizontalAlignItems="end"
                verticalAlignItems="center"
                padding={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <SVG src={task.status.icon} />
            </AutoLayout>

            {TaskTextComponent(task)}
        </AutoLayout>
    );
};

const TaskTextComponent = (task: Task) => (
    <AutoLayout
        name="TaskText"
        overflow="visible"
        direction="vertical"
        spacing={8}
        padding={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }}
        width="fill-parent"
    >
        <widget.Text name="Title" fill="#000" fontFamily="Roboto" fontSize={28} fontWeight={500} width="fill-parent">
            {task.title}
        </widget.Text>

        {task.criteria && (
            <widget.Text name="Criteria" fill="#333" fontFamily="Roboto" fontSize={20}>
                {task.criteria}
            </widget.Text>
        )}
    </AutoLayout>
);
