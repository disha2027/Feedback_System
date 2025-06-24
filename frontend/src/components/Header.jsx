export default function Header() {
  return (
    <header className="header">
      <h1>FeedbackFlow</h1>
      <button onClick={() => {
        localStorage.clear();
        window.location.href = "/";
      }}>
        Logout
      </button>
    </header>
  );
}
