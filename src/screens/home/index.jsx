import { Link } from 'react-router-dom'
import SmallCard from '../../components/smallCard'
import './styles.scss'

const Home = () => {

    const cards = [
        {
            id: 0,
            name: 'Input',
            ref: '/input'
        },
        {
            id: 1,
            name: 'Button',
            ref: '/button'
        },
        {
            id: 2,
            name: 'Checkbox',
            ref: '/checkbox'
        },
        {
            id: 3,
            name: 'Radio',
            ref: '/radio'
        }
    ]

    return (
        <div className="home-base">
            <div className="home-cont-one">
                <label className='heading-one'>All Components</label>
                <div className='home-flex-cards'>
                    {cards?.length && cards?.map((c) => {
                        return (
                            <Link className='text-primary' to={c?.ref}><SmallCard key={c?.id} label={c?.name} /></Link>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home