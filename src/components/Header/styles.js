import styled from 'styled-components'
import { Button as Btn, Avatar as AvatarIcon } from '@material-ui/core'

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  color: var(--white-color);
  background-color: var(--gray-color);
  z-index: 999;
`

export const Logo = styled.div`
  cursor: pointer;
  > h1 {
    color: var(--primary-color);
  }
`
export const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  margin-left: 30px;
`
export const HeaderSearch = styled.div`
  flex: 0.5;
  opacity: 1;
  border-radius: 4px;
  background-color: var(--white-color);
  text-align: center;
  display: flex;
  padding: 5px 25px 5px 15px;
  color: var(--gray-color);
  border: 1px transparent solid;
  :focus-within {
    border: 1px var(--primary-color) solid;
  }
  > input {
    background-color: transparent;
    border: 0;
    min-width: 100%;
    outline: 0;
    margin-left: 25px;
  }
`
export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-right: 30px;
`
export const MenuSeparator = styled.div`
  border: 1px solid #333333;
  width: 1px;
  height: 2rem;
  margin: 0 0.9rem;
`
export const Button = styled(Btn)`
  color: white !important;
  :hover {
    background-color: var(--lightgray-color) !important;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`
export const Avatar = styled(AvatarIcon)`
  margin-left: auto;
  background-color: var(--primary-color) !important;
`
