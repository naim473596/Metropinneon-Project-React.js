import Button from './Button';
import HomeImg from '../Images/About-page-img.jpeg'


const About = () => {
    return (
<>
{/* Step-1 start */}
<div className='w-full '>
        <div className='md:flex'>
             <div className=' md:w-1/2 h-[70vh] md:h-[85vh] bg-[#21C489]'>  
                <div className='p-12 md:p-24'>
                    <h1 className='text-4xl font-bold'>About us</h1>
                    <h1 className='text-3xl font-bold text-white'> MetroOpinions story </h1>
                    <h3 className='font-bold mt-5 text-sm'>The aim of MetroOpinion is to give you the best</h3>
                    <h3 className='font-bold py-2 text-sm'>paying surveys on the Internet.</h3>

                    <div className='my-3'>
                    <Button>JOIN HERE</Button>
                    </div>
                </div>
             </div>
             <div className='md:w-1/2 '>
                <img src={HomeImg} className='h-full' />
             </div>
        </div>
    </div>
    {/* Step-1 end */}

    {/* Step-2 start */}


    <div>
        <div className=' mx-10 md:mx-24'>
            <h1 className='text-xl text-gray-800 mt-5'>What is MetroOpinion?</h1>

            <p className='text-[12px] text-gray-500 py-6'>`MetroOpinion is a free survey panel where you can earn money by doing surveys. Our surveys are related to everyday life. There are no questions that you don’t know the answer to – there are only opinions. We collect opinions to help our partners understand the bigger picture.`</p>

            <p className='text-[12px] text-gray-500'>Your opinion, along with hundreds and thousands of others, sends a strong message to companies and organizations. They need to listen to your thoughts and wishes. We at MetroOpinion value your opinion and social contribution, and we reward you for it.</p>

            <div className='text-center text-[12px] text-gray-500 py-3 md:py-8'>
                <p className='py-3'>If you have any questions, feel free to read FAQ or contact us at support@metroopinion.com</p>
                <p>Enjoy our surveys and enjoy your day!</p>
            </div>
        </div>
    </div>

</>
    );
};

export default About;