const StoryPictures = ({ images }: { images: string[] }) => {
    if (images.length === 0) return <h1 className='text-primary font-bold text-center'>Er zijn geen foto's bekend.</h1>;
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-16'>
            {images.map((image, index) => {
                return (
                    <div className=''>
                        <img src={image} alt='image' />
                    </div>
                );
            })}
        </div>
    );
};

export default StoryPictures;
