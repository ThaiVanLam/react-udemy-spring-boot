import ProfileCard from "./ProfileCard";

function App() {
  const hobbies = ["read book", "listen to music"];
  return (
    <div>
      <h1>Hello</h1>
      <ProfileCard
        name="Alice"
        age="twenty-three"
        isMember={true}
        hobbies={hobbies}
      />
      <ProfileCard name="John" age={42} isMember={false} hobbies={hobbies} />
    </div>
  );
}

export default App;
