import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReusableModal from "../modal/ReusableModal";
import { Button } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import Loader from "../loader/Loader";
import { toast } from "sonner";
import { setUserInfo } from "../../../features/userInfo/userInfoSlice";

export default function ChangeProfilePhoto() {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userInfo);
    const token = useSelector(state => state.auth.token);
    const [isLoading, setIsLoading] = useState(false);
    const [userImage, setUserImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [croppedImageBase64, setCroppedImageBase64] = useState('');
    const [cropper, setCropper] = useState(null);
    const [isChangePhotoModalOpen, setIsChangePhotoModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const openChangePhotoModal = () => setIsChangePhotoModalOpen(true);
    const closeChangePhotoModal = () => {
        setIsChangePhotoModalOpen(false);
        setErrorMessage("");
        setUserImage(null);
        setCroppedImage(null);
        setCroppedImageBase64(null);
    };

    const { getInputProps, getRootProps } = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/gif': ['.gif'],
            'image/webp': ['.webp']
        },
        onDrop: (acceptedFiles, rejectedFiles) => {

            if (rejectedFiles.length > 0) {
                setErrorMessage("Only image of '.jpeg', '.jpg' '.png' '.gif' '.webp' are accepted.");
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setUserImage(reader.result);
                setErrorMessage("");
            }
            reader.readAsDataURL(acceptedFiles[0]);
        },
    })
    const getCroppedImage = () => {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob((blob) => {
                setCroppedImage(blob);
            });
        }
    }
    const getCroppedImageInBase64 = () => {
        if (cropper) {
            setCroppedImageBase64(cropper.getCroppedCanvas().toDataURL());
        }
    };
    useEffect(() => {
        return () => {
            if (croppedImage) {
                URL.revokeObjectURL(croppedImage);
            }
        };
    }, [croppedImage]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userProfileImage = new FormData();
        try {
            setIsLoading(true);
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/users/${userInfo.userInfo._id}`,
                userProfileImage,
                {
                    headers: {
                        token,
                    }
                }

            )
            closeChangePhotoModal();
            setUserImage(null)
            dispatch(setUserInfo(data));
            toast.success(`Your Profile Photo Updated Successfully`, {
                position: 'top-center',
            });
        } catch (error) {
            toast.error('An Error Occurred', {
                position: 'top-center',
            });
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <div className="flex justify-center items-center w-full ">
            <div className="after:content-[url('')] relative after:absolute after:right-0 after:bottom-0 group personalimage w-[200px] h-[200px] bg-neutral-textSecondary rounded-full   flex justify-center items-center   ">
                <button
                    onClick={openChangePhotoModal}
                    className=" flex justify-center items-center w-[40px] h-[40px] p-2 bottom-10 right-0 overflow-hidden group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:bg-primary-light rounded-full bg-primary transition-all duration-300 absolute text-white">
                    <img src="/icons/edit.svg" className="" alt="edit icon" />
                </button>
                <img src={userInfo?.userInfo?.imageUrl || "/images/VacanterLogo.svg"} className="rounded-full w-full h-full" alt="user Image" />
            </div>
            <ReusableModal
                isOpen={isChangePhotoModalOpen}
                onClose={closeChangePhotoModal}
                title={"Change Profile Photo"}
                footer={<Button onClick={closeChangePhotoModal}>Close</Button>}
                size={'xl'}
                height={'80%'}
            >
                {
                    isLoading ? <Loader /> :
                        <div className="p-6 max-w-sm mx-auto bg-white space-y-4">
                            <h1 className="text-xl font-bold text-center">Edit Profile Picture</h1>

                            {!userImage ? (
                                <div
                                    {...getRootProps()}
                                    className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50"
                                >
                                    <input {...getInputProps()} />
                                    <p className="text-gray-500">Drag and drop or click to select an image</p>
                                </div>
                            ) : (
                                <Cropper
                                    src={userImage}
                                    style={{ height: 200, width: '100%' }}
                                    aspectRatio={1}
                                    viewMode={1}
                                    guides={true}
                                    background={true}
                                    responsive={true}
                                    autoCropArea={1}
                                    checkOrientation={false}
                                    onInitialized={(instance) => setCropper(instance)}
                                />
                            )}
                            {errorMessage && (
                                <p className="text-red-500 text-center">{errorMessage}</p>
                            )}
                            {userImage && (
                                <div className="flex justify-between items-center">
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => setUserImage(null)}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => {
                                            getCroppedImage();
                                            getCroppedImageInBase64();
                                        }}
                                    >
                                        Crop Image
                                    </button>
                                </div>
                            )}

                            {croppedImage && (
                                <>
                                    <div className="mt-4">
                                        <h2 className="text-center font-bold">Cropped Image Preview:</h2>
                                        <img src={croppedImageBase64} alt="Cropped Preview" className="w-32 h-32 rounded-full mx-auto" />
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
                                            onClick={handleSubmit}
                                            disabled={!croppedImage}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </>

                            )}
                        </div>
                }
            </ReusableModal>
        </div>
    )
}
