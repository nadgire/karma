import DashNavbar from './DashNavbar'
import DashSidebar from './DashSidebar'
import Background from './Background'
import React, { useEffect, useState } from 'react'

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
                console.log(data.employee);
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
                    <Background sendUserDetails={userDetails} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
