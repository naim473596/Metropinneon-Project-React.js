

const Button = (props) => {
    return (
        <div>
            {/* <button className='bg-indigo-600 text-white font-[poppins] py-1  px-5 rounded md:ml-8   hover:bg-indigo-400 duration-500 mb-5 md:mb-0'>
                {props.children}
            </button> */}



        <button  className="block text-white bg-[#FFCC02] hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md px-10 py-2 text-center" type="button">
        {props.children}
        </button>


        </div>
    );
};

export default Button;