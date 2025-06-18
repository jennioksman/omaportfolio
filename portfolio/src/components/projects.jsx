import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import me from '../assets/me.jpg'
import computer from '../assets/computer.jpg'
import skills from '../assets/skills.png'

function Projects() {

    return (
        <div>
            <CardContainer/>
        </div>
    )
}

function CardContainer() {

    const projectCardData = [
        {
            picture: me,
            title: 'Digitaalisuus ja tekijänoikeudet',
            text: 'Tämä sivu on ensimmäisen web-kurssini loppu työ. Teknologioina on käytetty vain HTML5 ja CSS',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: computer,
            title: 'Matikka-mango',
            text: 'Matikka-mango on ensimmäinen varsinainen projektini ryhmässä. Minun käsialaani on tämän sovelluksen Bootstrap sekä kertotaulupeli',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: computer,
            title: 'Kentsun kertotaulunurkka',
            text: 'Kentsu on Mangon isoveli, mutta hieman pidemmälle vietynä. ',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: skills,
            title: 'Leffa-tietokanta',
            text: 'Leffa-tietokanta on enesimmäinen bäkkiprojekti, mutta varsinaisen kurssin ulkopuolella tein sille myös frontin.',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: computer,
            title: 'Matikka-mango',
            text: 'Matikka-mango on ensimmäinen varsinainen projektini ryhmässä. Minun käsialaani on tämän sovelluksen Bootstrap sekä kertotaulupeli',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: computer,
            title: 'Matikka-mango',
            text: 'Matikka-mango on ensimmäinen varsinainen projektini ryhmässä. Minun käsialaani on tämän sovelluksen Bootstrap sekä kertotaulupeli',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
    ]
    return(
        <div>
            <Container>
                <Row>
                    {projectCardData.map((card, index) => (
                        <Col key={index} xs={12} sm={6} lg={4}>
                            <Cardie
                                picture={card.picture}
                                title={card.title}
                                text={card.text}
                                buttontext1={card.buttontext1}
                                buttontext2={card.buttontext2}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
    
}

function Cardie({ picture, title, text, buttontext1, buttontext2 }) {
    return (
        <Card>
            <Card.Img className='cardimg' variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <div className='buttonDiv'>
                    <Button 
                        className="cardButton" 
                        variant="primary"
                    >
                    {buttontext1}
                    </Button>
                    <Button className="cardButton" variant="primary">{buttontext2}</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Projects
