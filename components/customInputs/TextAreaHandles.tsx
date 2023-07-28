const PLACEHOLDER = `@handle \n@etc \n@funny`;

interface InterfaceTextAreaHandles {
  handles: string;
  setHandles: (e: any) => any;
}
//!need to do
// check for illegal characters
// potentially remove empty @ on submit or something
// error messageing

const TextAreaHandles = ({ handles, setHandles }: InterfaceTextAreaHandles) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value.replace(/ /g, "\n@");
    setHandles(newText);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setHandles((prevValue: string) => prevValue + "\n@");
    }
  };
  const handleFocus = () => {
    setHandles((prevValue: string) =>
      prevValue.startsWith("@") ? prevValue : "@" + prevValue
    );
  };

  return (
    <textarea
      value={handles}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      onFocus={handleFocus}
      rows={4}
      className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
      placeholder={PLACEHOLDER}
    />
  );
};

export default TextAreaHandles;
