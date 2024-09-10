import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {
  render() {
    return (
      <div className="classComponents">
        <h1>class components</h1>
      </div>
    );
  }
}

export default BaseHoc(ClassComponent);
