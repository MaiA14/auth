const requireAuth = async (req, res, next) => {
  if (!req.session || !req.session.user) {
    res.status(401).end('Unauthorized!');
    return;
  }
  next();
}

// async function requireAdmin(req, res, next) {
//   const user = req.session.user;
//   if (!user.isAdmin) {
//     res.status(403).end('Unauthorized Enough..');
//     return;
//   }
//   next();
// }

module.exports = {
  requireAuth,
//   requireAdmin
}