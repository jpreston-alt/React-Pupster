import React from "react";
import ResultCard from "./ResultCard";

function ResultContainer(props) {
    return (
        <div>
            {
                props.images.map(image => {
                    return <ResultCard
                        url={image}
                        key={props.images.indexOf(image)} />
                })
            }
        </div>
    );
};

export default ResultContainer;