import React, { useEffect, useRef } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'
import { tns } from 'tiny-slider';
import logo from './assets/images/img_logo.png';
import telegram from './assets/images/telegram.png';
import twitter from './assets/images/twitter.png';
import discord from './assets/images/discord.png';
import ipLeft from './assets/images/ip-left.png';
import ipRight from './assets/images/ip-right.png';
import dcimbanner from './assets/images/dcimbanner.png';
import line from './assets/images/line.png';
import medium from './assets/images/medium.png';

import di1 from './assets/images/di1.png';


import logo1 from './assets/images/logo1.png';
import logo2 from './assets/images/logo2.png';
import logo3 from './assets/images/logo3.png';
import logo4 from './assets/images/logo4.png';
import logo5 from './assets/images/logo5.png';
import logo6 from './assets/images/logo6.png';
import logo7 from './assets/images/logo7.png';
import logo8 from './assets/images/logo8.png';
import logo9 from './assets/images/logo9.png';
import logo10 from './assets/images/logo10.png';
import logo11 from './assets/images/logo11.png';
import logo12 from './assets/images/logo12.png';
import logo13 from './assets/images/logo13.png';

import banner1 from './assets/images/banner/banner1.png';
import banner2 from './assets/images/banner/banner2.png';
import banner3 from './assets/images/banner/banner3.png';
import banner4 from './assets/images/banner/banner4.png';

import dcim from './assets/images/dcim.png';
import ip from './assets/images/ip.png';
import metaverse from './assets/images/metaverse.png';

import './App.scss';

const sliderImages = [banner1, banner2, banner3, banner4]

function App() {
  const eleRef = useRef(null)

  console.log('========================= ~ tns', tns)

  useEffect(() => {
    console.log('===========44============== ~ useEffect ~ eleRef.current', eleRef.current)
    if (eleRef.current) {
      console.log('===========77777============== ~ useEffect ~ eleRef.current', eleRef.current)
      tns({
        container: eleRef.current,
        items: 3,
        // slideBy: 'page',
        speed: 400,
        mouseDrag: true,
        autoplay: false,
        preventScrollOnTouch: 'auto',
        controls: false,
        navPosition: 'bottom',
        gutter: 20,
        autoHeight: true,
        // autoWidth: true,
      });
    }
    
  }, [])
  const navList = ['HOME', 'METAVERSE', 'DCIM', 'AR NFT', 'ROADMAP', 'PARTNERS', 'FAQ']
  const PartnersImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13]

  return (
    <div className="App">
      <section className='first-section'>
        <nav className='nav'>
          <div>
            <img src={logo} width="60px" alt="logo" />
          </div>
          
        </nav>
      </section>
      <section className='header'>
        <div className='header-content'>
          <h1>OVO.SPACE METAVERSE</h1>
          <p>ovo (ovo.space) is the industry's frst platform to issue holographic AR-NFT assets and is currently deployed on the BSC and FLOw. The NFT issued by ovo will be delivered as Super Avatars to various Metaverses and GameFi platforms. OVO will be an important content provider for the future Metaverse.</p>
          <div className='btn-box'>
            <button className='button'>Enter website on BSC</button>
            <button className='button'>Enter website on FLow</button>
          </div>
          <div className='icon-box'>
            <img src={telegram} width="18px" alt="telegram" />
            <img src={twitter} width="18px" alt="twitter" />
            <img src={discord} width="18px" alt="discord" />
          </div>
        </div>
      </section>

      <section className='third-section'>
        <div>
          <img src={ipLeft} width="24px" alt="ip icon" />
          <span className='IP'>IP </span>
          <span className='title'>resources</span>
          <img src={ipRight} width="24px" alt="ip icon" />
        </div>
        <div ref={eleRef} id="test" className='slider-box'>
          <div>
            <img src={banner1} width="100%" height="100%" alt="sliderImages" />
          </div>
          <div>
           <img src={banner2} width="100%" height="100%" alt="sliderImages" />
          </div>
          <div>
            <img src={banner3} width="100%"  alt="sliderImages" />
          </div>
          <div>
            <img src={banner4} width="100%" height="100%" alt="sliderImages" />
          </div>
        </div>
        {/* { sliderImages.map(image => (
            <div key={image}>
              <img src={image} width="100%" alt="sliderImages" />
            </div>
          ))} */}
      </section>

      <section className='forth-section'>
        <h1>OVO SPACE Metaverse</h1>
        <div className='content'>
          <div className='item'>
            <img src={dcim} width="28px" alt="dcim" />
            <h2 className='title'>DCIM</h2>
            <p className='desc'>This is composed of the lower-level copyright verification and the upper-level asset management mechanism. The lower-level is the copyright-related cooperation and authorization agreement represented by NFT, and the upper-level is the issuance and management circulation mechanism of those NFT assets. NFT is based on ERC721 and ERC1155. </p>
          </div>
          <div className='item'>
          <img src={ip} width="28px" alt="dcim" />
            <h2 className='title'>IP</h2>
            <p className='desc'>The OVO platform has a wealth of Japanese IP resources. At present, OVO has issued two NFT products with exclusive contracts.
Gravure idols NFT were sold out very quickly on FlowFest, and the sales ranked 5th in the entire Flowverse.
Nyathees (one of the most famous Anime characters, with more than 4 million paid download in Japan). OVO has sold more than 34,000 Nyathees Mystery Boxes.</p>
          </div>
          <div className='item'>
          <img src={metaverse} width="28px" alt="dcim" />
            <h2 className='title'>Metaverse</h2>
            <p className='desc'>Building a true metaverse requires a complete virtual world, time continuity, value transmission, and orderly operation.
OVO will be a content distribution platform based on NFT technology to provide "value transfer" solutions for various metaverses, and it will also be a "creator metaverse".
</p>
          </div>
        </div>
      </section>

      <section className='fifth-section'>
        <div className='fifth-section-header'>
          <h1 className='title'>DCIM</h1>
          <p className='desc'>The dual copyright inspection mechanism (DCIM: Dual Copyright Inspection Mechanism) consists of copyright 
          verification and asset management mechanisms. The underlying logic is the copyright-related cooperation and authorization 
          agreement that binds NFT assets, and the superstructure is the issuance and management circulation mechanism of NFT assets. 
          The DCIM mechanism guarantees the unity of creators and NFT works, as well as the regularity of NFT issuance and the legality 
          of transactions.. 
          </p>
          <img src={dcimbanner} width="100%" alt="dcimbanner" />
        </div>
        <div className='fifth-section-content'>
          <h2>AR NFT</h2>
          <div className='desc-box'>
            <div className='fifth-section-content-img' ><img src={di1} width="100%" alt="di1" /></div>
            <div>
              <p>The OVO platform integrates holographic</p>
              <p>AR technology to increase the value of</p>
              <p>NFT assets in audio-visual</p>
              <p>entertainment. In the future, GameFi</p>
              <p>applications based on AR technology will</p>
              <p> be built to expand the scenarios of OVO tokens.</p>
            </div>
            
          </div>
        </div>

      </section>

      <section className='sixth-section'></section>

      <section className='seventh-section'>
        <h1>Partners</h1>
        <div className='seventh-section-content'>
          {
            PartnersImages.map(image =>  <div><img src={image} width="100%" alt="logo1" /></div>)
          }
         
        </div>
      </section>

      <section className='eighth-section'>
        <h1>FAQ</h1>
        <div className='content'>
          <div className='content-item'>
            <span className='content-item-index'>01</span>
            <h3>What is OVO?</h3>
            <div className='desc'>
              <p>OVO (ovo.space) is the industry's first platform to issue holographic AR-NFT assets and is currently deployed on the
                BSC and FLOW. The NFT issued by OVO will be delivered as Super Avatars to various Metaverses and GameFi platforms.
                OVO will be an important content provider for the future Metaverse. </p>
              <p className='group'>The DCIM standard pioneered by OVO ensures the legitimacy of NFT asset issuance and transactions, and binds the value
              of NFT and derivatives to genuine IPs, thereby realising the transfer of traditional copyright to the blockchain assets.</p>
            </div>
          </div>
          <div className='content-item'>
            <span className='content-item-index'>02</span>
            <h3>How to solve it when the gas fee is too high?</h3>
            <div className='desc'>
              <p>For iOS/Android users:</p>

              <div className='group'>
                <p>You can access OVO through MetaMask App.</p>
                <p>Network needs to be connected to BSC and please use the browser on MetaMask.</p>
              </div>

              <div className='group'>
                <p>BSC Network Settings</p>
                <p>---------------</p>
                <p>Network Name: Binance Smart Chain</p>
                <p>New RPC URL: https://bsc-dataseed.binance.org/</p>
                <p>ChainID: 56</p>
                <p>Currency Symbol: BNB</p>
                <p>Block Explorer URL: https://bscscan.com (https://bscscan.com/)</p>
                <p>Details:</p>
                <p><a href='https://bit.ly/3uw4ZhV'>https://bit.ly/3uw4ZhV</a></p>
              </div>
            </div>
          </div>

          <div className='content-item'>
            <span className='content-item-index'>03</span>
            <h3>How to solve it when the gas fee is too high?</h3>
            <div className='desc'>
              <p>If the gas fee is too high, please do not confirm the transaction. It might be the following reasons:</p>
              <p>1.Insufficient $BUSD</p>
              <p>Users need to confirm whether the BUSD balance is sufficient before purchasing, otherwise the gas fee will be abnormally high when purchasing.</p>
              <div className='group'>
                <p>2.Using your own referral links</p>
                <p>The user may accidentally open his own referral link when making a purchase. At this time, the gas fee will be too high by 
                mistake. Please use the correct referral link (not his own link)to reopen the page and buy.</p>
              </div>

              <div className='group'>
                <p>3.The mystery box is sold out</p>
                <p>After selling out, the gas fee will also be too high.</p>
              </div>
              <div className='group'>
                <p>4.Other technical faults occur</p>
                <p>If you have tried the above three solutions, but the gas fee is still too high. You may indeed meet technical faults,
                please ask OVO customer service.</p>
              </div>
            </div>
          </div>

          <div className='content-item'>
            <span className='content-item-index'>04</span>
            <h3>How to get Affiliates Link?</h3>
            <div className='desc'>
              <p>
                1.Connect BSC wallet to
                <a href="https://ovobsc.ovo.space/#/collection/nyathees">https://ovobsc.ovo.space/#/collection/nyathees</a>
                . Ensure you have enough BNB and BUSD in your wallet.
              </p>
              <p>*More details about how to connect wallet to BSC network</p>
              <div className='group'>
                <p> 2. You could click here as shown below to get your referral link. Spread it everywhere such as Twitter, Instagram, facebook and other social media.</p>
              </div>
              <div className='group'>
                <p>3. If someone buys a Mystery Box through your referral link, the 20% commission of sales automatically shows on the OVO account as below.
                Remember to often check how much you earn & claim to your wallet. The affiliates' relationship with your customers will be permanent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='footer-content'>
          <img src={discord} width="32px" height="32px" alt="discord" />
          <img src={telegram} width="32px" height="32px" alt="telegram" />
          <img src={twitter} width="32px" height="32px" alt="twitter" />
          <img src={line} width="32px" height="32px" alt="line" />
          <img src={medium} width="32px" height="32px" alt="medium" />
        </div>
        <p>Copyright© 2021 OVO.SPACE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
