import React, { Fragment } from "react";
import ReactDom from "react-dom";

// Create the app
const App = () => {
  const linkImageStyle = {
    backgroundImage:
      'url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png\")'
  };

  return (
    <Fragment>
      <nav className="navigation">
        <a>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="image"
          />
        </a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
          <form>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label for="linkTitle" className="formLabel">
                Enter a bookmark name
              </label>
              <input
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 characters max"
              />
            </div>
            <div>
              <label for="linkHref" className="formLabel">
                Enter a bookmark name
              </label>
              <input
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button>Add</button>
          </form>
        </div>
        <div className="rightContent">
          <div>
            <div style={linkImageStyle} />
            <div><h2><a href="#">My link!</a></h2></div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
