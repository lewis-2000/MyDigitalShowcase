// import HeroWithActionButtonsAndRightImage from "../components/templates/hero/heroWithActionButtonsAndRightImage"
// import HeroWithContentTopAndActionButtons from "../components/templates/hero/HeroWithContentTopAndActionButtons"
// import SimpleLogin from "../components/templates/account/simpleLogin"
import JumbotronWithBackgroundImage from "../components/templates/jumbotron/JumbotronWithBackgroundImage"


import ModalWithTopLogo from "../components/templates/account/ModalWithTopLogo"
import SplitScreenSignUp from "../components/templates/account/SplitScreenSignUp"
import SocialMediaAuth from "../components/templates/account/SocialMedia"


// import Img1 from "../assets/img/img1.jpg"
import Logo2 from "../assets/img/Logo2.png"
import Img2 from "../assets/img/img2.jpg"
import Img3 from "../assets/img/img3.jpg"


const slidesData = [
  {
    image: Img2,
    alt: 'Beautiful Landscape 1',
    link: 'https://example.com/post1',
    date: 'October 3, 2024',
    author: 'John Doe',
  },
  {
    image: Img3,
    alt: 'Beautiful Landscape 2',
    link: 'https://example.com/post2',
    date: 'September 29, 2024',
    author: 'Jane Smith',
  },
  {
    image: Img2,
    alt: 'Beautiful Landscape 3',
    link: 'https://example.com/post3',
    date: 'September 15, 2024',
    author: 'Chris Johnson',
  },
];





function dev() {
  return (
    // < HeroWithActionButtonsAndRightImage />
    // <HeroWithContentTopAndActionButtons />
    <div>

      <JumbotronWithBackgroundImage slides={slidesData} key={1} />

      {/* <SimpleLogin /> */}
      <ModalWithTopLogo logoUrl={Img3} primaryColor="#4F46E5" darkMode={true} />
      <SplitScreenSignUp logoUrl={Img3} promoImage={Img2} primaryColor="#4F46E5" darkMode={true} />
      <SocialMediaAuth darkMode={true} logoUrl={Logo2} primaryColor="#4F46E5" />

    </div>
  )
}

export default dev