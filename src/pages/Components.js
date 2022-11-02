import {useContext} from "react";
import {FaCopyright} from "react-icons/fa";
import {AppContext} from "../contexts/UserContext";
import useTitle from "../hooks/useTitle";
import HeaderMobile from "../shared/HeaderMobile";

const Components = () => {
    const {dark} = useContext(AppContext);
    useTitle("Components");
    return (
        <>
            <div className='w-[100vw] fixed'>
                <HeaderMobile></HeaderMobile>
            </div>

            <div className={dark ? 'bg-gray-900 text-gray-50' : 'bg-gray-50 text-gray-900'}>
                <div className="w-11/12 mx-auto">
                    <h2 className="text-2xl font-bold pt-[4rem]">Components Page</h2>
                    <p className="py-[3rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae animi sed quisquam culpa molestias repudiandae? Iure quaerat laboriosam corporis necessitatibus deserunt fugiat, itaque voluptas ullam qui. Dicta, nostrum! Excepturi mollitia dolore dignissimos quaerat voluptatum voluptas at porro optio eius nam voluptatem, quisquam corporis aliquid expedita id quidem consectetur magni voluptatibus molestias, earum tempore, dolorem iusto eaque consequuntur. Autem impedit quo sapiente sunt accusantium eius necessitatibus deleniti, nihil distinctio cupiditate consectetur, non vero sed aspernatur laudantium? Cumque fugit modi culpa cupiditate, iure repellat vero obcaecati dolorum inventore, quam esse quidem explicabo beatae, atque molestias nobis dolore doloribus ducimus deleniti quisquam! Ducimus beatae nulla nobis aperiam nostrum accusantium pariatur impedit veritatis inventore, placeat perferendis! Reiciendis illum alias eos sapiente hic distinctio, est sint accusamus dicta dolore modi! Ipsum error hic minus accusamus obcaecati cumque deleniti velit aliquid placeat ullam aperiam, alias quam, dolorem temporibus autem! Rerum libero ipsam eos error quo rem quibusdam. Perferendis magnam, dicta consequuntur ipsum modi aliquid et deleniti pariatur error, excepturi quia quaerat officiis, minus sit nihil aliquam nesciunt maxime quidem ut! Culpa omnis aspernatur natus sapiente eos porro tempore, qui temporibus quia voluptatum dolorem exercitationem velit dolores et ullam quidem id cupiditate dicta ducimus ratione soluta iure.</p>
                    <p className="py-[3rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae animi sed quisquam culpa molestias repudiandae? Iure quaerat laboriosam corporis necessitatibus deserunt fugiat, itaque voluptas ullam qui. Dicta, nostrum! Excepturi mollitia dolore dignissimos quaerat voluptatum voluptas at porro optio eius nam voluptatem, quisquam corporis aliquid expedita id quidem consectetur magni voluptatibus molestias, earum tempore, dolorem iusto eaque consequuntur. Autem impedit quo sapiente sunt accusantium eius necessitatibus deleniti, nihil distinctio cupiditate consectetur, non vero sed aspernatur laudantium? Cumque fugit modi culpa cupiditate, iure repellat vero obcaecati dolorum inventore, quam esse quidem explicabo beatae, atque molestias nobis dolore doloribus ducimus deleniti quisquam! Ducimus beatae nulla nobis aperiam nostrum accusantium pariatur impedit veritatis inventore, placeat perferendis! Reiciendis illum alias eos sapiente hic distinctio, est sint accusamus dicta dolore modi! Ipsum error hic minus accusamus obcaecati cumque deleniti velit aliquid placeat ullam aperiam, alias quam, dolorem temporibus autem! Rerum libero ipsam eos error quo rem quibusdam. Perferendis magnam, dicta consequuntur ipsum modi aliquid et deleniti pariatur error, excepturi quia quaerat officiis, minus sit nihil aliquam nesciunt maxime quidem ut! Culpa omnis aspernatur natus sapiente eos porro tempore, qui temporibus quia voluptatum dolorem exercitationem velit dolores et ullam quidem id cupiditate dicta ducimus ratione soluta iure.</p>
                </div>
            </div>

            <div className={dark ? 'bg-gray-700 text-gray-50 w-[100%] float-right flex items-center gap-x-1 justify-center py-4' : 'bg-blue-200 text-gray-800 w-[100%] float-right flex items-center gap-x-1 justify-center py-4'}>
                <FaCopyright></FaCopyright>
                <small>All Rights Reserved | Md. Shamim Sarker | 2022</small>
            </div>
        </>
    );
};

export default Components;