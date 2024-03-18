import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const gatunekText = ["Erotyk", "Fantasy", "Historyczny", "Horror"];
function UseTransitionHome() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.stiff} inline={true} direction="down">
      {gatunekText[index % gatunekText.length]}
    </TextTransition>
  );
}

export default UseTransitionHome;
