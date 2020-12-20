import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImagesStart } from '../../actions';

import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    state = {
        page: 1,
    };

    componentDidMount() {
        this.props.loadImagesStart(key, this.state.page);
    }

    render() {
        const { images, isLoading, error } = this.props;
        if (isLoading) {
            return <h1>Loading...</h1>;
        }
        if (error) {
            return <h1>{error}</h1>;
        }
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <button
                        onClick={() => {
                            this.setState(prevState => {
                                return {
                                    ...prevState,
                                    page: prevState.page + 1,
                                };
                            });
                            this.props.loadImagesStart(key, this.state.page);
                        }}
                    >
                        Next Page
                    </button>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        images: state.images.images,
        isLoading: state.images.isLoading,
        error: state.images.errror,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadImagesStart: key => dispatch(loadImagesStart(key)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
