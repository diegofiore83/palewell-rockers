import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHamburgerActive: false,
            isMenuAnimated: false,
            isMenuVisible: false,
        };

        this.hamburgerClick = this.hamburgerClick.bind(this);
    }

    componentDidUpdate() {
        const { isHamburgerActive, isMenuAnimated, isMenuVisible } = this.state;

        if (isHamburgerActive && isMenuVisible && !isMenuAnimated) {
            setTimeout(() => {
                this.setState({ isMenuAnimated: true });
            }, 100);
        }

        if (!isHamburgerActive && !isMenuAnimated && isMenuVisible) {
            setTimeout(() => {
                this.setState({ isMenuVisible: false });
            }, 500);
        }
    }

    hamburgerClick() {
        const { isHamburgerActive } = this.state;

        if (!isHamburgerActive) {
            this.setState({ isMenuVisible: true });
        } else {
            this.setState({
                isMenuAnimated: false,
            });
        }

        this.setState({ isHamburgerActive: !isHamburgerActive });
    }

    render() {
        const { isHamburgerActive, isMenuAnimated, isMenuVisible } = this.state;

        return (
            <header>
                <div className="page-header-bar">
                    <div className="content-container">
                        <div className="page-header-logo">
                            <Link to="/" className="page-header-logo-url" title="palewell-rockers.co.uk">
                                <div className="page-header-logo-image"></div>
                            </Link>
                        </div>
                        <div className="page-header-menu-button">
                            <span className={classNames('page-header-menu-text', {'is-active': isHamburgerActive })}>
                                {isHamburgerActive ? 'Close' : 'Menu'}
                            </span>
                            <div className={classNames('page-header-menu-hamburger', {'is-active': isHamburgerActive })} onClick={this.hamburgerClick} onKeyDown={this.hamburgerClick} role="button" tabIndex={0}>
                                <div className="hamburger-box">
                                    <div className="hamburger-inner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-header-content">
                    <div className="content-container">
                        <nav className={classNames('page-header-navigation', {'is-visible': isMenuVisible, 'is-animated': isMenuAnimated})}>
                            <ul className="inline">
                                <li><NavLink to="/" activeClassName="is-selected" exact strict><span className="text">Home</span></NavLink></li>
                                <li><NavLink to="/news" activeClassName="is-selected" exact strict><span className="text">Match Reports</span></NavLink></li>
                                <li><NavLink to="/players" activeClassName="is-selected" exact strict><span className="text">Players</span></NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
