import React, { Component } from "react";

export default class UnderconstructionPage extends Component {
  render() {
    return (
      <div className="modal" style={{ display: "block", zIndex: "-2" }}>
        <div className="modal-dialog modal-md modal-lg modal-xl modal-dialog-centered">
          <div className="modal-content p-5" style={{ border: "unset" }}>
            <div className="col mr-auto">
              <div className="text-center">
                <span style={{ fontSize: "100px", marginRight: "10px" }}>
                  🚧
                </span>
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: "bolder",
                    padding: "20px",
                  }}
                >
                  UNDERCONSTRUCTION
                </span>
                <span style={{ fontSize: "100px", marginLeft: "10px" }}>
                  🚧
                </span>
              </div>
              <div className="text-center mt-5">
                <a
                  className="btn btn-success"
                  style={{ color: "black" }}
                  href="/"
                >
                  back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
