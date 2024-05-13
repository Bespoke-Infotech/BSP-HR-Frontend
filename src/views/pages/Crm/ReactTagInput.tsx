/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const ReactTagInput = () => {
  const [tags, setTags] = useState<any>(["Promotion", "Rated "]);
  return (
    <div>
      <TagsInput value={tags} />
    </div>
  );
};

export default ReactTagInput;
