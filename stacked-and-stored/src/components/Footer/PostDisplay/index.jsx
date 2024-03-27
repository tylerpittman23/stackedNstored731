export const PostDisplay = ({ windowWidth, post }) => {
    const isWideScreen = windowWidth >= 900;
    const postClass = `rounded-lg bg-gray-200 flex ${isWideScreen ? "w-48" : "w-4/5"} h-64`;
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
