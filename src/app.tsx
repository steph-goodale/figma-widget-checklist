import { ChecklistComponent } from "./components/Checklist.component";
import { shapeUpChecklist } from "./data/shapeUpChecklist";

const { widget } = figma;

widget.register(() => ChecklistComponent(shapeUpChecklist));
