export function currentUserId() {
  return parseInt(localStorage.getItem("currentUserIndex"));
}
export function getUser(id, users) {
  const user = users.find((user) => user.id === id);
  return user;
}
