import { ChecklistComponent } from "./components/Checklist.component";
import {initialChecklist} from "./data/checklist";

const { widget } = figma;

widget.register(() => ChecklistComponent(initialChecklist));
