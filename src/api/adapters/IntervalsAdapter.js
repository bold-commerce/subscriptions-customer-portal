import renameKeys from "../../utils/renameKeys";

class IntervalsAdapter {
    static fromServer(interval) {
        return renameKeys(interval, ["interval_name"], ["name"]);
    }
}

export default IntervalsAdapter;
