const Form = ({
  formClass,
  inputClass,
  value,
  handleChange,
  btnClass,
  handleClick,
}) => {
  return (
    <form className={formClass} action="#" method="post">
      <textarea
        className={inputClass}
        value={value}
        onChange={handleChange}
        cols="30"
        rows="5"
        placeholder="Your text..."
        autoCorrect="on"
      />
      <button className={btnClass} onClick={handleClick} type="submit">
        Send
      </button>
    </form>
  );
};

export { Form };
