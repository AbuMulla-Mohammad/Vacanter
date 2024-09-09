import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ApplicantsForTheJobPost from './../../components/employer/applicantsForTheJobPost/ApplicantsForTheJobPost';

export default function ApplicantsForTheJobPostScreen() {
    const { id } = useParams();
    console.log("ApplicantsForTheJobPostScreen", id)
    return (
        <div className='w-full min-h-screen bg-secondary-lightBackground'>
            <ApplicantsForTheJobPost id={id} />
        </div>
    )
}
