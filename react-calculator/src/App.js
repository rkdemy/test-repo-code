import { useEffect, useState, useRef, useReducer } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const el = useRef();

  const [name, setName] = useState(false);

  useEffect(() => {
    window?.addEventListener("scroll", fadeIn);
  }, []);

  const fadeIn = () => {
    var distView = window.innerHeight - el.current.getBoundingClientRect().top;

    console.log(distView);

    if (distView < 500) {
      setName(true);
    } else {
      setName(false);
    }
  };

  return (
    <Wrapper>
      <div className="container">sa</div>
      <div className={name ? "fadeIn" : "container2"} ref={el}>
        sad
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    color: white;
    width: 50px;
    height: 100vh;
    background-color: grey;
    cursor: pointer;
    transition: all 0.8s linear;
  }

  .container2 {
    height: 200vh;
    color: blue;
    background-color: white;
    width: 50px;
    transition: all 0.9s;
    opacity: 1;
  }

  .fadeIn {
    color: red;
    opacity: 0;
    height: 200vh;
    background-color: white;
    width: 50px;
  }

  .collapsed {
    animation-name: shrink;
    animation-duration: 0.8s;
  }

  @keyframes shrink {
    0% {
      height: 70px;
    }
    50% {
      height: 10px;
    }
    100% {
      height: 70px;
    }
  }
`;

export default App;
