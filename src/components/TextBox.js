function TextBox({ style }) {
  return (
    <div>
      <textarea
        placeholder={style === "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
      ></textarea>
    </div>
  );
}

export default TextBox;
