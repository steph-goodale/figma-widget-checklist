import {getNextStatus} from "../utils/statusHelper";
import {ChecklistSubtitleComponent, ChecklistTitleComponent} from "./partials/ChecklistTitle.component";
import {TaskComponent} from "./partials/Task.component";
import {Task} from "../model/Task";
import {Checklist} from "../model/Checklist";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

export const ChecklistComponent = (initialChecklist: Checklist) => {
    const [checklist, setChecklist] = useSyncedState("checklist", () => initialChecklist);

    function cycleStatus(task: Task) {
        setChecklist(() => {
            const checklistCopy = Object.assign({}, checklist);
            const taskCopy = checklistCopy ? checklistCopy.taskList.find((t) => t.id === task.id) : undefined;
            if (taskCopy) taskCopy.status = getNextStatus(task.status.label);
            return checklistCopy;
        });
    }

    const resetChecklist = () => setChecklist(initialChecklist);

    return (
        <AutoLayout
            key={checklist.id}
            direction="vertical"
            fill="#fff"
            spacing={16}
            cornerRadius={16}
            width={1024}
            padding={{
                top: 32,
                right: 32,
                bottom: 32,
                left: 32,
            }}
            effect={{
                type: "drop-shadow",
                color: "#00000040",
                offset: {
                    x: 0,
                    y: 6,
                },
                blur: 24,
            }}
        >
            <AutoLayout name="Header" direction="vertical" width="fill-parent" spacing={16}>
                {ChecklistTitleComponent(checklist.title, resetChecklist)}
                {ChecklistSubtitleComponent(checklist.subtitle)}
            </AutoLayout>

            {checklist.taskList.map((item) => {
                return TaskComponent(item, cycleStatus);
            })}
        </AutoLayout>
    );
};
