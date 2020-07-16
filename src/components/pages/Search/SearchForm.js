import React from "react";

const styles = {
    btn: {
        color: "white",
        backgroundColor: "#228ff1",
        fontWeight: 200,
        border: "none",
        textTransform: "uppercase",
        fontSize: 14
    }
}

function SearchForm(props) {
    return (
        <div className="input-group mb-3">
            <input
                value={props.value}
                onChange={props.handleInputChange}
                type="text"
                className="form-control" placeholder="ex. 'Chiuhuahua'"
                id="breed-choice"
                name="breed"
                list="breeds"
            />
            <datalist id="breeds">
                {
                    props.breedsList.map(breed => {
                        return <option key={props.breedsList.indexOf(breed)} value={breed} />
                    })
                }
            </datalist>
            <div className="input-group-append">
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-outline-secondary" type="button" id="button-addon2"
                    style={styles.btn}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchForm;