import {initialChecklist} from "../data/checklist";
import {getNextStatus} from "../utils/statusHelper";
import {ChecklistSubtitleComponent, ChecklistTitleComponent} from "./partials/ChecklistTitle.component";
import {TaskComponent} from "./partials/Task.component";
import {Task} from "../model/Task";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

export const ChecklistComponent = () => {
    const [checklist, setChecklist] = useSyncedState("checklist", () => initialChecklist);

    function cycleStatus(task: Task) {
        setChecklist((tasks) => {
            const checklistCopy = [...tasks];
            const taskCopy = checklistCopy ? checklistCopy.find((t) => t.id === task.id) : undefined;
            if (taskCopy) taskCopy.status = getNextStatus(task.status.label);
            return checklistCopy;
        });
    }

    return (
        <AutoLayout
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
        >
            <AutoLayout name="Header" direction="vertical" width="fill-parent" spacing={16}>
                {ChecklistTitleComponent()}
                {ChecklistSubtitleComponent()}
            </AutoLayout>

            {checklist.map((item) => {
                return TaskComponent(item, cycleStatus);
            })}
        </AutoLayout>
    );
};
