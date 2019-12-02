import React, {Component} from 'react';
import  { Grid,Button } from 'semantic-ui-react';
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";


class EventDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2><EventList /></h2>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content="Create event" />
                    <h2><EventForm /></h2>
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;