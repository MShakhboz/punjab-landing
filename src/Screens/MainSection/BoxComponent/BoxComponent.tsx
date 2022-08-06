import { Props } from "./type";
import "./style.css";

const BoxComponent = ({ nameProduct, image }: Props) => {
    return (
        <div className="box-container">
            <div className="box-container-sub">
                <div className="image-container">{image}</div>
                <div className="name-container">
                    <p>{nameProduct}</p>
                </div>
            </div>
        </div>
    );
};

export default BoxComponent;
