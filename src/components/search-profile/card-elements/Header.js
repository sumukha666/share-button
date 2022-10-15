import React, { useEffect } from "react";
import Button from "../../common/Button";
import SelectedOption from "../../common/SelectedOption";
import TextField from "../../common/TextField";

const Header = (props) => {
  const { getFilterVal, setSelectedProfile, selectedProfile, onInvite } = props;
  const onInput = (event) => getFilterVal(event.target.value);

  useEffect(() => {
    getFilterVal("");
  }, [selectedProfile]);

  const sendInvite = (profile) => {
    onInvite(selectedProfile)
  };

  return (
    <div className="dsp-flex flex-space-btw">
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
      <Button label="Invite" onClick={sendInvite} />
    </div>
  );
};

export default Header;
