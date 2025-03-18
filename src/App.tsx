import { Button } from "./components/Button/Button";
import Display14 from "./displays/Display14/Display14";

import "./App.css";

function App() {
  return (
    <>
      <Display14>
        <div>
          <span className="fa">{"\uF015"}</span>
          Display14
        </div>

        <Button label="Button" />
      </Display14>
    </>
  );
}

export default App;
