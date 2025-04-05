import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from 'react-icons/fa'; // Importing filled star
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EmpToCompReview = () => {

    const validationSchema = Yup.object({
        reviewInWords: Yup.string()
            .test(
                'min-words',
                'Review must be at least 20 words long',
                (value) => value && value.trim().split(/\s+/).length >= 20
            )
            .required('Review is required'),
        reviewDocument: Yup.mixed().required('Document is required'),
    });

    return (
        <div className='bg-white w-full h-full rounded-4xl p-10 whitespace-nowrap'>
            <div className='text-center'>
                <span className='text-2xl'>Review your <strong>Company Name</strong></span>
            </div>
            <div className='flex gap-10 p-10'>
                <Formik
                    initialValues={{
                        companyCulture: 0,
                        leadershipAndManagement: 0,
                        compensationAndBenefits: 0,
                        jobSatisfactionAndCareerGrowth: 0,
                        jobSecurityAndStability: 0,
                        diversityAndInclusion: 0,
                        workplaceFlexibility: 0,
                        reviewInWords: '',
                        reviewDocument: null,
                        averageRating: 7,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ values, setFieldValue, touched, errors }) => (
                        <Form className="flex justify-between w-full">
                            <div className="w-[50%] flex flex-col gap-10">
                                <span className="text-xl">Review factors</span>
                                <div className="flex gap-8">
                                    <div className="flex flex-col gap-5">
                                        <span>Company Culture</span>
                                        <span>Leadership and Management</span>
                                        <span>Compensation and Benefits</span>
                                        <span>Job Satisfaction and Career Growth</span>
                                        <span>Job Security and Stability</span>
                                        <span>Diversity and Inclusion</span>
                                        <span>Workplace Flexibility</span>
                                    </div>
                                    <div className="flex flex-col gap-6 text-xl text-[#F95B15]">
                                        {/* Render Rating Stars */}
                                        {[
                                            'companyCulture',
                                            'leadershipAndManagement',
                                            'compensationAndBenefits',
                                            'jobSatisfactionAndCareerGrowth',
                                            'jobSecurityAndStability',
                                            'diversityAndInclusion',
                                            'workplaceFlexibility',
                                        ].map((field, index) => (
                                            <div key={index} className="flex gap-4  ">
                                                {[...Array(5)].map((_, starIndex) => (
                                                    <FaStar
                                                        key={starIndex}
                                                        onClick={() => setFieldValue(field, starIndex + 1)}
                                                        color={values[field] > starIndex ? '#F95B15' : 'gray'}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="w-[50%] space-y-10">
                                <div className="flex flex-col gap-10">
                                    <label htmlFor="reviewInWords" className="text-xl">
                                        Review in words
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="reviewInWords"
                                        name="reviewInWords"
                                        className="w-[80%] h-36 border-2 rounded-2xl p-2 border-[#F95B15]"
                                        placeholder="Write minimum 20 words review..."
                                    />
                                    <ErrorMessage
                                        name="reviewInWords"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>

                                <div>
                                    <span>Review document: </span>
                                    <input
                                        type="file"
                                        name="reviewDocument"
                                        onChange={(event) =>
                                            setFieldValue('reviewDocument', event.currentTarget.files[0])
                                        }
                                    />
                                    <ErrorMessage
                                        name="reviewDocument"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>

                                <div className="text-xl">
                                    <span>
                                        Average rating (Out of 10): <strong>{values.averageRating}</strong>
                                    </span>
                                </div>

                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="px-10 py-2 bg-[#F95B15] text-white font-semibold rounded-3xl"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default EmpToCompReview
