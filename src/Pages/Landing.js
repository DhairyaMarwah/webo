import React from 'react'
import Lottie from "react-lottie";
import { motion } from "framer-motion"
// import Demo from "../images/demo2.svg";
import Demo3 from "../images/demo3.svg";
import Demo4 from "../images/demo4.svg";
import Demo5 from "../images/demo5.svg";
import Orbit from "../images/orbit.mp4";
import { Link } from 'react-router-dom';
import * as animationData from '../animations/web4.json';
import * as animationData2 from '../animations/web5.json';
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
const Landing = () => {
    const defaultOptions = {
        loop: true,
       
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      const defaultOptions2 = {
        loop: true,
       
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
//   <div className="landing-first-section">
//     <div className="landing-text">
//         <h1>Welcome to the Web Builder</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit rem dolores, incidunt laboriosam quidem dolorem necessitatibus autem dolore beatae.</p>
//         <button>Get Started</button>
//     </div>
//     <div className="landing-img-first">
//     <Lottie options={defaultOptions} />
//     </div>
//   </div>
<div className='landing-wrap'>
<ParallaxProvider>
<motion.div 
initial={{ opacity:0,y:-30 }}
animate={{opacity:1, y: 0 }}
transition={{ duration: 1,delay:0.5}} 
className="logo">
<svg width="100" height="49" viewBox="0 0 370 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_561_914)">
<path d="M57.7631 0C67.5102 0 76.5076 3.10623 83.7911 8.35468C94.5023 4.17734 102 2.89201 106.499 3.85601C111.533 4.92712 113.782 8.03335 113.354 12.6391C113.14 15.6383 111.426 19.3872 108.32 23.4574C99.965 34.3827 80.1494 49.9139 52.0862 63.8384C69.8667 61.4819 86.576 55.5908 102.107 45.5223C101.465 69.4081 81.8631 88.5811 57.7631 88.5811C45.8737 88.5811 35.0555 83.8682 27.1292 76.1562C17.7034 79.6908 11.0625 80.6548 6.99231 79.7979C1.95808 78.7268 -0.291261 75.6206 0.030073 71.0148C0.244296 67.9086 2.06519 64.2668 5.17142 60.0895C13.5261 49.2712 33.2346 33.633 61.4049 19.7085C44.6955 21.9578 28.9501 27.3134 14.2759 36.3107C18.0248 15.6383 36.1266 0 57.7631 0ZM21.131 69.0868C19.3101 66.409 17.8106 63.517 16.5252 60.4108C14.8114 62.2317 13.3119 63.9455 12.1337 65.445C10.3128 67.9086 9.13454 69.8366 8.92031 71.229C11.1697 71.6575 15.2399 71.0148 21.131 69.0868ZM91.0747 14.9956C93.2169 17.5663 95.1449 20.244 96.7516 23.2432C98.5725 21.4223 100.072 19.7085 101.357 18.1018C103.178 15.6383 104.357 13.7103 104.571 12.4249C102.107 11.8894 97.7156 12.6391 91.0747 14.9956Z" fill="#F3F6F6"/>
<path d="M142.059 17.0003H133L144.412 73.0025H154.295L147 38.5305L142.059 17.0003ZM180.178 17.0003L173.59 40.4129L178.061 57.4719L188.885 17.0003H180.178ZM165.941 34.1768L165.236 31.2356L161.471 17L156.412 33.7067L156.176 34.1773L154.294 40.7657L157.824 56.5312L160.059 48.7662L165.824 73.0025H175.824L167.118 38.5305L165.941 34.1768ZM200.178 17.0003H242.062V25.9417H200.178V17.0003ZM200.178 64.0606H241.943V73.002H200.178V64.0606V64.0606ZM200.178 40.2954H237.944V49.1192H200.178V40.2954ZM303.357 52.531C302.808 51.0407 302.024 49.7469 301.004 48.6487C300.298 47.8644 299.161 46.9624 297.592 45.9426C295.866 45.0799 294.337 44.4132 293.004 43.9426C293.945 43.3935 294.965 42.7661 296.063 42.0602C297.161 41.119 297.984 40.2169 298.533 39.3542C299.239 38.413 299.827 37.2757 300.298 35.9424C300.769 34.5306 301.004 33.0012 301.004 31.354C301.004 26.9618 299.357 23.4714 296.063 20.8832C292.768 18.2949 288.298 17.0008 282.65 17.0008H260.885V25.7069H281.474C284.455 25.7069 286.886 26.3344 288.769 27.5893C290.416 28.8443 291.239 30.6483 291.239 33.0013C291.239 35.6682 290.298 37.5897 288.416 38.7661C286.455 40.0211 283.906 40.6485 280.768 40.6485H260.886V48.8841H282.886C286.65 48.8841 289.513 49.5508 291.474 50.8841C293.356 52.2959 294.298 54.1783 294.298 56.5313C294.298 59.0411 293.356 60.9628 291.474 62.296C289.513 63.6293 286.886 64.296 283.591 64.296H260.885V73.0022H283.474C286.533 73.0022 289.357 72.6492 291.945 71.9433C294.612 71.159 296.768 70.1785 298.416 69.0021C300.063 67.8257 301.475 66.2177 302.651 64.1785C303.592 62.2961 304.063 60.0999 304.063 57.5901C304.063 55.6292 303.827 53.9429 303.357 52.5311L303.357 52.531ZM337.594 64.0606C336.417 63.8253 335.319 63.4723 334.299 63.0017C332.103 61.982 330.182 60.5702 328.535 58.7663C326.966 57.1191 325.711 55.0799 324.77 52.6485C323.907 50.217 323.476 47.7464 323.476 45.2365V45.0012V44.6482C323.476 42.0598 323.907 39.5501 324.77 37.1186C325.79 34.6088 327.045 32.6087 328.535 31.1184C330.103 29.3145 331.986 27.9418 334.182 27.0006C335.515 26.3732 336.653 25.9811 337.594 25.8242V17.0005C334.849 17.3926 332.417 18.0593 330.299 19.0005C326.848 20.4907 323.907 22.4907 321.476 25.0007C319.044 27.5106 317.123 30.4909 315.711 33.9419C314.299 37.3929 313.593 41.0009 313.593 44.7657V45.001V45.354C313.593 49.1972 314.299 52.8053 315.711 56.1779C316.966 59.5506 318.848 62.4918 321.358 65.0017C323.868 67.5901 326.809 69.5901 330.182 71.0019C332.3 71.9431 334.77 72.6098 337.594 73.0019V64.0605V64.0606ZM369.595 45.0014L369.595 44.6484C369.595 40.8052 368.889 37.1971 367.477 33.8245C366.065 30.3735 364.144 27.393 361.712 24.8832C359.359 22.3735 356.457 20.4124 353.006 19.0006C351.045 18.0594 348.653 17.3928 345.829 17.0006V25.942L347.241 26.4126C347.947 26.6479 348.496 26.8441 348.888 27.0009C351.085 28.0206 353.006 29.4324 354.653 31.2363C356.222 32.8835 357.477 34.9226 358.418 37.3541C359.281 39.7856 359.712 42.2562 359.712 44.7661V45.0014V45.3544C359.712 47.9427 359.281 50.4525 358.418 52.884C357.398 55.3937 356.143 57.3939 354.653 58.8842C353.084 60.6881 351.202 62.0607 349.006 63.0019C347.986 63.4725 346.927 63.8255 345.829 64.0608V73.0022C348.182 72.6884 350.535 72.0217 352.888 71.002C356.104 69.6687 359.045 67.6687 361.712 65.0019C364.3 62.2567 366.222 59.2763 367.477 56.0606C368.889 52.6096 369.595 49.0016 369.595 45.2368V45.0015L369.595 45.0014Z" fill="#F3F6F6"/>
</g>
<defs>
<clipPath id="clip0_561_914">
<rect width="369.595" height="88.5811" fill="white"/>
</clipPath>
</defs>
</svg>

</motion.div>
<div className="landing-section1">
    <motion.div
        initial={{ opacity:0,x:-50 }}
        animate={{opacity:1, x: 0 }}
        transition={{ duration: 1}} 
    className="landning-1-text">
        <h1>Make Websites at the speed of thought</h1>
        <p>Take advantage of WEBo's free Website Builder to create a professional website for free! Start building your website today!</p>
        <div className="landing-1-btn">
            <Link to={'/app'}>
            <button className='primary'>Get Started</button>
            </Link>
            <Link to={'/about'}>

            <button className='secondary'>Learn More</button>
            </Link>
        </div>
    </motion.div>
</div>
<div className="landing-section2">
    <div className="landing2-img">
    <Parallax speed={-2}>
        <img src={Demo3} alt="" />
        </Parallax>
        <Parallax speed={window.innerWidth>1000?-20:-2}>

        <img className='second-laptop' src={Demo4} alt="" />
        </Parallax>
        <Parallax speed={window.innerWidth>1000?37:20}>

        <img className='phone' src={Demo5} alt="" />
        </Parallax>
    </div>
</div>
<div className="features-section">
    <div className="feautures-text">
        <h1>Features</h1>
        <p>With WEBo, you have the ability to create interactive, multi-user web-apps for desktop and mobile web browsers that include everything you need to build a professional website out of the box. </p>
        <div className="feature-grid">

        <div className="landing-img-first">

     <Lottie options={defaultOptions}   />
   </div>
   <div className="feautres">
         <div className="feature-1">
            <h1>Responsive Web Layouts</h1>
            <p>One website for all devices – that’s the standard for today’s website design and development. </p>
         </div>
         <div className="feature-1 feature-2 ">
            <h1>Drag-n-Drop Editing</h1>
            <p>Use drag and drop features to add contact forms, maps, blogs, videos, and photo galleries. </p>
         </div>
         <div className="feature-1 feature-2 ">
            <h1>Custom CSS</h1>
            <p>High CSS customization to enable you to change templates to fit exactly what you envisioned.</p>
         </div>
         <div className="feature-1 feature-2 ">
            <h1>Display with Image Gallery</h1>
            <p>Images are the core for any website. Choose a website design tool that makes external image databases easy to link too. </p>
         </div>
   </div>
        </div>
    </div>
</div>
<div className="design-section">
    
    <h1>Create interactive designs</h1>

    <video autoPlay loop muted playsinline >
        <source  src={Orbit}/>
    </video>
     
</div>
<div className="how-to-section">
    <div className="how-to-text">
    <h1>HOW DO I MAKE A WEBSITE?</h1>
    <p>Creating your own website has never been easier. With WEBo, you have everything you need to take your small business online.</p>
    <div className="create-steps">
        <ol>
            <li>When you click the Get Started button, you will be taken to our web app.</li>
            <li>Get the information you need about your business from your social media profiles on Google and Facebook.</li>
            <li>  With our tool, you will be able to use your own photos or texts or find Layouts that you like</li>
            <li>Get your free markdown code by clicking the download button</li>
        </ol>
    </div>
    <Link to={'/app'}> 
    <button>Start now</button> 
            </Link>
    </div>
    <div className="how-to-img">
    <Lottie options={defaultOptions2}   />
    </div>
</div>
<div className="footer-wrap">
<div className="footer">
    <div className="footer-first">
        <div className="footer-logo">
        <svg width="140" height="49" viewBox="0 0 370 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_561_914)">
<path d="M57.7631 0C67.5102 0 76.5076 3.10623 83.7911 8.35468C94.5023 4.17734 102 2.89201 106.499 3.85601C111.533 4.92712 113.782 8.03335 113.354 12.6391C113.14 15.6383 111.426 19.3872 108.32 23.4574C99.965 34.3827 80.1494 49.9139 52.0862 63.8384C69.8667 61.4819 86.576 55.5908 102.107 45.5223C101.465 69.4081 81.8631 88.5811 57.7631 88.5811C45.8737 88.5811 35.0555 83.8682 27.1292 76.1562C17.7034 79.6908 11.0625 80.6548 6.99231 79.7979C1.95808 78.7268 -0.291261 75.6206 0.030073 71.0148C0.244296 67.9086 2.06519 64.2668 5.17142 60.0895C13.5261 49.2712 33.2346 33.633 61.4049 19.7085C44.6955 21.9578 28.9501 27.3134 14.2759 36.3107C18.0248 15.6383 36.1266 0 57.7631 0ZM21.131 69.0868C19.3101 66.409 17.8106 63.517 16.5252 60.4108C14.8114 62.2317 13.3119 63.9455 12.1337 65.445C10.3128 67.9086 9.13454 69.8366 8.92031 71.229C11.1697 71.6575 15.2399 71.0148 21.131 69.0868ZM91.0747 14.9956C93.2169 17.5663 95.1449 20.244 96.7516 23.2432C98.5725 21.4223 100.072 19.7085 101.357 18.1018C103.178 15.6383 104.357 13.7103 104.571 12.4249C102.107 11.8894 97.7156 12.6391 91.0747 14.9956Z" fill="#F3F6F6"/>
<path d="M142.059 17.0003H133L144.412 73.0025H154.295L147 38.5305L142.059 17.0003ZM180.178 17.0003L173.59 40.4129L178.061 57.4719L188.885 17.0003H180.178ZM165.941 34.1768L165.236 31.2356L161.471 17L156.412 33.7067L156.176 34.1773L154.294 40.7657L157.824 56.5312L160.059 48.7662L165.824 73.0025H175.824L167.118 38.5305L165.941 34.1768ZM200.178 17.0003H242.062V25.9417H200.178V17.0003ZM200.178 64.0606H241.943V73.002H200.178V64.0606V64.0606ZM200.178 40.2954H237.944V49.1192H200.178V40.2954ZM303.357 52.531C302.808 51.0407 302.024 49.7469 301.004 48.6487C300.298 47.8644 299.161 46.9624 297.592 45.9426C295.866 45.0799 294.337 44.4132 293.004 43.9426C293.945 43.3935 294.965 42.7661 296.063 42.0602C297.161 41.119 297.984 40.2169 298.533 39.3542C299.239 38.413 299.827 37.2757 300.298 35.9424C300.769 34.5306 301.004 33.0012 301.004 31.354C301.004 26.9618 299.357 23.4714 296.063 20.8832C292.768 18.2949 288.298 17.0008 282.65 17.0008H260.885V25.7069H281.474C284.455 25.7069 286.886 26.3344 288.769 27.5893C290.416 28.8443 291.239 30.6483 291.239 33.0013C291.239 35.6682 290.298 37.5897 288.416 38.7661C286.455 40.0211 283.906 40.6485 280.768 40.6485H260.886V48.8841H282.886C286.65 48.8841 289.513 49.5508 291.474 50.8841C293.356 52.2959 294.298 54.1783 294.298 56.5313C294.298 59.0411 293.356 60.9628 291.474 62.296C289.513 63.6293 286.886 64.296 283.591 64.296H260.885V73.0022H283.474C286.533 73.0022 289.357 72.6492 291.945 71.9433C294.612 71.159 296.768 70.1785 298.416 69.0021C300.063 67.8257 301.475 66.2177 302.651 64.1785C303.592 62.2961 304.063 60.0999 304.063 57.5901C304.063 55.6292 303.827 53.9429 303.357 52.5311L303.357 52.531ZM337.594 64.0606C336.417 63.8253 335.319 63.4723 334.299 63.0017C332.103 61.982 330.182 60.5702 328.535 58.7663C326.966 57.1191 325.711 55.0799 324.77 52.6485C323.907 50.217 323.476 47.7464 323.476 45.2365V45.0012V44.6482C323.476 42.0598 323.907 39.5501 324.77 37.1186C325.79 34.6088 327.045 32.6087 328.535 31.1184C330.103 29.3145 331.986 27.9418 334.182 27.0006C335.515 26.3732 336.653 25.9811 337.594 25.8242V17.0005C334.849 17.3926 332.417 18.0593 330.299 19.0005C326.848 20.4907 323.907 22.4907 321.476 25.0007C319.044 27.5106 317.123 30.4909 315.711 33.9419C314.299 37.3929 313.593 41.0009 313.593 44.7657V45.001V45.354C313.593 49.1972 314.299 52.8053 315.711 56.1779C316.966 59.5506 318.848 62.4918 321.358 65.0017C323.868 67.5901 326.809 69.5901 330.182 71.0019C332.3 71.9431 334.77 72.6098 337.594 73.0019V64.0605V64.0606ZM369.595 45.0014L369.595 44.6484C369.595 40.8052 368.889 37.1971 367.477 33.8245C366.065 30.3735 364.144 27.393 361.712 24.8832C359.359 22.3735 356.457 20.4124 353.006 19.0006C351.045 18.0594 348.653 17.3928 345.829 17.0006V25.942L347.241 26.4126C347.947 26.6479 348.496 26.8441 348.888 27.0009C351.085 28.0206 353.006 29.4324 354.653 31.2363C356.222 32.8835 357.477 34.9226 358.418 37.3541C359.281 39.7856 359.712 42.2562 359.712 44.7661V45.0014V45.3544C359.712 47.9427 359.281 50.4525 358.418 52.884C357.398 55.3937 356.143 57.3939 354.653 58.8842C353.084 60.6881 351.202 62.0607 349.006 63.0019C347.986 63.4725 346.927 63.8255 345.829 64.0608V73.0022C348.182 72.6884 350.535 72.0217 352.888 71.002C356.104 69.6687 359.045 67.6687 361.712 65.0019C364.3 62.2567 366.222 59.2763 367.477 56.0606C368.889 52.6096 369.595 49.0016 369.595 45.2368V45.0015L369.595 45.0014Z" fill="#F3F6F6"/>
</g>
<defs>
<clipPath id="clip0_561_914">
<rect width="369.595" height="88.5811" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>
        <p>Build websites with a drag-and-drop interface. <br /> Content automatically optimises for device.</p>
        <Link to={'/app'}>
            {/* <button className='primary'>Get Started</button> */}
        <button>Build your Own Website</button>
            </Link>

    </div>
    <div className="footer-contact">
        <h1>Contact Us</h1>
        <p>Feel free to get in touch with us via <br /> phone or send us a message.</p>
        <p><a>+91 7037484499</a></p>
        <p><a>dhairyamarwah01@gmail.com</a></p>
    </div>
</div>
</div>
</ParallaxProvider>
</div>

  )
}

export default Landing