import { HeroSlides } from "../components/HeroSlides/heroSlides";
import { Welcome } from "../components/Welcome/welcome";

export const Home = () => {
    return (
        <>
        <div className="border-2 mt-48 flex items-center justify-center flex-col">
            <HeroSlides />
            <Welcome />
        </div>
        </>
    )
};