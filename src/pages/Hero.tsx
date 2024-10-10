import ImageLeftTextRight from '../components/templates/hero/stylised/ImageLeftTextRight'
import NavbarLogoCenterMenuLeftButtonRight from '../components/templates/header/NavbarLogoCenterMenuLeftButtonRight';

import Image from "../assets/img/black_woman.png"

function Hero() {

    const navBarLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];
    return (
        <>

            <NavbarLogoCenterMenuLeftButtonRight links={navBarLinks} />
            <ImageLeftTextRight
                title="Art & Ryme"
                subtitle="Start to finish illustration course from world famous author"
                imageUrl={Image}
                bgColor="cream"
                text="Description Text"
            />

        </>
    )
}

export default Hero