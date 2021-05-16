import "./index.scss";
export default function Header() {
  return (
    <header className="header">
      <img
        className="avatar"
        alt="Avatar"
        src="https://inews.gtimg.com/newsapp_match/0/3581582328/0"
      />
      <h2>
        my name is <span className="name">Kevin</span>,{" "}
        <span className="age">24</span>years old and this is my resume/cv
      </h2>
    </header>
  );
}
