import { chevronDownIcon, chevronUpIcon } from "../../assets/icons";
import { Category } from "../../model/Category";
import { Task } from "../../model/Task";
import { TaskComponent } from "./Task.component";

const { widget } = figma;
const { AutoLayout, SVG, useSyncedState } = widget;

export const CategoryComponent = (
    category: Category,
    index: number,
    cycleStatus: (category: Category, task: Task) => void
) => {
    const [hidden, setHidden] = useSyncedState(`category_hidden_${category.id}`, () => index !== 0);

    return (
        <AutoLayout
            key={category.id}
            name="Category"
            direction="vertical"
            width="fill-parent"
            verticalAlignItems="center"
            padding={{
                top: 0,
                right: 0,
                bottom: 16,
                left: 0,
            }}
        >
            {CategoryTitleComponent(category.title, hidden, setHidden)}
            <AutoLayout name="CategoryTasks" hidden={hidden} direction="vertical" width="fill-parent" spacing={16}>
                {category.taskList.map((task) => TaskComponent(category, task, cycleStatus))}
            </AutoLayout>
        </AutoLayout>
    );
};

const CategoryTitleComponent = (categoryTitle: string, hidden: boolean, setHidden: (hidden: boolean) => void) => (
    <AutoLayout
        name="CategoryTitle"
        width="fill-parent"
        padding={{
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
        }}
        verticalAlignItems="center"
        hoverStyle={{ fill: "#E8EBED" }}
        onClick={() => setHidden(!hidden)}
    >
        <widget.Text fill="#333" fontFamily="Roboto" fontSize={32} fontWeight={700} width="fill-parent">
            {categoryTitle}
        </widget.Text>

        {hidden ? <SVG src={chevronUpIcon} /> : <SVG src={chevronDownIcon} />}
    </AutoLayout>
);
