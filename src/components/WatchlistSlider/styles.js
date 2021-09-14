import styled from 'styled-components'

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 50rem;
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
