import PropTypes from "prop-types";
import "./App.css";

function ProfileCard({ name, age, isMember, hobbies, onClickHobby }) {
  return (
    <div className="profile-card">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Status: {isMember ? "Active Member" : "Guest"}</h3>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => {
          return (
            <li key={index} onClick={() => onClickHobby(hobby)}>
              {hobby}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMember: PropTypes.bool,
};

export default ProfileCard;
