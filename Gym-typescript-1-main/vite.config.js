var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vite", "@vitejs/plugin-react", "path"], function (require, exports, vite_1, plugin_react_1, path_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    plugin_react_1 = __importDefault(plugin_react_1);
    path_1 = __importDefault(path_1);
    // https://vitejs.dev/config/
    exports.default = (0, vite_1.defineConfig)({
        plugins: [(0, plugin_react_1.default)()],
        resolve: {
            alias: [{ find: "@", replacement: path_1.default.resolve(__dirname, "src") }],
        },
    });
});
