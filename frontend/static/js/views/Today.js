import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Today: HSS Planner");
    }

    async getHtml() {
        return `
            <h1>Today</h1>
            <p>Today's tasks</p>
        `;
    }
}