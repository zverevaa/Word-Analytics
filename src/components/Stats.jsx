import {
    FACEBOOK_MAX_CHARACTERS,
    INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Stats(props) {
    const instagramCharactersLeft =
        INSTAGRAM_MAX_CHARACTERS - props.numberOfCharacters;
    const facebookCharactersLeft =
        FACEBOOK_MAX_CHARACTERS - props.numberOfCharacters;
    const numberOfWords = props.text
        .split(/\s/)
        .filter((word) => word !== "").length;
    return (
        <section className="stats">
            <Stat number={numberOfWords} label="Words" />
            <Stat number={props.numberOfCharacters} label="Characters" />
            <Stat number={instagramCharactersLeft} label="Instagram" />
            <Stat number={facebookCharactersLeft} label="Facebook" />
        </section>
    );
}

function Stat(props) {
    return (
        <section className="stat">
            <span
                className={`stat__number ${
                    props.number < 0 ? "stat__number--limit" : ""
                }`}
            >
                {props.number}
            </span>
            <h2 className="second-heading">{props.label}</h2>
        </section>
    );
}
