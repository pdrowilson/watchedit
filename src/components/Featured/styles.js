import styled from 'styled-components'

export const FeaturedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  border: 1px solid gray;
`
export const GridWrapper = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row: 1 / 2;
  grid-column: 1 / 9;
  > p {
    font-weight: 600;
    color: #4d4d4d;
  }
  > h1 {
    color: white;
    font-weight: 300;
    font-size: 58px;
    line-height: 1.2;
    text-shadow: 0px 1px 5px black;
    margin-top: 10px;
  }
  > div {
    display: flex;
    margin-top: 25px;
  }
  > div > h2 {
    line-height: 100%;
    color: var(--primary-color);
    font-size: 42px;
    margin-right: 5px;
  }
  > div > span {
    margin-top: 2px;
    line-height: 100%;
    color: #4d4d4d;
    font-weight: 600;
  }
  > div > Button {
    color: white;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 2px solid var(--primary-color);
  }
`
export const ImgContainer = styled.div`
  display: flex;
  grid-row: 1 / 2;
  grid-column: 5 / -1;
  background-color: pink;
  z-index: -11;
  > img {
    margin-left: auto;
    opacity: 0.8;
    z-index: -10;
    width: 100%;
  }
`
