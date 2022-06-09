import SelectDropDown from "./SelectDropDown";

function TextBox({ style }) {
  return (
    <div className={style}>
      <SelectDropDown />
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      ></textarea>
    </div>
  );
}

export default TextBox;
