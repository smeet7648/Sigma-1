import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Header() {
  return (
    <section className="header">
      <nav>
        <div className="logo">
          <img
            src="https://graph.facebook.com/184127505335421/picture?type=large"
            alt="logo"
          />
        </div>
        <div className="nav-links">
          <a href="index.html">Home</a>
          <a href="form.html">Contact</a>
          <a href="form.html">About Us</a>
          <a href="form.html">Course</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <img src="https://tse4.mm.bing.net/th/id/OIP.tJqfOivWHrAi89GW2_p7CQAAAA?pid=Api&P=0&h=180" />
        </div>
      </nav>
    </section>
  );
}

function Main() {
  return (
    <section>
      <div className="slider">
        <div className="slides">
          <img
            src="https://www.cbitss.co.in/blog/wp-content/uploads/2022/07/Things-that-students-will-learn-in-a-basic-computer-course.jpg"
            alt=""
          />
          <img
            src="https://www.cbitss.co.in/blog/wp-content/uploads/2022/07/The-Benefits-of-Choosing-the-Best-Computer-Course.jpg"
            alt=""
          />
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230522133830/Best-Programming-Courses.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default App;
