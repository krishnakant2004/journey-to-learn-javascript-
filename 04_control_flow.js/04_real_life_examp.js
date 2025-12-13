let user = {
  name: "Aman",
  isLoggedIn: true,
  role: "admin"
};

if (user.isLoggedIn) {
  if (user.role === "admin") {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in first");
}
