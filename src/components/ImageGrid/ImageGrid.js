import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImagesStart } from '../../actions';

import Button from '../Button';
import Stats from '../Stats';
import { loadImages } from '../../actions';
import './styles.css';

class ImageGrid extends Component {
    state = {
        page: 1,
    };

    componentDidMount() {
        this.props.loadImagesStart(key, this.state.page);
    }

    renderStats = imageId => {
        const { stats, statsLoading, statsError } = this.props;
        const id = imageId;
        if (statsLoading) {
            return <span>Loading</span>;
        } else if (statsError) {
            return <span className="error">Error while loading the stats</span>;
        } else {
            const properStat = stats.find(stat => stat.id === id);
            return <span>VIEWS: {properStat && properStat.views.total}</span>;
        }
    };

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
                            <div className="stats-div">
                                {this.renderStats(image.id)}
                            </div>
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
        statsLoading: state.stats.isLoading,
        statsError: state.stats.isLoading,
        stats: state.stats.stats,
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
