import { useState } from "react";

function Dumb({ names }) {
  const [isYes, setIsYes] = useState(false);

  const handleYes = () => {
    setIsYes(!isYes);
  };

  const handleMouseover = (e) => {
    console.log(e);
    e.target.style.top = Math.random() * 400 + "px";
    e.target.style.left = Math.random() * 400 + "px";
  };

  return (
    <div className="modal-box">
      <div className="model-header">
        <h2>Hey {names}</h2>
        <h2>Are you dumb and stupid?</h2>
        <div className="buttons">
          <button className="yes" onClick={handleYes}>
            Hell yes!
          </button>
          <button
            className="button"
            id="button"
            onMouseOver={handleMouseover}
          >
            Ahh No!
          </button>
        </div>

        {isYes && (
          <div className="modal-box ans">
            <h1>Ahh! You know what {names}, I knew it the day I met you. </h1>
            <h1>Just wanted a legal confirmation. </h1>

            <div className="buttons">
              <button
                className="yes"
                onClick={() => window.location.reload(false)}
              >
                Thanks
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dumb;
