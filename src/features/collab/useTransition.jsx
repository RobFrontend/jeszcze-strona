import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const collabText = ["wydawnictwam", "autoram", "czytelnikam"];
function UseTransition() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.stiff} inline={true} direction="down">
      {collabText[index % collabText.length]}
    </TextTransition>
  );
}

export default UseTransition;
