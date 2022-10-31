import {FaGithub} from "react-icons/fa";

const useGithub = (link) => {
    return (
        <div className='flex justify-center my-5 gap-x-5'>
            <button title='Github Link'>
                <a href={link} target="_blank" rel="noreferrer"><FaGithub className='w-7 h-7'></FaGithub></a>
            </button>
        </div>
    );
};

export default useGithub;