import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editedStateCancel } from "../../store/actions/editActions";

const MainPage = ({ editedStateCancel }) => {
  useEffect(() => {
    editedStateCancel();
  }, [editedStateCancel]);
  return <div>MainPage</div>;
};

export default connect(
  null,
  { editedStateCancel }
)(MainPage);
