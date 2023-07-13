import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';


const ProfileImage = ({profileId, ...restProps}) => {
const [imageSrc, setImageSrc] = useState('');

useEffect(() => {
    fetch('http://localhost:8080/profile/download/image?id='+profileId)
    .then(response => response.blob())
    .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
    });
}, []);

return (
    <Image src={imageSrc} alt="Profile Image" {...restProps}/>
);
}

export default ProfileImage;