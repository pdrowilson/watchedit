import styled from 'styled-components'

export const WatchlistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`

export const Header = styled.div`
  display: grid;
  width: 65%;
  grid-template-columns: repeat(12, 1fr);
  align-content: flex-end;
`

export const TitleContainer = styled.div`
  display: flex;
  grid-column: 1 / 12;
  align-items: center;
  justify-content: space-between;

  > h1 {
    margin-right: 3rem;
  }

  > div {
    flex-grow: 1;
    border-bottom: 2px solid var(--lightgray-color);
  }
`

export const ButtonContainer = styled.div`
  > Button {
    grid-column: -1;
    margin-left: 3rem;
    width: fit-content;
    color: white;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 3px solid var(--primary-color);
    text-transform: capitalize;
    font-family: inherit;
  }
`

export const SubtitleContainer = styled.div`
  grid-row: 2;
  grid-column: 1 / 8;
  margin-top: 1rem;
  font-size: 16px;
  color: #4d4d4d;
`

export const WatchlistSlider = styled.div`
  margin-bottom: 20rem;
  overflow-x: hidden;
  transition: all 0.6s ease-in-out;
`

export const SliderContent = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`
export const ArrowContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;

  span:nth-child(1) {
    margin-left: auto;
  }
`
export const Arrows = styled.div`
  width: 65%;
  display: grid;

  > span {
    grid-column: -1;
    grid-row: 1;
  }

  > span > .MuiSvgIcon-root {
    font-size: 55px;
    :hover {
      color: var(--primary-color);
    }
  }
`

export const Row = styled.div`
  grid-column: 1;
  display: flex;
  width: 210px;
`

export const Movie = styled.img`
  width: 100%;
  object-fit: contain;
  transform: scale(0.95);
  cursor: pointer;

  :hover {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
`
