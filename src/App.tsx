import React from "react";
import Display14 from "./displays/Display14/Display14";
import Header from "./components/Header/Header";
import ProgramCarousel from "./components/ProgramCarousel/ProgramCarousel";
import { Button } from "./components/Button/Button";

function App() {
  const handleItemClick = (index: number) => {
    console.log("Clicked item index:", index);
    // highlight logic or route to another screen
  };

  return (
    <Display14>
      <Header
        leftLabel="Programmes"
        middleLabel="Favorites"
        rightLabel="20:45"
      />

      <div style={{ marginTop: "8px" }}>
        <ProgramCarousel onItemClick={handleItemClick} />
      </div>

      <div style={{ marginTop: "auto", paddingTop: "8px" }}>
        <Button label="Back" />
      </div>
    </Display14>
  );
}

export default App;
