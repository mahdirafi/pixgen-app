export const getPhotos = async () => {
    const res = await fetch("https://pixgen-app.vercel.app/data.json", {
        next: { revalidate: 3600 }  
    });
    const photos = await res.json();
    return photos;
};

//  for id find method
export const getPhotoById = async (id) => {
    const photos = await getPhotos();
    return photos.find((photo) => photo.id === Number(id));
};