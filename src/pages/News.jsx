import Header from './Header'
import Navbar from './Navbar';
import RightSideNav from './RightSideNav'
import { useParams } from 'react-router-dom'
const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className='text-3xl'>News detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;