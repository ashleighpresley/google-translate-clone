import SelectDropDown from "./SelectDropDown";

function TextBox({ style, selectedLanguage, setShowModal }) {
  return (
    <div className={style}>
      <SelectDropDown
        style={style}
        selectedLanguage={selectedLanguage}
        setShowModal={setShowModal}
      />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      ></textarea>
    </div>
  );
}

export default TextBox;
