import { Home, BtnComponent, InputComponent } from '../screens'

const routes = [
    {
        id: 0,
        name: 'Home',
        ref: '/',
        Component: Home
    },
    {
        id: 1,
        name: 'Buttons',
        ref: '/buttons',
        Component: BtnComponent
    },
    {
        id: 2,
        name: 'Input',
        ref: '/input',
        Component: InputComponent
    }
]

export default routes