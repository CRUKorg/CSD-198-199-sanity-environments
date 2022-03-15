// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const t = process.env.MY_TEST_VARIABLE;
  res.statusCode = 200;
  res.json({ name: "John Doe", t });
};
