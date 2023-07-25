if (!process.env.HANDLEONE_CHECKER_SVR) {
  throw new Error("Missing env var for HANDLE CHECKER SVR");
}

// export const config = {
//   runtime: "edge",
// };

// convert string names into an array of strings
const validateNames = (names) => {
  const regex = /@(\S+)/g;
  const matches = names.match(regex);
  const output = matches.map((match) => match.slice(1));
  return output;
};

const handler = async (req: Request, res: Response) => {
  // console.log("req: ", req.body);
  const { requester, names } = req.body;

  if (!names || names.length <= 0) {
    return new Response("No names in the request", { status: 400 });
  }
  // console.log("svr: ", process.env.HANDLEONE_CHECKER_SVR);

  const arrayNames = validateNames(names);
  console.log("arrayNames: ", arrayNames);
  try {
    const response = await fetch(
      process.env.HANDLEONE_CHECKER_SVR + "/check/name/threads/",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requester: requester,
          names: arrayNames,
        }), // body data type must match "Content-Type" header
      }
    );
    const data = await response.json();
    // console.log("data: ", data.results);
    // return Response.json({ data: data });
    res.status(200).json({ data: data.results });
  } catch (err) {
    console.error("Error: fetching handles ", err);
    res.status(500).json({ error: "Error fetching handles" });
  }
};

export default handler;
