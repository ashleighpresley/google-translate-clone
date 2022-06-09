import SelectDropDown from "./SelectDropDown";

function TextBox({ style, selectedLanguage }) {
  return (
    <div className={style}>
      <SelectDropDown selectedLanguage={selectedLanguage} />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      ></textarea>
    </div>
  );
}

export default TextBox;
