import Header from "./Header";
import '../styles/layout.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-container">
        {children}
      </main>
    </>
  );
}
