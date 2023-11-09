/*
This is Figma widget that contains a basic, best-practice checklist for design system component development

When placed on the Figma canvas near a component, the idea is that the checklist items help ensure the component is properly structured and robust enough for use in a design system setting.

*/

import {failureIcon, notApplicableIcon, successIcon, undeterminedIcon} from "./assets/icons";
import {ChecklistSubtitleComponent, ChecklistTitleComponent} from "./components/partials/ChecklistTitle.component";

const { widget } = figma;
const { useSyncedState, AutoLayout, Text, SVG } = widget;

function Widget() {
    // available status labels and icons
    const statusIcons = [
        {
            label: "Undetermined",
            icon: undeterminedIcon,
        },
        {
            label: "Success",
            icon: successIcon,
        },
        {
            label: "Failure",
            icon: failureIcon,
        },
        {
            label: "Not applicable",
            icon: notApplicableIcon,
        },
    ];
    // initial state
    const initialRubricItems = [
        {
            position: 0,
            title: "Name",
            criteria: "Is the name of the component consistent with the codebase and documentation?",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 1,
            title: "Layers",
            criteria: "Are layer names formatted with meaningful values? (No Frame 234)",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 2,
            title: "Color styles",
            criteria: "Are all the colors from a style library / token and not hard-coded?",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 3,
            title: "Text styles",
            criteria: "Is each text layer from a defined text style library / token?",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 4,
            title: "Spacing, padding and alignment",
            criteria: "Are spacing, padding, and alignment values consistently applied and visually aligned?",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 5,
            title: "Variants and component properties",
            criteria:
                "Are variant and component properties correctly named? Consistent with code and among other components?",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 6,
            title: "States",
            criteria: "Are all the interactive states accounted for? (e.g., hover, focus, pressed)",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 7,
            title: "Content",
            criteria: "Does the component behave as expected with non-optimal concent is present? (e.g., long strings)",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 8,
            title: "Layout",
            criteria:
                "Does the component behave as expected when resized? (e.g., wrapping, alignment, text layer flow)",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 9,
            title: "Configuration",
            criteria:
                "Can all the required variations and states be acheived through the component properties panel? \n(e.g., no digging through Layers)",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
        {
            position: 10,
            title: "Accessibility",
            criteria:
                "Are color combinations accessible WCAG AAA compliant? Do focusable elements have a defined focus order?",
            status: {
                label: "Undetermined",
                icon: undeterminedIcon,
            },
        },
    ];

    const [rubricItems, setRubricItems] = useSyncedState("rubricItems", () => initialRubricItems);
    const [lastUpdate, setLastUpdate] = useSyncedState("lastUpdate", null);

    function getNextStatus(currentStatus) {
        // based on the current status, find the next status and return it
        const currentIndex = statusIcons.findIndex((item) => item.label === currentStatus);
        if (currentIndex >= 0 && currentIndex < statusIcons.length - 1) {
            return statusIcons[currentIndex + 1];
        } else if (currentIndex === statusIcons.length - 1) {
            return statusIcons[0];
        } else {
            throw Error("Status out of bounds");
        }
    }

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

widget.register(Widget);
