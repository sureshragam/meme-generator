// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  height: 100vh;
  gap: 50px;
`

export const MemeForm = styled.div`
  flex-basis: 30%;
  padding: 10px 20px;
  height: 60%;
  box-shadow: 1px 1px 12px 1px #d7dfe9;
  border-radius: 8px;
`

export const ImageContainer = styled.div`
  flex-basis: 50%;
  padding: 20px 30px;
  height: 60%;
  box-shadow: 1px 1px 12px 1px #d7dfe9;
`
export const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  color: #35469c;
`
export const CustomButton = styled.button`
  padding: 10px 20px;
  color: white;
  border-radius: 8px;
  outline: none;
  border-style: none;
  background-color: #0b69ff;
  margin-top: 30px;
`
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  margin-bottom: 30px;
  border-radius: 5px;
  outline: none;
  border-style: solid;
  border-color: #d7dfe9;
  padding-left: 10px;
`
export const Select = styled.select`
  display: block;
  margin-bottom: 5px;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  outline: none;
  border-style: solid;
  border-color: #d7dfe9;
  padding-left: 10px;
`

export const Meme = styled.div`
  margin: auto;
  background-image: url(${props => props.url});
  background-size: cover;
  width: 90%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Para = styled.p`
  font-size: ${props => props.size}px;
  color: white;
`
