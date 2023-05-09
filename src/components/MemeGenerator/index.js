import {Component} from 'react'
import {
  MainContainer,
  MemeForm,
  ImageContainer,
  Heading,
  CustomButton,
  Label,
  Input,
  Select,
  Meme,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    showMeme: false,
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSize = event => {
    this.setState({fontSize: event.target.value})
  }

  renderImage = () => {
    const {showMeme, url, topText, bottomText, fontSize} = this.state

    return (
      <ImageContainer>
        {showMeme ? (
          <Meme url={url} data-testid="meme">
            <Para size={fontSize}>{topText}</Para>
            <Para size={fontSize}>{bottomText}</Para>
          </Meme>
        ) : null}
      </ImageContainer>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  renderForm = () => {
    const {url, topText, bottomText} = this.state
    return (
      <>
        <MemeForm>
          <Heading>Meme Generator</Heading>
          <form onSubmit={this.onSubmitForm}>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="url"
              id="imageUrl"
              placeholder="Enter the Image URL"
              onChange={this.onChangeUrl}
              value={url}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="text"
              id="topText"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTop}
              value={topText}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              type="text"
              id="bottomText"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottom}
              value={bottomText}
            />
            <Label htmlFor="fontSize">Font Size</Label>
            <Select onChange={this.onChangeSize} id="fontSize">
              {fontSizesOptionsList.map(eachFont => (
                <option key={eachFont.optionId} value={eachFont.optionId}>
                  {eachFont.displayText}
                </option>
              ))}
            </Select>
            <CustomButton type="submit">Generate</CustomButton>
          </form>
        </MemeForm>
      </>
    )
  }

  render() {
    return (
      <MainContainer>
        {this.renderForm()}
        {this.renderImage()}
      </MainContainer>
    )
  }
}

export default MemeGenerator
