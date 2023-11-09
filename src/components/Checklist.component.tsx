import {initialRubricItems} from "../data/checklist";
import {getNextStatus} from "../utils/statusHelper";
import {ChecklistSubtitleComponent, ChecklistTitleComponent} from "./partials/ChecklistTitle.component";

const { widget } = figma;
const { AutoLayout, useSyncedState, SVG, Text } = widget;

export const ChecklistComponent = () => {
    const [rubricItems, setRubricItems] = useSyncedState("rubricItems", () => initialRubricItems);
    const [lastUpdate, setLastUpdate] = useSyncedState("lastUpdate", null);

    function cycleStatus(item) {
        // click event copies current updates the selected item status to the next status
        setRubricItems((rubricItems) => {
            const temp = [...rubricItems];
            temp[item.position].status = getNextStatus(item.status.label);
            setLastUpdate(item.position);
            return temp;
        });
    }

    return (
        <AutoLayout
            direction="vertical"
            fill="#FFFFFF"
            spacing={32}
            padding={{
                top: 12,
                right: 32,
                bottom: 12,
                left: 32,
            }}
        >
            <AutoLayout name="Header" direction="vertical" width="fill-parent" spacing={16}>
                {ChecklistTitleComponent()}
                {ChecklistSubtitleComponent()}
            </AutoLayout>

            {lastUpdate !== null ? (
                <Text
                    fill="#999"
                    fontSize={14}
                >{`${rubricItems[lastUpdate].title} set to "${rubricItems[lastUpdate].status.label}"`}</Text>
            ) : (
                <Text fill="#999" fontSize={14}>
                    Toggle checklist status to success, failure, or not applicable
                </Text>
            )}
            {rubricItems.map((item, index) => {
                return (
                    <AutoLayout
                        key={index}
                        name="Rubric"
                        overflow="visible"
                        spacing={24}
                        width={900}
                        verticalAlignItems="start"
                        padding={{
                            top: 0,
                            right: 0,
                            bottom: 12,
                            left: 0,
                        }}
                    >
                        <AutoLayout
                            name="Status"
                            overflow="visible"
                            horizontalAlignItems="end"
                            verticalAlignItems="center"
                        >
                            <SVG src={item.status.icon} onClick={() => cycleStatus(item)} />
                        </AutoLayout>
                        <AutoLayout
                            name="Rubric Text"
                            overflow="visible"
                            direction="vertical"
                            spacing={8}
                            width="fill-parent"
                        >
                            <Text name="Title" fill="#000" fontFamily="Inter" fontSize={20} fontWeight={500}>
                                {item.title}
                            </Text>
                            <Text name="Description" fill="#555" fontFamily="Inter">
                                {item.criteria}
                            </Text>
                        </AutoLayout>
                    </AutoLayout>
                );
            })}
        </AutoLayout>
    );
}
