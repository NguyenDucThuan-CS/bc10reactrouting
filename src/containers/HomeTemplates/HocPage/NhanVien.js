import React, { Component } from "react";

export default class NhanVien extends Component {
  render() {
    return (
      <>
        <div class="form-group">
          <label for="">Ma NV</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>

        <div class="form-group">
          <label for="">Ten NV</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>

        <div class="form-group">
          <label for="">Email</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
      </>
    );
  }
}
