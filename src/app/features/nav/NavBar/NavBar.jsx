import React, {Component} from 'react';
import {Menu, Container, Button, MenuItem} from 'semantic-ui-react';
import {Link, NavLink,withRouter} from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";


class NavBar extends Component {

    state = {
        authenticated: false
    }

    handleSignedIn = () => this.setState({authenticated:true});
    handleSignedOut = () => {
        this.setState({authenticated:false})
        this.props.history.push('/')
    };

    render() {
        const {authenticated} = this.state;
        return (

            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as={NavLink} exact to='/' header>
                        <img src='/assets/logo.png' alt='logo' />
                        Re-vents
                    </Menu.Item>
                    <Menu.Item name='Events' as={NavLink} to='/events' />
                    <Menu.Item name='People' as={NavLink} to='/people' />
                    <Menu.Item name='Test' as={NavLink} to='/test' />

                    <Menu.Item>
                        <Button
                            as={Link}
                            to='/createEvent'
                            floated='right'
                            positive
                            inverted
                            content='Create Event'
                        />
                    </Menu.Item>
                    {authenticated ?   <SignedInMenu signOut={this.handleSignedOut} /> :  <SignedOutMenu signIn={this.handleSignedIn}/>}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(NavBar);