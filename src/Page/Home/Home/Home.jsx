import Banner from "../Banner/Banner";
import HomeSections from "../extra_section/HomeSections";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import TrendingSort from "../sort/TrendingSort";



const Home = () => {
    return (
        <div className="mx-auto px-4">
            <Banner></Banner>
            {/* <FeatureProducts></FeatureProducts> */}
            <TrendingSort></TrendingSort>
            <HomeSections></HomeSections>
            
        </div>
    );
};

export default Home;