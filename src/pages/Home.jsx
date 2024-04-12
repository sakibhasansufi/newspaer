import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Navbar from "./Navbar";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from 'react-router-dom';
import NewsCard from "./NewsCard";
const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* News section */}
                <div className="lg:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;