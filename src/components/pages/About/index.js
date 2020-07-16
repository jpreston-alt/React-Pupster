import React from "react";
import Jumbotron from "./Jumbotron";

class About extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <div className="container">
                    <h1>Welcome to Pupster!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget turpis fermentum, consectetur tellus laoreet, tempor arcu. Cras vel eros luctus, viverra diam eu, auctor augue. Donec in sapien eget lectus porta vulputate. Donec lobortis neque elit, quis hendrerit nulla convallis nec. Sed mauris lectus, elementum eu mauris sed, gravida mollis est. Duis quis laoreet velit, in rhoncus augue. Proin sed quam velit.
                        Fusce non lectus dolor. Aliquam sit amet risus sapien. Curabitur velit tortor, pretium efficitur luctus vel, cursus in metus. Maecenas blandit condimentum enim id malesuada. Nullam lobortis nibh tortor, vel feugiat risus volutpat id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eleifend nisl risus, a malesuada sapien fringilla a. Nunc tristique lectus velit, a cursus leo ultrices quis. Nunc ultricies volutpat elit in commodo. Donec dictum odio eleifend arcu mattis consectetur. Phasellus ex purus, porta quis erat vitae, commodo facilisis magna.
                        <br /> <br />
                        Morbi fringilla dictum felis tempus finibus. Suspendisse sit amet urna vel tellus pharetra fermentum in et diam. Donec nunc mauris, varius sit amet felis nec, molestie cursus ipsum. Donec elit nisl, interdum quis accumsan eu, iaculis vitae nisi. Aliquam erat volutpat. Aenean id justo dignissim, pretium ipsum at, interdum neque. Quisque efficitur neque ut quam suscipit, quis interdum sem interdum. Nam eu maximus tellus. Maecenas convallis justo non varius scelerisque.
                        Sed auctor scelerisque gravida. Nam rutrum accumsan nisi eu auctor. Aliquam at ligula vitae diam bibendum molestie. Nullam enim nulla, tincidunt et enim in, vestibulum porta justo. Integer dapibus dui odio, at rhoncus est laoreet maximus. Sed imperdiet, arcu sit amet euismod sodales, turpis neque dignissim lectus, sed interdum enim lorem eget turpis. Nulla convallis, velit tincidunt placerat auctor, neque risus lobortis mauris, id dictum dolor elit a quam. Quisque non justo quis nisl lacinia posuere. Nam sed lorem nulla. Nullam sed lectus commodo, consequat est non, commodo dui. Morbi vitae metus non odio sagittis pretium a nec purus. Aenean at faucibus neque. In hac habitasse platea dictumst.
                    </p>
                </div>
            </div>
        );
    }
};

export default About;