
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FilterLink_1 = require("../container/FilterLink");
function Footer(_a) {
    var filterLink = _a.filterLink, setFilterLink = _a.setFilterLink;
    return (<p>
            Show:
            {' '}
            <FilterLink_1.FilterLink filter="SHOW_ALL">
                ALL
            </FilterLink_1.FilterLink>
            {', '}
            <FilterLink_1.FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink_1.FilterLink>
            {', '}
            <FilterLink_1.FilterLink filter="SHOW_COMPLETED">
                Complete
            </FilterLink_1.FilterLink>
        </p>);
}

exports.default = Footer;
