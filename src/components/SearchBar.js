import {useState} from 'react';
import './SearchBar.scss';
import {Button} from 'reactstrap';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearchBar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className='search-bar-container'>
        {isOpen && (
            <input type='text' placeholder='Type to search...' className='search-input'/>
        )}

        <button onClick={toggleSearchBar} className='nav-button'>
            <i className='fa fa-search'></i>
        </button>
        <button className='nav-button'>
            <i className='fa fa-shopping-cart'/>
        </button>
        <button className='nav-button'>
            <i className='fa fa-heart'/>
        </button>
    </div>
  );
};

export default SearchBar;
