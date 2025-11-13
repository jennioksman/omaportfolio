import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'
import binary from '../assets/binary.jpg'

function Skills() {
  return (
    <div>
      <Container fluid>
        <Row className='text-center m-4'>
          <Col className='text-align-center'><h2>Osaamiseni</h2></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className='p-3'>
            <div className='justified'>
              <div className='skillheader'>
                <h3>Koulutus</h3>
              </div>
              <p><strong>Tradenomi, tietojenkäsittely 2023-</strong></p>
              <p>Oulun ammattikorkeakoulu</p>
              <p><strong>Mielenterveys- ja päihdetyön erikoistumiskoulutus 2020</strong></p>
              <p>Oulun ammattikorkeakoulu</p>
              <p><strong>Kätilö, Sairaanhoitaja 2009</strong></p>
              <p>Pirkanmaan ammattikorkeakoulu</p>
              <div className='skillheader'>
                <h3>Työkokemus</h3>
              </div>
              <p><strong>Oulun kaupunki/POHDE</strong></p>
              <p>Sairaanhoitaja 2020-</p>
              <p><strong>Pohjois-Pohjanmaan sairaanhoitopiiri</strong></p>
              <p>Kätilö 2009-2020</p>
              <p><strong>Tampereen kaupuki</strong></p>
              <p>Sairaanhoitaja, eripituisia sijaisuuksia 2007-2008</p>
              <p>Lähihoitaja, eripituisia sijaisuuksia 2006-2007</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className='p-3'>
            <div className='justified'>
              <div className='skillheader'> 
                <h3>Ohjelmointi</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Python</li>
                <li><i className="bi bi-javascript"></i>JavaScrip</li>
                <li>C#</li>
              </ul>
              <div className='skillheader'> 
                <h3>Frontend-kehitys</h3>
              </div>
              <ul className='list-unstyled'>
                <li>React</li>
                <li>React Native</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
              <div className='skillheader'> 
                <h3>Backend & Tietokannat</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Node.js</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>Xampp</li>
                <li>Firebase</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className='p-3'>
            <div>
              <div className='skillheader'> 
                <h3>Projektinhallinta & Kehitystyökalut</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Visual Studio Code</li>
                <li>Visual Studio</li>
                <li>GitHub</li>
                <li>HacknPlan</li>
                <li>WordPress</li>
              </ul>
              <div className='skillheader'>
                <h3>Pilvipalvelut</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Azure</li>
              </ul>
              <div className='skillheader'>
                <h3>Testaus</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Postman</li>
                <li>Selenium</li>
              </ul>
              <div className='skillheader'> 
                <h3>Suunnittelu & Prototypointi</h3>
              </div>
              <ul className='list-unstyled'>
                <li>Figma</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills