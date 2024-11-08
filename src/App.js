import logoImg from './Images/logo2.png';

import musicIconImg from './Images/MusicAppIcon.png';
import calculatorIconImg from './Images/CalculatorAppIcon.webp';
import tunnelBumpImg from './Images/TunnelBump.png';
import hexaRushImg from './Images/HexaRush.png';

import SearchImg from './Images/search.svg';
import ProfileImg from './Images/person.svg';
import GooglePlayImg from './Images/GoogleStore.png';
import GithubImg from './Images/Github.png';

import './App.css';

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// CarouselBtns
import CarouselBtns from './Components/CarouselBtns/CarouselBtns';

const GooglePlayLink = 'https://play.google.com/store/apps/dev?id=6052554311171664315';
const GithubLink = 'https://github.com/DivijManik';

function App() {
  function OpenLink(link = '') {
    window.open(link);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoImg} className="App-logo" alt="logo" />
        <div className='HeadingText'><h1 className='Tagline1'>We Build</h1><h1> Apps & Games</h1></div>
      </header>
      <div className='Portfolio'>
        <h2 className='SubHead'>Portfolio</h2>
        <h4>★ Featured</h4>
        <AppIconFeatured Link="https://divijmanik.github.io/Music-Player-ReactJS/" AppName="Music Player" AppIcon={musicIconImg} />
        <AppIconFeatured Link="https://play.google.com/store/apps/details?id=com.osimple.calculator" AppName="Calculator" AppIcon={calculatorIconImg} />

        <h4>View All Projects</h4>
        <hr /><br />
        <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true} renderArrowNext={CarouselBtns[0]} renderArrowPrev={CarouselBtns[1]}>
          <AppIcon Link="https://divijmanik.github.io/Music-Player-ReactJS/" AppName="Music Player" AppIcon={musicIconImg} />
          <AppIcon Link="https://play.google.com/store/apps/details?id=com.osimple.calculator" AppName="Calculator" AppIcon={calculatorIconImg} />
          <AppIcon Link="https://play.google.com/store/apps/details?id=com.BoltStudio.BoopnBoop" AppName="Tunnel Bump" AppIcon={tunnelBumpImg} />
          <AppIcon Link="https://play.google.com/store/apps/details?id=com.BoltAim.HexaRush" AppName="Hexa Rush" AppIcon={hexaRushImg} />
        </Carousel>
        <hr />

        {/* Google Play buttons */}
        {/* <br /> */}
        <button className='GoogleBtn' onClick={() => OpenLink(GooglePlayLink)}><img src={GooglePlayImg}></img></button>
        <button className='GoogleBtn' onClick={() => OpenLink(GithubLink)}><img src={GithubImg}></img></button>
      </div>

      <div className='AboutUs-Bg'>
        <div className='AboutUs'>
          <h2 className='SubHead'>About Us</h2>
          <p>The team behind the Awesome Apps. They are no less than superheroes.</p>
          <br />
          <AbousUs_PersonCard Name='Divij Manik' Designation='Founder' Description='Started in 2019 with Aim to make useful apps & awesome games for all ages that everyone can love.' />
          <AbousUs_PersonCard Designation='UI/UX Designer' Description='Simply love my role in BoltAim. I always wanted to contribute in software & gaming industry .' />
          <AbousUs_PersonCard Name='Jane Doe' Designation='Backend Developer' Description='Love working on different projects and really happy to be a part of such a supportive team.' />
          <br />
        </div>
      </div>

      {/* Contact us */}
      <div className='ContactUs'>
        <h2 className='SubHead'>Contact Us</h2>
        <p style={{ padding: "20px" }}>Contact us regarding quotation for your app or game or any general query.</p>
        {/* <input placeholder='Your name'></input>
        <input placeholder='Your email'></input>
        <input placeholder='Your message'></input>
        <button>SUBMIT</button> */}
        <div>
          <h3>Information</h3>
          <div className='Address-parent'>
            <div className='Address'>BoltAim Games Company</div>
            <div>
              <div className='Address2'>A block, Sector 55</div><div className='Address2'>Noida, India</div>
            </div>
            <br />
            <div className='Email'><a href='mailto:boltaim.games@gmail.com'>boltaim.games@gmail.com</a></div>
          </div>
          <br /><br />
        </div>
      </div>

      {/* Footer */}
      <footer style={{ height: "50px", textAlign: "left", paddingTop: "40px", paddingLeft: "40px", }}>
        <a>© Copyright {new Date().getFullYear()} BoltAim Games</a>
      </footer>
    </div >
  );
}

function AppIcon({ Link, AppName, AppIcon }) {

  function OnClickRedirect() {
    window.open(Link);
  }

  return (
    <div>
      <button className='AppIcon' onClick={() => OnClickRedirect()}>
        <img className='AppIcon-Img' src={AppIcon}></img>
        <div className='AppIcon-Hover'>
          <div className='AppHover-Img-Parent'>
            <img src={SearchImg} />
          </div>
          <br /><br />
          <h3>{AppName}</h3>
        </div>
      </button>
    </div>
  )
}

function AppIconFeatured({ Link, AppName, AppIcon }) {

  function OnClickRedirect() {
    window.open(Link);
  }

  return (
    // <div>
    <button className='AppIcon' onClick={() => OnClickRedirect()}>
      <img className='AppIcon-Img-Featured' src={AppIcon}></img>
      <div className='AppIcon-Hover-Featured'>
        <div className='AppHover-Img-Parent'>
          <img src={SearchImg} />
        </div>
        <br /><br />
        <h3>{AppName}</h3>
      </div>
    </button>
    // </div>
  )
}

function AbousUs_PersonCard({ Name = "John Doe", Description = "", Designation = "Employee" }) {
  return (
    <div className='PersonCard-BG'>
      <img src={ProfileImg}></img>
      <h4>{Name}</h4>
      <h5>{Designation}</h5>
      <p>{Description}</p>
    </div>
  )
}

export default App;
