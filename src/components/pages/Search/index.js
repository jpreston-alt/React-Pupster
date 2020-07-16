import React from "react";
import SearchForm from "./SearchForm";
import API from "../../utils/API";
import ResultContainer from "./ResultContainer";

class Search extends React.Component {
    state = {
        result: [],
        search: "",
        breedsList: []
    };

    componentDidMount() {
        this.searchBreeds("chihuahua");
        this.getBreedsList();
    }

    handleInputChange = event => {
        let breed = event.target.value;
        this.setState({ search: breed });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBreeds(this.state.search);
    };

    searchBreeds = breed => {
        API.search(`/breed/${breed}/images`)
            .then(res => {
                this.setState({ result: res.data.message });
            })
            .catch(err => console.log(err));
    };

    getBreedsList = () => {
        API.search(`/breeds/list`)
            .then(res => {
                this.setState({ breedsList: res.data.message });
            })
            .catch(err => { console.log(err) });
    };

    render() {
        return (
            <div>
                <div className="container text-center">
                    <div className="row heading">
                        <div className="col">
                            <h2 className="display-4">Search By Breed!</h2>
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                breedsList={this.state.breedsList} />
                        </div>
                    </div>
                    <div className="row result-container">
                        <div className="col">
                            <ResultContainer images={this.state.result} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Search;