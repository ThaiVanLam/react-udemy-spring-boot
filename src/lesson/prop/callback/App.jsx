import ProfileCard from "./ProfileCard";
import "./App.css";

function Alert(message) {
  alert(`alert on ${message}`);
}

function App() {
  const hobbies = ["read book", "listen to music"];

  const aliceProfile = {
    name: "Alice",
    age: "23",
    isMember: true,
    hobbies: hobbies,
    onClickHobby: Alert,
  };

  const johnProfile = {
    name: "John",
    age: 42,
    isMember: false,
    hobbies: hobbies,
    onClickHobby: Alert,
  };
  return (
    <div className="app-container">
      <h1>Hello</h1>
      <ProfileCard {...aliceProfile} />
      <ProfileCard {...johnProfile} />
    </div>
  );
}

export default App;
