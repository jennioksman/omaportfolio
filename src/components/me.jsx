import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import stetarit from '../assets/stetarit.jpg'
import ux from '../assets/ux.jpg'
import koodi from '../assets/koodi.png'
import vapis from '../assets/vapis.png'
import ak from '../assets/ak.png'


function Mie() {
    return (
        <div>
            <Container>
                <Row className='text-center m-4'>
                    <Col className='text-align-center'><h2>Tarinani - Matka hoitajasta koodariksi</h2></Col>
                </Row>
                <Row>
                    <Col  xs={12} sm={6}><img className='meImg m-5' src={stetarit}/></Col>
                    <Col xs={12} sm={6} className='align-self-center'>
                        <div className='m-5 justified'>
                           <p>Valmistuin unelma ammattiini kätilöski helmikuussa 2009. Siitä lähtien työskentelin Oulun yliopistopllisessa sairaalassa kätilönä. 
                                Urani alkoi naistentautien vuodeosastolta, mistä siirryin synnytysosastolle. Synnytysosastolta siirryin sisäisen sijaisen tehtäviin 
                                ja sain kiertää koko naistenklinikkaa. Pidin vaihtelevasta työstä kovasti, mutta vuorotyö ei ollut minua varten. 
                            </p>
                            <p>Opiskelin mielenterveys- ja päihdetyötä, minkä jälkeen siirryin Oulun kaupungin aikuisten avomielenterveyspalveluihin töihin. Pian huomasin,
                                että vika ei ehkä niinkään ollut vuorotyössä, vaan minussa itsessäni. Mietin kuumeisesti, mikä minusta tulee isona. IT-alalla työskentelevän veljeni 
                                vinkistä päätin hakeutua opiskelemaan tietojenkäsittelyä.
                            </p>
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={12} sm={6} className='align-self-center'>
                        <div className='m-5 justified'>
                            <p>Ennen opintojen aloittamista testasin vähän koodaamista ja huomasin, että pidän siitä kovasti. Tunsin lapsenomaista riemua joka kerta kun onnistuin kirjoittamaan pätkän jotain toimivaa.</p>
                            <p>Tämä sama riemu on kannatellut minua läpi opintojen. Samalla huomasin, että vaikka kaikenlaiset ongelmat saivat minut vaihdilla harmaantumaan, ne myös sytyttivät jotain minussa. Palan halusta 
                                ratkaista ongelmat ja selvittää, missä vika piilee. 
                            </p>
                            <p>Vähintään yhtä suurta paloa tunsin uusien asioiden opetteluun ja tekemiseen. Ahmin tietoa ja halusin ymmärtää asioita perinpohjaisesti.</p>
                            
                        </div>
                    </Col>
                    <Col><img className='meImg m-5' src={koodi}/></Col>
                </Row>
                <Row>
                    <Col><img className='meImg m-5' src={ux}/></Col>
                    <Col xs={12} sm={6} className='align-self-center'>
                        <div className='m-5 justified'>
                            <p>Suurin innostukseni suuntautuu frontend kehitykseen ja mobiiliohjelmointiin. Olen visuaalinen ihminen ja oman kädenjäljen näkeminen näytöllä tuottaa minulle suurta iloa. Lisäksi empatia on hyvin
                                perimmäinen osa minua, joten käyttäjäkokemuksen suunnittelu on minulle luontevaa.
                            </p>
                            <p>Tällä heltellä teen opinnäytetyötäni, joka on palvelumuotoiluprojekti. Suunnittelen siinä neuromoninaisille suunnattua mobiilisovellusta opiskelun tueksi. Siinä kiteytyykin unelmani tätä uutta alaa kohataan. 
                                Haluan päästä tekemään työtä, jossa voin yhditää tätä henkilökohtaista ominaisuuttani, teknistä osaamistani sekä aiempaa kokemustani terveydenhuollosta.
                            </p>
                            <p>Halu auttaa ihmisiä ei ole kadonnut minusta mihinkään, vaikka ala onkin vaihtunut. Teknologia on kaikkialla ja ihmisiä autetaan monessa suhteessa teknologian keinoin.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} className='align-self-center'>
                        <div className='m-5 justified'>
                            <p>Vapaa-aikana nautin luonnosta, musiikista, käsitöistä ja äänikirjoista. Narun päästä käppäilee välillä suurempi, välillä pienempi kaveri. Myös ystävät ja perhe ovat minulle tärkeitä.
                                Kerran kesässä olen käynyt retkeilemässä Suomen tai Ruotsin Lapissa. Yleensä on tarve päästä kiipeämään korkealle tunturiin ja ihailemaan maisemia. 
                            </p>
                            <p>Soitto- ja lauluharrastuksen aloitin aikuisena. On ollut mahtavaa huomata, että aivot ja kädet oppivat uutta vielä keskiiän kynnykselläkin. Talvilajit kuten lumilautailu ja hiihto
                                sen sijaan ovat kuuluneet elämääni lapsesta asti.
                            </p>
                            <p>Kiitos mielenkiinnosta!</p>
                            <img className='akImg' src={ak}/>
                        </div>
                    </Col>
                    <Col>
                       <img className='meImg m-5' src={vapis}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mie

 