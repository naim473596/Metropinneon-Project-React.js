
import Button from './Button';
import HomeImg from '../Images/Home-page-img.jpg'
import ThreeStep from './ThreeStep';



const Home = () => {
    return (
<>
    <div className='w-full h-[100vh]'>
        <div className='md:flex'>
             <div className=' md:w-1/2 h-[70vh] md:h-[85vh] bg-[#21C489]'>  
                <div className='p-12 md:p-24'>
                    <h1 className='text-4xl font-bold'>Paid surveys: Earn money online,</h1>
                    <h1 className='text-3xl font-bold text-white'>Work From Home</h1>
                    <h3 className='font-semibold mt-5'>Get up to $2.5 for each survey</h3>
                    <h3 className='font-semibold py-2'>Safe and easy payment</h3>

                    <div className='my-3'>
                    <Button>START HERE</Button>
                    </div>
                </div>
             </div>
             <div className='md:w-1/2 '>
                <img src={HomeImg} className='h-full' />
             </div>
        </div>
    </div>


          {/* ThreeStep section */}
            <ThreeStep/>



</>
    );
};

export default Home;