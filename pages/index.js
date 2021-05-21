import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import SliderMain from "../Components/utils/sliderMain";
import SliderClients from "../Components/utils/sliderClients";

export default function homePublic() {

    return (
        <>
            <HeaderHome />
            
            <SliderMain />

            <SliderClients />

            <Rodape />
        </>
    );
};