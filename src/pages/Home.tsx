import React from "react";
import HeroImg from '../assets/img/img1.jpg'
import Img2 from '../assets/img/img2.jpg'
import Img3 from '../assets/img/img3.jpg'
import Vid1 from '../assets/video/vid1.mp4'
import HeroTemplate from "../components/templates/hero/BasicHero";
import ImageLeftHero from "../components/templates/hero/ImageLeftHero";
import ImageBackgroundHero from "../components/templates/hero/ImageBackgroundHero";
import CenteredTextHero from "../components/templates/hero/CenteredTextHero";
import VideoBackgroundHero from "../components/templates/hero/VideoBackgroundHero";
import SplitScreenHero from "../components/templates/hero/SplitScreenHero";

import ShowcaseCarousel from '../components/templates/project-showcase/ShowcaseCarousel';
import SingleProjectSpotlight from '../components/templates/project-showcase/SingleProjectSpotlight';
import MasonryGridShowcase from '../components/templates/project-showcase/MasonryGridShowcase';
import ProjectGridWithModal from '../components/templates/project-showcase/ProjectGridWithModal';
import SplitScreenShowcase from '../components/templates/project-showcase/SplitScreenShowcase';



// Headers

// import SimpleHeader from '../components/templates/header/SimpleHeader';
// import NavbarLeft from '../components/templates/header/NavbarLeft';
// import NavbarCenter from '../components/templates/header/NavbarCenter';
// import NavbarRight from '../components/templates/header/NavbarRight';
// import DropdownMenu from '../components/templates/header/DropdownMenu';
// import ContextMenu from '../components/templates/header/ContextMenu';
// import MegaMenu from '../components/templates/header/MegaMenu';
// import StickyNavbar from '../components/templates/header/StickyNavbar';
import StickyNavbarLeft from '../components/templates/header/StickyNavbarLeft';
// import SideMenuMobile from '../components/templates/header/SideMenuMobile';
// import HeaderWithCenterSearch from '../components/templates/header/HeaderWithCenterSearch';
// import HeaderWithLeftSearch from '../components/templates/header/HeaderWithLeftSearch';
// import HeaderWithToggleSearch from '../components/templates/header/HeaderWithToggleSearch';




import JumbotronWithBackgroundImage from "../components/templates/jumbotron/JumbotronWithBackgroundImage";

import SlideUpHeroCarousel from "../components/templates/hero/SlideUpHeroCarousel";


// Portfolio Gallery
import PortfolioGallery from "../components/templates/profiles/PortfolioGallery";
import ProfileCard from "../components/templates/profiles/PortfolioCard";
import MediaSlider from "../components/templates/media/MediaSlider";


const Home: React.FC = () => {

    const projects = [
        {
          image: HeroImg,
          title: 'Project Alpha',
          description: 'An innovative solution to manage tasks efficiently and effectively.',
          link: '#',
        },
        {
          image: Img2,
          title: 'Project Beta',
          description: 'A comprehensive platform for online learning and knowledge sharing.',
          link: '#',
        },
        {
          image: Img3,
          title: 'Project Gamma',
          description: 'A creative portfolio showcasing the latest design trends.',
          link: '#',
        },
      ];
    
      const singleProject = {
        image: Img3,
        title: 'Project Spotlight',
        description: 'An outstanding project that has gained significant recognition.',
        link: '#',
      };


      const splitScreenProject = {
        image: HeroImg,
        video: Vid1,
        title: 'Split Screen Project',
        description: 'A dynamic project combining visual elements and video.',
        link: '#',
      };

      const slides = [
        {
          image: HeroImg,
          alt: 'Slide 1',
          link: 'https://example.com/page1',
          date: 'August 27, 2024',
          author: 'Author 1',
        },
        {
          image: Img2,
          alt: 'Slide 2',
          link: 'https://example.com/page2',
          date: 'August 28, 2024',
          author: 'Author 2',
        },
        {
          image: Img3,
          alt: 'Slide 3',
          link: 'https://example.com/page3',
          date: 'August 29, 2024',
          author: 'Author 3',
        },
        // Add more slides as needed
      ];

      const links = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' },
      ];
    
      // const megaMenuSections = [
      //   { title: 'Section 1', links },
      //   { title: 'Section 2', links },
      //   { title: 'Section 3', links },
      // ];
    

      const Portfolioprojects = [
        {
          image: Img2,
          title: 'Project One',
          description: 'Description of project one.',
          link: '#',
        },
        {
          image: Img3,
          title: 'Project Two',
          description: 'Description of project two.',
          link: '#',
        },
        // Add more projects as needed
      ];

      const profile = {
        profileImage: Img3,
        name: 'John Doe',
        title: 'Full Stack Developer',
        bio: 'Passionate about creating interactive and dynamic web applications.',
        socialLinks: [
          { platform: 'Twitter', url: 'https://twitter.com/johndoe' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
        ],
      };


      const mediaItems = [
        {
          src: Img2,
          altText: 'Slide 1',
          caption: 'Caption for Slide 1',
        },
        {
          src:Img3,
          altText: 'Slide 2',
          caption: 'Caption for Slide 2',
        },
        // Add more slides as needed
      ];


      const slideupHeroContent = [
        {
          text: 'Welcome to Our Website',
          backgroundImage: Img3,
        },
        {
          text: 'Discover Our Services',
          backgroundImage: Img2,
        },
        {
          text: 'Contact Us Today',
          backgroundImage: Img3,
        },
      ];




  return (
    <>

<StickyNavbarLeft links={links} backgroundColor="gray-100" textColor="black"/>

    {/* <HeaderWithCenterSearch color="blue-500" links={links} />
    <HeaderWithLeftSearch color="green-500" links={links} />
    <HeaderWithToggleSearch color="red-500" links={links} /> */}


    <HeroTemplate
      title="Welcome to Our Service"
      subtitle="Discover amazing features and benefits."
      buttonText="Get Started"
      backgroundImage={HeroImg} // Provide an image URL or omit for a plain background
    />

    <ImageLeftHero
        title="Innovative Solutions"
        subtitle="Cutting-edge technology for your business."
        buttonText="Learn More"
        imageUrl={Img2}
      />

      <ImageBackgroundHero
        title="Transform Your Experience"
        subtitle="See how we can change the way you work."
        buttonText="Join Us"
        backgroundImageUrl={Img3}
      />

    <CenteredTextHero
        title="Simplicity at its Best"
        subtitle="Focused on delivering clear messages."
        buttonText="Explore Now"
        onButtonClick={() => alert("Button clicked!")}
      />
      <VideoBackgroundHero
        title="Engage with Dynamic Content"
        subtitle="Experience the power of video."
        buttonText="Watch More"
        videoUrl={Vid1}
        onButtonClick={() => alert("Video button clicked!")}
      />
      <SplitScreenHero
        title="Dual Focus"
        subtitle="Text and media, perfectly balanced."
        buttonText="See More"
        mediaUrl={Img3}
        isVideo={false}
        onButtonClick={() => alert("Split screen button clicked!")}
      />






      {/* Showcase Carousel */}
      <ShowcaseCarousel projects={projects} theme="light" />

      {/* Single Project Spotlight */}
      <SingleProjectSpotlight project={singleProject} theme="dark" />

      {/* Masonry Grid Showcase */}
      <MasonryGridShowcase projects={projects} theme="light" />

      {/* Project Grid with Modal */}
      <ProjectGridWithModal projects={projects} theme="dark" />

      {/* Split Screen Showcase */}
      <SplitScreenShowcase project={splitScreenProject} theme="light" />


      <JumbotronWithBackgroundImage slides={slides} />


      {/* <SimpleHeader title="My Website" links={links} />
      <NavbarLeft links={links} />
      <NavbarCenter links={links} />
      <NavbarRight links={links} />
      <ContextMenu items={links} />
      <DropdownMenu title="Menu" items={links} />
      <MegaMenu sections={megaMenuSections} />
      <StickyNavbar links={links} />
      <SideMenuMobile links={links} /> */}





<PortfolioGallery projects={Portfolioprojects} />

<ProfileCard
        profileImage={profile.profileImage}
        name={profile.name}
        title={profile.title}
        bio={profile.bio}
        socialLinks={profile.socialLinks}
      />

<MediaSlider mediaItems={mediaItems} autoPlay={true} autoPlayInterval={5000} />

<SlideUpHeroCarousel content={slideupHeroContent} intervalTime={5000} />



      
    </>
  );
    
    
};

export default Home;
