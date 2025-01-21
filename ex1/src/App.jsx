import { useState } from "react";
import CustomImage from "./CustomImage";
import "./App.css";
const icons = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
];
function App() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  function handleChange(e) {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "surname") {
      setSurName(e.target.value);
    }
  }

  function deleteUserInfo() {
    setName("");
    setSurName("");
  }
  return (
    <>
      <h1>
        name: {name} surname: {surName}
        test test
      </h1>
      {icons.map((icon) => (
        <CustomImage img={icon} key={icon} />
      ))}
      <input type="text" id="name" value={name} onChange={handleChange} />
      <input type="text" id="surname" value={surName} onChange={handleChange} />
      <button onClick={deleteUserInfo}>clear</button>
    </>
  );
}

export default App;
