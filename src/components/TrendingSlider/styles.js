import styled from 'styled-components'

export const FeaturedContainer = styled.div`
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  display: ${(props) => (props.active ? 'flex' : 'none')};
`
export const Arrow = styled.div`
  > span {
    position: absolute;
    cursor: pointer;
    z-index: 100;
    top: 40%;
    width: auto;
    :hover {
      color: var(--primary-color);
      transition: all 0.5s ease-in;
    }
  }
  > span:nth-child(1) {
    left: 3rem;
    border-radius: 5px 0px 0px 5px;
  }
  > span:nth-child(2) {
    right: 3rem;
    border-radius: 5px 0px 0px 5px;
  }
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
    z-index: 99;
    cursor: pointer;
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
  > Button {
    width: fit-content;
    color: white;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 3px solid var(--primary-color);
    margin-top: 25px;
    font-family: inherit;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  grid-row: 1 / 2;
  grid-column: 5 / -1;
  cursor: pointer;
  > img {
    margin-left: auto;
    filter: sepia(55%);
    opacity: 0.8;
    width: 100%;
  }
`

export const OverviewContainer = styled.div`
  grid-row: 2;
  grid-column: 2 / 10;
  margin-top: 50px;
  font-size: 16px;
  color: #4d4d4d;
`
