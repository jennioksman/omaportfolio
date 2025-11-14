import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'
import books from '../assets/books.jpg'
import certificate from '../assets/certificate.jpg'
import binary from '../assets/binary.jpg'
import lab from '../assets/lab.jpg'
import laptop from '../assets/laptop.jpg'
import network from '../assets/network.jpg'
import server from '../assets/server.jpg'
import ux2 from '../assets/ux2.jpg'
import whiteboard from '../assets/whiteboard.jpg'
import badge from '../assets/badge.jpg'
import grammar from '../assets/grammar.jpg'

function Skills() {
  return (
    <div>
      <Container fluid>
        <Row className='text-center m-4'>
          <Col className='text-align-center'><h2>Koulutukseni - Työkokemukseni - Käyttämäni teknologiat</h2></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className='p-3'>
            <div className='justified'>
              <div className='skillheader mt-5'>
                <img src={books} alt="books" className='skillimage'/>
                <h3>Koulutus</h3>
              </div>
              <div className='m-2'>
                <p><strong>Tradenomi, tietojenkäsittely 2023-</strong></p>
                <p>Oulun ammattikorkeakoulu</p>
                <p><strong>Mielenterveys- ja päihdetyön erikoistumiskoulutus 2020</strong></p>
                <p>Oulun ammattikorkeakoulu</p>
                <p><strong>Kätilö, Sairaanhoitaja 2009</strong></p>
                <p>Pirkanmaan ammattikorkeakoulu</p>
              </div>
              <div className='skillheader mt-5'>
                <img src={certificate} alt="certificate" className='skillimage'/>
                <h3>Työkokemus</h3>
              </div>
              <div className='m-2'>
                <p><strong>Oulun kaupunki/POHDE</strong></p>
                <p>Sairaanhoitaja 2020-</p>
                <p><strong>Pohjois-Pohjanmaan sairaanhoitopiiri</strong></p>
                <p>Kätilö 2009-2020</p>
                <p><strong>Tampereen kaupuki</strong></p>
                <p>Sairaanhoitaja, eripituisia sijaisuuksia 2007-2008</p>
                <p>Lähihoitaja, eripituisia sijaisuuksia 2006-2007</p>
              </div>
              <div className='skillheader mt-5'>
                <img src={grammar} alt="grammar" className='skillimage'/>
                <h3>Kielitaito</h3>
              </div>
              <div className='m-2'>
                <p><strong>Suomi </strong>- äidinkieli</p>
                <p></p>
                <p><strong>Ruotsi </strong>- erinomainen</p>
                <p></p>
                <p><strong>Englanti </strong>- hyvä</p>
                <p></p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className='p-3'>
            <div className='justified'>
              <div className='skillheader mt-5'> 
                <img src={binary} alt="binary code" className='skillimage'/>
                <h3>Ohjelmointi</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C#</li>
              </ul>
              <div className='skillheader mt-5'> 
                <img src={laptop} alt="frontend" className='skillimage'/>
                <h3>Frontend-kehitys</h3>
              </div>
              <ul className='list-unstyled'>
                <li>React</li>
                <li>React Native</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
              <div className='skillheader mt-5'> 
                <img src={server} alt="backend" className='skillimage'/>
                <h3>Backend & Tietokannat</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Node.js</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>Xampp</li>
                <li>Firebase</li>
              </ul>
              <div className='skillheader mt-5'>
                <img src={lab} alt="lab" className='skillimage'/>
                <h3>Testaus</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Postman</li>
                <li>Selenium</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className='p-3'>
            <div>
              <div className='skillheader mt-5'> 
                <img src={whiteboard} alt="kanban" className='skillimage'/>
                <h3>Projektinhallinta & Kehitystyökalut</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Visual Studio Code</li>
                <li>Visual Studio</li>
                <li>GitHub</li>
                <li>HacknPlan</li>
                <li>WordPress</li>
              </ul>
              <div className='skillheader mt-5'>
                <img src={network} alt="network" className='skillimage'/>
                <h3>Pilvipalvelut</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Azure</li>
              </ul>
              <div className='skillheader mt-5'> 
                <img src={ux2} alt="ux" className='skillimage'/>
                <h3>Suunnittelu & Prototypointi</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Figma</li>
              </ul>
              <div className='skillheader mt-5'>
                <img src={badge} alt="badge" className='skillimage'/>
                <h3>Sertifikaatit</h3>
              </div>
              <div className='m-2'>
                <p><strong>Google Data Analyst 2025 </strong>- Coursera</p>
                <p><strong>Google IT Support Specialist 2023 </strong>- Coursera</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills