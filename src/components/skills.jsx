import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'

function Skills() {
  return (
    <Container fluid>
      <Row className='text-center m-4'>
        <Col>
          <h4>Frontend</h4>
        </Col>
      </Row>
      <Row className='justify-content-center m-4'>
        <Col xs={12} className='text-center'>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', 
            width: '100%', 
            height: '800px' 
          }}>
            <object
              data="/cv.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            >
              <p>Unable to display PDF file. <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download</a> instead.</p>
            </object>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills