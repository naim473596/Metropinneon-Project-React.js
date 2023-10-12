import Icon1 from "../Images/Icon-1.svg"
import Icon2 from "../Images/Icon-2.svg"
import Icon3 from "../Images/Icon-3.svg"
const ThreeStep = () => {
    return (
<>
<div className='w-full h-full md:h-[70vh]'>
    <div className="my-10 md:my-0">
        <div className="w-screen text-center pb-8 pt-3 md:pt-0 px-12 md:px-20 ">
        <h1 className="text-3xl md:text-2xl pt-3 md:pt-0 font-bold">How to earn with paid surveys in 3 easy steps</h1>
        </div>

        <div className="CARD grid grid-cols-1 md:grid-cols-3 px-2">

            <div className="text-center px-8  ">
                <img src={Icon1} className="w-[100px] my-3 mx-20" />
                <h1 className="text-2xl font-bold text-gray-600">Sign up</h1>
                <p className="text-md md:text-[12px] py-2 text-gray-500">Everyone can join. It is easy to sign up and it only takes 30 seconds. <a   className="text-[#0A58CA] font-semibold cursor-pointer">Start registration here</a></p>
            </div>

            <div className="text-center px-8 ">
                <img src={Icon2} className="w-[100px] my-3 mx-20" />
                <h1 className="text-2xl font-bold text-gray-600">Answer</h1>
                <p className="text-md md:text-[12px] py-2 text-gray-500">You will be invited to surveys via email. Answer honestly. Your answers are anonymous.</p>
            </div>

            <div className="text-center px-8">
                <img src={Icon3} className="w-[100px] my-3 mx-20" />
                <h1 className="text-2xl font-bold text-gray-600">Get Paid</h1>
                <p className="text-md md:text-[12px] py-2 text-gray-500">When you reach the payment threshold you can get paid with one click.</p>
            </div>
        </div>
    </div>
</div>
</>
    );
};

export default ThreeStep;