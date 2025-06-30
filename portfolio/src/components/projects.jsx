import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ball from '../assets/ball.jpg'
import matikkamango from '../assets/matikkamango.png'
import kentzu from '../assets/kentzu.png'
import movie from '../assets/movie.jpg'
import crossfit from '../assets/crossfit.jpg'
import town from '../assets/town.jpg'
import bored from '../assets/bored.png'
import tahmatassu from '../assets/tahmatassu.jpg'

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
            picture: ball,
            title: 'Digitaalisuus ja tekijänoikeudet',
            text: 'Tämä sivu on ensimmäisen web-kurssini loppu työ. Teknologioina on käytetty vain HTML5 ja CSS',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: matikkamango,
            title: 'Matikka-mango',
            text: 'Matikka-mango on ensimmäinen varsinainen projektini ryhmässä. Minun käsialaani on tämän sovelluksen Bootstrap sekä kertotaulupeli',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: kentzu,
            title: 'Kentsun kertotaulunurkka',
            text: 'Kentsu on Mangon isoveli, mutta hieman pidemmälle vietynä. ',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: movie,
            title: 'Leffa-tietokanta',
            text: 'Leffa-tietokanta on enesimmäinen bäkkiprojekti, mutta varsinaisen kurssin ulkopuolella tein sille myös frontin.',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: crossfit,
            title: 'Workout Diary',
            text: 'Workout Diary oli ensimmäinen full-stack-projektini. Se oli mobiilisuunnittelu- ja -ohjelmointi-kurssin lopputyö.',
            buttontext1: 'Demo-video',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: town,
            title: 'My Traveller',
            text: 'Matikka-mango on ensimmäinen varsinainen projektini ryhmässä. Minun käsialaani on tämän sovelluksen Bootstrap sekä kertotaulupeli',
            buttontext1: 'Demo-video',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: bored,
            title: 'Bored API',
            text: 'Bored API on yksinkertainen sovellus, joka hakee tylsistyneelle naiselle drinkkejä API-tietokannasta. Sovellus on osa dynaamisen webkehityksen kurssia.',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi'
        },
        {
            picture: tahmatassu,
            title: 'Tahmatassu',
            text: 'Kuvitteellisen eläinpuisto Tahmatassun kotisivu on toteutettu WordPressillä ja on toinen varsinainen projekti. Sivusto on monikielinen.',
            buttontext1: 'Demo-video',
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
