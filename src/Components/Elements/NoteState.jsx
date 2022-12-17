import noteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    "name": "Zubair",
    "class": "10b2",
  };
  return (
    <noteContext.Provider value={state}>
        {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
