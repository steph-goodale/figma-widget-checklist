import { getNextStatus } from "../utils/statusHelper";
import { ChecklistSubtitleComponent, ChecklistTitleComponent } from "./partials/ChecklistTitle.component";
import { Task } from "../model/Task";
import { Checklist } from "../model/Checklist";
import { CategoryComponent } from "./partials/Category.component";
import { Category } from "../model/Category";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

export const ChecklistComponent = (initialChecklist: Checklist) => {
    const [checklist, setChecklist] = useSyncedState("checklist", () => initialChecklist);

    const cycleStatus = (category: Category, task: Task) => {
        setChecklist(() => {
            const checklistCopy = Object.assign({}, checklist);
            const categoryCopy = checklistCopy.categories.find((c) => c.id === category.id);
            const taskCopy = categoryCopy ? categoryCopy.taskList.find((t) => t.id === task.id) : undefined;
            if (taskCopy) taskCopy.status = getNextStatus(task.status.label);
            return checklistCopy;
        });
    };

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

            {checklist.categories.map((category, index) => CategoryComponent(category, index, cycleStatus))}
        </AutoLayout>
    );
};
