export const PostDisplay = ({ windowWidth, post }) => {
    const isWideScreen = windowWidth >= 1100;
    const postClass = `rounded-md shadow-lg bg-gray-200 flex ${isWideScreen ? "w-64 h-80" : "w-4/5 h-72"}`;
    const postStyle = {
        backgroundImage: `url(${post.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 2.2s ease-in-out',
    };

    return (
        <>
        <div className="flex justify-center items-center h-f w-full flex-col">
        <h1>{post.title}</h1>
        <div className={postClass} style={postStyle}>
        </div>
        </div>
        </>
    );
};
