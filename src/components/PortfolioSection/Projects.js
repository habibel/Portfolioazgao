import { v4 as uuidv4 } from 'uuid';
import Pr1 from '../../images/bblady.png'
import Pr2 from '../../images/beatst.png'
import Pr3 from '../../images/dijitalbyte.png'
import L1 from '../../images/TL.png'
import L2 from '../../images/L2.png'

const projects = [
    {
        id: uuidv4(),
        name: 'project 1',
        Description: 'its a UI/UX design for make up products, using adobeXD a modern design ',
        img: Pr1
    },
    {
        id: uuidv4(),
        name: 'project 2',
        Description: 'Redesign of website Beats Studio by Dr.dree using adobeXD with animation of products',
        img: Pr2
    },
    {
        id: uuidv4(),
        name: 'project 3',
        Description: 'a digitalbyte its a agency who offer all what you need for your project a brad identity , website ',
        img: Pr3
    },
    {
        id: uuidv4(),
        name: 'project 4',
        Description: 'Logo design for barbershop the legend with businesscard ',
        img: L1
    },
    {
        id: uuidv4(),
        name: 'project 5',
        Description: 'Vigavibe a logo guitar and the name of the singer ',
        img: L2
    },
];

export default projects;
