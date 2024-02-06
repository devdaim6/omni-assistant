"use client"
import { IconUpload } from '@tabler/icons-react';
import { FC } from 'react';
import ImageUploading from 'react-images-uploading';
interface FileProps {
    setImage: any
    image: any
}

const FileInput: FC<FileProps> = ({ image, setImage }) => {
    const onChange = (imageList: any) => {
        setImage(imageList[0]['data_url']);
    };
    return (
        <>
            <div className="z-10 flex flex-col w-full">
                <ImageUploading
                    onChange={onChange}
                    maxNumber={1}
                    dataURLKey="data_url"
                    value={image ? [image] : []}
                >
                    {({
                        onImageUpload,
                        isDragging,
                        dragProps,
                    }) => (
                        <div className="upload__image-wrapper text-gray-500">
                            <button
                            type='button'
                                className='flex gap-4 text-white'
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                <IconUpload color='white' /> Click or Drop here
                            </button>
                            PNG, JPG or GIF .
                            &nbsp;
                        </div>
                    )}
                </ImageUploading>
            </div>
        </>
    )
}
export default FileInput