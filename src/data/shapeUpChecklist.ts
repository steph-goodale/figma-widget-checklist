import { undeterminedIcon } from "../assets/icons";
import { Checklist } from "../model/Checklist";
import { Category } from "../model/Category";

const undeterminedStatus = () => ({
    label: "Undetermined",
    icon: undeterminedIcon,
});

const shapingCategory: Category = {
    id: "shaping",
    title: "Step 1: Shaping",
    taskList: [
        {
            id: "boundaries",
            title: "Set boundaries",
            criteria: "How much do we want to invest? Let's set some boundaries.",
            status: undeterminedStatus(),
        },
        {
            id: "elements",
            title: "Rough out the elements",
            criteria: "Sketch a high-level solution; explore possibilities.",
            status: undeterminedStatus(),
        },
        {
            id: "risks",
            title: "Address risks and rabbit holes",
            criteria: "Find unanswered questions, amend the solution as needed.",
            status: undeterminedStatus(),
        },
        {
            id: "pitch",
            title: "Write the pitch",
            criteria: "Write a formal pitch to bring to the betting table.",
            status: undeterminedStatus(),
        },
    ],
};

const bettingCategory: Category = {
    id: "betting",
    title: "Step 2: Betting",
    taskList: [
        {
            id: "choose_pitches",
            title: "Choose some potential bets",
            criteria: "Which pitches are you advocating for? Any important ones to bring back?",
            status: undeterminedStatus(),
        },
        {
            id: "betting_table",
            title: "Hold a betting table",
            criteria: "Review and lobby for pitches; consider the relevance, appetite, solution, time, and people.",
            status: undeterminedStatus(),
        },
    ],
};

const buildingCategory: Category = {
    id: "building",
    title: "Step 3: Building",
    taskList: [
        {
            id: "kickoff",
            title: "Arrange a kick-off call",
            criteria: "Team can discuss solution and ask outstanding questions.",
            status: undeterminedStatus(),
        },
        {
            id: "discovery",
            title: "Discovery",
            criteria: "Dig into the imagined tasks and the existing code; what does this project actually entail?",
            status: undeterminedStatus(),
        },
        {
            id: "first_slice",
            title: "Get one slice done",
            criteria: "Tackle a vertical slice of the project; it should be core, small, and novel.",
            status: undeterminedStatus(),
        },
        {
            id: "scope_map",
            title: "Map the scopes",
            criteria: "Divide the project into meaningful, independent scopes with task lists.",
            status: undeterminedStatus(),
        },
        {
            id: "progress",
            title: "Share your progress",
            criteria: "At what stages of the hill are your scopes? Make this visible to whole team.",
            status: undeterminedStatus(),
        },
        {
            id: "circuit_break",
            title: "Ship -or- circuit break",
            criteria:
                "Ship your work if completed, or break from it if not; the remaining work could become a new pitch.",
            status: undeterminedStatus(),
        },
    ],
};

export const shapeUpChecklist: Checklist = {
    id: "shape_up_checklist",
    title: "Shape Up Checklist",
    subtitle: "Toggle checklist status to success, failure, or not applicable",
    categories: [shapingCategory, bettingCategory, buildingCategory],
};
