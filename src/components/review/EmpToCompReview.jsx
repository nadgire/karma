import React, { useEffect, useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from 'react-icons/fa'; // Importing filled star
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EmpToCompReview = (props) => {
    const [allReviews, setAllReviews] = useState([]);
    const getAllReviews = async () => {
        try {
            const response = await axios.get('http://13.61.233.178:8080/employee/3/company/202/review', {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (response.data.status === 'success') {
                console.log(response.data.data.reviews)
                setAllReviews(response.data.data.reviews);
            }
        } catch (error) {
            console.error('There has been a problem with your axios request:', error);
        }
    }

    useEffect(() => {
        getAllReviews();
    }, [])

    return (
        <div className='bg-white w-full h-fit rounded-4xl p-10 text-center'>
            <span className='text-2xl'>Reviews</span>
            <div>
                <div>
                    search bar
                </div>
                <div>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-black text-white'>
                                <th className='py-2'>
                                    Sr No
                                </th>
                                <th className='py-2'>
                                    Company ID
                                </th>
                                <th className='py-2'>
                                    Comment
                                </th>
                                <th className='py-2'>
                                    Review Document
                                </th>
                                <th className='py-2'>
                                    Rating
                                </th>
                                <th className='py-2'>
                                    Review Date
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allReviews.map((x, index) => {
                                    return (
                                        <tr>
                                            <td className='py-2 border-b border-gray-300'>
                                                {index + 1}
                                            </td>
                                            <td className='py-2 border-b border-gray-300'>
                                                {x.companyId}
                                            </td>
                                            <td className='py-2 border-b border-gray-300 w-2/5'>
                                                {x.comment}
                                            </td>
                                            <td className='py-2 border-b border-gray-300'>
                                                {x.reviewDocument}
                                            </td>
                                            <td className='py-2 border-b border-gray-300'>
                                                {x.overallRating}
                                            </td>
                                            <td className='py-2 border-b border-gray-300'>
                                                {new Date(x.reviewDate).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpToCompReview
