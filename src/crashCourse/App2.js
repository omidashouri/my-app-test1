import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "reactstrap";


const DescriptionComponent = (props) => {
    const currentitem = (item)=>{
        return(console.log('selected item is ',item))
    }
    return (
        <Row>
            <MyRowCol>
                <p>{props.desc}</p>
                <FruitItems items={props.listFruits} selected={currentitem}/>
            </MyRowCol>
        </Row>
    )
}

const FruitItems = (props) => {
    return (
        <>
            {props.items.map((item, index) =>
                <li onClick={()=>props.selected(item)} key={index.toString()}>{item}</li>
            )}
        </>
    )
}

const MyRowCol = (props) => {
    return (
        <Row>
            <Col md={12}>
                {props.children}
            </Col>
        </Row>
    )
}

function App2() {
    const desc_1 = "description for show as props"
    const fruits = ['lemon', 'orange', 'apple', 'banana']
    return (
        <div className="App">
            <DescriptionComponent desc={desc_1} listFruits={fruits}/>
        </div>
    );
}

export default App2;
