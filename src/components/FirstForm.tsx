import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  onSubmit: Dispatch<SetStateAction<number>>;
}

const FirstForm = ({ onSubmit }: Props) => {
  const [newColor, setNewColor] = useState("");
  const checkColor = (newColor: string) => {
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    if (regex.test(newColor) === true) {
      return true;
    } else {
      return false;
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewColor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkColor(newColor)) {
      try {
        const oldColorsJSON = localStorage.getItem("colors");
        const oldColors = oldColorsJSON ? JSON.parse(oldColorsJSON) : [];
        localStorage.setItem(
          "colors",
          JSON.stringify([...oldColors, newColor])
        );
        onSubmit(oldColors.length + 1);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Bad words");
    }
  };
  return (
    <div className="color-form">
      <form onSubmit={handleSubmit}>
        <input maxLength={8} onChange={onChange} type="text" />
        <input type="submit" value="Add new color"></input>
      </form>
    </div>
  );
};
export default FirstForm;
