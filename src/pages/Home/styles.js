import styled from 'styled-components'

export const HomeContainer = styled.div`
  > img:nth-child(1) {
    position: absolute;
    width: 650px;
    opacity: 0.08;
    right: 0;
    margin-right: 3rem;
    top: 5px;
    z-index: -1000;
  }
  > img:nth-child(2) {
    position: absolute;
    transform: rotate(90deg);
    width: 300px;
    right: 0;
    margin-right: 3rem;
    top: 5px;
    z-index: -1000;
    opacity: 0.5;
    filter: hue-rotate(-130deg);
  }
`
