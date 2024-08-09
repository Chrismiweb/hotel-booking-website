import presken from '../images/Presken1.png'
import safron from '../images/safron1.png'
import De from '../images/De1.png'
import gallani from '../images/gallani1.png';
import debras from '../images/dabras1.png';

import aveon from '../images/ave.png';

const hotelList = [
    {
        id: 1,
        image: presken,
        location: 'Lagos State',
        hotelName: "Presken Hotel",
        price:"₦30,000 Per Night",
        available: "Yes",
        bookBtn: "Book Now",
        link: '/presken'
    },
    {
        id: 2,
        image: safron,
        location: 'Lagos State',
        hotelName: "Safron Hotel",
        price:"₦60,000 Per Night",
        available: "Yes",
        bookBtn: "Book Now",
        link: '/Safron'

    },
    {
        id: 3,
        image: De,
        location: 'Ilorin, Kwara State',
        hotelName: "De Apartment",
        price:"₦20,000 Per Night",
        available: "Yes",
        bookBtn: "Book Now",
        link: '/deApartment'

    },
    {
        id: 4,
        image: aveon,
        location: 'Abuja, Nigeria',
        hotelName: "Aveon Hotel",
        price:"₦50,000 Per Night",
        available: "Yes",
        bookBtn: "Book Now",
        link: '/aveon'
    },
    {
        id: 5,
        image: gallani,
        location: 'Ibadan, Nigeria',
        hotelName: "Gallani Hotel",
        price:"₦25,000 Per Night",
        available: "No",
        bookBtn: "Book Now",
        link: '/gallani'

    },
    {
        id: 6,
        image: debras,
        location: 'Kaduna, Nigeria',
        hotelName: "Dabras Hotel",
        price:"₦100,000 Per Night",
        available: "Yes",
        bookBtn: "Book Now",
        link: '/debras'

    }
]
export default hotelList
