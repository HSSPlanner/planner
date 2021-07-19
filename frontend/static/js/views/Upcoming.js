import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Upcoming: HSS Planner");
    }

    async getHtml() {
        return `
            <h1>Upcoming</h1>
            <p>Upcoming tasks</p>
        `;
    }
}