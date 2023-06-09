import loader from '../../assets/loader.jpg'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center bg-white min-h-screen'>
            <img className='w-1/2' src={loader} alt="" />
        </div>
    );
};

export default Spinner;