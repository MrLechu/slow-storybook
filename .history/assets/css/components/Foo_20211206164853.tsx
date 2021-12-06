import React from "react";
import ReactDOM from "react-dom";

const Foo = () => <div className="test">foo bar</div>;

ReactDOM.render(<Foo />, document.getElementById("foo"));

export default Foo;
