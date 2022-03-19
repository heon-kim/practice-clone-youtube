export const trending = (req, res) => res.send("Homepage Trending Video");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload Video");
export const see = (req, res) => {
  return res.send(`Watch Vieo #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit Video");
export const remove = (req, res) => res.send("remove Video");
