import useFetch from '../../hooks/useFetch';
import StockList from '../../components/StockList/StockList';

const Home = () => {
    const data = useFetch('/stocks');
    
    return (
        <>
            <StockList />
        </>
    );
};

export default Home;