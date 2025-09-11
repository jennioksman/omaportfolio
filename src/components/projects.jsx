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
            buttontext2: 'Lähdekoodi',
            link1: 'https://www.students.oamk.fi/~c3okje00/Loppuharjoitus/final.html',
            link2: ''
        },
        {
            picture: matikkamango,
            title: 'Matikka-mango',
            text: 'Matikka-mango on ensimmäinen varsinainen projektini ryhmässä. Minun käsialaani on tämän sovelluksen Bootstrap sekä kertotaulupeli',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi',
            link1: 'https://www.students.oamk.fi/~c3alot00/TIK23SP-3-web/',
            link2: 'https://github.com/SatanistiVuohi/TIK23SP-3-web'
        },
        {
            picture: kentzu,
            title: 'Kentsun kertotaulunurkka',
            text: 'Kentsu on Mangon isoveli, mutta Reactilla ja Bootsrapilla toteutettuna.',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi',
            link1: '',
            link2: 'https://github.com/jennioksman/kentzu'
        },
        {
            picture: movie,
            title: 'Leffa-tietokanta',
            text: 'Leffa-tietokanta on enesimmäinen bäkkiprojekti. Suunnitelmissani on toteuttaa sille myös frontti.',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi',
            link1: '',
            link2: 'https://github.com/jennioksman/movieAssignment'
        },
        {
            picture: crossfit,
            title: 'Workout Diary',
            text: 'Workout Diary oli ensimmäinen full-stack-projektini. Se oli mobiilisuunnittelu- ja -ohjelmointi-kurssin lopputyö, jonka bäkki on toteutettu Firebasella.',
            buttontext1: 'Demo-video',
            buttontext2: 'Lähdekoodi',
            link1: '',
            link2: 'https://github.com/jennioksman/mobileFinal'
        },
        {
            picture: town,
            title: 'My Traveller',
            text: 'My Traveller on mobiilikurssin toisen osan lopputyö. Se on niin ikään full-stack-projekti, jonka bäkki on myös Firebase toteutus.',
            buttontext1: 'Demo-video',
            buttontext2: 'Lähdekoodi',
            link1: '',
            link2: 'https://github.com/jennioksman/locationApp'
        },
        {
            picture: bored,
            title: 'Bored API',
            text: 'Bored API on yksinkertainen sovellus, joka hakee tylsistyneelle naiselle drinkkejä API-tietokannasta. Sovellus on osa dynaamisen webkehityksen kurssia.',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi',
            link1: '',
            link2: 'https://github.com/jennioksman/component_opendata'
        },
        {
            picture: tahmatassu,
            title: 'Tahmatassu',
            text: 'Kuvitteellisen eläinpuisto Tahmatassun kotisivu on toteutettu WordPressillä ja on toinen varsinainen projekti. Sivusto on monikielinen. Sen hostaukseen käyutettiin Azuren virtuaalikonetta.',
            buttontext1: 'Demo-video',
            link1: 'http://52.178.183.222/'
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
                                link1={card.link1}
                                link2={card.link2}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
    
}

function Cardie({ picture, title, text, buttontext1, buttontext2, link1, link2 }) {
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
                        as='a' href={link1} target='_blank'
                    >
                        {buttontext1}
                    </Button>
                    <Button 
                        lassName="cardButton" 
                        variant="primary"
                        as='a' href={link2} target='_blank'
                    >
                        {buttontext2}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Projects
