import './chooseCars.css';

import { useEffect, useState } from 'react';

import { carsList } from '../../helper/cars';
import CarCard from '../../components/CarCard/CarCard';

const ChooseCars = () => {

    const [offset, setOffset] = useState(12);
    const [filterName, setFilterName] = useState('all');
    const [endCarsList, setEndCarsList] = useState(false);
    const [filteredCars, setFilteredCars] = useState([])
    
    
    useEffect(() => {
        filterCars(filterName);
        if (carsList.length <= offset) {
            setEndCarsList(true);
        }
    }, [filterName, offset]);
    
    const filterCars = async (newFilterName) => {
        const temp = carsList.filter((car) => {
            if (newFilterName === 'trucks') return car.type.includes('Truck');
            if (newFilterName === 'electrified') return car.type.includes('Electrified');
            if (newFilterName === 'crossovers') return car.type.includes('Crossover');
            else return true;
        });
        setFilteredCars(temp);
        return temp;
    }

    const onChangeFilter = async (newFilterName) => {
        if (newFilterName !== filterName) {
            
            setOffset(12);
            setFilterName(newFilterName);
            const filteredData = await filterCars(newFilterName); 

            if (filteredData.length <= 12) setEndCarsList(true)
            else setEndCarsList(false);
        }
    }
    
    const onShowMoreCars = () => {
        setOffset(offset + 12);
        if (filteredCars.length <= offset + 12) setEndCarsList(true);
    }

    const carClassesDefault = 'tabs__btn-item';
    const carClassesActive = 'tabs__btn-item tabs__btn-item--active';

    const visibleCars = filteredCars.length > offset ? filteredCars.slice(0, offset) : filteredCars;

    return (
        <div className="main">
            <div className="choose">
                <div className="container">
                    <h2 className="section-title">Choose your car</h2>
                    
                    <div className="tabs">


                        <div className="tabs__btn">
                            <button 
                            onClick={() => onChangeFilter('all').then()}
                            className={filterName === 'all' ? carClassesActive : carClassesDefault} >All cars</button>
                            <button 
                            onClick={() => onChangeFilter('trucks').then()}
                            className={filterName === 'trucks' ? carClassesActive : carClassesDefault}>Trucks</button>
                            <button 
                            onClick={() => onChangeFilter('crossovers').then()}
                            className={filterName === 'crossovers' ? carClassesActive : carClassesDefault}>Crossovers & SUVs</button>
                            <button 
                            onClick={() => onChangeFilter('electrified').then()}
                            className={filterName === 'electrified' ? carClassesActive : carClassesDefault}>Electrified</button>
                        </div>


                        <div className="tabs__content">
                            <div className="tabs__content-item tabs__content-item--active" id="content-1">
                                
                                {visibleCars.map((car, id) => {
                                    return <CarCard carInfo={car} key={id}/>
                                })}

                            </div>
                        </div>
                    </div>

                    <button 
                    onClick={onShowMoreCars}
                    disabled={endCarsList}
                    className= {endCarsList ? "showmore-button disabled-button" : "showmore-button"}>
                        SHOW MORE
                    </button>

                </div>
            </div>
        
        </div>
    );
}
 
export default ChooseCars;