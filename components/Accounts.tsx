const Accounts = ({ accounts }: any) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const stringBuilder = (platform: any) => {
    let output = "";

    output += capitalizeFirstLetter(platform[0]);
    output += " ";
    output += platform[1] ? "❌" : "✔";

    return output;
  };
  return accounts.map((account: any, index: number) => (
    <div
      key={index}
      className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition border">
        <p>{account.name}</p>
        <hr />
        {Object.entries(account.platforms).map((platform, index) => (
          <div key={index}>
            <br />
            <p key={index}>{stringBuilder(platform)}</p>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default Accounts;
