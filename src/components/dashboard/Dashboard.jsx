import DashNavbar from './DashNavbar'
import DashSidebar from './DashSidebar'
import Background from './Background'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

const Dashboard = () => {

    const [userDetails, setUserDetails] = useState({});

    const getUserDetails = async () => {

        // const token = localStorage.getItem('token');
        // const user = localStorage.getItem('user');
        // try {
        //     const response = await axios.get("http://13.61.233.178:8080" + "/employee/"+localStorage.getItem("user_id")+"/home");
        //     console.log(response);

        // } catch (error) {
        //     console.error('There has been a problem with your axios request:', error);
        // }

        fetch(`http://13.61.233.178:8080/employee/${localStorage.getItem('user_id')}/home`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }
            )
            .then((data) => {
                setUserDetails(data.employee);
            }
            )
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            }
            );
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div>
            <DashNavbar sendUserDetails={userDetails.name} />
            <div className='flex'>
                <DashSidebar />
                <div className='relative w-full'>
                    {/* <Background sendUserDetails={userDetails} /> */}

                    <div className={'relative h-[calc(100vh-150px)] w-[95%] bg-[rgba(0,0,0,0.05)] rounded-4xl p-14 z-10 flex gap-5'}>
                        {/* {location.pathname == '/profile' && <Profile sendUserDetails={userDetails} />}
                        {location.pathname == '/review' && <EmpToCompReview sendUserDetails={userDetails} />}
                        {location.pathname == '/change-password' && <ChangePassword />}
                        {location.pathname == '/delete-account' && <DeleteAccount />} */}

                        <Outlet />
                    </div>
                    <div className='bg-gradient-to-b from-[#D139B1] to-[#F87F57] w-64 h-64 rounded-4xl absolute right-18 bottom-10 -rotate-[45deg]'>
                    </div>
                    <div className='bg-gradient-to-b from-[#FF5F6D] to-[#FFC371] w-36 h-36 rounded-4xl absolute right-[450px] bottom-6 rotate-[70deg]'>
                    </div>
                    <div className='bg-gradient-to-b from-[#ffa33a] via-[#ffca3a] to-[#ebff3a] w-36 h-36 rounded-4xl absolute right-8 bottom-96 rotate-[110deg]'>
                    </div>
                    <div className='bg-gradient-to-b from-[#FF61D2] to-[#FE9090] w-24 h-24 rounded-4xl absolute right-8 top-28 rotate-[220deg]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
