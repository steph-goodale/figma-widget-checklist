import { headerIcon } from "../../assets/icons";

const { widget } = figma;
const { AutoLayout, Text, SVG } = widget;

export const ChecklistTitleComponent = () => (
    <AutoLayout
        name="HeaderTitle"
        direction="horizontal"
        width="fill-parent"
        spacing={24}
        verticalAlignItems="center"
        padding={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }}
    >
        <SVG src={headerIcon} />

        <Text
            fill="#333"
            fontFamily="Roboto"
            fontSize={44}
            fontWeight={700}
            width="fill-parent"
            lineHeight={48}
            textCase="upper"
            verticalAlignText="center"
        >
            Component Checklist
        </Text>
    </AutoLayout>
);

export const ChecklistSubtitleComponent = () => (
    <AutoLayout
        name="HeaderText"
        width="fill-parent"
        padding={{
            top: 0,
            right: 8,
            bottom: 16,
            left: 8,
        }}
    >
        <Text fill="#333" fontFamily="Roboto" fontSize={24} fontWeight={400} lineHeight={40} width="fill-parent">
            Check these things off
        </Text>
    </AutoLayout>
);
