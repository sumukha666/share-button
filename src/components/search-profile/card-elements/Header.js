import React, { useEffect } from "react";
import SelectedOption from "../../common/SelectedOption";
import TextField from "../../common/TextField";

const Header = (props) => {
  const { getFilterVal, setSelectedProfile, selectedProfile } = props;
  const onInput = (event) => getFilterVal(event.target.value);

  useEffect(() => {
    getFilterVal("");
  }, [selectedProfile]);

  return (
    <div>
      {!selectedProfile ? (
        <TextField
          name="userProfile"
          placeholder="Search emails, names or groups"
          onInput={onInput}
          className="plain-text-input"
        />
      ) : (
        <div>
          <SelectedOption
            label={selectedProfile.name}
            className="select-optn"
            onClose={() => setSelectedProfile(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
