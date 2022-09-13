let middleware = (req, res, next) => {
  if (req.session && req.session.user && req.session.user.adminType) {
    return next();
  }
  res.redirect("/login");
};

module.exports = middleware;
