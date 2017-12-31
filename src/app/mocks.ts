import { CarPart } from './car-part'

export const CARPARTS: CarPart[] = [{
    id: 1,
    name: 'Super tires',
    description: 'Some description for tires',
    inStock: 0,
    price: 5.34,
    updatedOn: '2017-11-25',
    image: '/assets/images/1.jpg',
    featured: false
  },
  {
    id: 2,
    name: 'Super breaks',
    description: 'They will help you even on absolutely iced road',
    inStock: 22,
    price: 10.2,
    updatedOn: '2017-01-15',
    image: '/assets/images/2.jpg',
    featured: true
  },
  {
    id: 3,
    name: 'Ultra windshield',
    description: 'Booletprolf windshield for your super fast car',
    inStock: 7,
    price: 28.0,
    updatedOn: '2017-05-21',
    image: '/assets/images/3.jpg',
    featured: false
  }
]; 