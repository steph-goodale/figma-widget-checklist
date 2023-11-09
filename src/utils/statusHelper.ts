import { failureIcon, notApplicableIcon, successIcon, undeterminedIcon } from "../assets/icons";
import { StatusIcon } from "../model/Icon";

// available status labels and icons
export const statusIcons: StatusIcon[] = [
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

export const getNextStatus = (currentStatus: string) => {
    // based on the current status, find the next status and return it
    const currentIndex = statusIcons.findIndex((item) => item.label === currentStatus);
    if (currentIndex >= 0 && currentIndex < statusIcons.length - 1) {
        return statusIcons[currentIndex + 1];
    } else if (currentIndex === statusIcons.length - 1) {
        return statusIcons[0];
    } else {
        throw Error("Status out of bounds");
    }
};
