import {undeterminedIcon} from "../assets/icons";

export const initialRubricItems = [
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
