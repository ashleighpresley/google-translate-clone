import SelectDropDown from "./SelectDropDown";

function TextBox({
  style,
  selectedLanguage,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  setTranslatedText,
  translatedText,
}) {
  const handleClick = () => {
    setTranslatedText("");
    setTextToTranslate("");
  };

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
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === "input" ? textToTranslate : translatedText}
      ></textarea>
      {style === "input" && (
        <div className="delete" onClick={handleClick}>
          ↺
        </div>
      )}
    </div>
  );
}

export default TextBox;
