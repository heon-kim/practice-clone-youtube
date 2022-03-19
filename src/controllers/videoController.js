export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload Video");
export const edit = (req, res) => res.send("Edit Video");
export const remove = (req, res) => res.send("remove Video");
