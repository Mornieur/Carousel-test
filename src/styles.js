import styled from "styled-components";

export const Title = styled.h3`
  background-color: blue;
`;

export const Container = styled.div`
  max-width: 50vw;

  .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .buttons button:first-child img {
    transform: rotate(180deg);
  }

  .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    background-color: red;
    border-radius: 10px;
    height: 20rem;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  background-color: red;
  border-radius: 10px;
  height: 20rem;

  carousel::-webkit-scrollbar {
    display: none;
  }

  .item {
    background-color: white;
    padding: 10px;
    width: 350px;
    height: 250px;
    flex: none;
    margin: 1rem;
    border-radius: 5px;
  }

  .item .button {
    padding: 1rem;
    background-color: red;
  }

  .carousel .item .info {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buttons {
    width: 100%;
    text-align: center;

    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .buttons button:first-child img {
    transform: rotate(180deg);
  }
`;

export const Buttons = styled.div`
  width: 100%;
  text-align: center;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Item = styled.div`
  background-color: white;
  padding: 10px;
  width: 350px;

  flex: none;
  margin: 1rem;
  border-radius: 5px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  aside {
    background-color: yellow;
    margin-left: auto;

    button {
      padding: 5px;
      width: auto;
    }
  }
`;
