import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Inbox: HSS Planner");
    }

    async getHtml() {
        return `

            <h1>Inbox</h1>
            <p>You are viewing the Inbox!</p>
        `;
    }
}