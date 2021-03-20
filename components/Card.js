export default function Card(props) {
    if (props.isReaveled) {
        return (
            <div className='w-64 rounded-2xl shadow-card text-center p-5 font-ghibli my-5 mx-auto'>
                <h2 className='text-cyan'>{props.year}</h2>
                <h1  className='text-xl font-semibold'>{props.title}</h1>
                <h2 className='text-cyan font-semibold'>{props.director}</h2>
                <p className='text-justify text-sm'>{props.description}</p>
            </div>
        )
    }
    return (
        <div className='w-64 h-96 rounded-2xl shadow-card flex justify-center p-5 font-ghibli my-5 mx-auto bg-cyan'>
            <h2 className=' text-white text-5xl my-auto'>{props.year}</h2>
        </div>
    )
}
