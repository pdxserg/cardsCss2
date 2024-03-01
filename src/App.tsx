import './App.css';
import styled from 'styled-components';
import dune from './styles/images/dune.png'
import {Button, Button2,} from "./components/Buttons";
import {Dune} from "./styles/images/dune";
import {Description, NameCard} from "./components/AnyText";
import {myThema} from "./styles/animations/Thema.styled";

function App() {
    return (
        <div className="App">
            <Box>
                <Card>
                    <Dune src={dune} alt="dune"/>
                    <NameCard>Headline</NameCard>
                    <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
                    <Button  bType={"first"} active>Hello</Button>
                    <Button2 bType={"second"} >Hello2</Button2>
                </Card>
                <Card>
                    <Dune src={dune} alt="dune"/>
                    <NameCard>Headline</NameCard>
                    <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
                    <Button  bType={"first"} active>Hello</Button>
                    <Button2 bType={"second"} >Hello2</Button2>
                </Card>
                <Card>
                    <Dune src={dune} alt="dune"/>
                    <NameCard>Headline</NameCard>
                    <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
                    <Button  bType={"first"} active>Hello</Button>
                    <Button2 bType={"second"} >Hello2</Button2>
                </Card>
                <Card>
                    <Dune src={dune} alt="dune"/>
                    <NameCard>Headline</NameCard>
                    <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
                    <Button  bType={"first"} active>Hello</Button>
                    <Button2 bType={"second"} >Hello2</Button2>
                </Card>



            </Box>
        </div>
    );
}

export default App;



const Box = styled.div`
    display: flex;
    
    align-items: center;
    height: 100vh;
    gap: 10px;
  
    
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Card = styled.div`
    position: relative;
    //min
    min-width: 300px;
    min-height: 350px;
    
    border-radius: 15px;
    box-shadow: 1px 4px 20px 5px rgba(135, 161, 215, 0.7);
    background: rgb(255, 255, 255);
`




