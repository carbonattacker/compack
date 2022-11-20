import './styles.scss'

const SmallCard = (props) => {
    const { label } = props 
    return (
        <div className="card-one">
            {label ? label : 'Label'}
        </div>
    )
}

export default SmallCard