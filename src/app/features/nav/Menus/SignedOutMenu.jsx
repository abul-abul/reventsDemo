import React, {Component} from 'react';
import {Button, Menu} from "semantic-ui-react";

const SignedOutMenu = ({signIn}) => {

        return (
            <Menu.Item name='right'>

                <Button
                    onClick={signIn}
                    basic
                    inverted
                    content='Login'
                />

                <Button
                    basic
                    inverted
                    content='Register'
                    style={{ marginLeft:'0.5em' }}
                />
            </Menu.Item>
        );

}

export default SignedOutMenu;