import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import interestsDB from "../DataBase/interests.json";
import useUser from "../hooks/useUser";
import { currentUserId } from "./../utils/commonFunctions";
import { useNavigate } from "react-router-dom";
export default function InteresetForm() {
  const [users, setUsers, currentUser, setCurrentUser] = useUser();

  const [interests, setInterests] = useState(interestsDB.interests);
  const [categories, setCategories] = useState(
    Object.keys(interestsDB.interests)
  );
  const [specialities, setSpecialities] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("select");
  const [currentSpeciality, setCurrentSpeciality] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const spec = interests[currentCategory];
    setSpecialities(spec);
  }, [currentCategory]);

  function handleCategory(e) {
    setCurrentCategory(e.target.value);
  }

  function handleSave() {
    const index = currentUserId();
    const usersCopy = [...users];
    const currentUserCopy = { ...currentUser };
    currentUserCopy.interests.push({
      category: currentCategory,
      speciality: currentSpeciality,
      level: currentLevel,
    });
    usersCopy[index] = currentUserCopy;
    setUsers(usersCopy);
    navigate("/user/setting");
  }
  return (
    <div id="interest-form">
      <h2 className="interest-form__heading">NEW INTEREST</h2>

      <div>
        <label htmlFor="interest-form__category">
          <h4>Category:</h4>
        </label>
        <select
          onChange={(e) => handleCategory(e)}
          id="interest-form__category"
          className="form-select  "
        >
          {categories.map((category, idx) => {
            return (
              <option
                className="interest-from__option"
                value={category}
                key={idx}
              >
                {category}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label htmlFor="interest-form__speciality">
          <h4>Speciality</h4>
        </label>
        <select
          onChange={({ target }) => setCurrentSpeciality(target.value)}
          id="interest-form__speciality"
          className="form-select  "
        >
          {specialities.map((spec, idx) => {
            return (
              <option className="interest-from__option" value={spec} key={idx}>
                {spec}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label htmlFor="interest-form__level">
          <h4>Level</h4>
        </label>
        <select
          onChange={({ target }) => setCurrentLevel(target.value)}
          id="interest-form__level"
          className="form-select  "
        >
          <option>select</option>
          <option className="interest-from__option" value="Beginner">
            beginner
          </option>
          <option className="interest-from__option" value="Intermidate">
            intermidate
          </option>
          <option className="interest-from__option" value="Pro">
            pro
          </option>
          <option className="interest-from__option" value="God">
            god
          </option>
        </select>
      </div>
      <Button onClick={handleSave} className="interest-form__btn">
        Save
      </Button>
    </div>
  );
}
