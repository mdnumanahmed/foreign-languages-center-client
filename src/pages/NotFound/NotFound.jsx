import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div>
        <img className='w-64' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?size=626&ext=jpg&ga=GA1.1.1413773890.1686237948&semt=sph" alt="" />
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-orange-400'>
            404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-purple-600 mb-8'>
            Page Not Found
          </p>
          <Link to='/' className=' bg-purple-600 p-4 rounded-md text-white font-bold hover:bg-purple-600'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;