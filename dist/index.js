"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pylon = {
    action: (actions) => {
        document.addEventListener('DOMContentLoaded', () => {
            for (const action of actions) {
                const targets = document.querySelectorAll(action.selector);
                targets.forEach((target) => {
                    try {
                        action.func(target);
                    }
                    catch (e) {
                        console.error(e);
                    }
                });
            }
        });
    },
};
exports.default = Pylon;
