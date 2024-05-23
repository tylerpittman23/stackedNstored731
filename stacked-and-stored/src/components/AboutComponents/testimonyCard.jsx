export const TestimonyCard = ({ testimony }) => {
    return (
        <>
        <div className="border-1 bg-white shadow-lg rounded-md w-96 my-5 p-5 mx-5 flex justify-center items-center transition ease-in-out hover:shadow-2xl hover:-translate-y-1" style={{backgroundColor: '#f2f9f1'}}>
            <p className="text-center p-3" style={{color:'#5c715e'}}>{testimony.content}</p>
        </div>
        </>
    )
};