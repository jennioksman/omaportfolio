import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ball from '../assets/ball.jpg'
import matikkamango from '../assets/matikkamango.png'
import movie from '../assets/movie.jpg'
import crossfit from '../assets/crossfit.jpg'
import town from '../assets/town.jpg'
import bored from '../assets/bored.png'
import btw from '../assets/btw.png'
import tahmatassu from '../assets/tahmatassu.jpg'
import pf from '../assets/pf.png'
import appi from '../assets/nepsysovellus.png'
import { ModalBody, ModalTitle } from 'react-bootstrap'

function Projects() {

    return (
        <div>
            <CardContainer />
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
            picture: movie,
            title: 'Leffa-tietokanta',
            text: 'Leffa-tietokanta on enesimmäinen bäkkiprojekti ja backend-kurssin loppu työ. Myöhemmin olen alkanut kehittää siihen myös fronttia. TULOSSA: frontti ja demo',
            buttontext2: 'Lähdekoodi',
            link1: '',
            link2: 'https://github.com/jennioksman/movieAssignment'
        },
        {
            picture: crossfit,
            title: 'Workout Diary',
            text: 'Workout Diary oli ensimmäinen full-stack-projektini. Se oli mobiilisuunnittelu- ja -ohjelmointi-kurssin lopputyö, joka on toteutettu React Nativella, tietokanta on toteutettu Firebasella. Muotoilussa on käytetty Material UI -kirjastoa.',
            buttontext1: 'Demovideo',
            buttontext2: 'Lähdekoodi',
            link1: 'https://www.youtube.com/watch?v=OMc2aFBnMsk',
            link2: 'https://github.com/jennioksman/mobileFinal'
        },
        {
            picture: town,
            title: 'My Traveller',
            text: 'My Traveller on mobiilikurssin toisen osan lopputyö. Se on niin ikään full-stack-projekti, jonka tietokanta on myös Firebase toteutus ja frontti on tehty React Nativella. Muotoilu niin ikään Material UI -kirjastolla.',
            buttontext1: 'Demovideo',
            buttontext2: 'Lähdekoodi',
            link1: 'https://www.youtube.com/watch?v=u216wPlCVJ8',
            link2: 'https://github.com/jennioksman/locationApp'
        },
        {
            picture: bored,
            title: 'Bored API',
            text: 'Bored API on yksinkertainen sovellus, joka hakee tylsistyneelle naiselle drinkkejä avoimen datan palvelusta. Sovellus on osa dynaamisen webkehityksen kurssia.',
            buttontext1: 'Demo',
            buttontext2: 'Lähdekoodi',
            link1: 'https://getdrink.netlify.app/',
            link2: 'https://github.com/jennioksman/component_opendata'
        },
        {
            picture: btw,
            title: 'Break the Wall',
            text: 'Tämä pelin pätkä on tehty Unityllä tiiviissä yhtistyässä tekoälyn kanssa osana Tekoäly tietojenkäsittelyn työvälineenä - kurssia. Peli on yksinkertainen ammuntapeli, jossa pelaajan tavoitteena on rikkoa muuri.',
            buttontext1: 'Demovideo',
            buttontext2: 'Lähdekoodi',
            link1: 'https://www.youtube.com/watch?v=APMNI3ZsXaA',
            link2: 'https://github.com/jennioksman/Break-the-Wall'
        },
        {
            picture: tahmatassu,
            title: 'Tahmatassu',
            text: 'Kuvitteellisen eläinpuisto Tahmatassun kotisivu on toteutettu WordPressillä ja on toinen varsinainen projekti. Sivusto on monikielinen. Sen hostaukseen käytettiin Azuren virtuaalikonetta.',
            buttontext1: 'Demovideo',
            link1: 'https://www.youtube.com/watch?v=JehIn-s7zfQ'
        },
        {
            picture: pf,
            title: 'Portfolio',
            text: 'Tämän sivuston totetus on ollut hauska matka. Pääni pursuaa ideoita siitä, mitä kaikkea tänne voisi vielä lisätä ja miten tätä voisi kehittää. Sivut päivittyvät jatkuvasti.',
            buttontext1: 'Lisätietoa',
            buttontext2: 'Lähdekoodi',
            link2: 'https://github.com/jennioksman/omaportfolio.git',
            ModalTitle: 'Tietoa tästä sivustosta',
            ModalBody: [
                'Tämä sivusto on rakennettu Reactilla ja muotoilussa on hyödynnetty Bootsrap-kirjastoa.Johtavana ajatuksena on ollut Less is more. Halusin pitää sivusto yksinkertaisena ja selkeänä, jotta sisältö pääsee parhaiten esille.',
                'Tällä sivustolla ja projekteissani käyttämäni kuvat ovat joko omiani, tekoälyn generoimia tai Pixabayn ilmaisen lisenssin kuvia. Videoissa ja peleissä käyttämäni musiikki on tekoälyllä tehtyä ja peräisin Epidemic Soundista.' 
            ]
        },
        {   picture: appi,
            title: 'NeuroNavi',
            text: 'NeuroNavi on opinnäytetyöni. Se on erityisesti neuromoninaisille suunnattu sovellus, joka toimii arjen ja opiskelun tukena.',
            buttontext1: 'Lisätietoa',
            ModalTitle: 'NeuroNavi - Nepsysovellus',
            ModalBody: [
                'NeuroNavi on opinnäytetyöni. Se on palvelumuotoiluprojekti, jossa suunnittelin erityisesti neuromoninaisille suunnattun sovelluksen arjen ja opiskelun tueksi. ',
                'Olen hyödyntänyt suunnittelutyössä sekä palvelumuotoilun menetelmiä että mielenterveystyön kokemustani. Suunnittelutyö lähti liikkelle kyselyllä, jossa kartoitettiin millaisia sovelluksia ja työkaluja ihmiset ovat käyttäneet ja mitä mieltä he ovat niistä olleet.'
            ]
        }]
    
    return (
        <div>
            <Container>
                <Row>
                    {projectCardData.map((card, index) => (
                        <Col key={index} xs={12} sm={6} lg={4}>
                            <Cardie card={card} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )

}

function Cardie({card}) {
    const { picture, title, text, buttontext1, buttontext2, link1, link2, ModalTitle, ModalBody } = card;

    const [modalShow, setModalShow] = useState(false);

    const openModalFor = (card) => {
        setSelectedCard(card)
        setModalShow(true)
  }
    

    return (
        <>
            <Card>
                <Card.Img className='cardimg' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <div className="buttonDiv">

                        {
                            buttontext1 === 'Lisätietoa' ? (
                                <Button
                                    className="cardButton me-3 mb-2"
                                    variant="primary"
                                    onClick={() => setModalShow(true)}
                                >
                                    {buttontext1}
                                </Button>
                            ) : (
                                buttontext1 &&
                                <Button
                                    className="cardButton me-3 mb-2"
                                    variant="primary"
                                    as='a' href={link1} target='_blank'
                                >
                                    {buttontext1}
                                </Button>
                            )

                        }
                        {
                            buttontext2 &&
                            <Button
                                className="cardButton me-3 mb-2"
                                variant="primary"
                                as='a' href={link2} target='_blank'
                            >
                                {buttontext2}
                            </Button>
                        }
                    </div>
                </Card.Body>
            </Card>
            <InfoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={ModalTitle}
                body={ModalBody}
            />
        </>
    )
}


function InfoModal({title, body, ...props}) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Array.isArray(body) 
                    ? body.map((p, i) => <p key={i}>{p}</p>)
                    : body
                    ? <p>{body}</p>
                    : <p>Ei lisätietoa saatavilla.</p>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    className="cardButton" 
                    onClick={props.onHide}>
                        Sulje
                </Button>
            </Modal.Footer>
        </Modal>
    );
}



export default Projects
