import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../style/style.css'

class Navbar extends Component {
    render() {
        return (
            <div className={'nav_cont'}>
                <Link className={'nav_item'} to={'/'}>All</Link>
                <Link className={'nav_item'} to={'/top'}>Top 5</Link>
            </div>
        );
    }
}

export default Navbar;
