import React from "react";
import { UploadFile } from ".";
import Icon from "../Icon";

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

const UploadList: React.FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;
  return <ul className="viking-upload-list">uploadLisU</ul>;
};

export default UploadList;
