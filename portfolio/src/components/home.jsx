
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import me from '../assets/me.jpg'
import computer from '../assets/computer.jpg'
import web from '../assets/web.jpg'


function Home() {
    const cardData = [
        {
            picture: me,
            title: 'Minä',
            text: 'Olen Jenni Oksman, 3.vuoden IT-tradenomiopiskelija.',
            buttontext: 'Lue lisää'
        },
        {
            picture: computer,
            title: 'Projektini',
            text: 'Opiskeluni aikana olen tehnyt useita projekteja. Lisäksi olen puuhastellut muutamia ihan omia juttuja.',
            buttontext: 'Lue lisää'
        },
        {
            picture: web,
            title: 'Osaamiseni',
            text: 'Opintojeni pääpainotus on ollut web-tekniikoissa, mutta olen saanut oppia myös muuta.',
            buttontext: 'Lue lisää'
        }
    ]

    return (
        <Container>
            <Row>
                {cardData.map((card, index) => (
                    <Col key={index} xs={12} sm={6} lg={4}>
                        <Cardie
                            picture={card.picture}
                            title={card.title}
                            text={card.text}
                            buttontext={card.buttontext}
                        />
                    </Col>
                ))}
            </Row> 
        </Container>
    )
}

function Cardie({ picture, title, text, buttontext }) {
    return (
        <Card>
            <Card.Img className='cardimg' variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">{buttontext}</Button>
            </Card.Body>
        </Card>
    )
}

export default Home