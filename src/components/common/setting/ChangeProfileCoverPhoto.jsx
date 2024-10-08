import { useEffect, useState } from "react";
import { Cropper } from "react-cropper";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { Button } from "@chakra-ui/react";
import ReusableModal from "../modal/ReusableModal";
import axios from "axios";
import { toast } from "sonner";
import { setUserInfo } from "../../../features/userInfo/userInfoSlice";

export default function ChangeProfileCoverPhoto() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const userInfo = useSelector(state => state.userInfo);

    const [isChangeCoverPhotoModalOpen, setIsChangeCoverPhotoModalOpen] = useState(false);
    const [userCoverImage, setUserCoverImage] = useState(null);
    const [cropper, setCropper] = useState(null);
    const [croppedCoverImage, setCroppedCoverImage] = useState(null);
    const [croppedCoverImageBase64, setCroppedCoverImageBase64] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const openChangeCoverPhotoModal = () => setIsChangeCoverPhotoModalOpen(true);
    const closeChangeCoverPhotoModal = () => {
        setIsChangeCoverPhotoModalOpen(false);
        setErrorMessage("");
        setUserCoverImage(null);
        setCroppedCoverImage(null);
        setCroppedCoverImageBase64(null);
    };
    const { getInputProps, getRootProps } = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/gif': ['.gif'],
            'image/webp': ['.webp']
        },
        onDrop: (acceptedFiles, rejectedFiles) => {
            console.log("rejectedFiles", rejectedFiles)
            if (rejectedFiles.length > 0) {
                setErrorMessage("Only image of '.jpeg', '.jpg' '.png' '.gif' '.webp' are accepted.");
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setUserCoverImage(reader.result);
                setErrorMessage("");
            }
            reader.readAsDataURL(acceptedFiles[0]);
        },
    })
    const getCroppedImage = () => {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob((blob) => {
                setCroppedCoverImage(blob);
            });
        }
    }
    const getCroppedImageInBase64 = () => {
        if (cropper) {
            setCroppedCoverImageBase64(cropper.getCroppedCanvas().toDataURL());
        }
    };
    useEffect(() => {
        return () => {
            if (croppedCoverImage) {
                URL.revokeObjectURL(croppedCoverImage);
            }
        };
    }, [croppedCoverImage]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userProfileCoverImage = new FormData();
        userProfileCoverImage.append('cover', croppedCoverImage);
        try {
            setIsLoading(true);
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/users/${userInfo.userInfo._id}`,
                userProfileCoverImage,
                {
                    headers: {
                        token,
                    }
                }
            )
            closeChangeCoverPhotoModal();
            setUserCoverImage(null)
            dispatch(setUserInfo(data));
            setErrorMessage("");
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
    useEffect(() => {
        console.log("errorMessage", errorMessage)
    }, [errorMessage])
    return (
        <div>
            <div className="CoverImage group w-full aspect-[16/3] bg-[#eee] rounded-md overflow-hidden relative ">
                <button
                    onClick={openChangeCoverPhotoModal}
                    className=" flex justify-center items-center w-[40px] h-[40px] p-2 bottom-0 right-0 overflow-hidden group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:bg-primary-light rounded-md bg-primary transition-all duration-300 absolute text-white">
                    <img src="/icons/edit.svg" className="" alt="edit icon" />
                </button>
                <img src={userInfo?.userInfo?.coverUrl || "/images/VacanterLogo.svg"} className="w-full h-full object-cover" alt="Cover Image" />
            </div>
            <ReusableModal
                isOpen={isChangeCoverPhotoModalOpen}
                onClose={closeChangeCoverPhotoModal}
                title={"Change Profile Cover Photo"}
                footer={<Button onClick={closeChangeCoverPhotoModal}>Close</Button>}
                size={'xl'}
                height={'80%'}
            >
                {
                    isLoading ? <Loader /> :
                        <div className="p-6 max-w-sm mx-auto bg-white space-y-4">
                            <h1 className="text-xl font-bold text-center">Edit Profile Cover Picture</h1>
                            {!userCoverImage ? (
                                <div
                                    {...getRootProps()}
                                    className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50"
                                >
                                    <input {...getInputProps()} />
                                    <p className="text-gray-500">Drag and drop or click to select an image</p>
                                </div>
                            ) : (
                                <Cropper
                                    src={userCoverImage}
                                    style={{ height: 200, width: '100%' }}
                                    aspectRatio={16 / 3}
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
                            {userCoverImage && (
                                <div className="flex justify-between items-center">
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => setUserCoverImage(null)}
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

                            {croppedCoverImage && (
                                <>
                                    <div className="mt-4">
                                        <h2 className="text-center font-bold">Cropped Image Preview:</h2>
                                        <img src={croppedCoverImageBase64} alt="Cropped Preview" className="w-72 aspect-[16/3] rounded-md mx-auto" />
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
                                            onClick={handleSubmit}
                                            disabled={!croppedCoverImage}
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
