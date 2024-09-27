export default function ({ store, redirect }) {
  const storedLoginStatus = localStorage.getItem("isLoggedIn");
  if (storedLoginStatus !== "true") {
    return redirect("/");
  }
}
