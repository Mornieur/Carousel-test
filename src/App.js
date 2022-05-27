import { useEffect, useState, useRef } from "react";

import * as C from "./styles";

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <C.Container>
      <C.Carousel>
        <div className="carousel" ref={carousel}>
          {data.map(({ id, name, price, oldPrice, image }) => (
            <C.Item key={id}>
              <C.Title>
                <h3>Título do evento</h3>
              </C.Title>
              <p>
                Lorem ipsum turpis conubia turpis cubilia viverra est netus
                lectus neque nullam dictumst lorem, hendrerit ad litora nam
                turpis hac iaculis sit vitae viverra tellus. donec a tempus nibh
                leo metus ac sem pulvinar nulla, et integer vestibulum quis
                suscipit massa per cras, mattis ultrices cras adipiscing
                sagittis dictum dolor lectus.
              </p>
              <aside>
                <button>Saiba mais</button>
              </aside>
            </C.Item>
          ))}
        </div>
      </C.Carousel>
      <C.Buttons>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img
              src="/static/images/216151_right_chevron_icon.png"
              alt="Scroll Left"
            />
          </button>
          <button onClick={handleRightClick}>
            <img
              src="/static/images/216151_right_chevron_icon.png"
              alt="Scroll Right"
            />
          </button>
        </div>
      </C.Buttons>
    </C.Container>
  );
}

export default App;
