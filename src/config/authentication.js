exports.jwtConfig = {
  secret: (process.env.JWT_SECRET || "eyJzdWIiOiI1OGQxMjRmODdhZjgwMjA0MjhlMmRjYzciLCJpYXQiOjE0OTAxMDE0OTYzNTl9"),
  session: {session: false},
  expiresIn: 10800 // 3 hours in seconds
};
