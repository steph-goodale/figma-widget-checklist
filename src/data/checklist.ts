import { undeterminedIcon } from "../assets/icons";
import { Task } from "../model/Task";
import {Checklist} from "../model/Checklist";
import {Category} from "../model/Category";

const undeterminedStatus = () => ({
    label: "Undetermined",
    icon: undeterminedIcon,
});

const namingCategory: Category = {
    id: "naming",
    title: "Naming",
    taskList: [
        {
            id: "name",
            title: "Name",
            criteria: "Is the name of the component consistent with the codebase and documentation?",
            status: undeterminedStatus(),
        },
        {
            id: "layers",
            title: "Layers",
            criteria: "Are layer names formatted with meaningful values? (No Frame 234)",
            status: undeterminedStatus(),
        },
        {
            id: "variants",
            title: "Variants and component properties",
            criteria:
                "Are variant and component properties correctly named? Consistent with code and among other components?",
            status: undeterminedStatus(),
        },
    ]
};

const styleCategory: Category = {
    id: "style",
    title: "Style",
    taskList: [
        {
            id: "colors",
            title: "Color styles",
            criteria: "Are all the colors from a style library / token and not hard-coded?",
            status: undeterminedStatus(),
        },
        {
            id: "text",
            title: "Text styles",
            criteria: "Is each text layer from a defined text style library / token?",
            status: undeterminedStatus(),
        },
        {
            id: "spacing",
            title: "Spacing, padding and alignment",
            criteria: "Are spacing, padding, and alignment values consistently applied and visually aligned?",
            status: undeterminedStatus(),
        },
        {
            id: "layout",
            title: "Layout",
            criteria: "Does the component behave as expected when resized? (e.g., wrapping, alignment, text layer flow)",
            status: undeterminedStatus(),
        },
    ]
};

const otherCategory: Category = {
    id: "other",
    title: "Other",
    taskList: [
        {
            id: "states",
            title: "States",
            criteria: "Are all the interactive states accounted for? (e.g., hover, focus, pressed)",
            status: undeterminedStatus(),
        },
        {
            id: "content",
            title: "Content",
            criteria: "Does the component behave as expected when non-optimal content is present? (e.g., long strings)",
            status: undeterminedStatus(),
        },
        {
            id: "configuration",
            title: "Configuration",
            criteria:
                "Can all the required variations and states be achieved through the component properties panel? \n(e.g., no digging through Layers)",
            status: undeterminedStatus(),
        },
        {
            id: "accessibility",
            title: "Accessibility",
            criteria:
                "Are color combinations accessible WCAG AAA compliant? Do focusable elements have a defined focus order?",
            status: undeterminedStatus(),
        },
    ]
};

export const initialChecklist: Checklist = {
    id: "component_checklist",
    title: "Component Checklist",
    subtitle: "Toggle checklist status to success, failure, or not applicable",
    categories: [namingCategory, styleCategory, otherCategory]
}
