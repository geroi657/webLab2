import './button.css';

function MyButton(props) {
    return(
        <button className="myFirstButton" onClick={props.onclick}>Ага, она самая!!!</button>
    );
}

export default MyButton;
