import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';

class Auth extends Component {

    componentDidMount() {
        if(this.props.posts.form !== null && this.props.posts.form.login !== undefined)
            this.props.eventLogin(this.props.posts.form.login);
    }

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(Auth);
