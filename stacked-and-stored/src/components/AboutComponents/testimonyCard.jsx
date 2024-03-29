export const TestimonyCard = ({ testimony }) => {
    return (
        <>
        <div className="bg-white shadow-lg rounded-md w-96 h-96 my-5 mx-5 flex justify-center items-center transition ease-in-out hover:shadow-2xl hover:-translate-y-1">
            <p className="text-center text-sm p-3">{testimony.content}</p>
        </div>
        </>
    )
};