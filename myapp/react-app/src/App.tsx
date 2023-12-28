import { useState } from "react";
import Alert from "./components/Training/Alert";
import MyButton from "./components/Training/ButtonComponent";
import Like from "./components/Training/likeButton";
import Nav from "./components/NavBar";
function App() {
  const [currentState, updateState] = useState(false);
  // const handleSelectedItem = (item: string) => console.log(item);
  // const handleSelectedItemTwo = (item: string) => console.log(item);
  // let name = "Bob";
  return (
    <div className="App">
      <Nav />
      {currentState && (
        <Alert onClose={() => updateState(false)}>
          This Is My Custom Alert
        </Alert>
      )}
      <MyButton onClick={() => updateState(true)}>Show Alert</MyButton>
      <br />
      <Like onClick={() => console.log(`clicked`)} />
    </div>
  );
}
export default App;
