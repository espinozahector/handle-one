const PLACEHOLDER = "johnny@handleone.social";

interface InterfaceInputEmail {
  email: string;
  setEmail: (e: any) => any;
}

const InputEmail = ({ email, setEmail }: InterfaceInputEmail) => {
  return (
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
      placeholder={PLACEHOLDER}
    />
  );
};
export default InputEmail;
