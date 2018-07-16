"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppProps_1 = require("./AppProps");
const ChildComponent_1 = require("../ChildComponent");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            massage: props.massage
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null, this.state.massage),
            React.createElement(ChildComponent_1.Child, null)));
    }
}
App.propTypes = AppProps_1.LayoutPropsTypes;
exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFrYXJlbmtvZC9Eb2N1bWVudHMvcmVhY3QtbG9jYWxlLWFwcC9zcmMvQXBwL0FwcC50c3giLCJzb3VyY2VzIjpbIi9ob21lL21ha2FyZW5rb2QvRG9jdW1lbnRzL3JlYWN0LWxvY2FsZS1hcHAvc3JjL0FwcC9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHlDQUEyRDtBQUUzRCxzREFBMEM7QUFFMUMsU0FBaUIsU0FBUSxLQUFLLENBQUMsU0FBbUM7SUFHOUQsWUFBbUIsS0FBSztRQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLENBQUE7SUFDTCxDQUFDO0lBQ00sTUFBTTtRQUNULE9BQU8sQ0FDSDtZQUNJLCtCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFLO1lBQzNCLG9CQUFDLHNCQUFLLE9BQUUsQ0FDTixDQUNULENBQUM7SUFDTixDQUFDOztBQWZzQixhQUFTLEdBQUcsMkJBQWdCLENBQUM7QUFEeEQsa0JBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcywgTGF5b3V0UHJvcHNUeXBlcyB9IGZyb20gXCIuL0FwcFByb3BzXCI7XG5pbXBvcnQgeyBMYXlvdXRTdGF0ZSB9IGZyb20gXCIuL0FwcFN0YXRlXCI7XG5pbXBvcnQgeyBDaGlsZCB9IGZyb20gXCIuLi9DaGlsZENvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExheW91dFByb3BzLCBMYXlvdXRTdGF0ZT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcHJvcFR5cGVzID0gTGF5b3V0UHJvcHNUeXBlcztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXNzYWdlOiBwcm9wcy5tYXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm1hc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxDaGlsZC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=