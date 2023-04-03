import { useEffect, useState } from "react";

const Colors = ({ numOfColors }: { numOfColors: number }) => {
  const [colorsItems, setColorsItems] = useState([]);

  useEffect(() => {
    try {
      const jsonColors = localStorage.getItem("colors");
      const colors = jsonColors ? JSON.parse(jsonColors) : "";
      if (colors.length !== colorsItems.length) {
        setColorsItems(colors);
      }
    } catch (error) {
      throw Error("error: ", error as Error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numOfColors]);

  if (!colorsItems) {
    return null;
  }

  return (
    <div className="colors-list">
      <ul>
        {colorsItems.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};
export default Colors;
