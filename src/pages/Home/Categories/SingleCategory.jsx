import { Slide } from 'react-awesome-reveal';

const SingleCategory = ({category}) => {
    const {name, image} = category
    return (
        <Slide direction='down'>
        <div className='w-52 flex flex-col items-center group hover:bg-slate-200 p-5 rounded-md hover:shadow-lg transition-all duration-300'>
            <div><img className='w-20 h-20 object-cover mb-4 rounded-full transform duration-500 group-hover:scale-125 border-4 hover:border-0 border-purple-600' src={image} alt="" /></div>
            <div><a className='text-xl font-bold hover:text-pink-600' href="#">{name}</a></div>
        </div>
        </Slide>
    );
};

export default SingleCategory;