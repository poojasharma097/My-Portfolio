import FadeInSection from "./FadeIn";

export default function Projects() {
  return (
    <FadeInSection>
      <div id="projects">
        <h1 className="projectHeading">MY PROJECTS</h1>
        <div className="container">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww" />
            <div className="info">
              <h1 className="cardheading">InnerHealer</h1>
              <p className="cardtech">ReactJS, NodeJS, ExpressJS, MongoDB</p>
              <form>
                <button
                  className="cardbutton"
                  type="submit"
                  formAction="https://github.com/poojasharma097/InnerHealer"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="info">
              <h1 className="cardheading">HotelHaven</h1>
              <p className="cardtech">ReactJS, NodeJS, ExpressJS, MongoDB</p>
              <form>
                <button
                  className="cardbutton"
                  type="submit"
                  formAction="https://github.com/poojasharma097/HotelHaven"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="info">
              <h1>To-Do List</h1>
              <p>HTML, CSS, Javascript, NodeJS, ExpressJS, MongoDB</p>
              <form>
                <button
                  type="submit"
                  formAction="https://github.com/poojasharma097/To-Do-List"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="info">
              <h1>Diary</h1>
              <p>HTML, CSS, Javascript, NodeJS, ExpressJS, MongoDB</p>
              <form>
                <button
                  type="submit"
                  formAction="https://github.com/poojasharma097/Blog-Website"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1553991562-9f24b119ff51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VjcmV0fGVufDB8fDB8fHww" />
            <div className="info">
              <h1>Secrets</h1>
              <p>HTML, CSS, Javascript, NodeJS, ExpressJS, MongoDB</p>
              <form>
                <button
                  type="submit"
                  formAction="https://github.com/poojasharma097/Secrets"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D" />
            <div className="info">
              <h1>Simon Game</h1>
              <p>Flutter, Dart</p>
              <form>
                <button
                  type="submit"
                  formAction="https://github.com/poojasharma097/Simon-Game"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1556695736-d287caebc48e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0cm98ZW58MHx8MHx8fDA%3D" />
            <div className="info">
              <h1>MetAssistant</h1>
              <p>C++</p>
              <form>
                <button
                  type="submit"
                  formAction="https://github.com/poojasharma097/MetAssistant"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1511882150382-421056c89033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjYWRlfGVufDB8fDB8fHww" />
            <div className="info">
              <h1>Arcade</h1>
              <p>C++</p>
              <form>
                <button
                  type="submit"
                  formAction="https://github.com/poojasharma097/Arcade"
                  formTarget="_blank"
                >
                  Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about" id="projects">
        <h1 className="aboutHeading">MY PROJECTS</h1>
        <div className="container">
          <div className="project p1">
            <div>
              <h2>HotelHaven</h2>
              <h3 className="projectdesc">Web Development</h3>
            </div>
            <form>
              <button
                className="projectbutton"
                type="submit"
                formAction="https://github.com/poojasharma097/HotelHaven"
                formTarget="_blank"
              >
                View Project
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </FadeInSection>
  );
}
