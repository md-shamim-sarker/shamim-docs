import useTitle from "../hooks/useTitle";

const Portfolio = () => {
    useTitle("Portfolio");
    return (
        <div className='h-[90vh] text-3xl flex justify-center items-center'>
            <h2>Portfolio page</h2>
        </div>
    );
};

export default Portfolio;