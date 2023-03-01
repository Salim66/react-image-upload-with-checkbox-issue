import React, { useState } from 'react';

const Upload = () => {
    const [postPhotos, setPostPhotos] = useState([]);

    const handlePostPhotoUpload = (e) => {
        const uploadImages = Array.from(e.target.files);
        setPostPhotos((prevState) => ([...prevState, ...uploadImages]));
    }

    const handlePreviewDelete = (item) => {
        const updatedImage = postPhotos.filter((data) => data !== item);
        setPostPhotos(updatedImage);
    }

    const handlePostPhotosUpload = (e) => {
        e.preventDefault();

        const data = new FormData();

        postPhotos.forEach((item) => {
            data.append('photos', item);
        })

    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center my-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <input type="file" onChange={handlePostPhotoUpload} multiple />
                        </div>
                    </div>
                </div>
                <form onSubmit={handlePostPhotosUpload}>
                    <div className="row justify-content-center my-5">
                        {postPhotos.map((item, index) => {
                            const imageUrl = URL.createObjectURL(item);
                            return (
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={ imageUrl } alt="" />
                                        <div className="card-footer">
                                            <button type='button' onClick={() => handlePreviewDelete(item)} className='btn btn-danger btn-sm'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) }
                        
                    </div>
                    <button type='submit' className='btn btn-primary btn-sm'>Upload</button>
                </form>
            </div>
        </div>
    )
};

export default Upload;