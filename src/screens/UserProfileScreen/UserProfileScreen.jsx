import JobApplicationUploader from "../../components/employer/jobApplicationUploader/JobApplicationUploader";


export default function UserProfileScreen() {
    return (
        <div className="grid grid-cols-[repeat(12,1fr)] py-3 min-h-screen grid-rows-[repeat(12,1fr)]">
            <div className="col-span-4 row-span-6">
                <JobApplicationUploader />
            </div>
        </div>
    )
}
